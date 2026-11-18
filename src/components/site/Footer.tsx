import Link from 'next/link'
import { links, nav } from '@/content/site'
import { asset } from '@/lib/site'
import { ArrowUpRight } from './icons'
import { GithubLogo, InstagramLogo, LinkedinLogo, MailIcon, Socials } from './Socials'

const homeSections = [
  { href: '/#client-work', label: 'Client work' },
  { href: '/#stories', label: 'Success stories' },
  { href: '/#what-i-do', label: 'What I do' },
  { href: '/#about', label: 'About' },
  { href: '/#testimonials', label: 'Testimonials' },
]

const projectLinks = [
  { href: '/work', label: 'Client launches' },
  { href: '/work?tab=personal', label: 'Personal projects' },
  { href: '/work/top-of-mind', label: 'Top of Mind case study' },
]

export function Footer() {
  const connect = [
    { label: 'Email', href: `mailto:${links.email}`, external: false, Icon: MailIcon },
    { label: 'LinkedIn', href: links.linkedin, external: true, Icon: LinkedinLogo },
    { label: 'GitHub', href: links.github, external: true, Icon: GithubLogo },
    { label: 'Instagram', href: links.instagram, external: true, Icon: InstagramLogo },
  ].filter((s) => s.href)

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-card">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <img className="brand__photo" src={asset('/images/profile/profile_pic.webp')} alt="" width={36} height={36} loading="lazy" />
              Yasir Khan
            </Link>
            <p className="footer-brand__line">Forward Deployed Engineer.</p>
            <p className="status-pill footer-brand__status">
              <span className="status-dot" aria-hidden="true" />
              Available for new projects
            </p>
            <Link href="/contact" className="btn btn--ink btn--sm">
              Start a project <ArrowUpRight />
            </Link>
            <Socials />
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <div>
              <h2 className="mono footer-nav__title">Pages</h2>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mono footer-nav__title">On the home page</h2>
              <ul>
                {homeSections.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mono footer-nav__title">Projects</h2>
              <ul>
                {projectLinks.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mono footer-nav__title">Connect</h2>
              <ul>
                {connect.map((s) => (
                  <li key={s.label}>
                    <a className="footer-nav__social" href={s.href} {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                      {s.Icon && <s.Icon size={14} />}
                      {s.label}
                      {s.external && (
                        <>
                          {' '}
                          <ArrowUpRight size={12} />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom mono">
          <p>© 2026 Muhammad Yasir Khan</p>
          <p className="footer-bottom__where">Based in Pakistan · UTC+5</p>
          <a href="#top" className="footer-bottom__top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
