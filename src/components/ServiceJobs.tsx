import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { articles, jobs, type Job } from '../data/services'
import { Bay, BayHead, Frame, Label, Pane, type Tone } from './Glaze'
import { Reveal } from './Reveal'

const bay = articles[0]

/**
 * What I build — four offers, four panes of the wall.
 *
 * "One pane, one statement" is the world's rule and it does real work here:
 * each offer's headline, its supply/execute/receive frames and its completion
 * condition are separate panes, so a buyer can read any one of them without
 * reading the others. Everything is on the surface — nothing behind a tab —
 * which is also the only version an AI crawler can read.
 *
 * Colour is a note in a score, not a category code: exactly one pane per offer
 * is tinted, and which colour it is says nothing about the offer's type. It
 * marks position in the wall, the way a glazier places a coloured pane.
 */
const notes: Tone[] = ['cobalt', 'amber', 'oxblood', 'cobalt']

function Column({ label, items }: { label: string; items: ReactNode[] }) {
  return (
    <Pane tone="seeded" className="p-4 md:p-5">
      <Label className="text-glass-ink-3">{label}</Label>
      <ul className="mt-3 space-y-2">
        {items.map((node, i) => (
          <li key={i} className="text-[0.875rem] leading-relaxed text-glass-ink-2">
            {node}
          </li>
        ))}
      </ul>
    </Pane>
  )
}

function JobPanes({
  job,
  note,
  onQueue,
}: {
  job: Job
  note: Tone
  onQueue: (id: string) => void
}) {
  return (
    <Frame className="col-span-full grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)]">
      {/* Statement pane: the offer itself, and the only place it is named. */}
      <Pane tone="clear" className="flex flex-col justify-between p-5 md:p-7">
        <div>
          <h3 className="g-sub text-[clamp(1.25rem,2.6vw,1.875rem)]">{job.name}</h3>
          {job.fixedScope && (
            <span className="g-label mt-3 inline-block bg-bar px-2 py-1 text-glass">
              Fixed scope
            </span>
          )}
          <p className="g-body mt-4 text-[0.9375rem]">{job.summary}</p>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5">
          {job.stack.map((t) => (
            <li key={t} className="g-label text-glass-ink-3">
              {t}
            </li>
          ))}
        </ul>
      </Pane>

      <Frame className="grid-cols-1 sm:grid-cols-3">
        <Column label="You supply" items={job.inputs.map((i) => i)} />
        <Column
          label="Work executed"
          items={job.stages.map((s) => (
            <>
              <span className="font-semibold text-glass-ink">{s.name}</span>: {s.detail}
            </>
          ))}
        />
        <Column label="You receive" items={job.artifacts.map((a) => a)} />
      </Frame>

      {/* Completion condition and the action, on one row: the promise and the
          way to take it up, never separated. */}
      <Frame className="col-span-full grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_auto]">
        <Pane tone="seeded" className="p-4 md:px-5">
          <Label className="text-glass-ink-3">Complete when</Label>
          <p className="mt-1.5 text-[0.875rem] leading-relaxed text-glass-ink">{job.exit}</p>
        </Pane>
        <Pane tone={note} className="min-h-3 md:w-16" />
        <button type="button" onClick={() => onQueue(job.id)} className="g-btn g-btn-primary">
          Start here
          <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
        </button>
      </Frame>
    </Frame>
  )
}

export function ServiceJobs({ onQueue }: { onQueue: (id: string) => void }) {
  return (
    <Bay id={bay.id}>
      <BayHead
        title={bay.title}
        meta={`${jobs.length} pieces of work`}
        lede="Four defined pieces of work. Each one states what you hand over, what I do with it, what exists at the end, and the condition it has to satisfy before I call it finished."
      />
      {jobs.map((job, i) => (
        <Reveal key={job.id} className="col-span-full" delay={i === 0 ? 0 : 40}>
          <JobPanes job={job} note={notes[i % notes.length]} onQueue={onQueue} />
        </Reveal>
      ))}
    </Bay>
  )
}
