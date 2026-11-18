import type { ReactNode } from 'react'

export function SectionHead({
  id,
  label,
  title,
  accent,
  aside,
  onInk,
}: {
  id: string
  label: string
  title: ReactNode
  accent: string
  aside?: ReactNode
  onInk?: boolean
}) {
  return (
    <div className="section-head" data-reveal>
      <div>
        <p className={`label${onInk ? ' label--on-ink' : ''}`}>{label}</p>
        <h2 id={id} className="h-display section-head__title">
          {title} <em className={`accent-serif${onInk ? ' accent-serif--blue' : ''}`}>{accent}</em>
        </h2>
      </div>
      {aside && <div className="section-head__aside">{aside}</div>}
    </div>
  )
}
