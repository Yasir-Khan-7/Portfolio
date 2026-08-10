import type { ReactNode } from 'react'
import { StateDot } from './RunChrome'
import type { RunState } from '../hooks/useRun'

/**
 * Every section opens as a task header: the id that matches the graph, the
 * heading, and the task's state. The id is wayfinding, not ornament — it is the
 * same string the mini-DAG and the mobile menu print.
 */
export function NodeHeading({
  taskId,
  state,
  children,
  meta,
}: {
  taskId: string
  state: RunState
  children: ReactNode
  meta?: ReactNode
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-ink pb-2.5">
        {/* Lowercase, so the id here is character-for-character the string the
            graph rail and the mobile menu print for the same task. */}
        <span className="flex items-center gap-2 bg-ink px-2 py-1 t-mono text-canvas">
          {taskId}
        </span>
        <span className="flex items-center gap-1.5 t-mono-label text-ink-2">
          <StateDot state={state} size={6} />
          {state === 'running' ? 'running' : state === 'success' ? 'success' : 'queued'}
        </span>
        {meta && <span className="ml-auto t-mono text-ink-3">{meta}</span>}
      </div>
      <h2 className="t-section mt-5 text-[clamp(2.25rem,6vw,4rem)]">{children}</h2>
    </div>
  )
}

/** Section shell: consistent rhythm and max width for every node on the canvas. */
export function NodeSection({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`relative z-10 mx-auto w-full max-w-[1440px] scroll-mt-20 px-5 py-20 md:px-8 md:py-28 ${className}`}
    >
      {children}
    </section>
  )
}
