import { Suspense } from 'react'
import { DOG_MODEL_URL } from '../config/scene'
import { GltfDog } from './GltfDog'

export function Dog() {
  if (!DOG_MODEL_URL) return null

  return (
    <Suspense fallback={null}>
      <GltfDog url={DOG_MODEL_URL} />
    </Suspense>
  )
}
