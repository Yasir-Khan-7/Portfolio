/**
 * lucide-react v1 dropped brand marks. GitHub and LinkedIn are logos rather than
 * UI icons, so they stay solid — outlining them would cost the recognition that
 * is the entire point of a brand mark. Sized to sit optically with the 1.75
 * stroke lucide icons they sit beside.
 */
import type { SVGProps } from 'react'

/** `strokeWidth` is accepted and ignored so these drop into the same call sites
    as the stroked lucide icons without special-casing at every usage. */
type IconProps = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & {
  size?: number
  strokeWidth?: number
}

export function Github({ size = 16, strokeWidth: _sw, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M12 .5C5.73.5.66 5.58.66 11.85c0 5.01 3.25 9.26 7.75 10.76.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.13-3.15.69-3.82-1.33-3.82-1.33-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.73.4-1.24.72-1.52-2.52-.29-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.16-3.05-.12-.29-.5-1.44.11-3 0 0 .95-.31 3.12 1.16a10.8 10.8 0 0 1 2.84-.38c.96 0 1.94.13 2.85.38 2.17-1.47 3.12-1.16 3.12-1.16.62 1.56.23 2.71.11 3 .72.8 1.16 1.81 1.16 3.05 0 4.36-2.66 5.32-5.19 5.6.41.36.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.15 0 .3.2.66.79.55a11.36 11.36 0 0 0 7.74-10.76C23.34 5.58 18.27.5 12 .5Z" />
    </svg>
  )
}

export function Linkedin({ size = 16, strokeWidth: _sw2, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}
