import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { identity, links, nodes, roleList } from '../data/site'
import { useGoToNode } from '../hooks/useRun'

const social = [
  { href: links.email, label: 'Email', Icon: Mail },
  { href: links.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: links.github, label: 'GitHub', Icon: Github },
]

/** The run's exit block: every task succeeded, and the graph closes. */
export function Footer() {
  // The footer renders on every route, but these targets only exist on the home
  // page — as plain scroll calls they did nothing at all from /projects.
  const goToNode = useGoToNode()

  return (
    <footer className="relative z-10 mt-8 border-t border-ink bg-ink text-canvas">
      <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-8 md:py-14">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-canvas/20 pb-5">
          <span className="flex items-center gap-2 bg-success px-2 py-1 t-mono-label text-canvas">
            run 001 · success
          </span>
          <span className="t-mono text-canvas/60">
            {nodes.length}/{nodes.length} tasks complete
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <p className="t-section text-[clamp(1.5rem,4vw,2.25rem)]">{identity.name}</p>
            <p className="mt-2 t-mono text-canvas/60">{roleList.join(' · ')}</p>

            <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
              {nodes.map((n) => (
                <button
                  key={n.id}
                  onClick={() => goToNode(n.id)}
                  className="border-b border-transparent pb-0.5 t-control text-[0.6875rem] text-canvas/70 transition-colors hover:border-signal hover:text-canvas"
                >
                  {n.label}
                </button>
              ))}
              <Link
                to="/services"
                className="border-b border-canvas/30 pb-0.5 t-control text-[0.6875rem] text-canvas transition-colors hover:border-signal"
              >
                Development services for agencies and startups
              </Link>
            </nav>
          </div>

          <div className="flex items-start gap-2 sm:justify-end">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-canvas/25 text-canvas/75 transition-colors hover:border-signal hover:bg-signal hover:text-ink"
              >
                <Icon size={16} strokeWidth={1.9} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 border-t border-canvas/20 pt-5 t-mono text-canvas/55">
          © {new Date().getFullYear()} {identity.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
