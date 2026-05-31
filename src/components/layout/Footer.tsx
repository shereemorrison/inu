export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="gutter-x border-t border-[var(--color-border)] py-10"
    >
      <div className="mx-auto flex max-w-[90rem] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">INU</p>
          <p className="mt-2 max-w-sm text-[var(--color-text-secondary)]">
            Canine experiences for the next frontier of brand storytelling.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <a
            href="mailto:hello@inu.studio"
            className="font-mono-label text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
          >
            hello@inu.studio
          </a>
          <p className="font-mono-label text-[var(--color-muted)]">
            © {year} INU
          </p>
        </div>
      </div>
    </footer>
  )
}
