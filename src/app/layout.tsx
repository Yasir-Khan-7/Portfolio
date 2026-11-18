import type { Metadata, Viewport } from 'next'
import { fontVars } from './fonts'
import { DOMAIN_URL, IS_MIRROR, SITE_URL } from '@/lib/site'
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
    'Muhammad Yasir Khan, Forward Deployed Engineer and Data & AI Engineer. I build AI agents, LLM apps, data pipelines and full stack web and mobile apps, from first call to production.',
  applicationName: 'Yasir Khan',
  authors: [{ name: 'Muhammad Yasir Khan', url: `${SITE_URL}/about` }],
  creator: 'Muhammad Yasir Khan',
  publisher: 'Muhammad Yasir Khan',
  category: 'technology',
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  // TODO(yasir): paste the Google Search Console code here if you verify with the HTML tag method.
  // verification: { google: '...' },
}

export const viewport: Viewport = { themeColor: '#FBFBF9' }

const PERSON_ID = `${SITE_URL}/#person`
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Muhammad Yasir Khan',
      alternateName: ['Yasir Khan', 'Develop with Yasir'],
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/profile/yasir-portrait.webp`,
      jobTitle: 'Forward Deployed Engineer',
      description: 'Forward Deployed Engineer and Data & AI Engineer building AI agents, LLM apps, data pipelines and full stack web and mobile apps.',
      worksFor: { '@type': 'Organization', name: 'Data Panda' },
      address: { '@type': 'PostalAddress', addressCountry: 'PK' },
      knowsAbout: [
        'AI agents',
        'Large language model applications',
        'Data engineering',
        'Data pipelines',
        'Business intelligence',
        'Full stack web development',
        'Mobile app development',
        'Cloud and DevOps',
        'Python',
        'Next.js',
      ],
      sameAs: ['https://www.linkedin.com/in/yasir-khan7134/', 'https://github.com/Yasir-Khan-7', 'https://www.instagram.com/yasirkhan.dev'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Yasir Khan',
      alternateName: 'Develop with Yasir',
      inLanguage: 'en',
      publisher: { '@id': PERSON_ID },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars} suppressHydrationWarning>
      <head>
        {/* Reveal-on-scroll only hides content once we know JS will reveal it again. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {/* The old github.io copy forwards every visit to the same page on the custom domain. */}
        {IS_MIRROR && (
          <script
            dangerouslySetInnerHTML={{
              __html: `location.replace(${JSON.stringify(DOMAIN_URL)}+location.pathname.replace(/^\\/Portfolio/,'')+location.search+location.hash)`,
            }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
