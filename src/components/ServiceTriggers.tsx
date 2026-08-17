import { articles, jobs, triggers } from '../data/services'
import { Bay, BayHead, Frame, Label, Pane } from './Glaze'
import { Reveal } from './Reveal'

const bay = articles[1]
const nameOf = (id: string) => jobs.find((j) => j.id === id)?.name ?? id

/**
 * Who this is for — three panes, equal weight.
 *
 * They are variants of the same engagement, so they get the same pane size and
 * the same internal structure. Making one bigger would say one client type is
 * more welcome than another, which is not true.
 */
export function ServiceTriggers() {
  return (
    <Bay id={bay.id}>
      <BayHead title={bay.title} meta="3 kinds of client" lede={triggers.lede} />

      <Reveal className="col-span-full">
        <Frame className="grid-cols-1 lg:grid-cols-3">
          {triggers.items.map((t) => (
            <Pane key={t.id} tone="clear" as="article" className="flex flex-col p-5 md:p-6">
              <h3 className="g-sub text-[clamp(1.125rem,2.2vw,1.5rem)]">{t.who}</h3>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-glass-ink-3">
                {t.arrivesWith}
              </p>
              <p className="g-body mt-4 flex-1 text-[0.9375rem]">{t.note}</p>

              <div className="mt-6">
                <Label className="text-glass-ink-3">Usually</Label>
                <p className="mt-1.5 text-[0.875rem] leading-relaxed text-glass-ink">
                  {t.routesTo.map((j) => nameOf(j)).join(' · ')}
                </p>
              </div>
            </Pane>
          ))}
        </Frame>
      </Reveal>
    </Bay>
  )
}
