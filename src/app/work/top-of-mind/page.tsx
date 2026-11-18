import Link from 'next/link'
import { CtaBand } from '@/components/site/CtaBand'
import { topOfMind as t } from '@/content/site'
import { pageMeta } from '@/lib/site'

export const metadata = pageMeta({
  title: 'Case study: Top of Mind',
  description:
    'Agentic capture for voice, text and photos: agent workflows that pull contacts, tasks and relationship context out of raw inputs, on iOS and Android.',
  path: '/work/top-of-mind',
})

export default function TopOfMindPage() {
  return (
    <>
      <section className="wrap page-hero" aria-labelledby="tom-title">
        <p className="label rise">
          <Link href="/work" className="crumb">
            ← Work
          </Link>
          <span aria-hidden="true">/</span> {t.breadcrumb}
        </p>
        <h1 id="tom-title" className="h-display h-xl rise" style={{ ['--i' as string]: 1 }}>
          {t.headline}
          <br />
          <em className="accent-serif">{t.accent}</em>
        </h1>
        <p className="lede rise" style={{ ['--i' as string]: 2 }}>
          {t.lede}
        </p>
        <dl className="meta-row rise" style={{ ['--i' as string]: 3 }}>
          {t.meta.map((m) => (
            <div key={m.k}>
              <dt className="mono">{m.k}</dt>
              <dd>{m.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="wrap" aria-label="How the extraction flow works">
        <figure className="flow" data-reveal>
          <div className="flow__col">
            <p className="mono flow__head">Raw inputs</p>
            <ul>
              {t.inputs.map((i) => (
                <li key={i} className="flow__item">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <span className="flow__line" aria-hidden="true" />
          <div className="flow__agent">
            <p className="h-display">Extraction agent</p>
            <p className="mono">edge functions</p>
          </div>
          <span className="flow__line" aria-hidden="true" />
          <div className="flow__col">
            <p className="mono flow__head">Structured output</p>
            <ul>
              {t.outputs.map((o, i) => (
                <li key={o} className={`flow__item flow__item--${['blue', 'green', 'peach'][i]}`}>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <figcaption className="sr-only">
            Voice notes, text messages and photos go into an extraction agent running on edge functions, which turns
            them into contacts, tasks and relationship context.
          </figcaption>
        </figure>
      </section>

      <section className="wrap section built" aria-labelledby="built-title">
        <div data-reveal>
          <p className="label">(01) The work</p>
          <h2 id="built-title" className="h-display h-lg">
            What I<br />
            <em className="accent-serif">built.</em>
          </h2>
        </div>
        <ol className="built__list">
          {t.built.map((b, i) => (
            <li key={b.title} data-reveal>
              <span className="mono">0{i + 1}</span>
              <div>
                <h3 className="h-display built__title">{b.title}</h3>
                <p className="muted">{b.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap" aria-labelledby="glance-title">
        <h2 id="glance-title" className="label">
          (02) At a glance
        </h2>
        <ul className="glance">
          {t.glance.map((g) => (
            <li key={g.k} className={`glance__tile card--lift tone-${g.tone}`} data-reveal>
              <p className="mono">{g.k}</p>
              <p className="h-display glance__v">{g.v}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section-tight" aria-label="Next case study">
        <div className="next-case" data-reveal>
          <div>
            <p className="mono muted">
              Next case study · {t.next.client} <span className="tag tag--fill next-case__soon">Coming soon</span>
            </p>
            <p className="h-display next-case__title">{t.next.title}</p>
          </div>
          <span className="next-case__arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
