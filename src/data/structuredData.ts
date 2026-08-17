/**
 * Structured data, in one place so the static HTML entries and the SPA cannot
 * disagree. vite.config.ts imports this at build time to bake the JSON-LD into
 * index.html and services.html; src/components/Seo.tsx uses the same functions
 * to keep the head correct across client-side navigation.
 *
 * What is emitted, and why — checked against Google's 2026 documentation rather
 * than against habit:
 *
 *   - BreadcrumbList  LIVE rich result, desktop only since the mobile breadcrumb
 *                     was dropped in January 2025. The only block here that
 *                     renders anything in a search result.
 *   - WebSite         LIVE, but only as the site-name signal. No `potentialAction`
 *                     — the sitelinks searchbox was retired in November 2024 and
 *                     there is no site search here to describe anyway.
 *   - ProfilePage     LIVE pairing for a personal site's home page.
 *   - Person, Service, OfferCatalog, WebPage
 *                     Entity signal only. No rich result exists for any of them
 *                     in 2026; they are here for entity resolution and for the
 *                     answer engines, which fetch pages but never execute their
 *                     JavaScript.
 *
 * Deliberately absent:
 *   - FAQPage         Deprecated 2026-05-07, docs removed 2026-06-15. It earns
 *                     nothing, and a second copy of the answers would drift from
 *                     the visible ones — the one mismatch that risks a manual action.
 *   - ProfessionalService  A LocalBusiness subtype implying a physical premises
 *                     and wanting an address. Remote work has none, so the block
 *                     would either be fabricated or incoherent, and it earns no
 *                     rich result either way.
 *   - Review / AggregateRating  Self-hosted praise about oneself is explicitly
 *                     ineligible and is the one item on the list that attracts a
 *                     manual action. The testimonials stay as images.
 *   - Any price, priceRange or offers.price. There are no figures on the page,
 *     so there are none in the markup.
 */

import { jobs, OG_IMAGE, SERVICES_URL, servicesSeo, SITE_URL } from './services.ts'

const PERSON_ID = `${SITE_URL}#person`
const WEBSITE_ID = `${SITE_URL}#website`

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Muhammad Yasir Khan',
  url: SITE_URL,
  image: `${SITE_URL}images/profile/profile_pic.webp`,
  jobTitle: ['AI Engineer', 'Forward Deployed Engineer', 'AI Software Engineer'],
  email: 'yasirkhandps7@gmail.com',
  worksFor: { '@type': 'Organization', name: 'Data Panda' },
  sameAs: ['https://www.linkedin.com/in/yasir-khan7134/', 'https://github.com/Yasir-Khan-7'],
}

/** One entity referenced from both pages, never two competing person nodes. */
export function homeJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': WEBSITE_ID,
          url: SITE_URL,
          name: 'Muhammad Yasir Khan',
          alternateName: 'Yasir Khan Portfolio',
          inLanguage: 'en',
          publisher: { '@id': PERSON_ID },
        },
        {
          '@type': 'ProfilePage',
          '@id': `${SITE_URL}#webpage`,
          url: SITE_URL,
          name: 'Muhammad Yasir Khan | Portfolio',
          isPartOf: { '@id': WEBSITE_ID },
          mainEntity: { '@id': PERSON_ID },
        },
        person,
      ],
    },
  ]
}

export function servicesJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SERVICES_URL}#webpage`,
          url: SERVICES_URL,
          name: servicesSeo.title,
          description: servicesSeo.description,
          inLanguage: 'en',
          primaryImageOfPage: OG_IMAGE,
          isPartOf: { '@id': WEBSITE_ID },
          about: { '@id': PERSON_ID },
          breadcrumb: { '@id': `${SERVICES_URL}#breadcrumb` },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${SERVICES_URL}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Services' },
          ],
        },
        {
          ...person,
          knowsAbout: [
            'Full-stack development',
            'React',
            'React Native',
            'TypeScript',
            'Python',
            'Large language models',
            'Generative AI',
            'Supabase',
            'Docker',
            'AWS',
            'ETL pipelines',
            'Power BI',
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Development services',
            // Generated from the same array the page renders, so the markup can
            // never describe an offer the visible page does not make.
            itemListElement: jobs.map((j) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: j.name,
                description: j.summary,
                provider: { '@id': PERSON_ID },
              },
            })),
          },
        },
      ],
    },
  ]
}
