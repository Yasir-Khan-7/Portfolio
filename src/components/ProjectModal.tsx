import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Github } from './BrandIcons'
import type { Project } from '../data/projects'

/**
 * The one modal on the surface, and it earns it: a full-size screenshot reader
 * needs protected focus and a dark surround. Focus is trapped, Escape closes,
 * arrows page, and focus returns to whatever opened it.
 */
export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [i, setI] = useState(0)
  const panelRef = useRef<HTMLDivElement>(null)
  const opener = useRef<Element | null>(null)

  const count = project.images.length
  const next = useCallback(() => setI((p) => (p + 1) % count), [count])
  const prev = useCallback(() => setI((p) => (p === 0 ? count - 1 : p - 1)), [count])

  useEffect(() => {
    opener.current = document.activeElement
    const scrollBarGap = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollBarGap}px`
    panelRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      ;(opener.current as HTMLElement | null)?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose()
      if (e.key === 'ArrowRight' && count > 1) return next()
      if (e.key === 'ArrowLeft' && count > 1) return prev()
      if (e.key !== 'Tab') return

      // Focus trap
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [count, next, prev, onClose])

  // Portalled to <body>: every section is `relative z-10`, so a fixed overlay
  // rendered inside one resolves within that stacking context and paints under
  // the z-50 run header instead of over it.
  return createPortal(
    <div
      className="fixed inset-0 z-70 flex items-start justify-center overflow-y-auto bg-ink/70 p-3 backdrop-blur-sm md:items-center md:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
        className="node node-live my-auto w-full max-w-[1080px] outline-none"
      >
        <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-ink bg-panel px-4 py-3">
          <span className="t-mono text-ink-3">p{String(project.id).padStart(2, '0')}</span>
          <h2 className="min-w-0 flex-1 truncate text-[1.0625rem] font-semibold text-ink">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-rule bg-panel text-ink transition-colors hover:border-ink hover:bg-ink hover:text-canvas"
          >
            <X size={16} strokeWidth={2} aria-hidden="true" />
          </button>
        </header>

        <div className="relative border-b border-rule bg-panel-sunk">
          <img
            key={project.images[i]}
            src={project.images[i]}
            alt={`${project.title} screenshot ${i + 1} of ${count}`}
            className="max-h-[62vh] w-full animate-[hero-in_0.4s_var(--ease-run)_both] object-contain"
            decoding="async"
          />

          {count > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous screenshot"
                className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-ink bg-canvas/92 text-ink backdrop-blur-sm transition-colors hover:bg-signal"
              >
                <ChevronLeft size={18} strokeWidth={2} aria-hidden="true" />
              </button>
              <button
                onClick={next}
                aria-label="Next screenshot"
                className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-ink bg-canvas/92 text-ink backdrop-blur-sm transition-colors hover:bg-signal"
              >
                <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 border border-ink bg-canvas/92 px-2 py-1.5 backdrop-blur-sm">
                {project.images.map((_, n) => (
                  <button
                    key={n}
                    onClick={() => setI(n)}
                    aria-label={`Screenshot ${n + 1}`}
                    aria-current={n === i}
                    className={`h-1.5 transition-all duration-300 ${
                      n === i ? 'w-5 bg-signal' : 'w-1.5 bg-queued hover:bg-ink'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-5 md:p-6">
          <p className="text-[0.9375rem] leading-relaxed text-ink-2">{project.fullDescription}</p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-rule pt-5">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-signal"
            >
              Open Live Site
              <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" />
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Github size={14} strokeWidth={2} aria-hidden="true" />
                Source
              </a>
            )}
            {project.toolLogos && project.toolLogos.length > 0 && (
              <div className="ml-auto flex items-center gap-2">
                <span className="text-[0.75rem] text-ink-3">Built with</span>
                {project.toolLogos.map((t) => (
                  <img
                    key={t.name}
                    src={t.logo}
                    alt={t.name}
                    title={t.name}
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] object-contain"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
