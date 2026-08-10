import { nodes } from '../data/site'
import { scrollToNode, type RunState } from '../hooks/useRun'

const ROW = 46
const PAD = 14
const DOT_X = 16

/**
 * The page's own dependency graph, drawn as a real graph: ports, edges, states.
 * It is the primary wayfinding device — the edge between two nodes fills in only
 * once the upstream node has actually been read, so the drawing reports progress
 * instead of decorating it.
 */
export function MiniDag({
  stateOf,
  reduced,
}: {
  stateOf: (id: string) => RunState
  reduced: boolean
}) {
  const height = PAD * 2 + (nodes.length - 1) * ROW

  return (
    <figure className="node w-full max-w-[280px] p-0">
      <figcaption className="flex items-center justify-between border-b border-rule px-3 py-2">
        <span className="t-mono-label text-ink-2">Graph</span>
        <span className="t-mono text-ink-3">{nodes.length} tasks</span>
      </figcaption>

      <div className="relative px-3 py-1">
        <svg
          width="100%"
          height={height}
          viewBox={`0 0 240 ${height}`}
          className="overflow-visible"
          aria-hidden="true"
        >
          {nodes.slice(0, -1).map((n, i) => {
            const upstreamDone = stateOf(n.id) !== 'queued'
            const y1 = PAD + i * ROW + 4
            const y2 = PAD + (i + 1) * ROW - 4
            return (
              <line
                key={`e-${n.id}`}
                x1={DOT_X}
                y1={y1}
                x2={DOT_X}
                y2={y2}
                stroke={upstreamDone ? 'var(--color-ink)' : 'var(--color-rule)'}
                strokeWidth={upstreamDone ? 1.5 : 1}
                strokeDasharray={upstreamDone ? undefined : '3 3'}
                style={{ transition: reduced ? 'none' : 'stroke 0.45s var(--ease-run)' }}
              />
            )
          })}
        </svg>

        <ul className="absolute inset-0 px-3 py-1">
          {nodes.map((n, i) => {
            const state = stateOf(n.id)
            return (
              <li
                key={n.id}
                className="absolute right-3 left-3 flex items-center gap-3"
                style={{ top: PAD + i * ROW - 11 }}
              >
                <span
                  className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center border bg-panel ${
                    state === 'queued' ? 'border-rule' : 'border-ink'
                  }`}
                  style={{ marginLeft: DOT_X - 11 }}
                >
                  <StateGlyph state={state} />
                </span>
                <button
                  onClick={() => scrollToNode(n.id)}
                  className={`flex min-w-0 flex-1 items-baseline justify-between gap-2 border-b border-transparent py-1 text-left transition-colors hover:border-rule ${
                    state === 'running' ? 'text-ink' : 'text-ink-2 hover:text-ink'
                  }`}
                >
                  <span
                    className={`truncate t-mono ${state === 'running' ? 'font-bold' : ''}`}
                    style={{ fontSize: '0.6875rem' }}
                  >
                    {n.taskId}
                  </span>
                  <span className="t-mono-label shrink-0 text-ink-3">
                    {state === 'running' ? 'run' : state === 'success' ? 'ok' : '—'}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </figure>
  )
}

function StateGlyph({ state }: { state: RunState }) {
  if (state === 'running') {
    return <span className="run-pulse block h-2 w-2 rounded-full bg-signal" />
  }
  if (state === 'success') {
    return <span className="block h-2 w-2 bg-success" />
  }
  return <span className="block h-2 w-2 border border-queued" />
}
