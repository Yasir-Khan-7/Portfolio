import { useState, type FormEvent, type ReactNode, type RefObject } from 'react'
import { AlertTriangle, ArrowRight, ChevronDown, Loader2 } from 'lucide-react'
import { articles, brief, engagement, jobs, pipeline, triggers } from '../data/services'
import { links } from '../data/site'
import { BriefSentDialog } from './BriefSentDialog'
import { Bay, BayHead, Frame, Label, Pane } from './Glaze'
import { Reveal } from './Reveal'

const bay = articles[6]

type Status = 'idle' | 'sending' | 'sent' | 'error'

function Field({ htmlFor, label, children }: { htmlFor: string; label: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="g-label mb-2 block text-glass-ink-3">
        {label}
      </label>
      {children}
    </div>
  )
}

/** Native select, dressed as a pane of clear glass. Native so it stays operable. */
function Select({
  id,
  name,
  value,
  onChange,
  disabled,
  children,
}: {
  id: string
  name: string
  value: string
  onChange: (v: string) => void
  disabled: boolean
  children: ReactNode
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="g-field cursor-pointer appearance-none pr-10"
      >
        {children}
      </select>
      <ChevronDown
        size={15}
        strokeWidth={2.25}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-glass-ink-3"
      />
    </div>
  )
}

/**
 * Send a brief — the wall's lit pane.
 *
 * This is the one bay where cobalt fills a whole region rather than marking a
 * single note, because it is the one thing the page wants the visitor to do.
 * The summary pane beside the form composes from the choice made anywhere in
 * "What I build", so a visitor sees what they are asking for before they ask.
 */
