import { ScrollHint } from '../components/ui/ScrollHint'

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-end pb-12 pt-[var(--header-height)]">
      <div className="gutter-x mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-center">
        <p className="font-mono-label mb-8 text-[var(--color-accent)]">
          Only the best for the best
        </p>

        <h1 className="font-display text-display-1 max-w-[16ch] text-balance text-[var(--color-text)]">
          The Future
          <span className="block text-[var(--color-text-secondary)]">of Canines</span>
        </h1>

        <p className="mt-10 max-w-xl text-[var(--color-text-secondary)]">
          We craft ambitious digital experiences for dogs and the humans who obsess over them —
          with no technical limits.
        </p>
      </div>

      <div className="gutter-x mx-auto mt-auto flex w-full max-w-[90rem] justify-center pt-16">
        <ScrollHint />
      </div>

      {/* Ambient glow — placeholder for 3D stage */}
      <div
        className="pointer-events-none absolute top-1/3 right-0 -z-10 h-[min(70vw,40rem)] w-[min(70vw,40rem)] translate-x-1/4 -translate-y-1/4 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent-secondary) 0%, transparent 70%)',
        }}
        aria-hidden
      />
    </section>
  )
}
