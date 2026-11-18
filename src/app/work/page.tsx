import { Suspense } from 'react'
import { ClientCards } from '@/components/project-card/ClientCards'
import { CtaBand } from '@/components/site/CtaBand'
import { PersonalGrid } from '@/components/work/PersonalGrid'
import { WorkTabs } from '@/components/work/WorkTabs'
import { clients, personalProjects } from '@/content/projects'
import { pageMeta } from '@/lib/site'

export const metadata = pageMeta({
  title: 'Work',
  description:
    'Client systems taken from first commit to production — Otenga, Dr. Madikha Khan, Bebé Noura, Orbit Digital, Pak Sadat — and the personal projects where I try things first.',
  path: '/work',
})

export default function WorkPage() {
  const counts = { delivered: clients.length, personal: personalProjects.length }
  return (
    <>
      <section className="wrap page-hero" aria-labelledby="work-title">
        <p className="label rise">(Work) Client launches · Personal projects</p>
        <h1 id="work-title" className="h-display h-xl rise" style={{ ['--i' as string]: 1 }}>
          Things I&rsquo;ve built
          <br />
          <em className="accent-serif">and shipped.</em>
        </h1>
        <p className="lede rise" style={{ ['--i' as string]: 2 }}>
          Client systems taken from first commit to production, and the personal projects where I try things first.
        </p>
      </section>
      <section className="wrap work-body" aria-label="Projects">
        <Suspense fallback={<ClientCards />}>
          <WorkTabs counts={counts} delivered={<ClientCards />} personal={<PersonalGrid />} />
        </Suspense>
      </section>
      <CtaBand />
    </>
  )
}
