import { useLayoutEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { PerspectiveCamera, Vector3 } from 'three'

const LOOK_AT = new Vector3(0, 0.38, 0)

export function CameraRig() {
  const { camera, size } = useThree()

  useLayoutEffect(() => {
    const isNarrow = size.width < 768
    camera.position.set(0, isNarrow ? 0.32 : 0.38, isNarrow ? 10.4 : 10.9)
    camera.lookAt(LOOK_AT)
    camera.near = 0.1
    camera.far = 300
    if (camera instanceof PerspectiveCamera) {
      camera.fov = isNarrow ? 35 : 32
    }
    camera.updateProjectionMatrix()
  }, [camera, size.width])

  return null
}
