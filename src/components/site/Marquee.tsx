import { Fragment } from 'react'
import { marquee } from '@/content/site'
import { Sparkle } from './icons'

export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {marquee.map((m) => (
        <Fragment key={m}>
          <li>{m}</li>
          <li className="marquee__star" aria-hidden="true">
            <Sparkle />
          </li>
        </Fragment>
      ))}
    </ul>
  )
  return (
    <section className="marquee" aria-label="What I work with">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </section>
  )
}
