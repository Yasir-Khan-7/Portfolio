import Link from 'next/link'
import { ArrowUpRight } from './icons'

/** The dark "What do you need built?" block that closes every inner page. */
export function CtaBand() {
  return (
    <section className="wrap section-tight" aria-labelledby="cta-band-title" data-reveal>
      <div className="cta-band">
        <div>
          <p className="label label--on-ink">Start a project</p>
          <h2 id="cta-band-title" className="h-display cta-band__title">
            What do you <em className="accent-serif accent-serif--blue">need built?</em>
          </h2>
        </div>
        <Link href="/contact" className="btn btn--blue">
          Start a project <ArrowUpRight />
        </Link>
      </div>
    </section>
  )
}
