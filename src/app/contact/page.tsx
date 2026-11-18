import { ContactForm } from '@/components/contact/ContactForm'
import { brief, links } from '@/content/site'
import { pageMeta } from '@/lib/site'

export const metadata = pageMeta({
  title: 'Contact',
  description: "Tell me what you need built — an AI agent, a data pipeline, a web or mobile app — and I'll come back with a plan, a timeline and a first build.",
  path: '/contact',
})

export default function ContactPage() {
  return (
    <section className="wrap page-hero contact" aria-labelledby="contact-title">
      <div>
        <p className="label rise">(Start a project)</p>
        <h1 id="contact-title" className="h-display h-xl rise" style={{ ['--i' as string]: 1 }}>
          What do you
          <br />
          <em className="accent-serif">need built?</em>
        </h1>
        <p className="lede rise" style={{ ['--i' as string]: 2 }}>
          {brief.intro}
        </p>
        <dl className="contact__list rise" style={{ ['--i' as string]: 3 }}>
          <div>
            <dt className="mono">Email</dt>
            <dd>
              <a href={`mailto:${links.email}`}>{links.email}</a>
            </dd>
          </div>
          <div>
            <dt className="mono">LinkedIn</dt>
            <dd>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                {links.linkedinLabel} <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </dd>
          </div>
          <div>
            <dt className="mono">Working with</dt>
            <dd>UK · Netherlands · Belgium</dd>
          </div>
        </dl>
      </div>
      <div className="rise" style={{ ['--i' as string]: 2 }}>
        <ContactForm />
      </div>
    </section>
  )
}
