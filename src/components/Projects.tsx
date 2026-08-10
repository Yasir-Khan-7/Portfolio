import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { projects, type Project } from '../data/projects'
import type { RunState } from '../hooks/useRun'
import { NodeHeading, NodeSection } from './NodeHeading'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import { Reveal } from './Reveal'

const shown = projects.slice(0, 4)

export function Projects({ state }: { state: RunState }) {
  const [open, setOpen] = useState<Project | null>(null)

  return (
    <NodeSection id="projects">
      <NodeHeading
        taskId="t5.projects"
        state={state}
        meta={`selected work · ${shown.length} of ${projects.length} shown`}
      >
        My Projects
      </NodeHeading>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {shown.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 70}>
            <ProjectCard project={p} index={i} onOpen={setOpen} />
          </Reveal>
        ))}
      </div>

      {projects.length > shown.length && (
        <Reveal className="mt-8">
          <Link
            to="/projects"
            className="node group flex items-center gap-4 px-5 py-5 transition-colors hover:bg-panel-sunk"
          >
            <span className="port shrink-0" aria-hidden="true" />
            <span className="hidden h-px flex-1 bg-rule transition-colors group-hover:bg-ink sm:block" />
            <span className="flex items-baseline gap-3">
              <span className="t-section text-[clamp(1.25rem,3vw,1.75rem)]">View All Projects</span>
              <span className="t-mono text-ink-3">{projects.length} total</span>
            </span>
            <span className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center border border-ink bg-signal text-ink transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={17} strokeWidth={2.25} aria-hidden="true" />
            </span>
          </Link>
        </Reveal>
      )}

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </NodeSection>
  )
}
