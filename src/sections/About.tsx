export function About() {
  return (
    <section
      id="about"
      className="gutter-x border-t border-[var(--color-border)] py-[var(--space-section)]"
    >
      <div className="mx-auto grid max-w-[90rem] gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <p className="font-mono-label text-[var(--color-muted)]">About</p>
          <h2 className="font-display text-display-2 mt-4 text-balance">
            Moments out of time
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:col-span-7 md:col-start-6">
          <p className="text-[var(--color-text-secondary)]">
            INU was born from a relentless pursuit of surpassing limits — giving canine brands
            unique ways to make their stories stand out like never before.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            Creating premium nutrition, we strive to create work that
            brings people and dogs together in unexpected ways.
          </p>
          <a
            href="#contact"
            className="font-mono-label mt-4 inline-flex w-fit items-center gap-3 text-[var(--color-accent)]"
          >
            Expect the unexpected
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
