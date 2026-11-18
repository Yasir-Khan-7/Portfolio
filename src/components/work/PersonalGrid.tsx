'use client'

import { useMemo, useState } from 'react'
import { categoryLabels, personalProjects, type Category, type PersonalProject } from '@/content/projects'
import { asset } from '@/lib/site'
import { ArrowUpRight } from '@/components/site/icons'
import { ProjectModal } from './ProjectModal'

const TONES = ['white', 'blue', 'ink', 'peach', 'green', 'outline'] as const
const ORDER: Category[] = ['ai-apps', 'ai-design', 'tools', 'data', 'web']

/**
 * Personal projects. The whole card opens the details modal (screenshots +
 * full write-up); the Live and GitHub links sit above that hit area.
 */
export function PersonalGrid() {
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const [open, setOpen] = useState<PersonalProject | null>(null)

  const filters = useMemo(() => ORDER.filter((c) => personalProjects.some((p) => p.category === c)), [])
  const shown = filter === 'all' ? personalProjects : personalProjects.filter((p) => p.category === filter)

  return (
    <>
      <div className="filters" role="group" aria-label="Filter by category">
        {(['all', ...filters] as const).map((f) => (
          <button key={f} type="button" className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f === 'all' ? 'All' : categoryLabels[f]}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length} projects shown
      </p>
      <ul className="pp-grid">
        {shown.map((p, i) => {
          const n = p.gallery.length
          return (
            <li key={p.id} className={`pp card--lift tone-${TONES[i % TONES.length]}`}>
              <div className="pp__img">
                <img src={asset(`/images/covers/${p.image}.webp`)} alt="" width={960} height={600} loading="lazy" decoding="async" />
                <span className="pp__shots mono" aria-hidden="true">
                  {n} {n === 1 ? 'shot' : 'shots'} · View
                </span>
              </div>
              <p className="mono pp__cat">
                {categoryLabels[p.category]}
                {p.year ? ` · ${p.year}` : ''}
              </p>
              <h3 className="h-display pp__title">
                <button type="button" className="pp__open" onClick={() => setOpen(p)} aria-haspopup="dialog">
                  {p.title}
                  <span className="sr-only">: view details and {n} screenshot{n === 1 ? '' : 's'}</span>
                </button>
              </h3>
              <p className="pp__desc">{p.description}</p>
              <p className="mono pp__stack">{p.stack.join(' · ')}</p>
              <div className="pp__links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    Live <ArrowUpRight />
                    <span className="sr-only"> {p.title} (opens in a new tab)</span>
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    GitHub <ArrowUpRight />
                    <span className="sr-only"> {p.title} source (opens in a new tab)</span>
                  </a>
                )}
                <span className="pp__more" aria-hidden="true">
                  Details →
                </span>
              </div>
            </li>
          )
        })}
      </ul>
      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </>
  )
}
