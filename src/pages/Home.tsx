import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { OG_IMAGE_HOME, SITE_URL } from '../data/urls'
import { homeJsonLd } from '../data/structuredData'
import { ProjectsCarousel } from '../wb/Projects'
import {
  About,
  Blog,
  Delivered,
  Hero,
  Reviews,
  Services,
  StartProject,
  Stories,
  Trusted,
} from '../wb/Sections'
import { Footer, Nav } from '../wb/ui'

export default function Home() {
  const { hash } = useLocation()

  // Arriving with a #section (a shared link, or the old /services URL) scrolls
  // there once the page has rendered.
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (!el) return
    const t = window.setTimeout(() => el.scrollIntoView({ block: 'start', behavior: 'instant' }), 60)
    return () => window.clearTimeout(t)
  }, [hash])

  return (
    <div className="wb">
      <Seo
        title="Muhammad Yasir Khan | Portfolio"
        description="Muhammad Yasir Khan: AI Engineer, Forward Deployed Engineer, AI Software Engineer. Currently Data & AI Engineer at Data Panda, shipping client systems end to end across the UK, Netherlands and Belgium."
        canonical={SITE_URL}
        image={OG_IMAGE_HOME}
        imageAlt="Muhammad Yasir Khan, AI Engineer and Forward Deployed Engineer"
        jsonLd={homeJsonLd()}
      />
      <Nav />
      <main id="top">
        <Hero />
        <Trusted />
        <About />
        <Services />
        <Delivered />
        <ProjectsCarousel />
        <Stories />
        <Reviews />
        <Blog />
        <StartProject />
      </main>
      <Footer />
    </div>
  )
}
