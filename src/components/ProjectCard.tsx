import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Maximize2 } from 'lucide-react'
import { Github } from './BrandIcons'
import type { Project } from '../data/projects'

/**
 * A task node. The screenshot is the content — chrome stays out of its way.
 * Hovering steps through the run's captured frames, exactly as the incumbent
 * did, but the frame counter is visible so the stepping is legible, not magic.
 */
export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: (p: Project) => void
}) {
  const [frame, setFrame] = useState(0)
  const timer = useRef<number | null>(null)

  const start = () => {
    if (project.images.length <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    stop()
    timer.current = window.setInterval(() => {
      setFrame((f) => (f + 1) % project.images.length)
    }, 1800)
  }

  const stop = () => {
    if (timer.current) {
      window.clearInterval(timer.current)
      timer.current = null
    }
  }

  useEffect(() => stop, [])

  const taskId = `p${String(project.id).padStart(2, '0')}`

  return (
    <article
      className="node group flex flex-col"
      onMouseEnter={start}
      onMouseLeave={() => {
        stop()
        setFrame(0)
      }}
    >
      <header className="flex items-center gap-2.5 border-b border-rule px-3 py-2">
        <span className="t-mono text-ink-3">{taskId}</span>
        <span className="flex items-center gap-1.5 t-mono-label text-ink-2">
          <span className="h-1.5 w-1.5 shrink-0 bg-success" aria-hidden="true" />
          shipped
        </span>
        <span className="ml-auto t-mono text-ink-3">{project.category}</span>
      </header>

      <div className="relative overflow-hidden border-b border-rule bg-panel-sunk">
        <img
          src={project.images[frame] ?? project.image}
          alt={`${project.title} screenshot ${frame + 1} of ${project.images.length}`}
          width={1200}
          height={750}
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
          // object-contain, not cover: these are captures of real interfaces and
          // cropping them cuts the logo, nav and headline that identify the work.
          className="aspect-[16/10] w-full object-contain transition-transform duration-700 ease-[var(--ease-run)] group-hover:scale-[1.02]"
          onError={(e) => {
            ;(e.currentTarget as HTMLImageElement).style.visibility = 'hidden'
          }}
        />

        {project.images.length > 1 && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 border border-ink bg-canvas/92 px-1.5 py-0.5 backdrop-blur-sm">
            <span className="t-mono text-ink">
              {String(frame + 1).padStart(2, '0')}/{String(project.images.length).padStart(2, '0')}
            </span>
          </div>
        )}

        <button
          onClick={() => onOpen(project)}
          className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-[background-color,opacity] duration-300 group-hover:bg-ink/45 group-hover:opacity-100 focus-visible:bg-ink/45 focus-visible:opacity-100"
          aria-label={`View details for ${project.title}`}
        >
          <span className="btn-signal pointer-events-none">
            <Maximize2 size={13} strokeWidth={2.25} aria-hidden="true" />
            View Project
          </span>
        </button>
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3 className="text-[1.0625rem] leading-snug font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-2">
          {project.shortDescription}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-2 border-t border-rule-soft pt-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-3 py-2"
          >
            Live
            <ArrowUpRight size={13} strokeWidth={2.25} aria-hidden="true" />
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source on GitHub`}
              className="flex h-[34px] w-[34px] items-center justify-center border border-rule bg-panel text-ink-2 transition-colors hover:border-ink hover:bg-ink hover:text-canvas"
            >
              <Github size={14} strokeWidth={1.9} aria-hidden="true" />
            </a>
          )}

          {project.toolLogos && project.toolLogos.length > 0 && (
            <div className="ml-auto flex items-center gap-1.5" title="Built with">
              {project.toolLogos.map((t) => (
                <img
                  key={t.name}
                  src={t.logo}
                  alt={t.name}
                  title={t.name}
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                  className="h-5 w-5 object-contain opacity-75 transition-opacity hover:opacity-100"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
