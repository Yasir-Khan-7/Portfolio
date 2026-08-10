import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { testimonials } from '../data/site'
import type { RunState } from '../hooks/useRun'
import { NodeHeading, NodeSection } from './NodeHeading'
import { Reveal } from './Reveal'

/**
 * The recommendations exist only as screenshots — their text is inside the
 * images, so nothing here is transcribed or paraphrased. The carousel just
 * gives each one a readable frame and a way to open it full size.
 */
export function Testimonials({ state }: { state: RunState }) {
  const items = testimonials.items
  const [i, setI] = useState(0)
  const [zoom, setZoom] = useState<string | null>(null)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(0)

  const next = useCallback(() => setI((p) => (p + 1) % items.length), [items.length])
  const prev = useCallback(() => setI((p) => (p === 0 ? items.length - 1 : p - 1)), [items.length])

  useEffect(() => {
    if (paused || zoom) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = window.setInterval(next, 8000)
    return () => window.clearInterval(t)
  }, [paused, zoom, next])

  useEffect(() => {
    if (!zoom) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoom(null)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [zoom])

  return (
    <NodeSection id="testimonials">
      <NodeHeading taskId="t6.testimonials" state={state} meta={`${items.length} received`}>
        {testimonials.heading}
      </NodeHeading>

      <Reveal>
        <p className="t-body -mt-4 mb-8">{testimonials.subheading}</p>

        <div
          className="node mx-auto max-w-[920px] overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="flex items-center gap-3 border-b border-rule px-4 py-2.5">
            <span className="t-mono-label text-ink-2">recommendation</span>
            <span className="t-mono text-ink-3">
              {String(i + 1).padStart(2, '0')}/{String(items.length).padStart(2, '0')}
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-8 w-8 items-center justify-center border border-rule bg-panel text-ink-2 transition-colors hover:border-ink hover:bg-ink hover:text-canvas"
              >
                <ChevronLeft size={15} strokeWidth={2} aria-hidden="true" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-8 w-8 items-center justify-center border border-rule bg-panel text-ink-2 transition-colors hover:border-ink hover:bg-ink hover:text-canvas"
              >
                <ChevronRight size={15} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            className="relative bg-panel-sunk"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const dx = touchX.current - e.changedTouches[0].clientX
              if (dx > 60) next()
              else if (dx < -60) prev()
            }}
          >
            <div
              className="flex transition-transform duration-700 ease-[var(--ease-run)]"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {/* The capture fills the panel rather than floating as a small card
                  inside it — a nested bordered box was both dead space and a card
                  within a card. Width is the constraint; height follows. */}
              {items.map((t, n) => (
                <div key={t.id} className="w-full shrink-0 p-3 md:p-5">
                  <button
                    onClick={() => setZoom(t.image)}
                    className="group relative block w-full cursor-zoom-in overflow-hidden"
                    aria-label={`Open testimonial ${n + 1} full size`}
                    tabIndex={n === i ? 0 : -1}
                  >
                    <img
                      src={t.image}
                      alt={t.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full transition-transform duration-700 ease-[var(--ease-run)] group-hover:scale-[1.01]"
                    />
                    <span className="absolute right-3 bottom-3 flex items-center gap-1.5 border border-ink bg-canvas/92 px-2 py-1 t-mono-label text-ink opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      <Maximize2 size={11} strokeWidth={2.25} aria-hidden="true" />
                      Tap to view full testimonial
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-rule px-4 py-3">
            {items.map((_, n) => (
              <button
                key={n}
                onClick={() => setI(n)}
                aria-label={`Testimonial ${n + 1}`}
                aria-current={n === i}
                className={`h-1.5 transition-all duration-300 ${
                  n === i ? 'w-8 bg-signal' : 'w-4 bg-rule hover:bg-queued'
                }`}
              />
            ))}
            <span className="ml-auto text-[0.75rem] text-ink-3">tap a card to enlarge</span>
          </div>
        </div>
      </Reveal>

      {/* Portalled for the same reason as ProjectModal: a fixed overlay inside a
          `relative z-10` section resolves under the z-50 run header. */}
      {zoom &&
        createPortal(
        <div
          className="fixed inset-0 z-70 flex items-center justify-center overflow-y-auto bg-ink/80 p-4 backdrop-blur-sm"
          onClick={() => setZoom(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Testimonial, full size"
        >
          <div className="node node-live relative my-auto max-w-[900px] p-3">
            <img src={zoom} alt="Testimonial, full size" className="max-h-[85vh] w-full object-contain" />
            <button
              onClick={() => setZoom(null)}
              aria-label="Close"
              autoFocus
              className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center border border-ink bg-signal text-ink transition-transform hover:scale-105"
            >
              <X size={17} strokeWidth={2.25} aria-hidden="true" />
            </button>
          </div>
        </div>,
          document.body,
        )}
    </NodeSection>
  )
}
