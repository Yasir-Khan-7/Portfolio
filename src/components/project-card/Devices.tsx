import type { CSSProperties, ReactNode } from 'react'
import { asset } from '@/lib/site'

type Pos = { className?: string; style?: CSSProperties }

/** A laptop frame. Pass `src` for a screenshot, or children for an HTML mock-up. */
export function Laptop({ src, alt, children, className = '', style }: Pos & { src?: string; alt?: string; children?: ReactNode }) {
  return (
    <div className={`laptop ${className}`} style={style}>
      <div className="laptop__lid">
        <div className="laptop__screen">
          {src ? (
            <img src={asset(src)} alt={alt ?? ''} width={1440} height={900} loading="lazy" decoding="async" />
          ) : (
            children
          )}
        </div>
      </div>
      <div className="laptop__base" aria-hidden="true" />
    </div>
  )
}

export function Phone({ src, alt, className = '', style }: Pos & { src: string; alt: string }) {
  return (
    <div className={`phone ${className}`} style={style}>
      <div className="phone__screen">
        <img src={asset(src)} alt={alt} width={780} height={1688} loading="lazy" decoding="async" />
      </div>
      <span className="phone__notch" aria-hidden="true" />
    </div>
  )
}
