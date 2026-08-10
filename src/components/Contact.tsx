import { useState, type FormEvent } from 'react'
import { AlertTriangle, ArrowUpRight, Check, Loader2, Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { contact, links } from '../data/site'
import type { RunState } from '../hooks/useRun'
import { NodeHeading, NodeSection } from './NodeHeading'
import { Reveal } from './Reveal'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fields = [
  { name: 'name', label: 'Your Name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Your Email', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' },
] as const

const channels = [
  { href: links.email, label: 'Email', value: links.emailAddress, Icon: Mail },
  { href: links.linkedin, label: 'LinkedIn', value: '/in/yasir-khan7134', Icon: Linkedin },
  { href: links.github, label: 'GitHub', value: '/Yasir-Khan-7', Icon: Github },
]

export function Contact({ state }: { state: RunState }) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    setError(null)

    try {
      const res = await fetch(links.formspree, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error ?? 'Formspree rejected the message')
      }
      form.reset()
      setStatus('sent')
      window.setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      setStatus('error')
      setError(
        err instanceof Error && err.message
          ? `${err.message}. You can also email ${links.emailAddress} directly.`
          : `Something went wrong sending your message. You can email ${links.emailAddress} directly instead.`,
      )
    }
  }

  const sending = status === 'sending'

  return (
    <NodeSection id="contact">
      <NodeHeading taskId="t7.contact" state={state} meta="terminal node · output">
        {contact.heading}
      </NodeHeading>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12">
        <Reveal className="min-w-0">
          <p className="t-section text-[clamp(1.375rem,3vw,2rem)] text-ink">{contact.subheading}</p>
          <p className="t-body mt-5">{contact.text}</p>

          <ul className="mt-9">
            {channels.map(({ href, label, value, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 border-b border-rule py-3.5 transition-colors hover:border-ink"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-rule bg-panel text-ink-2 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-canvas">
                    <Icon size={15} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block t-mono-label text-ink-3">{label}</span>
                    <span className="block truncate text-[0.9375rem] text-ink">{value}</span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="shrink-0 text-ink-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80} className="min-w-0">
          <form onSubmit={onSubmit} className="node p-5 md:p-7" noValidate={false}>
            <div className="mb-6 flex items-center justify-between border-b border-rule pb-2.5">
              <span className="t-mono-label text-ink-2">send message</span>
              <span className="flex items-center gap-1.5 t-mono text-ink-3">
                <span
                  className={`h-1.5 w-1.5 ${
                    status === 'sent'
                      ? 'bg-success'
                      : status === 'error'
                        ? 'bg-signal'
                        : sending
                          ? 'run-pulse rounded-full bg-signal'
                          : 'border border-queued'
                  }`}
                  aria-hidden="true"
                />
                {status === 'sent'
                  ? 'delivered'
                  : status === 'error'
                    ? 'failed'
                    : sending
                      ? 'sending'
                      : 'ready'}
              </span>
            </div>

            <div className="space-y-4">
              {fields.map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="mb-1.5 block t-mono-label text-ink-2">
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    required
                    disabled={sending}
                    className="w-full border border-rule bg-panel-sunk px-3 py-2.5 text-[0.9375rem] text-ink transition-colors placeholder:text-ink-3 hover:border-queued focus:border-ink focus:bg-panel focus:outline-none disabled:opacity-60"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="mb-1.5 block t-mono-label text-ink-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={sending}
                  className="w-full resize-y border border-rule bg-panel-sunk px-3 py-2.5 text-[0.9375rem] leading-relaxed text-ink transition-colors placeholder:text-ink-3 hover:border-queued focus:border-ink focus:bg-panel focus:outline-none disabled:opacity-60"
                />
              </div>
            </div>

            <button type="submit" disabled={sending} className="btn-signal mt-6 w-full justify-center">
              {sending ? (
                <>
                  <Loader2 size={14} strokeWidth={2.5} aria-hidden="true" className="animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  Send Message
                  <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" />
                </>
              )}
            </button>

            <div aria-live="polite" className="mt-4 empty:mt-0">
              {status === 'sent' && (
                <p className="flex items-start gap-2.5 border border-success bg-success-wash px-3 py-2.5 text-[0.875rem] text-ink">
                  <Check size={15} strokeWidth={2.5} aria-hidden="true" className="mt-0.5 shrink-0 text-success" />
                  Message delivered. I'll get back to you shortly.
                </p>
              )}
              {status === 'error' && error && (
                <p className="flex items-start gap-2.5 border border-signal bg-signal-wash px-3 py-2.5 text-[0.875rem] text-ink">
                  <AlertTriangle
                    size={15}
                    strokeWidth={2.25}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-signal-deep"
                  />
                  {error}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </NodeSection>
  )
}
