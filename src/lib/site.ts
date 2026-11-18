import type { Metadata } from 'next'

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
/**
 * Canonical URL for SEO and link previews. An explicit NEXT_PUBLIC_SITE_URL wins
 * (the GitHub Pages workflow sets it); any Vercel build uses the custom domain.
 */
export const DOMAIN_URL = 'https://developwithyasir.com'
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL ? DOMAIN_URL : 'https://yasir-khan-7.github.io/Portfolio')
).replace(/\/$/, '')

/** Prefixes a /public path with the base path. Next only does this for <Link>, not <img>. */
export const asset = (p: string) => `${BASE_PATH}${p}`

/** True on the old GitHub Pages copy, which only forwards to the custom domain. */
export const IS_MIRROR = BASE_PATH !== ''

export function pageMeta(o: { title: string; description: string; path: string; keywords?: string[]; noindex?: boolean }): Metadata {
  const url = `${SITE_URL}${o.path === '/' ? '/' : o.path}`
  return {
    title: o.title,
    description: o.description,
    keywords: o.keywords,
    alternates: { canonical: url },
    ...(o.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: { title: o.title, description: o.description, url, type: 'website', siteName: 'Yasir Khan', locale: 'en_US' },
    twitter: { card: 'summary_large_image', title: o.title, description: o.description },
  }
}
