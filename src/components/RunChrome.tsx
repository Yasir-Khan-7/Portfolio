import { useEffect, useState } from 'react'
import { Mail, Menu, X } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { identity, links, nodes } from '../data/site'
import { scrollToNode, type RunState } from '../hooks/useRun'

const social = [
  { href: links.email, label: 'Email Yasir Khan', Icon: Mail },
  { href: links.linkedin, label: 'LinkedIn profile', Icon: Linkedin },
  { href: links.github, label: 'GitHub profile', Icon: Github },
]

/** State never travels as colour alone — every dot has a shape and a name. */
export function StateDot({ state, size = 7 }: { state: RunState; size?: number }) {
  const style = { width: size, height: size }
  if (state === 'running') {
    return (
      <span
        className="run-pulse block shrink-0 rounded-full bg-signal"
        style={style}
        aria-hidden="true"
      />
    )
  }
  if (state === 'success') {
    return <span className="block shrink-0 bg-success" style={style} aria-hidden="true" />
  }
  return (
    <span
      className="block shrink-0 border border-queued bg-transparent"
      style={style}
      aria-hidden="true"
    />
  )
}

export function RunHeader({
  stateOf,
  completed,
}: {
  stateOf: (id: string) => RunState
  completed: number
}) {
  // The task the visitor is reading, for the header's live readout. Before the
  // first section is reached nothing is running yet, so the run reads as idle.
  const running = nodes.find((n) => stateOf(n.id) === 'running')
  const lastDone = [...nodes].reverse().find((n) => stateOf(n.id) === 'success')
  const activeTaskId = running?.taskId ?? lastDone?.taskId ?? 'idle'
  const [condensed, setCondensed] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (id: string) => {
    setMenuOpen(false)
    scrollToNode(id)
  }

  return (
    <>
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          go('about')
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas t-mono-label"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          condensed
            ? 'border-rule bg-canvas/92 shadow-[0_1px_0_0_#cbcdc4,0_10px_28px_-22px_#14161a66] backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-4 px-5 md:px-8">
          {/* Run identity — this is the logo slot, rebuilt in the world's grammar.
              The chip reports the task the visitor is actually reading, so the
              top-left is a live readout rather than a static label. */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex min-w-0 items-center gap-2.5 text-left"
            aria-label="Back to top"
          >
            <span className="flex shrink-0 items-center gap-1.5 border border-ink bg-ink px-1.5 py-1 text-canvas t-mono-label">
              <span className="run-pulse block h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              RUN 001
              <span className="text-canvas/45" aria-hidden="true">
                /
              </span>
              <span className="tabular-nums">{activeTaskId}</span>
            </span>
            <span className="hidden truncate t-mono-label text-ink-2 transition-colors group-hover:text-ink xl:block">
              {identity.name}
            </span>
          </button>

          <nav className="ml-auto hidden items-center gap-0.5 lg:flex" aria-label="Sections">
            {nodes.map((n) => {
              const state = stateOf(n.id)
              return (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  aria-current={state === 'running' ? 'true' : undefined}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 t-control text-[0.6875rem] transition-colors ${
                    state === 'running'
                      ? 'bg-ink text-canvas'
                      : 'text-ink-2 hover:bg-panel-sunk hover:text-ink'
                  }`}
                >
                  <StateDot state={state} size={5} />
                  {n.label}
                </button>
              )
            })}
          </nav>

          <div className="ml-auto flex items-center gap-1 lg:ml-3">
            <span
              className="mr-1 hidden t-mono text-ink-3 md:block"
              aria-label={`${completed} of ${nodes.length} sections read`}
            >
              {String(completed).padStart(2, '0')}/{String(nodes.length).padStart(2, '0')}
            </span>
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center border border-transparent text-ink-2 transition-colors hover:border-rule hover:bg-panel hover:text-ink"
              >
                <Icon size={15} strokeWidth={1.75} aria-hidden="true" />
              </a>
            ))}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="ml-1 flex h-8 w-8 items-center justify-center border border-rule bg-panel text-ink lg:hidden"
            >
              <Menu size={16} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile: the run as a task list you pick from */}
      {menuOpen && (
        <div className="fixed inset-0 z-60 flex flex-col bg-canvas lg:hidden">
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-rule px-5">
            <span className="t-mono-label text-ink-2">Run 001 · Sections</span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center border border-rule bg-panel"
            >
              <X size={17} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-1 px-5" aria-label="Sections">
            {nodes.map((n) => {
              const state = stateOf(n.id)
              return (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className="group flex items-baseline gap-3 border-b border-rule-soft py-3.5 text-left"
                >
                  {/* The task id sets its own width — a fixed one overflowed into
                      the label on every id longer than `t2.skills`. The id already
                      carries the sequence, so no separate 01–06 column. */}
                  <span className="t-mono shrink-0 text-ink-3">{n.taskId}</span>
                  <span className="t-section text-[clamp(1.25rem,3vw,1.75rem)]">{n.label}</span>
                  <span className="ml-auto flex shrink-0 items-center gap-2 self-center">
                    <StateDot state={state} size={7} />
                    <span className="t-mono-label text-ink-3">
                      {state === 'success' ? 'ok' : state === 'running' ? 'run' : '—'}
                    </span>
                  </span>
                </button>
              )
            })}
          </nav>
          <div className="flex shrink-0 items-center gap-2 border-t border-rule px-5 py-4">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-rule bg-panel text-ink"
              >
                <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

/** The state key, shown once at the foot of the first viewport. */
export function StateLegend({ className = '' }: { className?: string }) {
  const legend: { state: RunState; label: string }[] = [
    { state: 'queued', label: 'queued' },
    { state: 'running', label: 'running' },
    { state: 'success', label: 'shipped' },
  ]
  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}>
      <span className="t-mono-label text-ink-3">State</span>
      {legend.map(({ state, label }) => (
        <span key={label} className="flex items-center gap-1.5 t-mono text-ink-2">
          <StateDot state={state} size={6} />
          {label}
        </span>
      ))}
    </div>
  )
}
