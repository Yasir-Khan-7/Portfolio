import Link from 'next/link'
import { Fragment } from 'react'
import { CtaBand } from '@/components/site/CtaBand'
import { ArrowUpRight } from '@/components/site/icons'
import { Reviews } from '@/components/home/Reviews'
import { about, career, trusted } from '@/content/site'
import { asset } from '@/lib/site'
import { pageMeta } from '@/lib/site'

export const metadata = pageMeta({
  title: 'About',
  description:
    'Software engineer focused on data-driven applications and intelligent systems. Data & AI Engineer at Data Panda, working with teams across the UK, the Netherlands and Belgium.',
  path: '/about',
})

/** Renders **word** as <strong>. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
        part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  )
}

export default function AboutPage() {
  return (
    <>
      <section className="wrap page-hero about-hero" aria-labelledby="about-title">
        <div>
          <p className="label rise">(About me)</p>
          <h1 id="about-title" className="h-display h-xl rise" style={{ ['--i' as string]: 1 }}>
            {about.headline[0]}
            <br />
            {about.headline[1]}
            <br />
            <em className="accent-serif">{about.accent}</em>
          </h1>
          <p className="lede rise" style={{ ['--i' as string]: 2 }}>
            {about.lede}
          </p>
          <div className="btn-row rise" style={{ ['--i' as string]: 3 }}>
            <Link href="/contact" className="btn btn--ink">
              Start a project
            </Link>
            <Link href="/work" className="btn btn--ghost">
              See the work
            </Link>
          </div>
        </div>
        <figure className="portrait rise" style={{ ['--i' as string]: 2 }}>
          <img src={asset('/images/profile/yasir-portrait.webp')} alt="Muhammad Yasir Khan" width={400} height={400} />
        </figure>
      </section>

      <section className="wrap section journey" aria-labelledby="journey-title">
        <h2 id="journey-title" className="label">
          (01) Journey
        </h2>
        {about.journey.map((p, i) => (
          <p key={i} data-reveal>
            <Rich text={p} />
          </p>
        ))}
      </section>

      <section className="wrap" aria-labelledby="comp-title">
        <h2 id="comp-title" className="label">
          (02) Core competencies
        </h2>
        <ul className="pill-list pill-list--lg" data-reveal>
          {about.competencies.map((c) => (
            <li key={c.name} className={'tone' in c ? `tone-${c.tone}` : ''}>
              {c.name}
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section" id="career" aria-labelledby="career-title">
        <h2 id="career-title" className="label">
          (03) Career so far
        </h2>
        <ol className="career">
          {career.map((c) => (
            <li key={c.role} data-reveal>
              <span className="mono">{c.years}</span>
              <span className="h-display career__role">{c.role}</span>
              <span className="career__badge">{c.current && <span className="tag tag--fill">Current</span>}</span>
              <span className="career__co">{c.company}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap" aria-labelledby="trusted-title">
        <h2 id="trusted-title" className="label">
          Trusted by teams I&rsquo;ve built with
        </h2>
        <ul className="trusted" data-reveal>
          {trusted.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="wrap section" aria-labelledby="says-title">
        <h2 id="says-title" className="label">
          (04) What people say
        </h2>
        <Reviews />
        <p className="about-more">
          <Link href="/work" className="btn btn--ghost btn--sm">
            See the work <ArrowUpRight />
          </Link>
        </p>
      </section>
      <CtaBand />
    </>
  )
}
