type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <a href="/" className={`group inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-display text-lg font-bold tracking-tight">INU</span>
      <span className="font-mono-label text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]">
        犬
      </span>
    </a>
  )
}
