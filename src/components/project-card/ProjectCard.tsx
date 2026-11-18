import type { ReactNode } from 'react'
import type { Client } from '@/content/projects'

/**
 * One layout for every client launch. The theme (colours, fonts, shapes) comes
 * from the `.pc--{id}` class in cards.css; the right-hand scene is passed in.
 */
export function ProjectCard({
  client,
  mark,
  sub,
  scene,
  sceneFirst = false,
  topbar,
}: {
  client: Client
  mark: ReactNode
  sub?: string
  scene: ReactNode
  sceneFirst?: boolean
  topbar?: [string, string]
}) {
  const titleId = `pc-${client.id}-title`
  const [before, accent, after] = client.headline
  const label = `Project ${client.n} · Client build${topbar ? '' : ` · ${client.where}`}`

  return (
    <article className={`pc pc--${client.id}${sceneFirst ? ' pc--scene-first' : ''}`} aria-labelledby={titleId} data-reveal>
      {topbar && (
        <div className="pc__topbar">
          <span>{topbar[0]}</span>
          <span>{topbar[1]}</span>
        </div>
      )}
      <div className="pc__body">
        <div className="pc__text">
          <div className="pc__brand">
            <span className="pc__mark" aria-hidden="true">
              {mark}
            </span>
            <span className="pc__brand-name">
              <span className="pc__name">{client.name}</span>
              {sub && <span className="pc__sub">{sub}</span>}
            </span>
            {sceneFirst && <span className="pc__label pc__label--inline">{label}</span>}
          </div>
          {!sceneFirst && !topbar && <p className="pc__label">{label}</p>}

          <h3 id={titleId} className="pc__title">
            {before}
            <em>{accent}</em>
            {after}
          </h3>
          <p className="pc__desc">{client.description}</p>
          <ul className="pc__tags" aria-label="Scope">
            {client.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="pc__foot">
            <a className="pc__cta" href={client.url} target="_blank" rel="noopener noreferrer">
              {client.cta}
              <span aria-hidden="true">→</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <div className="pc__palette">
              <span className="pc__palette-label">Project palette</span>
              <ul aria-label={`${client.name} palette`}>
                {client.palette.map((c) => (
                  <li key={c.hex} style={{ background: c.hex }} title={`${c.name} ${c.hex}`}>
                    <span className="sr-only">
                      {c.name} {c.hex}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pc__scene">
          <div className="pc__stage">{scene}</div>
        </div>
      </div>
    </article>
  )
}
