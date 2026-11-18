import { CtaBand } from '@/components/site/CtaBand'
import { aiTools, processSteps, services } from '@/content/site'
import { pageMeta } from '@/lib/site'
import { Crumbs } from '@/components/seo/Crumbs'

export const metadata = pageMeta({
  title: 'AI Agent, Data & Full Stack Development Services',
  description:
    'Hire me to build AI agents and LLM apps, data pipelines and reporting, or a full stack web or mobile app, delivered end to end from first commit to production.',
  keywords: ['AI agent development services', 'LLM app development', 'data pipeline development', 'data engineering services', 'full stack web development', 'mobile app development', 'hire AI engineer'],
  path: '/services',
})

function AgentsMock() {
  return (
    <div className="mock mock--chat" aria-hidden="true">
      <p className="mock-chat__q">Find quiet cafés near me with good wifi</p>
      <p className="mock-chat__agents">
        {['Intent', 'Location', 'Photos', 'Curate'].map((a) => (
          <span key={a}>{a}</span>
        ))}
      </p>
      <div className="mock-chat__a">
        <p>Found 4 places within 800 m. The closest is open until 22:00 and has a quiet back room.</p>
        <p className="mono mock-chat__done">✓ 5 agents · done</p>
      </div>
    </div>
  )
}

function DataMock() {
  return (
    <div className="mock mock--pipe" aria-hidden="true">
      {['modbus', 'kafka', 'airflow', 'dashboard'].map((n, i) => (
        <span key={n} className="mock-pipe__step">
          {i > 0 && <i />}
          <b className={n === 'dashboard' ? 'is-blue' : ''}>{n}</b>
        </span>
      ))}
    </div>
  )
}

function DeliveryMock() {
  const steps = [
    ['first commit', '✓ done'],
    ['weekly demo builds', '✓ done'],
    ['production deploy', '✓ done'],
    ['handover & docs', '● live'],
  ]
  return (
    <ul className="mock mock--check" aria-hidden="true">
      {steps.map(([s, st], i) => (
        <li key={s} className={i === steps.length - 1 ? 'is-live' : ''}>
          <span>{s}</span>
          <span>{st}</span>
        </li>
      ))}
    </ul>
  )
}

const MOCKS = { agents: <AgentsMock />, data: <DataMock />, delivery: <DeliveryMock /> }
const TONES = { agents: 'tone-white', data: 'tone-ink', delivery: 'tone-peach' }

export default function ServicesPage() {
  return (
    <>
      <section className="wrap page-hero" aria-labelledby="services-title">
        <p className="label rise">(Services)</p>
        <Crumbs trail={[{ name: 'Services', path: '/services' }]} />
        <h1 id="services-title" className="h-display h-xl rise" style={{ ['--i' as string]: 1 }}>
          What I <em className="accent-serif">build.</em>
        </h1>
        <p className="lede rise" style={{ ['--i' as string]: 2 }}>
          Three ways I usually help: agents and LLM apps, data pipelines and reporting, and end-to-end delivery.
        </p>
      </section>

      <section className="wrap svc-list" aria-label="Services">
        {services.map((s) => (
          <article key={s.id} id={s.id} className={`svc card ${TONES[s.id]}`} aria-labelledby={`svc-${s.id}`} data-reveal>
            <div className="svc__copy">
              <p className="mono svc__n">{s.n}</p>
              <h2 id={`svc-${s.id}`} className="h-display svc__title">
                {s.title}
              </h2>
              <p className="svc__body">{s.body}</p>
              <ul className="tag-row">
                {s.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            {MOCKS[s.id]}
          </article>
        ))}
      </section>

      <section className="wrap section" aria-labelledby="process-title">
        <h2 id="process-title" className="label">
          How a project runs
        </h2>
        <ol className="steps">
          {processSteps.map((p, i) => (
            <li key={p.n} className={`step card--lift ${i === 2 ? 'tone-blue-strong' : 'tone-white'}`} data-reveal>
              <span className="h-display step__n" aria-hidden="true">
                {p.n}
              </span>
              <h3 className="h-display step__title">{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>

        <h2 className="label tools-label">AI tools I build with</h2>
        <ul className="pill-list" data-reveal>
          {aiTools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  )
}
