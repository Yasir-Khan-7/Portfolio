import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { delivered } from '../data/site'
import type { RunState } from '../hooks/useRun'
import { NodeHeading, NodeSection } from './NodeHeading'
import { Reveal } from './Reveal'

type Item = (typeof delivered.items)[number]

/**
 * Client deliveries sit between experience and personal projects because that
 * is what they are: paid work, shipped to production, with the hosting included.
 * The screenshot is a live capture of the running system, not a mockup.
 */
function DeliveryNode({ item, index }: { item: Item; index: number }) {
  const [frame, setFrame] = useState(0)
  const timer = useRef<number | null>(null)
  const multi = item.images.length > 1

  const start = () => {
    if (!multi || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    stop()
    timer.current = window.setInterval(
      () => setFrame((f) => (f + 1) % item.images.length),
      2200,
    )
  }
  const stop = () => {
    if (timer.current) {
      window.clearInterval(timer.current)
      timer.current = null
    }
  }
  useEffect(() => stop, [])

  const flip = index % 2 === 1

  return (
    <article
      className="node grid grid-cols-1 lg:grid-cols-2"
      onMouseEnter={start}
      onMouseLeave={() => {
        stop()
        setFrame(0)
      }}
    >
      <div
        className={`relative overflow-hidden border-b border-rule bg-panel-sunk lg:border-b-0 ${
          flip ? 'lg:order-2 lg:border-l' : 'lg:border-r'
        }`}
      >
        <img
          src={item.images[frame]}
          alt={`${item.client} — live site, screen ${frame + 1} of ${item.images.length}`}
          width={1440}
          height={900}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover object-top"
        />
        {multi && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 border border-ink bg-canvas/92 px-1.5 py-0.5 backdrop-blur-sm">
            <span className="t-mono text-ink">
              {String(frame + 1).padStart(2, '0')}/{String(item.images.length).padStart(2, '0')}
            </span>
          </div>
        )}
      </div>

      <div className={`flex flex-col p-5 md:p-7 ${flip ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-2.5 border-b border-rule-soft pb-3">
          <span className="t-mono text-ink-3">d{String(index + 1).padStart(2, '0')}</span>
          <span className="flex items-center gap-1.5 t-mono-label text-ink-2">
            <span className="h-1.5 w-1.5 shrink-0 bg-success" aria-hidden="true" />
            in production
          </span>
          <span className="ml-auto flex items-center gap-1.5 t-mono text-ink-3">
            <MapPin size={11} strokeWidth={2} aria-hidden="true" />
            {item.region}
          </span>
        </div>

        <h3 className="t-section mt-5 text-[clamp(1.5rem,3vw,2.125rem)]">{item.client}</h3>
        <p className="mt-2 t-mono text-ink-2">{item.scope}</p>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">{item.description}</p>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-signal mt-6 self-start"
        >
          Visit {item.linkLabel}
          <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export function Delivered({ state }: { state: RunState }) {
  return (
    <NodeSection id="delivered">
      <NodeHeading
        taskId="t4.delivered"
        state={state}
        meta={`${delivered.items.length} client systems · live`}
      >
        {delivered.heading}
      </NodeHeading>

      <Reveal>
        {/* The contextual route to /services sits here rather than in a banner:
            this is the section where a client is already looking at paid work
            that shipped, which is the moment the question becomes "and how
            would you work with me?" */}
        <p className="t-body -mt-4 mb-8">
          {delivered.intro}{' '}
          <Link
            to="/services"
            className="border-b border-rule text-ink underline-offset-4 transition-colors hover:border-ink"
          >
            how I work with clients
            <ArrowUpRight
              size={12}
              strokeWidth={2.25}
              aria-hidden="true"
              className="ml-0.5 inline-block align-baseline"
            />
          </Link>
        </p>
      </Reveal>

      <div className="space-y-6">
        {delivered.items.map((item, i) => (
          <Reveal key={item.id} delay={i * 70}>
            <DeliveryNode item={item} index={i} />
          </Reveal>
        ))}
      </div>
    </NodeSection>
  )
}
