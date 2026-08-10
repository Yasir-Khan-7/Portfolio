import { Fragment, useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { identity } from '../data/derived'
import { experience, roleList } from '../data/site'
import { scrollToNode, type RunState } from '../hooks/useRun'
import { MiniDag } from './MiniDag'
import { StateLegend } from './RunChrome'

/**
 * The role line is carried over verbatim — but the pipe separating the roles is
 * drawn as what it actually is here: the edge between nodes. Each role becomes a
 * node on a short vertical graph rather than an inline glyph that orphans itself
 * at a line break.
 */
const roleNodes = roleList
const roleCount = experience.length
/** Read from the data, so the hero can never claim a role the timeline contradicts. */
const currentRole = experience.find((r) => r.current)

/** How long each role holds before the run steps to the next one. */
const ROLE_DWELL_MS = 2000

function IdentityGraph({ reduced }: { reduced: boolean }) {
  const last = roleNodes.length - 1
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduced) return
    const t = window.setInterval(
      () => setActive((i) => (i + 1) % roleNodes.length),
      ROLE_DWELL_MS,
    )
    return () => window.clearInterval(t)
  }, [reduced])

  return (
    <div className="grid grid-cols-[16px_minmax(0,1fr)] gap-x-4 md:grid-cols-[20px_minmax(0,1fr)] md:gap-x-6">
      {roleNodes.map((part, i) => {
        // Reduced motion gets the whole list at once, permanently.
        const isActive = reduced || i === active
        return (
          <Fragment key={part}>
            {/* The port anchors to the row's FIRST line, not its centre: a role
                that wraps to two lines at narrow widths would otherwise park its
                port in the gutter between them. */}
            <span className="relative self-stretch" aria-hidden="true">
              {i > 0 && (
                <span className="absolute top-0 left-1/2 h-[calc(0.46em-5.5px)] w-px -translate-x-1/2 bg-ink" />
              )}
              {i < last && (
                <span className="absolute bottom-0 left-1/2 w-px -translate-x-1/2 bg-ink top-[calc(0.46em+5.5px)]" />
              )}
              <span
                className={`absolute left-1/2 h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 border-[1.5px] border-ink transition-colors duration-500 top-[0.46em] ${
                  isActive ? 'bg-signal' : 'bg-panel'
                }`}
              />
            </span>
            {/* Each row keeps its space whether or not it is showing, so the
                stack never reflows and the visible line simply travels down the
                rail. The type stays ink; only the port carries the signal colour. */}
            <span
              className="block py-[0.06em] transition-[opacity,color,transform] duration-500 ease-[var(--ease-run)]"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'none' : 'translateY(6px)',
              }}
            >
              {part}
            </span>
          </Fragment>
        )
      })}
    </div>
  )
}

export function Hero({ stateOf, reduced }: { stateOf: (id: string) => RunState; reduced: boolean }) {
  return (
    <section
      id="hero"
      className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-24 pb-14 md:px-8 md:pt-28 md:pb-16"
    >
      {/* Source node: the greeting is the node's own label, not a floating eyebrow */}
      <div className="mb-6 flex items-center gap-0 md:mb-8">
        <span className="flex items-center gap-2 border border-ink bg-panel px-2.5 py-1.5 t-mono-label">
          <span className="run-pulse h-1.5 w-1.5 rounded-full bg-signal" />
          {identity.greeting}
        </span>
        <span className="h-px w-6 bg-ink sm:w-10" aria-hidden="true" />
        <span className="port shrink-0" aria-hidden="true" />
        <span className="h-px flex-1 bg-rule" aria-hidden="true" />
      </div>

      {/* The title takes the full measure: "Forward Deployed Engineer" is long,
          and sharing the row with the graph rail forced it to wrap. The rail
          moves down beside the intro instead. */}
      <h1 className="t-display text-[clamp(2rem,5.4vw,4.6rem)]">
        <span className="sr-only">
          {identity.name} — {roleList.join(', ')}
        </span>
        <span aria-hidden="true">
          <IdentityGraph reduced={reduced} />
        </span>
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <div className="min-w-0">
          <div
            className="node max-w-[720px] animate-[hero-in_0.9s_var(--ease-run)_both] p-5 md:p-6"
            style={{ animationDelay: '320ms' }}
          >
            <div className="mb-3 flex items-center justify-between border-b border-rule-soft pb-2.5">
              <span className="t-mono-label text-ink-2">{identity.name}</span>
              <span className="t-mono text-ink-3">stdout</span>
            </div>
            <p className="t-body text-[1.0625rem]">{identity.intro}</p>
          </div>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 animate-[hero-in_0.9s_var(--ease-run)_both]"
            style={{ animationDelay: '440ms' }}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToNode('projects')
              }}
              className="btn-signal"
            >
              View My Work
              <ArrowDown size={14} strokeWidth={2.25} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToNode('contact')
              }}
              className="btn-ghost"
            >
              Get In Touch
              <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* The graph rail: navigation and progress in one drawing */}
        <div className="hidden lg:block">
          <MiniDag stateOf={stateOf} reduced={reduced} />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-rule pt-4 md:mt-14 md:flex-row md:items-center md:justify-between md:gap-4">
        <StateLegend />
        <div className="flex items-center justify-between gap-5 md:justify-end">
          {/* Deliberately not a project count. The twelve on this page are a
              selection, not a total, and a total is not a number this file can
              honestly assert. The current role is the single most useful fact
              for a visitor landing cold, and it is read from the experience
              data — so it can never drift from the timeline below. */}
          {currentRole ? (
            <span className="t-mono text-ink-3">
              currently{' '}
              <span className="text-ink">{currentRole.role}</span> at{' '}
              <span className="text-ink">{currentRole.company}</span>
            </span>
          ) : (
            <span className="t-mono text-ink-3">
              {roleCount} roles since 2023 · UK · Netherlands · Belgium
            </span>
          )}
          <button
            onClick={() => scrollToNode('about')}
            className="group flex items-center gap-2 t-mono-label text-ink-2 transition-colors hover:text-ink"
          >
            Scroll
            <ArrowDown
              size={13}
              strokeWidth={2.25}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  )
}
