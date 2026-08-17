import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { nodes } from '../data/site'

export type RunState = 'queued' | 'running' | 'success'

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

/**
 * The run itself. Each section node reports queued → running → success as the
 * visitor scrolls past it. A node that has been read stays succeeded; nothing is
 * ever hidden behind this state, it only drives the indicators and the mini-DAG.
 */
export function useRunProgress(reduced: boolean) {
  const [active, setActive] = useState<string>(nodes[0].id)
  const [done, setDone] = useState<Set<string>>(() =>
    reduced ? new Set(nodes.map((n) => n.id)) : new Set(),
  )

  useEffect(() => {
    if (reduced) {
      setDone(new Set(nodes.map((n) => n.id)))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (entry.isIntersecting) {
            setActive(id)
            setDone((prev) => {
              if (prev.has(id)) return prev
              const next = new Set(prev)
              next.add(id)
              return next
            })
          }
        }
      },
      // A band across the middle of the viewport: a node is "running" while the
      // visitor is actually reading it, not the moment its top edge appears.
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )

    const els = nodes
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el))
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [reduced])

  const stateOf = (id: string): RunState => {
    if (id === active && !reduced) return 'running'
    return done.has(id) ? 'success' : 'queued'
  }

  return { active, stateOf, completed: done.size }
}

/**
 * Cross-page node navigation. The footer and the run header are rendered on
 * every route, but `scrollToNode` can only reach a node that is mounted — on
 * /services and /projects the home run's sections do not exist, so those links
 * were silently doing nothing. This resolves the two cases: scroll when the node
 * is on this page, otherwise route home first and scroll once it has mounted.
 */
export function useGoToNode() {
  const navigate = useNavigate()

  return (id: string, homePath = '/') => {
    if (document.getElementById(id)) {
      scrollToNode(id)
      return
    }
    navigate(homePath)
    // The target does not exist until the home route has painted. rAF runs after
    // React commits the new route, which is the first moment the node is real.
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToNode(id)))
  }
}

/** Smooth-scroll to a node, clearing the fixed run header. */
export function scrollToNode(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const top = el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' })
}
