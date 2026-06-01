import { useLayoutEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { MathUtils, type Group, type Object3D } from 'three'
import { DOG_MODEL_SCALE, DOG_MODEL_TARGET_HEIGHT, DOG_MODEL_URL } from '../config/scene'
import { prepareModel } from './prepareModel'
import { useModelFit } from './useModelFit'

if (DOG_MODEL_URL) {
  useGLTF.preload(DOG_MODEL_URL)
}

type GltfDogProps = {
  url: string
}

/** Cursor tracking + subtle idle sway on the model pivot. */
export function GltfDog({ url }: GltfDogProps) {
  const pivot = useRef<Group>(null)
  const headRef = useRef<Object3D | null>(null)
  const smoothPointer = useRef({ x: 0, y: 0 })
  const lastPointer = useRef({ x: 0, y: 0 })
  const idleBlend = useRef(1)
  const reducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const { scene } = useGLTF(url)
  const { scale, offset } = useModelFit(scene, DOG_MODEL_TARGET_HEIGHT)
  const fitScale = scale * DOG_MODEL_SCALE

  const { head } = useMemo(() => prepareModel(scene), [scene])

  useLayoutEffect(() => {
    headRef.current = head ?? pivot.current
  }, [head])

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    const motion = reducedMotion.current ? 0 : 1
    const target = headRef.current

    if (target && motion) {
      const px = state.pointer.x
      const py = state.pointer.y
      const moved = Math.abs(px - lastPointer.current.x) + Math.abs(py - lastPointer.current.y) > 0.0015
      lastPointer.current.x = px
      lastPointer.current.y = py

      idleBlend.current = MathUtils.lerp(idleBlend.current, moved ? 0 : 1, moved ? 0.14 : 0.035)

      const pointerDamp = 1 - Math.exp(-12 * delta)
      smoothPointer.current.x = MathUtils.lerp(smoothPointer.current.x, px, pointerDamp)
      smoothPointer.current.y = MathUtils.lerp(smoothPointer.current.y, py, pointerDamp)

      const idleYaw = Math.sin(t * 0.42) * 0.045 + Math.sin(t * 0.19) * 0.02
      const idlePitch = Math.sin(t * 0.35) * 0.028 + Math.cos(t * 0.27) * 0.014

      const trackYaw = smoothPointer.current.x * 0.42
      const trackPitch = -smoothPointer.current.y * 0.17
      const blend = idleBlend.current
      const targetYaw = MathUtils.lerp(trackYaw, idleYaw, blend)
      const targetPitch = MathUtils.lerp(trackPitch, idlePitch, blend)

      const followStrength = MathUtils.lerp(3.5, 8, 1 - blend)
      const rotDamp = 1 - Math.exp(-followStrength * delta)
      target.rotation.y = MathUtils.lerp(target.rotation.y, targetYaw, rotDamp)
      target.rotation.x = MathUtils.lerp(target.rotation.x, targetPitch, rotDamp)
    } else if (target) {
      target.rotation.y = 0
      target.rotation.x = 0
    }

    if (pivot.current) {
      const bob = Math.sin(t * 0.9) * 0.008 * motion
      const drift = Math.sin(t * 0.55) * 0.003 * motion
      pivot.current.position.y = -0.1 + bob + drift
    }
  })

  return (
    <group ref={pivot} position={[0, -0.1, 0.36]}>
      <group scale={fitScale}>
        <group position={offset}>
          <primitive object={scene} />
        </group>
      </group>
    </group>
  )
}
