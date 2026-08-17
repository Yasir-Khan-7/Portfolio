import { articles, engagement } from '../data/services'
import { Bay, BayHead, Frame, Label, Pane } from './Glaze'
import { Reveal } from './Reveal'

const bay = articles[3]

/**
 * How we contract — three models, the same four fields each, so they read
 * across as a comparison.
 *
 * The fourth field is the one nobody publishes: what the model does NOT
 * include. It gets its own pane at the foot of each column, because it is what
 * makes the other three believable.
 *
 * No figures appear anywhere in this bay, by the site owner's decision. The
 * lede says why, and it is the same reason there is no price pane: a number
 * set before a scope exists is a guess.
 */
const rows = [
  { key: 'bestFor', label: 'Best for' },
  { key: 'scope', label: 'Scope' },
  { key: 'ends', label: 'How it ends' },
] as const

export function ServiceEngagement() {
  return (
    <Bay id={bay.id}>
      <BayHead
        title={bay.title}
        meta={`${engagement.models.length} models`}
        lede={engagement.lede}
      />

      <Reveal className="col-span-full">
        <Frame className="grid-cols-1 lg:grid-cols-3">
          {engagement.models.map((m) => (
            <Frame key={m.id} className="grid-rows-[auto_1fr_auto]">
              <Pane tone="clear" className="p-5 md:p-6">
                <h3 className="g-sub text-[clamp(1.125rem,2.2vw,1.5rem)]">{m.name}</h3>
                <Label className="mt-2 text-glass-ink-3">{m.shape}</Label>
              </Pane>

              <Pane tone="seeded" className="p-5 md:p-6">
                <dl className="space-y-4">
                  {rows.map(({ key, label }) => (
                    <div key={key}>
                      <dt className="g-label text-glass-ink-3">{label}</dt>
                      <dd className="mt-1.5 text-[0.875rem] leading-relaxed text-glass-ink-2">
                        {m[key]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Pane>

              <Pane tone="oxblood" className="p-5 md:p-6">
                <Label className="text-white/70">Not included</Label>
                <p className="mt-1.5 text-[0.875rem] leading-relaxed text-white">
                  {m.notIncluded}
                </p>
              </Pane>
            </Frame>
          ))}
        </Frame>
      </Reveal>
    </Bay>
  )
}
