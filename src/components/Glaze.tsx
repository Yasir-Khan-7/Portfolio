import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { articles } from '../data/services'

/**
 * The glazed wall — the visual world of /services.
 *
 * A steel-framed glass partition from a glazier's workshop. Matte black
 * glazing bars are the only line ink; clear and seeded glass are the calm
 * ground; cobalt, amber and oxblood are reserved for what matters now.
 *
 * The load-bearing idea in the implementation: **the bars are the grid gaps.**
 * A wall is a CSS grid painted bar-black with a gap and a pad of exactly the
 * bar thickness, and the panes sit in the cells. So every bar is a true,
 * unbroken, pixel-accurate line at any width, mullions align across a bay for
 * free, and no pane ever needs a border of its own. Drawing bars as borders
 * instead would double them wherever two panes meet.
 *
 * Nothing in this world floats: there is not a single shadow on the surface.
 * Depth is glass and steel, not elevation.
 */

const BAR = 'var(--bar)'

/** One bay of the wall. Everything on the page lives inside one of these. */
export function Wall({
  children,
  className = '',
  id,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  id?: string
  as?: 'div' | 'section' | 'ul' | 'ol'
}) {
  return (
    <Tag
      id={id}
      className={`grid bg-bar ${className}`}
      style={{ gap: BAR, padding: BAR }}
    >
      {children}
    </Tag>
  )
}

/**
 * A wall nested inside a pane. The world does this literally — the reference
 * component sheet shows a mini glazing grid inside a content card — so a
 * sub-frame is native grammar here, not a nested-card smell.
 */
export function Frame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`grid bg-bar ${className}`} style={{ gap: BAR }}>
      {children}
    </div>
  )
}

export type Tone = 'clear' | 'seeded' | 'cobalt' | 'amber' | 'oxblood' | 'ink'

const toneClass: Record<Tone, string> = {
  clear: 'g-clear text-glass-ink',
  seeded: 'g-seeded text-glass-ink',
  cobalt: 'g-tinted bg-cobalt text-white',
  amber: 'g-tinted bg-amber text-glass-ink',
  oxblood: 'g-tinted bg-oxblood text-white',
  ink: 'bg-bar text-glass',
}

/** A single pane of glass. */
export function Pane({
  tone = 'seeded',
  className = '',
  children,
  as: Tag = 'div',
}: {
  tone?: Tone
  className?: string
  children?: ReactNode
  as?: 'div' | 'li' | 'article' | 'section' | 'figure'
}) {
  return <Tag className={`${toneClass[tone]} ${className}`}>{children}</Tag>
}

/** The small tracked caps stencilled onto a workshop drawing. */
export function Label({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <p className={`g-label ${className}`}>{children}</p>
}

/**
 * The masthead. Its whole navigation is the way back — the wall elevation
 * below is the map for everything else, so a section toolbar would be a second
 * wayfinding system competing with the one the world already has.
 */
export function GlazeHeader() {
  return (
    <>
      <a
        href="#wall"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:bg-bar focus:px-4 focus:py-2 focus:text-glass g-label"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50">
        <Wall className="grid-cols-[auto_minmax(0,1fr)_auto] items-stretch">
          <Pane tone="clear" className="flex items-center gap-2.5 px-3 md:px-4">
            <GlazeMark />
            <span className="g-label hidden sm:block">M. Yasir Khan</span>
          </Pane>

          <Pane tone="seeded" className="flex items-center px-3 md:px-4">
            <span className="g-label truncate text-glass-ink-3">
              Freelance development
            </span>
          </Pane>

          <Link
            to="/"
            className="g-tinted flex items-center gap-2 bg-cobalt px-3 text-white transition-colors hover:bg-cobalt-deep md:px-5"
          >
            <ArrowLeft size={14} strokeWidth={2.5} aria-hidden="true" />
            <span className="g-label">Back to portfolio</span>
          </Link>
        </Wall>
      </header>
    </>
  )
}

/** The workshop's mark: a glazing grid, drawn in its own grammar. */
export function GlazeMark({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="shrink-0"
      fill="none"
    >
      <rect x="1" y="1" width="18" height="18" stroke="currentColor" strokeWidth="2" />
      <path d="M8 1v18M8 8h11" stroke="currentColor" strokeWidth="2" />
      <rect x="9" y="9" width="10" height="10" fill="var(--color-cobalt)" />
    </svg>
  )
}

/**
 * The elevation key. A drawing of a partition is read from its elevation, so
 * the index of bays is drawn as one — a strip of panes you step up to, rather
 * than a list of links with numbers in front of them.
 */
export function Elevation() {
  return (
    <Wall
      as="section"
      className="grid-cols-2 sm:grid-cols-4 lg:grid-cols-7"
    >
      {articles.map((a) => (
        <a
          key={a.id}
          href={`#${a.id}`}
          className="g-seeded group flex min-h-24 flex-col justify-between p-3 text-glass-ink transition-colors hover:bg-cobalt hover:text-white md:p-4"
        >
          <span className="g-sub text-[0.9375rem] leading-tight">{a.title}</span>
          <span className="g-label mt-3 text-glass-ink-3 transition-colors group-hover:text-white/80">
            {a.short}
          </span>
        </a>
      ))}
    </Wall>
  )
}

/**
 * A bay heading. One pane, one statement — so the heading gets its own pane
 * and the copy beneath gets another, rather than stacking inside one.
 */
export function BayHead({
  title,
  lede,
  meta,
  tone = 'ink',
}: {
  title: string
  lede?: string
  meta?: string
  tone?: Tone
}) {
  return (
    <>
      <Pane
        tone={tone}
        className="col-span-full flex flex-wrap items-baseline gap-x-4 gap-y-1 px-4 py-3 md:px-6"
      >
        <h2 className="g-sub text-[clamp(1.125rem,2.4vw,1.75rem)]">{title}</h2>
        {meta && <span className="g-label ml-auto opacity-60">{meta}</span>}
      </Pane>
      {lede && (
        <Pane tone="clear" className="col-span-full px-4 py-5 md:px-6 md:py-6">
          <p className="g-body text-[1.0625rem]">{lede}</p>
        </Pane>
      )}
    </>
  )
}

/** A bay: one section of the wall, with its own id for the elevation key. */
export function Bay({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <Wall as="section" id={id} className={`scroll-mt-16 ${className}`}>
      {children}
    </Wall>
  )
}
