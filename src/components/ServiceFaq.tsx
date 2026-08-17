import { Minus, Plus } from 'lucide-react'
import { articles, faq } from '../data/services'
import { Bay, BayHead, Frame, Pane } from './Glaze'
import { Reveal } from './Reveal'

const bay = articles[5]

/**
 * Questions answered.
 *
 * Native <details>/<summary>, each one its own pane. Not a JavaScript
 * accordion: it is keyboard operable and screen-reader announced for free, it
 * survives JavaScript failing, and — the reason that decided it — its content
 * is in the served markup, which is the only form the AI crawlers can read.
 * They fetch the page and never execute its JavaScript.
 *
 * The first is open by default so the bay never reads as a wall of shut panes.
 * An open pane goes clear; a closed one stays seeded, so the wall shows at a
 * glance which light is on — the world's own hover-backlights-a-pane rule
 * applied to a real state rather than to decoration.
 */
export function ServiceFaq() {
  return (
    <Bay id={bay.id}>
      <BayHead title={bay.title} meta={`${faq.items.length} questions`} />

      <Reveal className="col-span-full">
        <Frame className="grid-cols-1 lg:grid-cols-2">
          {faq.items.map((item, i) => (
            <Pane key={item.q} tone="seeded" className="g-faq-pane">
              <details open={i === 0} className="group h-full">
                <summary className="flex cursor-pointer list-none items-start gap-4 p-4 md:p-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="g-sub min-w-0 flex-1 text-[1rem] leading-snug">{item.q}</h3>
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-bar text-glass transition-colors group-open:bg-cobalt"
                    aria-hidden="true"
                  >
                    <Plus size={13} strokeWidth={2.5} className="group-open:hidden" />
                    <Minus size={13} strokeWidth={2.5} className="hidden group-open:block" />
                  </span>
                </summary>
                <div className="px-4 pb-5 md:px-5">
                  <p className="g-body text-[0.9375rem]">{item.a}</p>
                </div>
              </details>
            </Pane>
          ))}
        </Frame>
      </Reveal>
    </Bay>
  )
}
