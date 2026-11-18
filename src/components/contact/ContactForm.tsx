'use client'

import { useState, type FormEvent } from 'react'
import { brief, links } from '@/content/site'
import { ArrowUpRight } from '@/components/site/icons'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const lower = (s: string) => s.replace(/^(?!AI|LLM)\S+/, (w) => w.toLowerCase())
const list = (xs: string[]) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs.at(-1)}`)

function draft(needs: string[], timeline: string | null) {
  let msg = 'Hi Yasir,'
  if (needs.length) msg += ` I need help with ${list(needs.map(lower))}.`
  if (timeline) msg += ` Timeline: ${timeline.toLowerCase()}.`
  return msg
}

/** Chips draft the message; the message stays editable. Submits to the existing Formspree form. */
export function ContactForm() {
  const [needs, setNeeds] = useState<string[]>([])
  const [timeline, setTimeline] = useState<string | null>(null)
  const [message, setMessage] = useState(draft([], null))
  const [edited, setEdited] = useState(false)
  const [status, setStatus] = useState<Status>('idle')

  const update = (n: string[], t: string | null) => {
    setNeeds(n)
    setTimeline(t)
    if (!edited) setMessage(draft(n, t))
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.set('needs', needs.join(', '))
    data.set('timeline', timeline ?? '')
    data.set('_subject', `New project enquiry from ${data.get('name') || 'the portfolio'}`)
    setStatus('sending')
    try {
      const res = await fetch(links.formspree, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      form.reset()
      setNeeds([])
      setTimeline(null)
      setEdited(false)
      setMessage(draft([], null))
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="brief card" onSubmit={onSubmit}>
      <div className="brief__head">
        <h2 className="h-display brief__title">Your message</h2>
        <span className="mono muted">to: Yasir</span>
      </div>

      <fieldset className="brief__set">
        <legend>I need help with</legend>
        <div className="chips">
          {brief.needs.map((n) => {
            const on = needs.includes(n)
            return (
              <button key={n} type="button" className="chip" aria-pressed={on} onClick={() => update(on ? needs.filter((x) => x !== n) : [...needs, n], timeline)}>
                {n}
              </button>
            )
          })}
        </div>
      </fieldset>

      <fieldset className="brief__set">
        <legend>Timeline</legend>
        <div className="chips">
          {brief.timelines.map((t) => (
            <button key={t} type="button" className="chip" aria-pressed={timeline === t} onClick={() => update(needs, timeline === t ? null : t)}>
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="brief__row">
        <div className="field">
          <label htmlFor="cf-name" className="mono">
            Name
          </label>
          <input id="cf-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </div>
        <div className="field">
          <label htmlFor="cf-email" className="mono">
            Email
          </label>
          <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </div>
      </div>

      <div className="field">
        <div className="field__top">
          <label htmlFor="cf-message" className="mono">
            Drafted message
          </label>
          {edited && (
            <button
              type="button"
              className="link-btn mono"
              onClick={() => {
                setEdited(false)
                setMessage(draft(needs, timeline))
              }}
            >
              Redraft from choices
            </button>
          )}
        </div>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            setEdited(true)
          }}
        />
      </div>

      <div className="brief__foot">
        <p className="brief__status" role="status" aria-live="polite">
          {status === 'sent' && 'Thanks, your message is on its way. I’ll reply by email.'}
          {status === 'error' && (
            <>
              That didn’t send. Please email <a href={`mailto:${links.email}`}>{links.email}</a> instead.
            </>
          )}
        </p>
        <button type="submit" className="btn btn--ink" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'} <ArrowUpRight />
        </button>
      </div>
    </form>
  )
}