export function ServiceBrief({
  jobId,
  setJobId,
  formRef,
}: {
  jobId: string
  setJobId: (id: string) => void
  formRef: RefObject<HTMLFormElement | null>
}) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const [model, setModel] = useState('')
  const [timeline, setTimeline] = useState('')
  const [trigger, setTrigger] = useState('')
  // Captured at submit time: the form is reset on success, so by the time the
  // dialog renders `job` is already gone.
  const [sentJobName, setSentJobName] = useState<string | undefined>(undefined)

  const sending = status === 'sending'
  const job = jobs.find((j) => j.id === jobId)

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
      setJobId('')
      setModel('')
      setTimeline('')
      setTrigger('')
      setSentJobName(job?.name)
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      setError(
        err instanceof Error && err.message
          ? `${err.message}. You can also email ${links.emailAddress} directly.`
          : `Something went wrong sending your brief. You can email ${links.emailAddress} directly instead.`,
      )
    }
  }

  return (
    <Bay id={bay.id}>
      <BayHead title={bay.title} meta="Start here" lede={brief.lede} tone="cobalt" />

      <Reveal className="col-span-full">
        <Frame className="grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
          <Pane tone="clear" className="p-5 md:p-7">
            <form ref={formRef} onSubmit={onSubmit}>
              {/* Formspree conveniences: a readable subject line, and a honeypot
                  real people never see and bots reliably fill in. */}
              <input
                type="hidden"
                name="_subject"
                value={job ? `New brief: ${job.name}` : 'New brief from /services'}
              />
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field htmlFor="brief-name" label="Your name">
                  <input
                    id="brief-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    disabled={sending}
                    className="g-field"
                  />
                </Field>
                <Field htmlFor="brief-email" label="Your email">
                  <input
                    id="brief-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    disabled={sending}
                    className="g-field"
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Field htmlFor="brief-org" label="Company or agency (optional)">
                    <input
                      id="brief-org"
                      name="organisation"
                      type="text"
                      autoComplete="organization"
                      disabled={sending}
                      className="g-field"
                    />
                  </Field>
                </div>

                <Field htmlFor="brief-job" label="What do you need built?">
                  <Select
                    id="brief-job"
                    name="job"
                    value={jobId}
                    onChange={setJobId}
                    disabled={sending}
                  >
                    <option value="">Not sure yet</option>
                    {jobs.map((j) => (
                      <option key={j.id} value={j.id}>
                        {j.name}
                      </option>
                    ))}
                  </Select>
                </Field>

                <Field htmlFor="brief-trigger" label="Which are you?">
                  <Select
                    id="brief-trigger"
                    name="who"
                    value={trigger}
                    onChange={setTrigger}
                    disabled={sending}
                  >
                    <option value="">Prefer not to say</option>
                    {triggers.items.map((t) => (
                      <option key={t.id} value={t.who}>
                        {t.who}
                      </option>
                    ))}
                  </Select>
                </Field>

                <Field htmlFor="brief-model" label="Engagement model">
                  <Select
                    id="brief-model"
                    name="engagement"
                    value={model}
                    onChange={setModel}
                    disabled={sending}
                  >
                    <option value="">Open to advice</option>
                    {engagement.models.map((m) => (
                      <option key={m.id} value={m.name}>
                        {m.name}
                      </option>
                    ))}
                  </Select>
                </Field>

                <Field htmlFor="brief-timeline" label="Timeline">
                  <Select
                    id="brief-timeline"
                    name="timeline"
                    value={timeline}
                    onChange={setTimeline}
                    disabled={sending}
                  >
                    <option value="">Not decided</option>
                    {brief.timelines.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </Select>
                </Field>

                <div className="sm:col-span-2">
                  <Field htmlFor="brief-message" label="What are you trying to build?">
                    <textarea
                      id="brief-message"
                      name="message"
                      rows={6}
                      required
                      disabled={sending}
                      placeholder="The problem, who it is for, and anything that already exists. Describe the problem rather than the solution if you are not sure which you need."
                      className="g-field resize-y leading-relaxed"
                    />
                  </Field>
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="g-btn g-btn-primary mt-6 w-full"
              >
                {sending ? (
                  <>
                    <Loader2
                      size={15}
                      strokeWidth={2.5}
                      aria-hidden="true"
                      className="animate-spin"
                    />
                    Sending
                  </>
                ) : (
                  <>
                    Send brief
                    <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
                  </>
                )}
              </button>

              {/* Errors stay inline: the next move after a failure is to fix
                  something in the form, and a dialog would cover it. Success
                  gets the dialog below instead. */}
              <div aria-live="polite" className="mt-4 empty:mt-0">
                {status === 'error' && error && (
                  <p className="flex items-start gap-2.5 bg-oxblood px-4 py-3 text-[0.875rem] leading-relaxed text-white">
                    <AlertTriangle
                      size={16}
                      strokeWidth={2.5}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                    />
                    {error}
                  </p>
                )}
              </div>
            </form>
          </Pane>

          {/* The summary pane. Composes from the choice made in "What I build". */}
          <Frame className="grid-rows-[auto_1fr]">
            <Pane tone="seeded" className="p-5 md:p-6">
              <Label className="text-glass-ink-3">You are asking for</Label>
              {job ? (
                <>
                  <h3 className="g-sub mt-3 text-[clamp(1.125rem,2.2vw,1.5rem)]">{job.name}</h3>
                  {job.fixedScope && (
                    <span className="g-label mt-3 inline-block bg-bar px-2 py-1 text-glass">
                      Fixed scope
                    </span>
                  )}

                  <Label className="mt-6 text-glass-ink-3">Work that will run</Label>
                  <ol className="mt-2 space-y-1.5">
                    {job.stages.map((s) => (
                      <li key={s.name} className="text-[0.875rem] text-glass-ink-2">
                        {s.name}
                      </li>
                    ))}
                  </ol>

                  <Label className="mt-6 text-glass-ink-3">Complete when</Label>
                  <p className="mt-1.5 text-[0.875rem] leading-relaxed text-glass-ink">
                    {job.exit}
                  </p>
                </>
              ) : (
                <p className="g-body mt-3 text-[0.9375rem]">
                  Pick what you need built and this fills in with the work that will run and the
                  condition it has to meet before it is finished. Leave it on{' '}
                  <span className="font-semibold text-glass-ink">not sure yet</span> and working
                  that out becomes the first step.
                </p>
              )}
            </Pane>

            <Pane tone="seeded" className="p-5 md:p-6">
              <dl className="space-y-4">
                {[
                  { label: 'Engagement', value: model || 'To be advised' },
                  { label: 'Timeline', value: timeline || 'Not decided' },
                  { label: 'First step', value: pipeline.stages[0].name },
                  { label: 'Fee', value: 'Quoted against written scope' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <dt className="g-label text-glass-ink-3">{label}</dt>
                    <dd className="mt-1 text-[0.875rem] text-glass-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </Pane>
          </Frame>
        </Frame>
      </Reveal>

      <BriefSentDialog
        open={status === 'sent'}
        jobName={sentJobName}
        onClose={() => setStatus('idle')}
        returnFocusTo={() =>
          formRef.current?.querySelector<HTMLButtonElement>('button[type="submit"]')
        }
      />
    </Bay>
  )
}
