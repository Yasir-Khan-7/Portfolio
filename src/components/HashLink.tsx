import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useGoToNode } from '../hooks/useRun'

/**
 * A link to a node on another route.
 *
 * React Router does not scroll to a hash target on its own, so `<Link to="/#x">`
 * lands the visitor at the top of the home page and leaves them to find the
 * section themselves. This keeps the real `href` — so it is a crawlable internal
 * link, and middle-click and "open in new tab" still work — while intercepting
 * the plain click to route and then scroll.
 */
export function HashLink({
  nodeId,
  className = '',
  children,
}: {
  nodeId: string
  className?: string
  children: ReactNode
}) {
  const goToNode = useGoToNode()

  return (
    <Link
      to={`/#${nodeId}`}
      onClick={(e) => {
        // Leave modified clicks alone: they mean "open this somewhere else".
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
        e.preventDefault()
        goToNode(nodeId)
      }}
      className={className}
    >
      {children}
    </Link>
  )
}
