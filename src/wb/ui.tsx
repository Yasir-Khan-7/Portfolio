import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { hero, links } from '../data/home'

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Scroll reveal. Only elements that start below the first screen are hidden,
 * so the first view is always complete at rest; the observer then lets each
 * one rise in once. Without an observer (or with reduced motion) nothing hides.
 */
export function Rv({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  style,
  id,
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'article' | 'section' | 'figure'
  style?: CSSProperties
  id?: string
}) {
  // Typed as a div; the other tags in the union share every member used here.
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion() || typeof IntersectionObserver === 'undefined') return
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.9) return
    el.classList.add('pending')
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        el.classList.remove('pending')
        io.disconnect()
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      id={id}
      className={`rv ${className}`}
      style={{ ...style, transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  )
}

/** A number that counts up the first time it scrolls into view. Shows the final value at rest. */
export function CountUp({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion() || typeof IntersectionObserver === 'undefined') return
    if (el.getBoundingClientRect().top <= window.innerHeight) return
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / 1500)
        setShown(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    })
    setShown(0)
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])

  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {suffix}
    </span>
  )
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="chip">
      <i aria-hidden="true" />
      {children}
    </span>
  )
}

export function SectionHead({
  chip,
  title,
  lede,
  aside,
}: {
  chip: string
  title: string
  lede?: string
  aside?: ReactNode
}) {
  return (
    <Rv className="head">
      <div>
        <Chip>{chip}</Chip>
        <h2 className="h2">{title}</h2>
        {lede && <p className="lede">{lede}</p>}
      </div>
      {aside}
    </Rv>
  )
}

const BASE = import.meta.env.BASE_URL

/** `onHome` keeps section links as in-page anchors; elsewhere they point back home. */
export function Nav({ onHome = true }: { onHome?: boolean }) {
  const to = (hash: string) => (onHome ? hash : `${BASE}${hash}`)
  return (
    <header className="nav">
      <div className="wrap">
        <div className="nav-in">
          <a className="brand" href={onHome ? '#top' : BASE}>
            <img src={hero.photo} alt="" width={30} height={30} />
            Yasir Khan
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href={to('#about')}>About</a>
            <a href={to('#services')}>Services</a>
            <a href={to('#delivered')}>Delivered</a>
            <a href={onHome ? '#projects' : `${BASE}projects`}>Projects</a>
            <a href={to('#stories')}>Stories</a>
            <a href={to('#blog')}>Blog</a>
          </nav>
          <a className="btn btn-dark" href={to('#contact')}>
            Start a project
          </a>
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="tile fbar">
          <span>© {new Date().getFullYear()} Yasir Khan</span>
          <nav aria-label="Footer">
            <a href={`${BASE}projects`}>All projects</a>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="#top">Back to top ↑</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
