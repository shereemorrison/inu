import { Environment } from '@react-three/drei'

export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 5]} intensity={1.15} />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} />
      <Environment preset="apartment" environmentIntensity={0.45} />
    </>
  )
}
