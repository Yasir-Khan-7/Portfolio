import { useEffect } from 'react'

/**
 * Head management for a static SPA.
 *
 * Every route also ships a real static HTML file with these tags already baked
 * into its <head> (index.html and services/index.html), so a crawler that never
 * runs JavaScript still gets the correct title, description, canonical and
 * structured data. This component exists for the *other* path: a visitor who
 * client-side-navigates between routes, where the document is never re-fetched
 * and the baked head would otherwise describe the page they just left.
 *
 * It is therefore a synchroniser, not the source of truth. The static files and
 * the values passed here have to agree; when they drift, the static file wins
 * for search and this one wins for the address bar.
 */

export type SeoProps = {
  title: string
  description: string
  /** Absolute canonical URL, trailing slash included. */
  canonical: string
  /** Absolute URL of the share image. */
  image?: string
  imageAlt?: string
  /** Structured data. Emitted verbatim; see the callers for what each block is for. */
  jsonLd?: Record<string, unknown>[]
}

/** Marks the tags this module owns, so a route change can retract exactly them. */
const OWNED = 'data-seo-managed'

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(OWNED, '')
    document.head.appendChild(el)
  }
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
}

export function Seo({ title, description, canonical, image, imageAlt, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: image ? 'summary_large_image' : 'summary',
    })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    if (image) {
      upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
      upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })
      if (imageAlt) {
        upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: imageAlt })
      }
    }

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      link.setAttribute(OWNED, '')
      document.head.appendChild(link)
    }
    link.href = canonical

    // Structured data is replaced wholesale rather than merged, and that means
    // *every* block, not only the ones this module added. The build bakes a
    // graph into each static entry's head; leaving it in place while adding
    // another would put two graphs on the page carrying the same `@id`s. So the
    // head is cleared and re-emitted from one source per route.
    const stale = document.head.querySelectorAll('script[type="application/ld+json"]')
    stale.forEach((s) => s.remove())

    const added: HTMLScriptElement[] = []
    for (const block of jsonLd ?? []) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute(OWNED, '')
      script.textContent = JSON.stringify(block)
      document.head.appendChild(script)
      added.push(script)
    }

    return () => added.forEach((s) => s.remove())
  }, [title, description, canonical, image, imageAlt, jsonLd])

  return null
}
