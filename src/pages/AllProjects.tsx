import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, LayoutGrid, Rows3 } from 'lucide-react'
import {
  aiSubCategories,
  projectCategories,
  projects,
  type Project,
} from '../data/projects'
import { Footer } from '../components/Footer'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { Reveal } from '../components/Reveal'

type View = 'grid' | 'table'

export default function AllProjects() {
  const [filter, setFilter] = useState<string>('all')
  const [sub, setSub] = useState<string | null>(null)
  const [view, setView] = useState<View>('grid')
  const [open, setOpen] = useState<Project | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filter logic ported verbatim from the incumbent AllProjects page.
  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    if (filter === 'AI' && sub) return projects.filter((p) => p.category === sub)
    const techs = projectCategories[filter] ?? []
    return projects.filter((p) => p.technologies.some((t) => techs.includes(t)))
  }, [filter, sub])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-canvas/92 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-3 px-5 md:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 border border-ink bg-panel px-2.5 py-1.5 t-control text-[0.6875rem] text-ink transition-colors hover:bg-ink hover:text-canvas"
          >
            <ArrowLeft size={13} strokeWidth={2.25} aria-hidden="true" />
            Back to run
          </Link>
          <span className="hidden t-mono-label text-ink-2 sm:block">Run 001 · task index</span>
          <span className="ml-auto t-mono text-ink-3">
            {String(filtered.length).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-24 pb-16 md:px-8 md:pt-32">
        <div className="border-b border-ink pb-2.5">
          <span className="inline-flex bg-ink px-2 py-1 text-canvas t-mono-label">t5.projects</span>
        </div>
        <h1 className="t-section mt-5 text-[clamp(2.25rem,6vw,4rem)]">All Projects</h1>
        <p className="t-body mt-5">
          Explore my portfolio of AI-driven applications, data analytics, and innovative solutions
        </p>

        {/* Filters — one row above the results, as the run's task filter */}
        <div className="mt-10 border-t border-rule pt-5">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="t-mono-label text-ink-3">Filter by Category</span>
            <div className="flex flex-wrap gap-1.5">
              {['all', ...Object.keys(projectCategories)].map((f) => (
                <button
                  key={f}
                  onClick={() => {
                    setFilter(f)
                    setSub(null)
                  }}
                  aria-pressed={filter === f}
                  className={`border px-2.5 py-1.5 t-control text-[0.6875rem] transition-colors ${
                    filter === f
                      ? 'border-ink bg-ink text-canvas'
                      : 'border-rule bg-panel text-ink-2 hover:border-ink hover:text-ink'
                  }`}
                >
                  {f === 'all' ? 'All' : f}
                </button>
              ))}
            </div>

            <div className="ml-auto flex items-center gap-1">
              <button
                onClick={() => setView('grid')}
                aria-pressed={view === 'grid'}
                aria-label="Grid view"
                className={`flex h-8 w-8 items-center justify-center border transition-colors ${
                  view === 'grid'
                    ? 'border-ink bg-ink text-canvas'
                    : 'border-rule bg-panel text-ink-2 hover:border-ink'
                }`}
              >
                <LayoutGrid size={14} strokeWidth={2} aria-hidden="true" />
              </button>
              <button
                onClick={() => setView('table')}
                aria-pressed={view === 'table'}
                aria-label="Table view"
                className={`flex h-8 w-8 items-center justify-center border transition-colors ${
                  view === 'table'
                    ? 'border-ink bg-ink text-canvas'
                    : 'border-rule bg-panel text-ink-2 hover:border-ink'
                }`}
              >
                <Rows3 size={14} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </div>

          {filter === 'AI' && (
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-rule-soft pt-4">
              <span className="t-mono-label text-ink-3">AI Subcategories</span>
              <div className="flex flex-wrap gap-1.5">
                {aiSubCategories.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSub(sub === s ? null : s)}
                    aria-pressed={sub === s}
                    className={`border px-2.5 py-1.5 t-control text-[0.6875rem] transition-colors ${
                      sub === s
                        ? 'border-signal bg-signal text-ink'
                        : 'border-rule bg-panel text-ink-2 hover:border-ink hover:text-ink'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="node mt-10 flex flex-col items-center gap-3 px-6 py-16 text-center">
            <span className="t-mono-label text-ink-3">0 tasks matched</span>
            <p className="text-[0.9375rem] text-ink-2">
              Nothing is tagged with that combination yet.
            </p>
            <button
              onClick={() => {
                setFilter('all')
                setSub(null)
              }}
              className="btn-ghost mt-2"
            >
              Clear filters
            </button>
          </div>
        ) : view === 'grid' ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 60}>
                <ProjectCard project={p} index={i} onOpen={setOpen} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="node mt-10 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink">
                  {['task', 'project', 'category', 'stack', 'links'].map((h) => (
                    <th key={h} className="px-4 py-3 t-mono-label text-ink-2">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr
                    key={p.id}
                    className="border-b border-rule-soft transition-colors last:border-0 hover:bg-panel-sunk"
                  >
                    <td className="px-4 py-3 align-top t-mono text-ink-3">
                      p{String(p.id).padStart(2, '0')}
                    </td>
                    <td className="max-w-[280px] px-4 py-3 align-top">
                      <button
                        onClick={() => setOpen(p)}
                        className="text-left text-[0.9375rem] font-semibold text-ink underline-offset-4 hover:underline"
                      >
                        {p.title}
                      </button>
                      <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-2">
                        {p.shortDescription}
                      </p>
                    </td>
                    <td className="px-4 py-3 align-top t-mono text-ink-2">{p.category}</td>
                    <td className="max-w-[240px] px-4 py-3 align-top">
                      <ul className="flex flex-wrap gap-1">
                        {p.technologies.map((t) => (
                          <li key={t} className="tag">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <div className="flex gap-1.5">
                        <a
                          href={p.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost px-2 py-1.5"
                        >
                          Live
                        </a>
                        {p.githubLink && (
                          <a
                            href={p.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost px-2 py-1.5"
                          >
                            Src
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
      </main>

      <Footer />
    </>
  )
}
