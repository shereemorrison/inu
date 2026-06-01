import { useLayoutEffect, useState } from 'react'
import { Box3, Vector3 } from 'three'
import type { Object3D } from 'three'

type ModelFit = {
  scale: number
  offset: [number, number, number]
}

const _size = new Vector3()
const _center = new Vector3()

export function useModelFit(object: Object3D | null, targetHeight = 5): ModelFit {
  const [fit, setFit] = useState<ModelFit>({ scale: 1, offset: [0, 0, 0] })

  useLayoutEffect(() => {
    if (!object) return

    object.updateMatrixWorld(true)
    const box = new Box3().setFromObject(object)
    box.getSize(_size)
    box.getCenter(_center)

    const maxDim = Math.max(_size.x, _size.y, _size.z, 0.001)
    const scale = targetHeight / maxDim

    setFit({
      scale,
      offset: [-_center.x, -_center.y, -_center.z],
    })
  }, [object, targetHeight])

  return fit
}
