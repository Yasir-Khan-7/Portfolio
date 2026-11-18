import { links } from '@/content/site'

type P = { size?: number }

export function LinkedinLogo({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function GithubLogo({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12 .5C5.73.5.66 5.58.66 11.85c0 5.01 3.25 9.26 7.75 10.76.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.13-3.15.69-3.82-1.33-3.82-1.33-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.73.4-1.24.72-1.52-2.52-.29-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.16-3.05-.12-.29-.5-1.44.11-3 0 0 .95-.31 3.12 1.16a10.8 10.8 0 0 1 2.84-.38c.96 0 1.94.13 2.85.38 2.17-1.47 3.12-1.16 3.12-1.16.62 1.56.23 2.71.11 3 .72.8 1.16 1.81 1.16 3.05 0 4.36-2.66 5.32-5.19 5.6.41.36.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.15 0 .3.2.66.79.55a11.36 11.36 0 0 0 7.74-10.76C23.34 5.58 18.27.5 12 .5Z" />
    </svg>
  )
}

export function InstagramLogo({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" focusable="false">
      <rect x="2.2" y="2.2" width="19.6" height="19.6" rx="5.6" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="17.6" cy="6.4" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  )
}

export const socials = [
  { label: 'LinkedIn', href: links.linkedin, Icon: LinkedinLogo },
  { label: 'GitHub', href: links.github, Icon: GithubLogo },
  { label: 'Instagram', href: links.instagram, Icon: InstagramLogo },
].filter((s) => s.href)

/** Round logo buttons for LinkedIn, GitHub and Instagram. */
export function Socials({ className = '' }: { className?: string }) {
  return (
    <ul className={`socials ${className}`.trim()} aria-label="Social profiles">
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" className={`social social--${label.toLowerCase()}`} aria-label={`${label} (opens in a new tab)`} title={label}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  )
}

export function MailIcon({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  )
}
