import { links } from '@/content/site'

export function Footer() {
  const socials = [
    { label: 'LinkedIn', href: links.linkedin },
    { label: 'GitHub', href: links.github },
    { label: 'Instagram', href: links.instagram },
  ].filter((s) => s.href)

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__row">
        <p className="mono">© 2026 Muhammad Yasir Khan</p>
        <ul className="site-footer__social mono">
          {socials.map((s, i) => (
            <li key={s.label}>
              {i > 0 && <span aria-hidden="true">&nbsp;·&nbsp;</span>}
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#top" className="mono site-footer__top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
      <div className="wordmark" aria-hidden="true">
        <span>YASIR KHAN</span>
      </div>
    </footer>
  )
}
