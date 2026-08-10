import { ArrowUpRight, MapPin } from 'lucide-react'
import { experience } from '../data/site'
import type { RunState } from '../hooks/useRun'
import { NodeHeading, NodeSection } from './NodeHeading'
import { Reveal } from './Reveal'

/** Axis runs from the first role to today, in decimal years. */
const AXIS_START = 2023.4
const AXIS_END = 2026.7
const TICKS = [2023.5, 2024, 2024.5, 2025, 2025.5, 2026, 2026.5]
const TICK_LABEL: Record<string, string> = {
  '2023.5': '2023',
  '2024': '2024',
  '2025': '2025',
  '2026': '2026',
}

const pct = (v: number) => ((v - AXIS_START) / (AXIS_END - AXIS_START)) * 100

/**
 * The run's timeline: every role as a real duration bar on one shared axis.
 * Bars are allowed to overlap, because the roles did: the Top of Mind freelance
 * month and the start at Data Panda both fall inside the Sideline engagement.
 * Two status values only — current (signal) and complete (success) — and both
 * are directly labelled, so state never travels as colour alone.
 */
function DurationAxis() {
  // Oldest first, so time reads left-to-right and top-to-bottom together.
  const rows = [...experience].reverse()

  return (
    <figure className="node p-5 md:p-6">
      <figcaption className="mb-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-rule pb-2.5">
        <h3 className="text-[1.0625rem] font-semibold text-ink">Timeline</h3>
        <span className="t-mono text-ink-3">Jul 2023 — present · {experience.length} roles</span>
      </figcaption>

      <div className="relative">
        {/* Year gridlines */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {TICKS.map((t) => (
            <div
              key={t}
              className="absolute top-0 bottom-6 w-px bg-rule-soft"
              style={{ left: `${pct(t)}%` }}
            />
          ))}
        </div>

        <ul className="relative space-y-5">
          {rows.map((r) => {
            const left = pct(r.start)
            const right = pct(r.end ?? AXIS_END - 0.12)
            const width = Math.max(right - left, 2.5)
            return (
              <li key={r.company}>
                {/* All text lives in the row label. The bar encodes duration and
                    nothing else, so no role can be truncated by its own span. */}
                <div className="mb-2 flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                  <span className="text-[0.875rem] font-semibold text-ink">{r.company}</span>
                  <span className="t-mono text-ink-2">{r.role}</span>
                  <span className="t-mono text-ink-3">{r.duration}</span>
                  {r.current && (
                    <span className="flex items-center gap-1.5 border border-signal bg-signal-wash px-1.5 py-0.5 t-mono-label text-ink">
                      <span className="run-pulse h-1.5 w-1.5 rounded-full bg-signal" />
                      current
                    </span>
                  )}
                </div>
                <div className="relative h-3.5">
                  {/* Same semantics as everywhere else on the page: running is
                      signal, complete is success. Ink here made the timeline the
                      one surface where run state silently stopped meaning state. */}
                  <div
                    className={`absolute top-0 h-3.5 rounded-r-[3px] ${
                      r.current ? 'bg-signal' : 'bg-success'
                    }`}
                    style={{ left: `${left}%`, width: `${width}%` }}
                    role="img"
                    aria-label={`${r.company}, ${r.role}, ${r.duration}`}
                  />
                </div>
              </li>
            )
          })}
        </ul>

        {/* Axis */}
        <div className="relative mt-3 h-5 border-t border-rule">
          {TICKS.filter((t) => TICK_LABEL[String(t)]).map((t) => (
            <span
              key={t}
              className="absolute top-1.5 t-mono text-ink-3"
              style={{ left: `${pct(t)}%`, transform: 'translateX(-50%)' }}
            >
              {TICK_LABEL[String(t)]}
            </span>
          ))}
        </div>
      </div>
    </figure>
  )
}

function RoleCard({ r, index }: { r: (typeof experience)[number]; index: number }) {
  const hasBody = r.blocks.length > 0 || Boolean(r.closing) || Boolean(r.website)

  return (
    <article className={`node ${r.current ? 'node-live' : ''}`}>
      <header className="flex items-center gap-3 border-b border-rule px-5 py-3.5">
        <span className="t-mono text-ink-3">r{String(index + 1).padStart(2, '0')}</span>
        <img
          src={r.logo}
          alt=""
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
          className="h-8 w-8 shrink-0 object-contain"
        />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[1.0625rem] leading-tight font-semibold text-ink">
            {r.company}
          </h3>
          <p className="mt-0.5 truncate t-mono text-ink-2">{r.role}</p>
        </div>
        <span
          className={`hidden shrink-0 items-center gap-1.5 px-2 py-1 t-mono-label sm:flex ${
            r.current
              ? 'border border-signal bg-signal-wash text-ink'
              : 'border border-rule bg-panel-sunk text-ink-2'
          }`}
        >
          {r.current ? (
            <span className="run-pulse h-1.5 w-1.5 rounded-full bg-signal" />
          ) : (
            <span className="h-1.5 w-1.5 bg-success" />
          )}
          {r.current ? 'running' : 'complete'}
        </span>
      </header>

      {/* A role with no bullets yet (a current one, still being written) gets a
          compact meta strip rather than a tall empty panel. */}
      <div className={`px-5 ${hasBody ? 'py-5' : 'py-3.5'}`}>
        <div className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 ${hasBody ? 'mb-4' : ''}`}>
          <span className="t-mono-label text-ink-3">{r.duration}</span>
          {r.location && (
            <span className="flex items-center gap-1.5 t-mono text-ink-3">
              <MapPin size={11} strokeWidth={2} aria-hidden="true" />
              {r.location}
            </span>
          )}
          {r.employment && (
            <span className="border border-rule bg-panel-sunk px-1.5 py-0.5 t-mono-label text-ink-2">
              {r.employment}
            </span>
          )}
        </div>

        {r.responsibilitiesTitle && (
          <p className="t-mono-label mb-4 text-ink">{r.responsibilitiesTitle}</p>
        )}

        {r.blocks.map((block, bi) => (
          <div key={bi} className={bi > 0 ? 'mt-6' : ''}>
            {block.subheading && (
              <p className="mb-2.5 text-[0.875rem] font-semibold text-ink">{block.subheading}</p>
            )}
            <ul className="space-y-2">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-2">
                  <span
                    className="mt-[0.55em] h-1 w-2.5 shrink-0 bg-rule"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {r.closing && (
          <p className="mt-5 border-t border-rule-soft pt-4 text-[0.9375rem] leading-relaxed text-ink-2">
            {r.closing}
          </p>
        )}

        {r.website && (
          <a
            href={r.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 border-b border-ink pb-0.5 t-mono-label text-ink transition-colors hover:border-signal hover:text-signal-deep"
          >
            Visit Company Website
            <ArrowUpRight size={13} strokeWidth={2.25} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}

export function Experience({ state }: { state: RunState }) {
  return (
    <NodeSection id="experience">
      <NodeHeading taskId="t3.experience" state={state} meta={`${experience.length} roles · 2023 — present`}>
        Professional Experience
      </NodeHeading>

      <Reveal className="mb-10">
        <DurationAxis />
      </Reveal>

      <div className="space-y-6">
        {experience.map((r, i) => (
          <Reveal key={r.company} delay={i * 60}>
            <RoleCard r={r} index={i} />
          </Reveal>
        ))}
      </div>
    </NodeSection>
  )
}
