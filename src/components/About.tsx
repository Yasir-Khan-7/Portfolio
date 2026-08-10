import { about, aiTools, identity, roleList } from '../data/site'
import type { RunState } from '../hooks/useRun'
import { NodeHeading, NodeSection } from './NodeHeading'
import { Reveal } from './Reveal'

export function About({ state }: { state: RunState }) {
  return (
    <NodeSection id="about">
      <NodeHeading taskId="t1.about" state={state} meta="input · identity">
        About Me
      </NodeHeading>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-14">
        <Reveal className="min-w-0">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="t-body [&_strong]:font-semibold [&_strong]:text-ink"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>

          <h3 className="t-mono-label mt-10 mb-4 border-b border-rule pb-2 text-ink-2">
            {about.competenciesHeading}
          </h3>
          <ul className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {about.competencies.map((c) => (
              <li
                key={c}
                className="flex items-baseline gap-2.5 border-b border-rule-soft py-2.5 text-[0.9375rem] text-ink"
              >
                <span
                  className="mt-1 h-1.5 w-1.5 shrink-0 self-start translate-y-1.5 bg-signal"
                  aria-hidden="true"
                />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80} className="min-w-0">
          <figure className="node sticky top-20 mx-auto max-w-[360px] overflow-hidden">
            <figcaption className="flex items-center justify-between border-b border-rule px-3 py-2">
              <span className="t-mono-label text-ink-2">operator</span>
              <span className="t-mono text-ink-3">01</span>
            </figcaption>
            <img
              src={identity.photo}
              alt={`Portrait of ${identity.name}`}
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
            <div className="border-t border-rule px-3 py-2.5">
              <p className="t-mono-label text-ink">{identity.name}</p>
              <p className="mt-1 t-mono text-ink-3">{roleList.join(' · ')}</p>
            </div>
          </figure>
        </Reveal>
      </div>

      {/* Executors: the tools that actually run the work. A table of workers,
          not a grid of identical marketing cards. */}
      <Reveal className="mt-20 md:mt-24">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-ink pb-2.5">
          <h3 className="t-section text-[clamp(1.5rem,3.2vw,2.25rem)]">{aiTools.heading}</h3>
          <span className="t-mono text-ink-3">{aiTools.items.length} executors</span>
        </div>
        <p className="t-body mt-5">{aiTools.intro}</p>

        <ul className="mt-8">
          {aiTools.items.map((t, i) => (
            <li
              key={t.name}
              className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-1 border-b border-rule-soft py-4 transition-colors hover:bg-panel md:grid-cols-[3.25rem_minmax(0,15rem)_minmax(0,1fr)] md:items-center md:gap-x-6"
            >
              <span className="hidden t-mono text-ink-3 md:block">
                w{String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex items-center gap-3 md:col-start-2">
                <img
                  src={t.logo}
                  alt=""
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                  className="h-7 w-7 shrink-0 object-contain"
                />
                <span className="text-[0.9375rem] leading-tight font-semibold text-ink">
                  {t.name}
                </span>
              </span>
              <span className="col-span-2 text-[0.875rem] leading-relaxed text-ink-2 md:col-span-1 md:col-start-3">
                {t.description}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </NodeSection>
  )
}
