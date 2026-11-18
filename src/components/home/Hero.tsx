import Link from 'next/link'
import { hero } from '@/content/site'
import { ArrowUpRight } from '@/components/site/icons'

const BARS = [28, 44, 36, 58, 50, 72, 78, 66, 40]

export function Hero() {
  return (
    <section className="wrap hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="label label--rule rise" style={{ ['--i' as string]: 0 }}>
          {hero.label}
        </p>
        <h1 id="hero-title" className="h-display h-xl hero__title rise" style={{ ['--i' as string]: 1 }}>
          {hero.headline[0]}
          <br />
          {hero.headline[1]}
          <br />
          {hero.headline[2]}
          <em className="accent-serif">{hero.accent}</em>
        </h1>
        <p className="lede rise" style={{ ['--i' as string]: 2 }}>
          {hero.lede}
        </p>
        <div className="btn-row hero__ctas rise" style={{ ['--i' as string]: 3 }}>
          <Link href="/work" className="btn btn--ink">
            View selected work <ArrowUpRight />
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Book an intro call <ArrowUpRight />
          </Link>
        </div>
        <dl className="hero__facts rise" style={{ ['--i' as string]: 4 }}>
          {hero.facts.map((f) => (
            <div key={f.k}>
              <dt className="mono">{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero__art" aria-hidden="true">
        <div className="hero-card hero-card--blue rise" style={{ ['--i' as string]: 3 }}>
          <div className="hero-card__float">
            <p className="mono">Agentic systems</p>
            <p className="hero-card__big">Agents that run the boring work.</p>
          </div>
        </div>
        <div className="hero-card hero-card--term rise" style={{ ['--i' as string]: 4 }}>
          <div className="hero-card__float">
            <p className="term__dots">
              <i />
              <i />
              <i />
            </p>
            <pre className="term">
              <span className="t-w">$ skillguard scan ./skills</span>
              {'\n'}
              <span className="t-b">✓ rules loaded</span>
              {'\n'}✓ credentials ..... pass{'\n'}✓ persistence ..... pass{'\n'}
              <span className="t-w">! exfiltration ... review</span>
              {'\n'}
              <span className="t-b">verdict: REVIEW</span>
            </pre>
          </div>
        </div>
        <div className="hero-card hero-card--chart rise" style={{ ['--i' as string]: 5 }}>
          <div className="hero-card__float">
            <p className="chart__head">
              <span className="mono">Line 3 · throughput</span>
              <span className="mono chart__live">● Live</span>
            </p>
            <div className="chart__bars">
              {BARS.map((h, i) => (
                <span key={i} style={{ height: `${h}%`, ['--b' as string]: i }} className={i === 6 ? 'is-blue' : i >= 5 ? 'is-ink' : i >= 3 ? 'is-mid' : ''} />
              ))}
            </div>
          </div>
        </div>
        <p className="hero-medal rise" style={{ ['--i' as string]: 6 }}>
          ★ {hero.medal}
        </p>
      </div>
    </section>
  )
}
