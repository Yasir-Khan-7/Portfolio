import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_PATH, SITE_URL } from '@/lib/site'

/** The old site's /projects URL. Static hosting has no server redirects, so this forwards in the browser. */
export const metadata: Metadata = {
  title: 'Projects moved',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/work?tab=personal` },
  other: { refresh: `0;url=${BASE_PATH}/work?tab=personal` },
}

export default function ProjectsMoved() {
  return (
    <section className="wrap page-hero">
      <p className="lede">
        Projects now live on the <Link href="/work?tab=personal">Work page</Link>.
      </p>
      <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(`${BASE_PATH}/work?tab=personal`)})` }} />
    </section>
  )
}
