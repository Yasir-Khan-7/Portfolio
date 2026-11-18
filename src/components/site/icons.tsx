/** Small inline icons. All decorative: the link or button text carries the meaning. */
export function ArrowUpRight({ size = 14 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 11.5l7-7M6 4.5h5.5V10" />
    </svg>
  )
}

export function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 8h11M9 3.5L13.5 8 9 12.5" />
    </svg>
  )
}

export function Sparkle({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0c.6 5.2 4.8 9.4 10 10-5.2.6-9.4 4.8-10 10-.6-5.2-4.8-9.4-10-10C5.2 9.4 9.4 5.2 10 0z" />
    </svg>
  )
}
