'use client'

import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react'
import { createPortal } from 'react-dom'
import { categoryLabels, type PersonalProject } from '@/content/projects'
import { asset } from '@/lib/site'
import { ArrowUpRight } from '@/components/site/icons'

/**
 * Project details: screenshot gallery on the left, the full write-up on the
 * right. Arrows, thumbnails, ←/→, Esc and swipe all work; focus stays inside
 * while open and goes back to the card that opened it.
 */
export function ProjectModal({ project, onClose }: { project: PersonalProject; onClose: () => void }) {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const panel = useRef<HTMLDivElement>(null)
  const thumbs = useRef<HTMLDivElement>(null)
  const count = project.gallery.length

  const go = useCallback(
    (n: number, d: number) => {
      setDir(d)
      setI(((n % count) + count) % count)
    },
    [count],
  )
  const next = useCallback(() => go(i + 1, 1), [go, i])
  const prev = useCallback(() => go(i - 1, -1), [go, i])

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    const gap = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${gap}px`
    panel.current?.focus()
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      opener?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose()
      if (e.key === 'ArrowRight' && count > 1) return next()
      if (e.key === 'ArrowLeft' && count > 1) return prev()
      if (e.key !== 'Tab') return
      const f = panel.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      if (!f?.length) return
      const first = f[0]
      const last = f[f.length - 1]
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

  useEffect(() => {
    thumbs.current?.querySelector<HTMLElement>(`[data-i="${i}"]`)?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }, [i])

  const startX = useRef<number | null>(null)
  const onDown = (e: PointerEvent) => {
    startX.current = e.clientX
  }
  const onUp = (e: PointerEvent) => {
    if (startX.current === null) return
    const dx = e.clientX - startX.current
    startX.current = null
    if (Math.abs(dx) > 40 && count > 1) (dx < 0 ? next : prev)()
  }

  return createPortal(
    <div className="pm" onClick={onClose} role="presentation">
      <div
        ref={panel}
        className="pm__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pm-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pm__view">
          <div className="pm__stage" onPointerDown={onDown} onPointerUp={onUp}>
            <img
              key={i}
              src={asset(project.gallery[i])}
              alt={`${project.title}, screenshot ${i + 1} of ${count}`}
              style={{ ['--dir' as string]: dir }}
              draggable={false}
            />
            <span className="pm__count mono">
              {i + 1} / {count}
            </span>
            {count > 1 && (
              <>
                <button type="button" className="pm__nav pm__nav--prev" onClick={prev} aria-label="Previous screenshot">
                  ‹
                </button>
                <button type="button" className="pm__nav pm__nav--next" onClick={next} aria-label="Next screenshot">
                  ›
                </button>
              </>
            )}
          </div>
          {count > 1 && (
            <div className="pm__thumbs" ref={thumbs}>
              {project.gallery.map((src, n) => (
                <button key={src} type="button" data-i={n} onClick={() => go(n, n > i ? 1 : -1)} aria-label={`Screenshot ${n + 1}`} aria-current={n === i}>
                  <img src={asset(src)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="pm__info">
          <div className="pm__top">
            <span className="tag">
              {categoryLabels[project.category]}
              {project.year ? ` · ${project.year}` : ''}
            </span>
            <button type="button" className="pm__close" onClick={onClose} aria-label="Close project details">
              ×
            </button>
          </div>
          <h2 id="pm-title" className="h-display pm__title">
            {project.title}
          </h2>
          <p className="pm__desc">{project.fullDescription}</p>
          <ul className="pm__tech" aria-label="Technologies">
            {project.technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="pm__acts">
            {project.live && (
              <a className="btn btn--ink" href={project.live} target="_blank" rel="noopener noreferrer">
                Open live app <ArrowUpRight />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            {project.github && (
              <a className="btn btn--ghost" href={project.github} target="_blank" rel="noopener noreferrer">
                View source <ArrowUpRight />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
