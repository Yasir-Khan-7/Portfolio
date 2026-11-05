import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from 'react'
import { createPortal } from 'react-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Images, X } from 'lucide-react'
import { Github } from '../components/BrandIcons'
import { projects, type Project } from '../data/projects'
import { categoryLabel, projectFilters } from '../data/home'
import { Rv, SectionHead } from './ui'

/**
 * One project. The whole card opens the screenshot gallery; the Live and
 * GitHub buttons sit above that hit area and go straight out. GitHub only
 * shows where the repository is public.
 */
export function ProjectCard({
  project,
  onOpen,
  eager = false,
}: {
  project: Project
  onOpen: (p: Project) => void
  /** Load the cover straight away for cards in the first view. */
  eager?: boolean
}) {
  const count = project.images.length
  return (
    <article className="tile pc">
      <div className="im">
        <img src={project.image} alt="" loading={eager ? 'eager' : 'lazy'} decoding="async" />
        {count > 1 && (
          <span className="shots" aria-hidden="true">
            <Images size={13} strokeWidth={2} />
            {count}
          </span>
        )}
      </div>
      <div className="bd">
        <span className="k">
          {categoryLabel(project)}
          {project.year ? ` · ${project.year}` : ''}
        </span>
        <h3>
          <button
            type="button"
            className="open"
            onClick={() => onOpen(project)}
            aria-label={`${project.title}: view ${count} screenshot${count === 1 ? '' : 's'}`}
          >
            {project.title}
          </button>
        </h3>
        <p>{project.shortDescription}</p>
        <div className="acts">
          <a className="live" href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" />
          </a>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github size={14} /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

/**
 * Screenshot gallery. Arrows, thumbnails, keyboard (←/→/Esc) and swipe all
 * move between images. Focus is trapped while open and returns to the card
 * that opened it.
 */
export function ProjectGallery({ project, onClose }: { project: Project; onClose: () => void }) {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const panel = useRef<HTMLDivElement>(null)
  const thumbs = useRef<HTMLDivElement>(null)
  const count = project.images.length

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
      if (!f || !f.length) return
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

  // keep the active thumbnail in view
  useEffect(() => {
    thumbs.current
      ?.querySelector<HTMLElement>(`[data-i="${i}"]`)
      ?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [i])

  // swipe
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
    <div className="wb gal" onClick={onClose} role="presentation">
      <div
        ref={panel}
        className="gal-panel"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} screenshots`}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="gal-view">
          <div className="gal-stage" onPointerDown={onDown} onPointerUp={onUp}>
            <img
              key={i}
              src={project.images[i]}
              alt={`${project.title}, screenshot ${i + 1} of ${count}`}
              style={{ ['--dir' as string]: dir }}
              draggable={false}
            />
            <span className="gal-count">
              {i + 1} / {count}
            </span>
            {count > 1 && (
              <>
                <button type="button" className="gal-nav prev" onClick={prev} aria-label="Previous screenshot">
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button type="button" className="gal-nav next" onClick={next} aria-label="Next screenshot">
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </>
            )}
          </div>
          {count > 1 && (
            <div className="thumbs" ref={thumbs}>
              {project.images.map((src, n) => (
                <button
                  key={src}
                  type="button"
                  data-i={n}
                  onClick={() => go(n, n > i ? 1 : -1)}
                  aria-label={`Screenshot ${n + 1}`}
                  aria-current={n === i}
                >
                  <img src={src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="gal-info">
          <div className="gal-top">
            <span className="chip">
              <i aria-hidden="true" />
              {categoryLabel(project)}
              {project.year ? ` · ${project.year}` : ''}
            </span>
            <button type="button" className="icon-btn" onClick={onClose} aria-label="Close gallery">
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <h2>{project.title}</h2>
          <p>{project.fullDescription}</p>
          <div className="gal-tags">
            {project.technologies.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {project.toolLogos && project.toolLogos.length > 0 && (
            <div className="gal-tools">
              Built with
              {project.toolLogos.map((t) => (
                <img key={t.name} src={t.logo} alt={t.name} title={t.name} />
              ))}
            </div>
          )}
          <div className="gal-acts">
            <a className="btn btn-dark" href={project.liveLink} target="_blank" rel="noopener noreferrer">
              Open live app <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            {project.githubLink && (
              <a className="btn btn-tile" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github size={16} /> View source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

function useFilter() {
  const [filter, setFilter] = useState<string>('all')
  const list = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )
  const bar = (
    <div className="flt" role="group" aria-label="Filter projects">
      {projectFilters.map((f) => (
        <button
          key={f.key}
          type="button"
          aria-pressed={filter === f.key}
          onClick={() => setFilter(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
  return { filter, list, bar }
}

/** Home: a scrollable row of every project. */
export function ProjectsCarousel() {
  const { filter, list, bar } = useFilter()
  const [open, setOpen] = useState<Project | null>(null)
  const car = useRef<HTMLDivElement>(null)
  const [thumb, setThumb] = useState({ w: 30, x: 0 })

  const measure = useCallback(() => {
    const el = car.current
    if (!el) return
    const ratio = Math.min(1, el.clientWidth / el.scrollWidth)
    const max = el.scrollWidth - el.clientWidth
    const p = max > 0 ? el.scrollLeft / max : 0
    setThumb({ w: ratio * 100, x: p * (1 / ratio - 1) * 100 })
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  useEffect(() => {
    if (car.current) car.current.scrollLeft = 0
    measure()
  }, [filter, measure])

  const step = (d: number) => {
    const el = car.current
    const card = el?.querySelector<HTMLElement>('.pc')
    el?.scrollBy({ left: d * ((card?.offsetWidth ?? 360) + 14), behavior: 'smooth' })
  }

  return (
    <section id="projects" className="flush-top">
      <div className="wrap">
        <SectionHead chip="projects" title="Things I've built." aside={bar} />
        <Rv>
          <div className="car" ref={car} onScroll={measure}>
            {list.map((p, n) => (
              <ProjectCard key={`${filter}-${p.id}`} project={p} onOpen={setOpen} eager={n < 3} />
            ))}
          </div>
          <div className="carctl">
            <div className="track" aria-hidden="true">
              <i style={{ width: `${thumb.w}%`, transform: `translateX(${thumb.x}%)` }} />
            </div>
            <a className="btn btn-tile btn-sm" href={`${import.meta.env.BASE_URL}projects`}>
              All projects
            </a>
            <button type="button" className="icon-btn" onClick={() => step(-1)} aria-label="Scroll projects left">
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button type="button" className="icon-btn" onClick={() => step(1)} aria-label="Scroll projects right">
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </Rv>
      </div>
      {open && <ProjectGallery project={open} onClose={() => setOpen(null)} />}
    </section>
  )
}

/** /projects: the full grid. */
export function ProjectsGrid() {
  const { filter, list, bar } = useFilter()
  const [open, setOpen] = useState<Project | null>(null)
  return (
    <>
      <div className="head" style={{ marginTop: 8 }}>
        <p className="lede" style={{ marginTop: 0 }}>
          {list.length} {list.length === 1 ? 'project' : 'projects'}. Open a card to browse its screenshots.
        </p>
        {bar}
      </div>
      <div className="pgrid">
        {list.map((p, n) => (
          <ProjectCard key={`${filter}-${p.id}`} project={p} onOpen={setOpen} eager={n < 6} />
        ))}
      </div>
      {open && <ProjectGallery project={open} onClose={() => setOpen(null)} />}
    </>
  )
}
