import Link from 'next/link'
import { Hero } from '@/components/home/Hero'
import { Reviews } from '@/components/home/Reviews'
import { Stories } from '@/components/home/Stories'
import { ClientCards } from '@/components/project-card/ClientCards'
import { Marquee } from '@/components/site/Marquee'
import { SectionHead } from '@/components/site/SectionHead'
import { ArrowUpRight } from '@/components/site/icons'
import { homeAbout, services } from '@/content/site'
import { pageMeta } from '@/lib/site'

export const metadata = pageMeta({
  title: 'Yasir Khan · AI Engineer & Forward Deployed Engineer',
  description:
    'Forward Deployed Engineer building AI agents, LLM apps, data pipelines and full stack web and mobile apps. I take client systems from first call to production.',
  keywords: ['Yasir Khan', 'Muhammad Yasir Khan', 'Develop with Yasir', 'AI engineer', 'forward deployed engineer', 'AI agent developer', 'LLM app developer', 'data engineer', 'full stack developer', 'freelance AI engineer'],
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      <section id="client-work" className="wrap section" aria-labelledby="client-work-title">
        <SectionHead
          id="client-work-title"
          label="(01) Client work"
          title={
            <>
              Projects that made it
              <br />
            </>
          }
          accent="past the demo."
          aside={
            <>
              <p className="muted">
                Recently delivered client projects, each one live in production. Personal projects are on the
                Work page.
              </p>
              <Link href="/work" className="btn btn--ghost btn--sm">
                All projects <ArrowUpRight />
              </Link>
            </>
          }
        />
        <ClientCards />
      </section>

      <section id="stories" className="wrap section section--flush" aria-labelledby="stories-title">
        <SectionHead
          id="stories-title"
          label="(02) Success stories"
          title="Results for"
          accent="teams."
        />
        <Stories />
      </section>

      <section id="what-i-do" className="dark-section" aria-labelledby="what-i-do-title">
        <div className="wrap section">
          <SectionHead
            id="what-i-do-title"
            onInk
            label="(03) What I do"
            title={
              <>
                One engineer,
                <br />
              </>
            }
            accent="the whole stack."
            aside={
              <p className="on-ink-2">
                Forward deployed means I work inside the client&rsquo;s problem: scoping, architecture, code and
                rollout come from the same person.
              </p>
            }
          />
          <ul className="what-cols">
            {services.map((s) => (
              <li key={s.id} data-reveal>
                <Link href={`/services#${s.id}`} className="what-col">
                  <span className="mono what-col__n">{s.n}</span>
                  <h3 className="h-display what-col__title">{s.title}</h3>
                  <p className="on-ink-2">{s.body}</p>
                  <p className="mono what-col__tags">{s.tags.join(' · ')}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="wrap section about-teaser" aria-labelledby="about-teaser-title">
        <div data-reveal>
          <p className="label">(04) About</p>
          <h2 id="about-teaser-title" className="h-display about-teaser__title">
            {homeAbout.statement[0]}
            <em className="accent-serif">{homeAbout.statement[1]}</em>
          </h2>
          <p className="muted about-teaser__body">{homeAbout.body}</p>
          <Link href="/about" className="btn btn--ghost btn--sm">
            More about me <ArrowUpRight />
          </Link>
        </div>
        <ul className="stat-grid">
          {homeAbout.stats.map((s) => (
            <li key={s.value} className={`stat card--lift tone-${s.tone}`} data-reveal>
              <p className="h-display stat__value">{s.value}</p>
              <p className="stat__label">{s.label}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="testimonials" className="wrap section section--flush" aria-labelledby="reviews-title">
        <SectionHead id="reviews-title" label="(05) Testimonials" title="What people" accent="say." />
        <Reviews />
      </section>

      <section className="wrap section-tight" aria-labelledby="home-cta-title">
        <div className="big-cta" data-reveal>
          <p className="label label--on-ink">(06) Contact</p>
          <h2 id="home-cta-title" className="h-display big-cta__title">
            Got a system that
            <br />
            needs <em className="accent-serif accent-serif--blue">shipping?</em>
          </h2>
          <p className="on-ink-2 big-cta__body">
            Tell me what&rsquo;s broken or missing. I&rsquo;ll come back with a plan, a timeline and a first build.
          </p>
          <Link href="/contact" className="btn btn--blue">
            Start a project <ArrowUpRight />
          </Link>
        </div>
      </section>
    </>
  )
}
