import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useAppReady } from '../context/AppReady'
import { AmbientGlow } from '../components/ui/AmbientGlow'
import { SceneCanvas } from '../three/SceneCanvas'

export function Hero() {
  const { reveal } = useAppReady()
  const shellRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const introRan = useRef(false)

  useLayoutEffect(() => {
    if (!reveal || !shellRef.current || introRan.current) return
    introRan.current = true

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = shellRef.current
    const q = gsap.utils.selector(root)

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        if (stageRef.current) gsap.set(stageRef.current, { autoAlpha: 1 })
        gsap.set(q('.hero-eyebrow, .hero-line, .hero-sub, .hero-cta'), {
          autoAlpha: 1,
          y: 0,
          yPercent: 0,
        })
        return
      }

      if (stageRef.current) {
        gsap.set(stageRef.current, { autoAlpha: 0 })
      }

      gsap.set(q('.hero-eyebrow'), { y: 14, autoAlpha: 0 })
      gsap.set(q('.hero-line'), { yPercent: 100, autoAlpha: 0 })
      gsap.set(q('.hero-sub'), { y: 12, autoAlpha: 0 })
      gsap.set(q('.hero-cta'), { y: 10, autoAlpha: 0 })

      const tl = gsap.timeline({ delay: 0.05 })

      if (stageRef.current) {
        tl.to(
          stageRef.current,
          { autoAlpha: 1, duration: 3.4, ease: 'power1.inOut' },
          0,
        )
      }

      tl.to(q('.hero-eyebrow'), { y: 0, autoAlpha: 1, duration: 1.2, ease: 'expo.out' }, 0.55)
        .to(
          q('.hero-line'),
          { yPercent: 0, autoAlpha: 1, duration: 1.35, stagger: 0.08, ease: 'expo.out' },
          0.7,
        )
        .to(q('.hero-sub'), { y: 0, autoAlpha: 1, duration: 1.15, ease: 'expo.out' }, 1.05)
        .to(q('.hero-cta'), { y: 0, autoAlpha: 1, duration: 1.05, ease: 'expo.out' }, 1.2)
    }, root)

    return () => ctx.revert()
  }, [reveal])

  return (
    <section className="relative overflow-hidden" style={{ minHeight: 'var(--hero-height)' }}>
      <AmbientGlow className="z-[1]" />

      {reveal && (
        <div
          ref={shellRef}
          className="hero-shell relative mx-auto w-full max-w-[90rem] pt-[var(--header-height)]"
        >
          <div ref={stageRef} className="hero-stage pointer-events-none z-10">
            <SceneCanvas className="h-full w-full" />
          </div>

          <div className="hero-overlay relative z-20">
            <div className="hero-copy-layout">
              <div className="hero-headline">
                <p className="hero-eyebrow font-mono-label mb-2 text-[var(--color-accent)] md:mb-3">
                  Only the best for the best
                </p>

                <h1 className="hero-mega-title">
                  <span className="block overflow-hidden">
                    <span className="hero-line">The</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="hero-line">Future</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="hero-line hero-line-accent">of</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="hero-line hero-line-accent">Canines</span>
                  </span>
                </h1>
              </div>

              <aside className="hero-aside">
                <p className="hero-sub">
                  Bold nutrition and joyful experiences for dogs — and the humans who spoil them
                  rotten.
                </p>

                <div className="hero-cta">
                  <span className="font-mono-label text-[var(--color-accent)]">Begin experience</span>
                  <span className="hero-cta-line" aria-hidden />
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
