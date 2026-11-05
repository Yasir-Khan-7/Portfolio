import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Bot, Database, MapPin, Rocket } from 'lucide-react'
import {
  about,
  brief,
  deliveredIntro,
  deliveredItems,
  hero,
  links,
  posts,
  process,
  reviews,
  services,
  stats,
  stories,
  trusted,
  type ServiceId,
} from '../data/home'
import { Chip, CountUp, Rv, SectionHead } from './ui'

/* ------------------------------------------------------------------ hero */

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hgrid">
        <div>
          <Chip>{hero.status}</Chip>
          <h1>
            {hero.lines.map((l) => (
              <span className="ln" key={l}>
                <span>{l}</span>
              </span>
            ))}
            <span className="ln">
              <span className="ac">{hero.accent}</span>
            </span>
          </h1>
          <p className="roles">
            {hero.roles.map((r, n) => (
              <span key={r}>
                {n > 0 && <i aria-hidden="true" />}
                {r}
              </span>
            ))}
          </p>
          <p className="lede">{hero.lede}</p>
          <div className="ctas">
            <a className="btn btn-dark" href="#contact">
              Start a project ↗
            </a>
            <a className="btn btn-tile" href="#projects">
              See the work
            </a>
          </div>
          <div className="hmeta">
            <span>
              <img src={hero.now.logo} alt="" width={26} height={26} />
              {hero.now.label}
            </span>
            <span>
              <MapPin size={16} aria-hidden="true" />
              {hero.where}
            </span>
          </div>
        </div>
        <div className="hvis">
          <div className="portrait">
            <img src={hero.photo} alt="Muhammad Yasir Khan" width={420} height={525} />
          </div>
          <div className="hbadge" aria-hidden="true">
            <i />
            {hero.badge}
          </div>
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- trusted */

export function Trusted() {
  const row = (hidden: boolean) =>
    trusted.map((t) => (
      <span className="lg" key={`${t.name}-${hidden}`} aria-hidden={hidden || undefined}>
        {t.logo ? <img src={t.logo} alt="" /> : <span className="g">{t.glyph}</span>}
        {t.name}
      </span>
    ))
  return (
    <div className="wrap">
      <Rv className="tile trust">
        <p>Trusted by teams I've built with</p>
        <div className="mq">
          <div className="mt">
            {row(false)}
            {row(true)}
          </div>
        </div>
      </Rv>
    </div>
  )
}

/* ----------------------------------------------------------------- about */

