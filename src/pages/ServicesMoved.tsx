import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

/**
 * `/services` used to be its own page. It is now a section of the home page, so
 * old links and bookmarks land there instead of on a 404. The robots tag keeps
 * the old URL out of the index while search engines catch up.
 */
export default function ServicesMoved() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, follow'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return <Navigate to={{ pathname: '/', hash: '#services' }} replace />
}
