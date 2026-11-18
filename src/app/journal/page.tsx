import { CtaBand } from '@/components/site/CtaBand'
import { journalTopics, posts } from '@/content/site'
import { pageMeta } from '@/lib/site'

export const metadata = pageMeta({
  title: 'Journal',
  description:
    'Notes from the workbench: short write-ups on agents, forward deployed work and industrial data. First posts coming soon.',
  keywords: ['AI engineering blog'],
  path: '/journal',
  noindex: true,
})

function Cover({ kind }: { kind: (typeof posts)[number]['cover'] }) {
  if (kind === 'code')
    return (
      <div className="post-code" aria-hidden="true">
        <p className="term__dots">
          <i />
          <i />
          <i />
        </p>
        <pre>
          <span className="t-dim"># agents.py</span>
          {'\n'}for agent in crew:{'\n'}
          {'    '}
          <span className="t-b">yield sse(&quot;progress&quot;, agent)</span>
        </pre>
      </div>
    )
  if (kind === 'word')
    return (
      <p className="h-display post-word" aria-hidden="true">
        FDE
      </p>
    )
  return (
    <p className="mono post-flow" aria-hidden="true">
      modbus → kafka → airflow
    </p>
  )
}

export default function JournalPage() {
  const [featured, ...rest] = posts
  return (
    <>
      <section className="wrap page-hero" aria-labelledby="journal-title">
        <p className="label rise">(Journal)</p>
        <h1 id="journal-title" className="h-display h-xl rise" style={{ ['--i' as string]: 1 }}>
          Notes from the
          <br />
          <em className="accent-serif">workbench.</em>
        </h1>
        <p className="lede rise" style={{ ['--i' as string]: 2 }}>
          Short write-ups on agents, forward deployed work and industrial data. The first posts are on the way.
        </p>
      </section>

      <section className="wrap posts" aria-label="Posts">
        <article className="post post--featured tone-ink" data-reveal>
          <Cover kind={featured.cover} />
          <div>
            <p className="tag-row">
              <span className="tag">{featured.tag}</span>
              <span className="tag tag--fill">Coming soon</span>
            </p>
            <h2 className="h-display post__title post__title--lg">{featured.title}</h2>
            <p className="mono on-ink-2">Featured note</p>
          </div>
        </article>
        {rest.map((p, i) => (
          <article key={p.title} className={`post ${i === 0 ? 'tone-white' : 'tone-green'}`} data-reveal>
            <p className="tag-row">
              <span className="tag">{p.tag}</span>
              <span className={`tag ${i === 0 ? 'tag--fill' : 'tag--ink'}`}>Coming soon</span>
            </p>
            <Cover kind={p.cover} />
            <h2 className="h-display post__title">{p.title}</h2>
          </article>
        ))}
      </section>

      <section className="wrap section-tight" aria-labelledby="topics-title">
        <div className="topics">
          <h2 id="topics-title" className="mono muted">
            Topics
          </h2>
          <ul>
            {journalTopics.map((t) => (
              <li key={t} className="h-display">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
