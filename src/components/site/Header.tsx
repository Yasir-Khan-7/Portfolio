'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { nav } from '@/content/site'
import { asset } from '@/lib/site'
import { ArrowUpRight } from './icons'

/** Floating pill header: photo + name, page links, "Start a project". */
export function Header() {
  const pathname = usePathname() ?? '/'
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  const onContact = isActive('/contact')

  return (
    <header className="site-header" id="top">
      <div className="wrap">
        <div className="nav-pill">
          <Link href="/" className="brand" aria-label="Yasir Khan, home">
            <img className="brand__photo" src={asset('/images/profile/profile_pic.webp')} alt="" width={40} height={40} />
            Yasir Khan
          </Link>

          <nav aria-label="Main" className="site-nav">
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} aria-current={isActive(n.href) ? 'page' : undefined}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__end">
            {onContact ? (
              <span className="status-pill">
                <span className="status-dot" aria-hidden="true" />
                Available for new projects
              </span>
            ) : (
              <Link href="/contact" className="btn btn--ink btn--sm site-header__cta">
                Start a project <ArrowUpRight />
              </Link>
            )}
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              <span className="menu-btn__bars" aria-hidden="true" data-open={open} />
            </button>
          </div>
        </div>

        <div id="mobile-nav" className="mobile-nav" hidden={!open}>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={isActive(n.href) ? 'page' : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="btn btn--ink">
                Start a project <ArrowUpRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
