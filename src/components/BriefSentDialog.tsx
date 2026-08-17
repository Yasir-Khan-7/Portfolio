import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, X } from 'lucide-react'
import { pipeline } from '../data/services'
import { links } from '../data/site'
import { Frame, Pane } from './Glaze'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Confirmation for a sent brief.
 *
 * Rendered through a portal to `document.body`. Every bay on this page sits
 * inside the wall's own stacking context and the masthead is `z-50`, so a
 * `fixed` overlay rendered in place would resolve *within* its bay and paint
 * underneath the header. Portalling is not a preference here, it is the only
 * thing that puts the dialog in front of the page.
 *
 * Only the success path gets a dialog. A failure stays inline next to the
 * submit button, because the visitor's next move after an error is to fix
 * something in the form, and a modal would cover the thing they need.
 *
 * It is a real dialog, not a styled div: labelled, modal, focus moved in on
 * open, Tab wrapped inside it, Escape to close, page scroll locked, and focus
 * returned to whatever opened it. It confirms rather than congratulates, and it
 * names the next step so the visitor knows what happens now.
 */
export function BriefSentDialog({
  open,
  onClose,
  jobName,
  returnFocusTo,
}: {
  open: boolean
  onClose: () => void
  jobName?: string
  /**
   * Where focus goes when the dialog closes. Needed because the element that
   * opened this cannot be recovered: submitting disables the submit button
   * while the request is in flight, and a browser drops focus to `body` the
   * moment the focused control becomes disabled. By the time the dialog mounts
   * there is nothing meaningful left to capture, so the caller names the target.
   */
  returnFocusTo?: () => HTMLElement | null | undefined
}) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const restoreRef = useRef<HTMLElement | null>(null)

  // The close handler is read through a ref so the effect below depends on
  // `open` alone. Callers pass an inline arrow, whose identity changes on every
  // render; with `onClose` in the dependency list the effect tore down and
  // re-ran continuously, which re-captured the "element to restore" as the
  // dialog's own close button and lost the control that actually opened it.
  const onCloseRef = useRef(onClose)
  const returnFocusRef = useRef(returnFocusTo)
  useEffect(() => {
    onCloseRef.current = onClose
    returnFocusRef.current = returnFocusTo
  }, [onClose, returnFocusTo])

  useEffect(() => {
    if (!open) return

    const active = document.activeElement as HTMLElement | null
    restoreRef.current = active && active !== document.body ? active : null
    closeRef.current?.focus()

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onCloseRef.current()
        return
      }
      if (e.key !== 'Tab') return

      const nodes = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)
      if (!nodes?.length) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]

      // Wrap at both ends, so focus can never escape into the page behind.
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      const target =
        restoreRef.current?.isConnected ? restoreRef.current : returnFocusRef.current?.()
      target?.focus?.()
    }
  }, [open])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-70 flex items-end justify-center overflow-y-auto p-0 sm:items-center sm:p-6"
      role="presentation"
    >
      {/* The steel behind the glass. Clicking it dismisses, and it is inert to
          assistive tech — the dialog below carries the semantics. */}
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 h-full w-full cursor-default bg-bar/85 backdrop-blur-[2px] motion-safe:animate-[glaze-veil_0.3s_var(--ease-run)_both]"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="brief-sent-title"
        aria-describedby="brief-sent-body"
        className="relative w-full max-w-[640px] bg-bar p-[var(--bar)] motion-safe:animate-[glaze-lift_0.4s_var(--ease-run)_both]"
        style={{ ['--bar' as string]: '4px' }}
      >
        <Frame className="grid-cols-[auto_minmax(0,1fr)_auto]">
          <Pane tone="cobalt" className="flex items-center justify-center px-5">
            <Check size={26} strokeWidth={3} aria-hidden="true" />
          </Pane>
          <Pane tone="clear" className="flex items-center px-5 py-5">
            <h2 id="brief-sent-title" className="g-sub text-[clamp(1.25rem,3vw,1.75rem)]">
              Brief received
            </h2>
          </Pane>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="g-clear flex items-center justify-center px-4 text-glass-ink transition-colors hover:bg-bar hover:text-glass"
          >
            <X size={18} strokeWidth={2.5} aria-hidden="true" />
          </button>

          <Pane tone="clear" className="col-span-full px-5 py-5">
            <p id="brief-sent-body" className="g-body text-[0.9375rem]">
              It is with me now. You will get a reply saying whether I am the right person for it,
              including if I am not. If it is easier to add anything, just reply to that email.
            </p>
          </Pane>

          <Pane tone="seeded" className="col-span-full px-5 py-5">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="g-label text-glass-ink-3">You asked about</dt>
                <dd className="mt-1.5 text-[0.9375rem] text-glass-ink">
                  {jobName ?? 'Not decided yet'}
                </dd>
              </div>
              <div>
                <dt className="g-label text-glass-ink-3">Next step</dt>
                <dd className="mt-1.5 text-[0.9375rem] text-glass-ink">
                  {pipeline.stages[0].output}
                </dd>
              </div>
            </dl>
          </Pane>

          <div
            className="col-span-full grid grid-cols-1 sm:grid-cols-[auto_auto_minmax(0,1fr)]"
            style={{ gap: 'var(--bar)' }}
          >
            <button type="button" onClick={onClose} className="g-btn g-btn-primary">
              Close
            </button>
            <Link to="/projects" className="g-btn g-btn-secondary">
              See the work
              <ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Pane tone="amber" className="min-h-3" />
          </div>
        </Frame>

        {/* A direct route out, for anyone who would rather not wait on email. */}
        <Pane tone="clear" className="mt-[var(--bar)] px-5 py-3">
          <p className="text-[0.8125rem] leading-relaxed text-glass-ink-3">
            Something urgent?{' '}
            <a
              href={links.email}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cobalt underline underline-offset-4 hover:text-cobalt-deep"
            >
              {links.emailAddress}
            </a>
          </p>
        </Pane>
      </div>
    </div>,
    document.body,
  )
}
