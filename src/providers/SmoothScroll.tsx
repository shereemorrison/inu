import type { ReactNode } from 'react'
import { ReactLenis } from 'lenis/react'

type SmoothScrollProps = {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.15,
        smoothWheel: true,
        touchMultiplier: 1.2,
        autoRaf: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
