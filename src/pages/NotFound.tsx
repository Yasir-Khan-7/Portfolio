import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Footer } from '../components/Footer'

/**
 * The wildcard route used to render Home, which was a real problem rather than a
 * cosmetic one. The 404 shim rewrites any unknown path to `/Portfolio/?/whatever`,
 * which GitHub Pages answers with a 200 — so every mistyped or stale URL became
 * an indexable duplicate of the home page. Worse, once /services is served as its
 * own static file, a wildcard rendering Home would let React replace that
 * server-rendered markup with the home page the moment it hydrated: a crawler
 * would read a services page in the HTML and a home page after rendering.
 *
 * So this route exists, and it noindexes itself. The tag has to be injected at
 * runtime because there is no server here to set it per response.
 */
export default function NotFound() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = 'Not found | Muhammad Yasir Khan'

    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, follow'
    document.head.appendChild(meta)

    // Any canonical left behind by a previous route would point a crawler at a
    // page this one is not, so it goes for as long as this route is mounted.
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const previousHref = canonical?.href
    canonical?.remove()

    return () => {
      meta.remove()
      if (canonical && previousHref) {
        canonical.href = previousHref
        document.head.appendChild(canonical)
      }
    }
  }, [])

  return (
    <>
      <main className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-[1440px] flex-col justify-center px-5 py-24 md:px-8">
        <div className="mb-6 flex items-center gap-0">
          <span className="flex items-center gap-2 border border-signal bg-signal-wash px-2.5 py-1.5 t-mono-label text-ink">
            <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />
            run failed
          </span>
          <span className="h-px w-6 bg-ink sm:w-10" aria-hidden="true" />
          <span className="port shrink-0" aria-hidden="true" />
          <span className="h-px flex-1 bg-rule" aria-hidden="true" />
        </div>

        <h1 className="t-display text-[clamp(2rem,5.4vw,4.6rem)]">No task at this address</h1>

        <div className="node mt-8 max-w-[720px] p-5 md:p-6">
          <div className="mb-3 flex items-center justify-between border-b border-rule-soft pb-2.5">
            <span className="t-mono-label text-ink-2">stderr</span>
            <span className="t-mono text-ink-3">404</span>
          </div>
          <p className="t-body">
            Nothing resolves at <span className="t-mono text-ink">{pathname}</span>. It may have
            moved, or the link that brought you here may have been mistyped.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="btn-signal">
            Back to the portfolio
            <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" />
          </Link>
          <Link to="/services" className="btn-ghost">
            Services
            <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" />
          </Link>
          <Link to="/projects" className="btn-ghost">
            Projects
            <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" />
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
