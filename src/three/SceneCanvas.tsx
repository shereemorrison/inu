import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraRig } from './CameraRig'
import { Dog } from './Dog'
import { Lighting } from './Lighting'

type SceneCanvasProps = {
  className?: string
}

export function SceneCanvas({ className = '' }: SceneCanvasProps) {
  return (
    <div className={`h-full w-full ${className}`}>
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 34, near: 0.1, far: 200 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <Suspense fallback={null}>
          <CameraRig />
          <Lighting />
          <Dog />
        </Suspense>
      </Canvas>
    </div>
  )
}