/** Renders `**word**` as <strong>. */
function Emph({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/).map((part, n) =>
        part.startsWith('**') ? <strong key={n}>{part.slice(2, -2)}</strong> : part,
      )}
    </>
  )
}

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead chip="about me" title="About me." />
        <div className="about-g">
          <Rv className="tile ab-main">
            <p className="ab-lead">{about.lead}</p>
            {about.paragraphs.map((p) => (
              <p className="ab-p" key={p.slice(0, 24)}>
                <Emph text={p} />
              </p>
            ))}
            <div className="comp-wrap">
              <span className="ol">core competencies</span>
              <ul className="comp">
                {about.competencies.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </Rv>
          <div className="ab-side">
            <Rv className="tile journey" delay={100}>
              <span className="ol">career so far</span>
              <ol>
                {about.journey.map((j) => (
                  <li key={j.company} className={j.current ? 'now' : undefined}>
                    <span className="yr">{j.years}</span>
                    <span>
                      <b>{j.role}</b>
                      <small>{j.company}</small>
                    </span>
                  </li>
                ))}
              </ol>
            </Rv>
            <Rv className="tile tools" delay={200}>
              <span className="ol">AI tools I build with</span>
              <ul>
                {about.tools.map((t) => (
                  <li key={t.name} title={t.description}>
                    <img src={t.logo} alt="" loading="lazy" />
                    {t.name}
                  </li>
                ))}
              </ul>
            </Rv>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- services */

const serviceIcon: Record<ServiceId, ReactNode> = {
  agents: <Bot size={20} aria-hidden="true" />,
  data: <Database size={20} aria-hidden="true" />,
  delivery: <Rocket size={20} aria-hidden="true" />,
}

function Demo({ id }: { id: ServiceId }) {
  if (id === 'agents')
    return (
      <div className="chatw" aria-hidden="true">
        <div className="msg u">Find quiet cafés near me with good wifi</div>
        <div className="msg t">
          <span>intent</span>
          <span>location</span>
          <span>photos</span>
          <span>curate</span>
        </div>
        <div className="msg a">Found 4 places within 800 m. The closest is open until 22:00 and has a quiet back room.</div>
        <div className="msg t">✓ 5 agents · done</div>
      </div>
    )
  if (id === 'data')
    return (
      <div className="chartw" aria-hidden="true">
        <div className="hd">
          pipeline.run<span>airflow · daily</span>
        </div>
        <div className="flowd">
          {[
            ['Ingest', 'kafka'],
            ['Clean', 'spark'],
            ['Model', 'sql'],
            ['Report', 'power bi'],
          ].map(([a, b], n) => (
            <span key={a} style={{ display: 'contents' }}>
              {n > 0 && <span className="arr">→</span>}
              <span className="st" style={{ ['--dl' as string]: `${n * 0.8}s` }}>
                <b>{a}</b>
                {b}
              </span>
            </span>
          ))}
        </div>
        <div className="cols">
          {[45, 62, 38, 74, 58, 88, 70].map((h, n) => (
            <i key={n} style={{ height: `${h}%`, ['--dl' as string]: `${n * 0.08}s` }} />
          ))}
        </div>
      </div>
    )
  return (
    <div className="log" aria-hidden="true">
      {[
        ['c', '~/client-app on main'],
        ['', '$ git push origin main'],
        ['ok', '✓ tests passed'],
        ['ok', '✓ docker image built'],
        ['ok', '✓ deployed to aws'],
        ['', '→ live in production'],
      ].map(([c, t], n) => (
        <div key={t} className={c} style={{ ['--dl' as string]: `${n * 0.5}s` }}>
          {t}
        </div>
      ))}
    </div>
  )
}

export function Services() {
  const [sel, setSel] = useState(0)
  const [auto, setAuto] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    if (!auto) return
    const t = window.setTimeout(() => setSel((s) => (s + 1) % services.length), 7000)
    return () => window.clearTimeout(t)
  }, [auto, sel])

  const pick = (n: number, focus = false) => {
    setAuto(false)
    setSel(n)
    if (focus) tabs.current[n]?.focus()
  }
  const s = services[sel]

  return (
    <section id="services">
      <div className="wrap">
        <SectionHead
          chip="services"
          title="What I build."
          aside={<p className="lede" style={{ marginTop: 0, maxWidth: '40ch' }}>Pick a tab to see it in action.</p>}
        />
        <Rv className="svc">
          <div className="tabs" role="tablist" aria-label="Services">
            {services.map((sv, n) => (
              <button
                key={sv.id}
                ref={(el) => {
                  tabs.current[n] = el
                }}
                className="tab"
                role="tab"
                id={`tab-${sv.id}`}
                aria-selected={n === sel}
                aria-controls="svc-panel"
                tabIndex={n === sel ? 0 : -1}
                onClick={() => pick(n)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                    e.preventDefault()
                    pick((n + 1) % services.length, true)
                  }
                  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                    e.preventDefault()
                    pick((n + services.length - 1) % services.length, true)
                  }
                }}
              >
                <span className="tt">
                  <span className="ic">{serviceIcon[sv.id]}</span>
                  <span className="h">{sv.title}</span>
                </span>
                <span className="d">{sv.body}</span>
                <span key={`${sel}-${auto}`} className={`bar ${auto ? 'run' : ''}`} />
              </button>
            ))}
          </div>
          <div className="stage" id="svc-panel" role="tabpanel" aria-labelledby={`tab-${s.id}`} key={s.id}>
            <Demo id={s.id} />
            <div className="pane-tg">
              {s.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </Rv>
        <Rv className="tile proc">
          <b>how a project runs</b>
          {process.map((p, n) => (
            <span key={p} style={{ display: 'contents' }}>
              {n > 0 && (
                <span className="ar" aria-hidden="true">
                  →
                </span>
              )}
              <span className="s">
                <i>{n + 1}</i>
                {p}
              </span>
            </span>
          ))}
        </Rv>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- delivered */

export function Delivered() {
  return (
    <section id="delivered" className="flush-top">
      <div className="wrap">
        <SectionHead chip="recently delivered" title="Shipped for clients." lede={deliveredIntro} />
        <div className="dv">
          {deliveredItems.map((d, n) => (
            <Rv as="article" key={d.id} className={`tile dc ${n % 2 ? 'alt' : ''}`} delay={n * 120}>
              <div className="stagebg">
                <div className="laptop">
                  <div className="lid">
                    <img src={d.images[0]} alt={`${d.client}, live site`} loading="lazy" />
                  </div>
                  <div className="base" />
                </div>
              </div>
              <div>
                <span className="m">
                  {d.region} · {d.scope.split(' · ')[0]}
                </span>
                <h3>{d.client}</h3>
                <p>{d.description}</p>
              </div>
              <div className="row">
                <span className="tg">
                  {d.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </span>
                <a href={d.link} target="_blank" rel="noopener noreferrer">
                  {d.linkLabel} ↗
                </a>
              </div>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- stories */

function Ring({ v, children }: { v: number; children: ReactNode }) {
  return (
    <span className="rw">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle className="bgc" cx="50" cy="50" r="45" />
        <circle className="fg" cx="50" cy="50" r="45" style={{ ['--v' as string]: v }} />
      </svg>
      <b>{children}</b>
    </span>
  )
}

function Story({ s, delay }: { s: (typeof stories)[number]; delay: number }) {
  const [open, setOpen] = useState(false)
  const id = `story-${s.company.replace(/\W+/g, '-').toLowerCase()}`
  return (
    <Rv as="article" className="tile sto" delay={delay}>
      <span className="tp">
        <img src={s.logo} alt="" />
        <small>{s.meta}</small>
      </span>
      <h4>{s.title}</h4>
      <p>{s.summary}</p>
      <div className={`more ${open ? 'open' : ''}`} id={id}>
        <div>
          <ul>
            {s.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
      <button type="button" className="go" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
        {open ? 'Show less ↑' : 'Read the story ↓'}
      </button>
    </Rv>
  )
}

export function Stories() {
  return (
    <section id="stories" className="flush-top">
      <div className="wrap">
        <SectionHead chip="success stories" title="Results for teams." />
        <div className="sb">
          {stats.rings.map((r, n) => (
            <Rv key={r.label} className="tile ring" delay={n * 100}>
              <Ring v={r.value / 100}>
                <CountUp value={r.value} prefix={r.prefix} suffix={r.suffix} />
              </Ring>
              <p>{r.label}</p>
              <small>{stats.source}</small>
            </Rv>
          ))}
          <Rv className="tile ring wide" delay={200}>
            <span className="ppl" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i>+</i>
            </span>
            <p className="big">
              <b style={{ fontWeight: 600 }}>
                <CountUp value={stats.people.value} suffix={stats.people.suffix} />
              </b>{' '}
              {stats.people.label}
            </p>
            <small>
              {stats.source} · {stats.region}
            </small>
          </Rv>
          {stories.map((s, n) => (
            <Story key={s.company} s={s} delay={n * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------- testimonials */

export function Reviews() {
  const [order, setOrder] = useState(() => reviews.map((_, n) => n))
  const [out, setOut] = useState<number | null>(null)
  const [paused, setPaused] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const next = () => {
    if (out !== null) return
    const top = order[0]
    setOut(top)
    window.setTimeout(() => {
      setOrder((o) => [...o.slice(1), o[0]])
      setOut(null)
    }, 650)
  }

  useEffect(() => {
    if (paused) return
    const t = window.setTimeout(next, 6000)
    return () => window.clearTimeout(t)
  })

  const rated = reviews.filter((r) => r.stars > 0)
  const avg = rated.reduce((a, r) => a + r.stars, 0) / rated.length

  return (
    <section id="testimonials" className="flush-top">
      <div className="wrap">
        <SectionHead chip="testimonials" title="What people say." />
        <Rv className="tw">
          <div className="tile rate">
            <span className="st" aria-label={`${avg.toFixed(1)} out of 5 stars`}>
              ★★★★★
            </span>
            <b>{avg.toFixed(1)}</b>
            <p>Average across the client reviews shown here. Clients mention the same things: knowledgeable, responsive, on time.</p>
          </div>
          <div className="stack" onMouseEnter={() => setPaused(true)}>
            {reviews.map((r, n) => (
              <figure
                key={r.name}
                className={`qc ${out === n ? 'out' : ''}`}
                data-p={order.indexOf(n)}
                aria-hidden={order.indexOf(n) !== 0}
              >
                {r.stars > 0 && (
                  <span className="stars" aria-label={`${r.stars} out of 5 stars`}>
                    {'★'.repeat(r.stars)}
                  </span>
                )}
                <blockquote>“{r.quote}”</blockquote>
                <figcaption className="who">
                  {r.logo ? (
                    <img className="av" src={r.logo} alt="" style={{ background: '#fff', padding: 5, border: '1px solid var(--line)' }} />
                  ) : (
                    <span className="av">{r.initial}</span>
                  )}
                  <span>
                    <strong>{r.name}</strong>
                    <small>{r.role}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
            <div className="qnext">
              <button
                type="button"
                className="btn btn-tile btn-sm"
                onClick={() => {
                  setPaused(true)
                  next()
                }}
              >
                Next review →
              </button>
            </div>
          </div>
        </Rv>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ blog */

function Cover({ kind }: { kind: (typeof posts)[number]['cover'] }) {
  if (kind === 'word') return <div className="cv word" aria-hidden="true">FDE</div>
  if (kind === 'flow') return <div className="cv flow" aria-hidden="true">modbus → kafka → airflow</div>
  return (
    <div className="cv" aria-hidden="true">
      <span className="c"># agents.py</span>
      <br />
      <span className="k">for</span> agent <span className="k">in</span> crew:
      <br />
      &nbsp;&nbsp;<span className="k">yield</span> sse(<span className="s">"progress"</span>, agent)
    </div>
  )
}

export function Blog() {
  return (
    <section id="blog" className="flush-top">
      <div className="wrap">
        <SectionHead chip="blog" title="Notes from the workbench." />
        <div className="bl">
          {posts.map((p, n) => {
            const body = (
              <>
                <Cover kind={p.cover} />
                <div className="bd">
                  <span className="pm">
                    {p.tag}
                    {!p.href && <span className="soon">coming soon</span>}
                  </span>
                  <h3>{p.title}</h3>
                </div>
              </>
            )
            return p.href ? (
              <Rv key={p.title} delay={n * 100} className="tile" style={{ padding: 0 }}>
                <a className="post" href={p.href}>
                  {body}
                </a>
              </Rv>
            ) : (
              <Rv as="article" key={p.title} delay={n * 100} className="tile post">
                {body}
              </Rv>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------- start a project */

type Status = 'idle' | 'sending' | 'sent' | 'error'

const draftFor = (needs: string[], when: string) => {
  const list = needs.length
    ? needs.join(', ').replace(/, ([^,]*)$/, ' and $1').toLowerCase()
    : 'something I have in mind'
  return `Hi Yasir,\n\nI'd like help with: ${list}.\nTimeline: ${when.toLowerCase()}.\n\nA bit about what we're building: `
}

export function StartProject() {
  const [needs, setNeeds] = useState<string[]>([brief.needs[0]])
  const [when, setWhen] = useState(brief.timelines[1])
  const [message, setMessage] = useState(() => draftFor([brief.needs[0]], brief.timelines[1]))
  const [touched, setTouched] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  // Keep the draft in sync with the chips until the visitor edits it by hand.
  useEffect(() => {
    if (!touched) setMessage(draftFor(needs, when))
  }, [needs, when, touched])

  const toggle = (n: string) =>
    setNeeds((cur) => (cur.includes(n) ? cur.filter((x) => x !== n) : [...cur, n]))

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    setError('')
    try {
      const data = new FormData(form)
      data.set('needs', needs.join(', '))
      data.set('timeline', when)
      const res = await fetch(links.formspree, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error ?? 'The form service rejected the message')
      }
      form.reset()
      setTouched(false)
      setMessage(draftFor(needs, when))
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      setError(
        `${err instanceof Error ? err.message : 'Something went wrong'}. You can email ${links.emailAddress} directly.`,
      )
    }
  }

  return (
    <section id="contact" className="flush-top">
      <div className="wrap">
        <Rv className="tile build">
          <div>
            <Chip>start a project</Chip>
            <h2>What do you need built?</h2>
            <p className="lede">Pick what fits and I'll draft the message for you. {brief.availability}</p>
            <span className="ol" id="needs-label">
              I need help with
            </span>
            <div className="opts" role="group" aria-labelledby="needs-label">
              {brief.needs.map((n) => (
                <button key={n} type="button" aria-pressed={needs.includes(n)} onClick={() => toggle(n)}>
                  {n}
                </button>
              ))}
            </div>
            <span className="ol" id="when-label">
              Timeline
            </span>
            <div className="opts" role="group" aria-labelledby="when-label">
              {brief.timelines.map((t) => (
                <button key={t} type="button" aria-pressed={when === t} onClick={() => setWhen(t)}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <div className="hd">
              <span>your message</span>
              <span>to: Yasir</span>
            </div>
            <div className="two">
              <div className="fld">
                <label htmlFor="sp-name">Name</label>
                <input id="sp-name" name="name" autoComplete="name" required />
              </div>
              <div className="fld">
                <label htmlFor="sp-email">Email</label>
                <input id="sp-email" name="email" type="email" autoComplete="email" required />
              </div>
            </div>
            <div className="fld">
              <label htmlFor="sp-msg">Message</label>
              <textarea
                id="sp-msg"
                name="message"
                required
                value={message}
                onChange={(e) => {
                  setTouched(true)
                  setMessage(e.target.value)
                }}
              />
            </div>
            <div className="acts">
              <button className="btn btn-dark" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message ↗'}
              </button>
              <a className="btn btn-tile" href={links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            </div>
            <p className={`note ${status === 'sent' ? 'ok' : status === 'error' ? 'err' : ''}`} role="status" aria-live="polite">
              {status === 'sent'
                ? "Thanks, your message is on its way. I'll get back to you soon."
                : status === 'error'
                  ? error
                  : ''}
            </p>
            <p className="direct">
              Prefer email? <a href={links.email} target="_blank" rel="noopener noreferrer">{links.emailAddress}</a>
            </p>
          </form>
        </Rv>
      </div>
    </section>
  )
}
