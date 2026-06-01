import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLenis } from 'lenis/react'
import { usePreloader } from '../../hooks/usePreloader'
import { AmbientGlow } from './AmbientGlow'
import { Grain } from './Grain'
import { Logo } from './Logo'

export function Preloader() {
  const lenis = useLenis()
  const panelRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    if (isExiting) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reducedMotion) {
        gsap.set(panel, { yPercent: -100 })
        return
      }
      gsap.to(panel, {
        yPercent: -100,
        duration: 1.15,
        ease: 'expo.inOut',
      })
    } else {
      gsap.set(panel, { yPercent: 0 })
    }
  }, [isExiting])

  if (!isActive && !isExiting) return null

  return (
    <div
      ref={panelRef}
      className={`preloader fixed inset-0 z-[100] flex flex-col bg-[var(--color-bg)] will-change-transform ${
        isExiting ? 'pointer-events-none' : ''
      }`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading experience"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{ background: 'var(--vignette)' }}
      />
      <AmbientGlow />
      <Grain />

      <div className="preloader-inner relative z-10 flex min-h-svh flex-col">
        <div className="gutter-x mx-auto flex h-[var(--header-height)] w-full max-w-[90rem] items-center">
          <Logo />
        </div>

        <div className="gutter-x mx-auto flex w-full max-w-[90rem] flex-1 flex-col items-center justify-center">
          <p className="font-mono-label mb-6 text-[var(--color-accent)]">Initializing</p>
          <p
            className="font-display text-[clamp(4rem,18vw,12rem)] leading-none font-bold tracking-tight text-[var(--color-text)] tabular-nums"
            aria-live="polite"
          >
            {progress}
            <span className="text-[0.45em] text-[var(--color-muted)]">%</span>
          </p>
          <p className="font-mono-label mt-8 text-[var(--color-muted)]">Loading experience</p>
        </div>

        <div className="gutter-x mx-auto w-full max-w-[90rem] pb-12">
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
