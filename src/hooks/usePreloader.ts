import { useEffect, useState } from 'react'

export type PreloaderPhase = 'loading' | 'exiting' | 'complete'

type UsePreloaderOptions = {
  minDuration?: number
}

export function usePreloader(options: UsePreloaderOptions = {}) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<PreloaderPhase>('loading')

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const minDuration = reducedMotion ? 400 : (options.minDuration ?? 2400)
    const exitDuration = reducedMotion ? 150 : 900
    const holdAt100 = reducedMotion ? 50 : 400

    let cancelled = false
    let raf = 0
    const t0 = performance.now()

    const ready = Promise.all([
      document.fonts.ready.catch(() => undefined),
      new Promise<void>((resolve) => setTimeout(resolve, minDuration)),
    ])

    const animate = (t: number) => {
      if (cancelled) return
      const elapsed = t - t0
      const tNorm = Math.min(elapsed / minDuration, 1)
      const fake = 92 * (1 - Math.exp(-4 * tNorm))
      setProgress((prev) => Math.max(prev, Math.floor(fake)))
      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)

    ready.then(() => {
      if (cancelled) return
      cancelAnimationFrame(raf)
      setProgress(100)

      setTimeout(() => {
        if (cancelled) return
        setPhase('exiting')

        setTimeout(() => {
          if (cancelled) return
          setPhase('complete')
        }, exitDuration)
      }, holdAt100)
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
    }
  }, [options.minDuration])

  return {
    progress,
    phase,
    isActive: phase !== 'complete',
    isExiting: phase === 'exiting',
  }
}
