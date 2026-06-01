type AmbientGlowProps = {
  className?: string
}

/** Shared cyber glow — hero, preloader, etc. */
export function AmbientGlow({ className = '' }: AmbientGlowProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className="absolute left-1/2 top-[16%] h-[min(46vh,400px)] w-[min(70vw,500px)] -translate-x-1/2 rounded-full opacity-50 blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent-secondary) 0%, var(--color-accent) 35%, transparent 70%)',
        }}
      />
      <div
        className="absolute -top-[10%] -left-[6%] h-[38%] w-[38%] rounded-full opacity-30 blur-[90px]"
        style={{ background: 'var(--color-accent-secondary)' }}
      />
      <div
        className="absolute -right-[4%] top-[38%] h-[28%] w-[32%] rounded-full opacity-20 blur-[80px]"
        style={{ background: 'var(--color-accent)' }}
      />
    </div>
  )
}
