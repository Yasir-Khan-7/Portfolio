import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import {
  documentMeta,
  OG_IMAGE,
  SERVICES_URL,
  servicesIntro,
  servicesSeo,
} from '../data/services'
import { servicesJsonLd } from '../data/structuredData'
import { Seo } from '../components/Seo'
import { Bay, Elevation, GlazeHeader, Label, Pane, Wall } from '../components/Glaze'
import { ServiceBrief } from '../components/ServiceBrief'
import { ServiceEngagement } from '../components/ServiceEngagement'
import { ServiceFaq } from '../components/ServiceFaq'
import { ServiceJobs } from '../components/ServiceJobs'
import { ServicePipeline } from '../components/ServicePipeline'
import { ServiceProof } from '../components/ServiceProof'
import { ServiceTriggers } from '../components/ServiceTriggers'
import { usePrefersReducedMotion } from '../hooks/useRun'

/**
 * /services — the glazed wall.
 *
 * A steel-framed glass partition from a glazier's workshop, chosen as this
 * surface's own visual world. The portfolio is nodes on a dot-grid canvas;
 * this is a wall of panes held in matte black glazing bars, where clear and
 * seeded glass are the calm ground and cobalt, amber and oxblood are spent only
 * on what matters now.
 *
 * What carries over from the portfolio is one thing: Archivo. The run view
 * drives its width axis out to 118 for signage; this drives it in to 62 for a
 * tall condensed grotesque. One variable font, two voices nobody would guess
 * were the same family, and no second webfont to download.
 *
 * The rule the whole build obeys is the world's own: **one pane, one
 * statement.** It is what keeps a dense offer legible — a buyer can read any
 * single pane without reading the ones around it.
 *
 * Nothing on this surface has a shadow. Depth here is glass and steel.
 */
export default function Services() {
  const reduced = usePrefersReducedMotion()
  const [jobId, setJobId] = useState('')
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  /** "Start here" on any offer: carry it to the brief and put the visitor in it. */
  const onQueue = useCallback(
    (id: string) => {
      setJobId(id)
      const el = document.getElementById('brief')
      if (!el) return
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 64,
        behavior: reduced ? 'auto' : 'smooth',
      })
      window.setTimeout(
        () =>
          formRef.current
            ?.querySelector<HTMLInputElement>('#brief-name')
            ?.focus({ preventScroll: true }),
        reduced ? 0 : 600,
      )
    },
    [reduced],
  )

  return (
    <>
      <Seo
        title={servicesSeo.title}
        description={servicesSeo.description}
        canonical={SERVICES_URL}
        image={OG_IMAGE}
        imageAlt="Muhammad Yasir Khan, freelance full-stack, mobile and web development"
        jsonLd={servicesJsonLd()}
      />

      {/* The bar thickness, declared once. Every mullion on the page is this
          value, so the wall reads as one piece of steelwork rather than as
          sections that happen to sit near each other. */}
      <div className="bg-bar [--bar:3px] md:[--bar:4px]">
        <GlazeHeader />

        <main id="wall" className="pt-[calc(3.25rem+var(--bar)*3)]">
          {/* The opening elevation. The wall's largest pane carries the offer,
              a cobalt light stands beside it, and the actions sit in the bars
              directly beneath — no hero shell, no centred column. */}
          <Wall as="section" className="lg:grid-cols-[minmax(0,2.15fr)_minmax(0,1fr)]">
            <Pane tone="clear" className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="g-label flex items-center gap-1.5 text-glass-ink-3">
                  <li>
                    <Link to="/" className="hover:text-glass-ink hover:underline">
                      Home
                    </Link>
                  </li>
                  <ChevronRight size={11} strokeWidth={2.5} aria-hidden="true" />
                  <li aria-current="page" className="text-glass-ink">
                    Services
                  </li>
                </ol>
              </nav>

              <h1 className="g-display text-[clamp(2.5rem,7.4vw,5.75rem)]">
                {servicesIntro.heading}
              </h1>

              <p className="g-body mt-7 text-[1.0625rem]">{servicesIntro.lede}</p>
            </Pane>

            {/* The colour note: one lit pane holding the standing facts. */}
            <div className="grid" style={{ gap: 'var(--bar)' }}>
              <Pane tone="cobalt" className="flex flex-col justify-between p-6 md:p-8">
                <Label className="text-white/70">Status</Label>
                <div>
                  <p className="g-sub mt-4 text-[clamp(1.25rem,2.6vw,1.75rem)] text-white">
                    {documentMeta.status}
                  </p>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/85">
                    {servicesIntro.availability}
                  </p>
                </div>
              </Pane>

              <Pane tone="seeded" className="p-6 md:p-8">
                <dl className="space-y-5">
                  <div>
                    <dt className="g-label text-glass-ink-3">Built by</dt>
                    <dd className="mt-1.5 text-[0.9375rem] text-glass-ink">
                      {documentMeta.preparedBy}
                    </dd>
                  </div>
                  <div>
                    <dt className="g-label text-glass-ink-3">For</dt>
                    <dd className="mt-1.5 text-[0.9375rem] text-glass-ink">
                      {documentMeta.preparedFor}
                    </dd>
                  </div>
                  <div>
                    <dt className="g-label text-glass-ink-3">Fees</dt>
                    <dd className="mt-1.5 text-[0.9375rem] text-glass-ink">
                      Quoted against written scope
                    </dd>
                  </div>
                </dl>
              </Pane>
            </div>

            {/* Actions sit in the wall, full-height panes rather than buttons
                floating on a ground. */}
            <div
              className="col-span-full grid grid-cols-1 sm:grid-cols-[auto_auto_minmax(0,1fr)]"
              style={{ gap: 'var(--bar)' }}
            >
              <button type="button" onClick={() => onQueue('')} className="g-btn g-btn-primary">
                Send a brief
                <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
              </button>
              <a href="#jobs" className="g-btn g-btn-secondary">
                See what I build
              </a>
              <Pane tone="amber" className="min-h-3" />
            </div>
          </Wall>

          <Elevation />

          <ServiceJobs onQueue={onQueue} />
          <ServiceTriggers />
          <ServicePipeline />
          <ServiceEngagement />
          <ServiceProof />
          <ServiceFaq />
          <ServiceBrief jobId={jobId} setJobId={setJobId} formRef={formRef} />

          {/* The wall's base course. */}
          <Bay id="foot">
            <Pane
              tone="clear"
              className="col-span-full flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-8"
            >
              <div className="min-w-0">
                <p className="g-sub text-[clamp(1.125rem,2.2vw,1.5rem)]">
                  {documentMeta.preparedBy}
                </p>
                <p className="mt-2 text-[0.875rem] text-glass-ink-3">
                  Freelance full-stack, mobile and web development · Remote across the UK, the
                  Netherlands and Belgium
                </p>
              </div>
              <Link to="/" className="g-btn g-btn-secondary shrink-0">
                Back to portfolio
              </Link>
            </Pane>
          </Bay>
        </main>
      </div>
    </>
  )
}
