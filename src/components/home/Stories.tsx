'use client'

import Link from 'next/link'
import { useState } from 'react'
import { stats, stories } from '@/content/site'
import { asset } from '@/lib/site'

function Ring({ value, children }: { value: number; children: React.ReactNode }) {
  return (
    <span className="ring__wrap">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle className="ring__bg" cx="50" cy="50" r="45" />
        <circle className="ring__fg" cx="50" cy="50" r="45" style={{ ['--v' as string]: value / 100 }} />
      </svg>
      <b>{children}</b>
    </span>
  )
}

function Story({ s }: { s: (typeof stories)[number] }) {
  const [open, setOpen] = useState(false)
  const id = `story-${s.id}`
  return (
    <article className="story card--lift" data-reveal>
      <p className="story__top">
        <img src={asset(s.logo)} alt="" width={40} height={40} loading="lazy" />
        <span className="mono">{s.meta}</span>
      </p>
      <h3 className="h-display story__title">{s.title}</h3>
      <p className="story__sum">{s.summary}</p>
      <div className={`story__more${open ? ' is-open' : ''}`} id={id}>
        <div>
          <ul>
            {s.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          {s.caseStudy && (
            <Link href={s.caseStudy} className="story__case" tabIndex={open ? 0 : -1}>
              Read the full case study →
            </Link>
          )}
        </div>
      </div>
      <button type="button" className="story__go" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
        {open ? 'Show less ↑' : 'Read the story ↓'}
      </button>
    </article>
  )
}

/** "Results for teams." — Sideline figures as rings, then two story cards that expand. */
export function Stories() {
  return (
    <div className="stories">
      {stats.rings.map((r) => (
        <div key={r.label} className="ring card--lift" data-reveal>
          <Ring value={r.value}>
            {r.prefix}
            {r.value}
            {r.suffix}
          </Ring>
          <p>{r.label}</p>
          <small className="mono">{stats.source}</small>
        </div>
      ))}
      <div className="ring ring--wide card--lift" data-reveal>
        <span className="people" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i>+</i>
        </span>
        <p className="ring__big">
          <b>{stats.people.value}</b> {stats.people.label}
        </p>
        <small className="mono">
          {stats.source} · {stats.region}
        </small>
      </div>
      {stories.map((s) => (
        <Story key={s.id} s={s} />
      ))}
    </div>
  )
}
