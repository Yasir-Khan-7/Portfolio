import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { articles, proof } from '../data/services'
import { delivered } from '../data/site'
import { projectCount } from '../data/derived'
import { HashLink } from './HashLink'
import { Bay, BayHead, Frame, Label, Pane } from './Glaze'
import { Reveal } from './Reveal'

const bay = articles[4]

/**
 * Already delivered.
 *
 * Every fact here is read from `delivered` in src/data/site.ts, which is where
 * the details Yasir supplied live. A services page is exactly where the
 * temptation to invent a metric sits, so this bay has no strings of its own to
 * invent one with.
 *
 * The captures sit inside panes and run full-bleed to the bars, the way the
 * reference wall glazes a view: the screenshot IS the glass. They keep
 * `object-contain` — these are real interfaces, and cropping removes the nav
 * and headline that make them evidence rather than decoration.
 */
export function ServiceProof() {
  return (
    <Bay id={bay.id}>
      <BayHead title={bay.title} meta="Live · verifiable" lede={proof.lede} />

      {delivered.items.map((item, i) => (
        <Reveal key={item.id} className="col-span-full" delay={i === 0 ? 0 : 40}>
          <Frame
            className={`grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] ${
              i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <Pane tone="clear" as="article" className="flex flex-col p-5 md:p-7">
              <h3 className="g-sub text-[clamp(1.25rem,2.6vw,1.875rem)]">{item.client}</h3>
              <Label className="mt-3 text-glass-ink-3">{item.scope}</Label>
              <p className="g-body mt-4 flex-1 text-[0.9375rem]">{item.description}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div>
                  <Label className="text-glass-ink-3">Region</Label>
                  <p className="mt-1 text-[0.875rem] text-glass-ink">{item.region}</p>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="g-btn g-btn-primary ml-auto"
                >
                  {item.linkLabel}
                  <ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" />
                </a>
              </div>
            </Pane>

            <Pane tone="seeded" as="figure" className="flex items-center p-4 md:p-6">
              <img
                src={item.images[0]}
                alt={`${item.client}: delivered client system`}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-contain"
              />
            </Pane>
          </Frame>
        </Reveal>
      ))}

      <Reveal className="col-span-full" delay={60}>
        <Frame className="grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_auto]">
          <Pane tone="clear" className="flex items-center p-5 md:px-6">
            <p className="g-body text-[0.9375rem]">
              Beyond client systems, {projectCount} selected builds are live and clickable, covering
              agentic AI, developer tooling, data engineering and AI-assisted design-to-code.
            </p>
          </Pane>
          <Link to="/projects" className="g-btn g-btn-secondary">
            The project archive
            <ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" />
          </Link>
          <HashLink nodeId="delivered" className="g-btn g-btn-secondary">
            Client systems
            <ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" />
          </HashLink>
        </Frame>
      </Reveal>
    </Bay>
  )
}
