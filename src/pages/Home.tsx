import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Delivered } from '../components/Delivered'
import { Experience } from '../components/Experience'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { RunHeader } from '../components/RunChrome'
import { Seo } from '../components/Seo'
import { Skills } from '../components/Skills'
import { Testimonials } from '../components/Testimonials'
import { OG_IMAGE_HOME, SITE_URL } from '../data/services'
import { homeJsonLd } from '../data/structuredData'
import { usePrefersReducedMotion, useRunProgress } from '../hooks/useRun'

export default function Home() {
  const reduced = usePrefersReducedMotion()
  const { stateOf, completed } = useRunProgress(reduced)

  return (
    <>
      <Seo
        title="Muhammad Yasir Khan | Portfolio"
        description="Muhammad Yasir Khan: AI Engineer, Forward Deployed Engineer, AI Software Engineer. Currently Data & AI Engineer at Data Panda, shipping client systems end to end across the UK, Netherlands and Belgium."
        canonical={SITE_URL}
        image={OG_IMAGE_HOME}
        imageAlt="Muhammad Yasir Khan, AI Engineer and Forward Deployed Engineer"
        jsonLd={homeJsonLd()}
      />
      <RunHeader
        stateOf={stateOf}
        completed={completed}
        crossLink={{ to: '/services', label: 'services' }}
      />
      <main>
        <Hero stateOf={stateOf} reduced={reduced} />
        <About state={stateOf('about')} />
        <Skills state={stateOf('skills')} />
        <Experience state={stateOf('experience')} />
        <Delivered state={stateOf('delivered')} />
        <Projects state={stateOf('projects')} />
        <Testimonials state={stateOf('testimonials')} />
        <Contact state={stateOf('contact')} />
      </main>
      <Footer />
    </>
  )
}
