import type { Metadata } from 'next'

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yasir-khan-7.github.io/Portfolio').replace(/\/$/, '')

/** Prefixes a /public path with the base path. Next only does this for <Link>, not <img>. */
export const asset = (p: string) => `${BASE_PATH}${p}`

export function pageMeta(o: { title: string; description: string; path: string }): Metadata {
  const url = `${SITE_URL}${o.path === '/' ? '/' : o.path}`
  return {
    title: o.title,
    description: o.description,
    alternates: { canonical: url },
    openGraph: { title: o.title, description: o.description, url, type: 'website', siteName: 'Yasir Khan' },
    twitter: { card: 'summary_large_image', title: o.title, description: o.description },
  }
}
