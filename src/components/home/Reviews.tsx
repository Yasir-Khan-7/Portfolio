'use client'

import { useEffect, useState } from 'react'
import { reviewMarks, testimonials } from '@/content/site'
import { asset } from '@/lib/site'

/** "What people say." — average rating card plus a stacked, auto-advancing review carousel. */
export function Reviews() {
  const [order, setOrder] = useState(() => testimonials.map((_, n) => n))
  const [out, setOut] = useState<number | null>(null)
  const [paused, setPaused] = useState(true)

  useEffect(() => {
    setPaused(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const next = () => {
    if (out !== null) return
    setOut(order[0])
    window.setTimeout(() => {
      setOrder((o) => [...o.slice(1), o[0]])
      setOut(null)
    }, 600)
  }

  useEffect(() => {
    if (paused) return
    const t = window.setTimeout(next, 6000)
    return () => window.clearTimeout(t)
  })

  const rated = testimonials.filter((r) => r.stars > 0)
  const avg = rated.reduce((a, r) => a + r.stars, 0) / rated.length

  return (
    <div className="reviews" data-reveal>
      <div className="rate">
        <span className="rate__stars" aria-hidden="true">
          ★★★★★
        </span>
        <p className="h-display rate__num">
          {avg.toFixed(1)}
          <span className="sr-only"> out of 5 stars on average</span>
        </p>
        <p className="rate__body">
          Average across the client reviews shown here. Clients mention the same things: knowledgeable, responsive, on
          time.
        </p>
      </div>

      <div className="qstack" onMouseEnter={() => setPaused(true)} onFocusCapture={() => setPaused(true)}>
        {testimonials.map((r, n) => {
          const pos = order.indexOf(n)
          const mark = reviewMarks[r.name] ?? {}
          return (
            <figure key={r.name} className={`qcard${out === n ? ' is-out' : ''}`} data-p={pos} aria-hidden={pos !== 0}>
              {r.stars > 0 ? (
                <span className="qcard__stars" aria-label={`${r.stars} out of 5 stars`}>
                  {'★'.repeat(r.stars)}
                </span>
              ) : (
                <span className="tag qcard__tag">Recommendation letter</span>
              )}
              <blockquote className="h-display qcard__quote">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="qcard__who">
                {mark.logo ? (
                  <img className="qcard__av qcard__av--logo" src={asset(mark.logo)} alt="" width={48} height={48} loading="lazy" />
                ) : (
                  <span className="qcard__av">{mark.initial}</span>
                )}
                <span>
                  <strong>{r.name}</strong>
                  <small>{r.role}</small>
                </span>
              </figcaption>
            </figure>
          )
        })}
        <div className="qstack__next">
          <button
            type="button"
            className="btn btn--ghost btn--sm"
            onClick={() => {
              setPaused(true)
              next()
            }}
          >
            Next review →
          </button>
        </div>
        <p className="sr-only" aria-live="polite">
          {`Review ${order[0] + 1} of ${testimonials.length}: ${testimonials[order[0]].name}`}
        </p>
      </div>
    </div>
  )
}
