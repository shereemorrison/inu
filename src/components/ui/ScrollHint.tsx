export function ScrollHint() {
  return (
    <div className="flex flex-col items-center gap-3" aria-hidden>
      <span className="font-mono-label text-[var(--color-muted)]">Scroll to continue</span>
      <span className="relative block h-10 w-px overflow-hidden bg-[var(--color-border-strong)]">
        <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-pulse_1.8s_var(--ease-out-expo)_infinite] bg-[var(--color-accent)]" />
      </span>
    </div>
  )
}
