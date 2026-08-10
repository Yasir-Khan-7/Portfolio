import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Delivered } from '../components/Delivered'
import { Experience } from '../components/Experience'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { RunHeader } from '../components/RunChrome'
import { Skills } from '../components/Skills'
import { Testimonials } from '../components/Testimonials'
import { usePrefersReducedMotion, useRunProgress } from '../hooks/useRun'

export default function Home() {
  const reduced = usePrefersReducedMotion()
  const { stateOf, completed } = useRunProgress(reduced)

  return (
    <>
      <RunHeader stateOf={stateOf} completed={completed} />
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
