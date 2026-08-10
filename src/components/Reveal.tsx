import { useEffect, useRef, type ReactNode } from 'react'

/**
 * One shared reveal. The observer is the normal path, but a timer force-shows
 * anything still hidden shortly after mount: the reveal starts at opacity 0, so
 * without that backstop an observer that never fires would leave a section
 * permanently blank. Content is always in the DOM either way.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'article' | 'section'
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-in')
      return
    }
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in')
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in')
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    io.observe(el)

    // Backstop: nothing stays invisible for longer than this, whatever the
    // observer does.
    const failsafe = window.setTimeout(() => el.classList.add('is-in'), 2500)

    return () => {
      io.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [])

  return (
    // @ts-expect-error — polymorphic ref across the small tag union
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
