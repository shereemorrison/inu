import type { ReactNode } from 'react'

type StorySectionProps = {
  id: string
  label: string
  title: string
  titleLine2?: string
  titleAccent?: 'primary' | 'secondary'
  children: ReactNode
  reverse?: boolean
}

export function StorySection({
  id,
  label,
  title,
  titleLine2,
  titleAccent = 'secondary',
  children,
  reverse = false,
}: StorySectionProps) {
  const accentClass =
    titleAccent === 'primary' ? 'text-[var(--color-text)]' : 'text-[var(--color-accent)]'

  return (
    <section
      id={id}
      className={`story-section gutter-x border-t border-[var(--color-border)] py-[var(--space-section)] ${reverse ? 'story-section--reverse' : ''}`}
    >
      <div className="story-section__grid mx-auto max-w-[90rem]">
        <div className="story-section__intro">
          <p className="font-mono-label text-[var(--color-muted)]">{label}</p>
          <h2 className="font-display text-display-2 mt-4 text-balance">
            <span className="block text-[var(--color-text)]">{title}</span>
            {titleLine2 && <span className={`block ${accentClass}`}>{titleLine2}</span>}
          </h2>
        </div>

        <div className="story-section__body">{children}</div>
      </div>
    </section>
  )
}
