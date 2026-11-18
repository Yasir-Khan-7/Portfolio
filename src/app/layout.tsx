import type { Metadata, Viewport } from 'next'
import { fontVars } from './fonts'
import { SITE_URL } from '@/lib/site'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { RevealObserver } from '@/components/site/RevealObserver'
import './globals.css'
import './sections.css'
import './cards.css'

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: { default: 'Yasir Khan · AI Engineer & Forward Deployed Engineer', template: '%s · Yasir Khan' },
  description:
    'Muhammad Yasir Khan, AI Engineer and Forward Deployed Engineer. Data & AI Engineer at Data Panda, shipping client systems end to end for teams across the UK, the Netherlands and Belgium.',
  authors: [{ name: 'Muhammad Yasir Khan' }],
}

export const viewport: Viewport = { themeColor: '#FBFBF9' }

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Yasir Khan',
  jobTitle: 'Data & AI Engineer',
  worksFor: { '@type': 'Organization', name: 'Data Panda' },
  url: `${SITE_URL}/`,
  sameAs: ['https://www.linkedin.com/in/yasir-khan7134/', 'https://github.com/Yasir-Khan-7', 'https://www.instagram.com/yasirkhan.dev'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars} suppressHydrationWarning>
      <head>
        {/* Reveal-on-scroll only hides content once we know JS will reveal it again. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  )
}
