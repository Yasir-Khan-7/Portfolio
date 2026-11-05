import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Seo } from '../components/Seo'
import { OG_IMAGE_HOME, PROJECTS_URL } from '../data/urls'
import { ProjectsGrid } from '../wb/Projects'
import { Chip, Footer, Nav } from '../wb/ui'

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="wb">
      <Seo
        title="Projects | Muhammad Yasir Khan"
        description="Selected AI, data engineering and full-stack builds, every one of them live and clickable, with source where it is public."
        canonical={PROJECTS_URL}
        image={OG_IMAGE_HOME}
        imageAlt="Selected projects by Muhammad Yasir Khan"
      />
      <Nav onHome={false} />
      <main id="top">
        <section>
          <div className="wrap">
            <a className="back" href={import.meta.env.BASE_URL}>
              <ArrowLeft size={16} aria-hidden="true" /> Back home
            </a>
            <div style={{ marginTop: 28 }}>
              <Chip>projects</Chip>
              <h1 className="h2" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
                Everything I've built.
              </h1>
              <p className="lede">
                A selection of live projects across agentic AI, design to code, developer tooling and data.
                Every one opens the running app, with source where it is public.
              </p>
            </div>
            <div style={{ marginTop: 40 }}>
              <ProjectsGrid />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
