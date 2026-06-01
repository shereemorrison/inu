import { useEffect } from 'react'
import { useLenis } from 'lenis/react'
import { usePreloader } from '../../hooks/usePreloader'
import { Logo } from './Logo'

export function Preloader() {
  const lenis = useLenis()
  const { progress, isActive, isExiting } = usePreloader()

  useEffect(() => {
    if (!lenis) return
    lenis.stop()
  }, [lenis])

  useEffect(() => {
    const root = document.documentElement
    if (isActive) {
      root.classList.add('is-loading')
      lenis?.stop()
    } else {
      root.classList.remove('is-loading')
      lenis?.start()
      lenis?.resize()
    }
  }, [isActive, lenis])

  if (!isActive && !isExiting) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col bg-[var(--color-bg)] transition-[transform,opacity] duration-[900ms] ease-[var(--ease-out-expo)] ${
        isExiting ? 'pointer-events-none -translate-y-full opacity-0' : ''
      }`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading experience"
    >
      <div className="gutter-x flex h-[var(--header-height)] items-center">
        <Logo />
      </div>

      <div className="gutter-x flex flex-1 flex-col items-center justify-center">
        <p
          className="font-display text-[clamp(4rem,18vw,12rem)] leading-none font-bold tracking-tight text-[var(--color-text)] tabular-nums"
          aria-live="polite"
        >
          {progress}
          <span className="text-[0.45em] text-[var(--color-muted)]">%</span>
        </p>
        <p className="font-mono-label mt-8 text-[var(--color-muted)]">
          Loading experience
        </p>
      </div>

      <div className="gutter-x pb-12">
        <div className="mx-auto max-w-[90rem]">
          <div className="h-px w-full overflow-hidden bg-[var(--color-border)]">
            <div
              className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="font-mono-label mt-6 text-center text-[var(--color-muted)]">
            Scroll to continue when ready
          </p>
        </div>
      </div>
    </div>
  )
}
