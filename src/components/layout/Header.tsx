import { Logo } from '../ui/Logo'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[var(--header-height)] border-b border-[var(--color-border)] bg-[var(--color-bg)]/70 backdrop-blur-md">
      <div className="gutter-x mx-auto flex h-full max-w-[90rem] items-center justify-between">
        <Logo />

        <nav className="flex items-center gap-8 md:gap-12" aria-label="Primary">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-mono-label text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
