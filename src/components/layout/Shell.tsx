import type { ReactNode } from 'react'
import { Grain } from '../ui/Grain'
import { Footer } from './Footer'
import { Header } from './Header'

type ShellProps = {
  children: ReactNode
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="relative min-h-svh bg-[var(--color-bg)]">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden
        style={{ background: 'var(--vignette)' }}
      />
      <Grain />
      <Header />
      <div className="relative z-10">{children}</div>
      <Footer />
    </div>
  )
}
