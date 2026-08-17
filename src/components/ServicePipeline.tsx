import { ArrowUpRight } from 'lucide-react'
import { articles, pipeline } from '../data/services'
import { HashLink } from './HashLink'
import { Bay, BayHead, Frame, Label, Pane } from './Glaze'
import { Reveal } from './Reveal'

const bay = articles[2]

/**
 * How the work runs — six panes read left to right, the way an elevation is.
 *
 * The load-bearing column is `owner`: it is what tells a client which stages
 * need *them*, the question every agency process diagram quietly refuses to
 * answer. It is printed as a word, never as a colour — in this world colour is
 * reserved for what matters now, and spending it on a taxonomy would make the
 * cobalt pane stop meaning anything.
 */
const ownerCopy: Record<string, string> = {
  you: 'Needs you',
  me: 'On me',
  both: 'Together',
}

export function ServicePipeline() {
  return (
    <Bay id={bay.id}>
      <BayHead
        title={bay.title}
        meta={`${pipeline.stages.length} stages`}
        lede={pipeline.lede}
      />

      <Reveal className="col-span-full">
        <Frame className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {pipeline.stages.map((s) => (
            <Pane key={s.id} tone="seeded" as="article" className="flex flex-col p-4 md:p-5">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="g-sub text-[1.0625rem]">{s.name}</h3>
              </div>
              <Label className="mt-2 text-glass-ink-3">{ownerCopy[s.owner]}</Label>

              <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-glass-ink-2">
                {s.detail}
              </p>

              <div className="mt-5 border-t border-bar/15 pt-3">
                <Label className="text-glass-ink-3">Produces</Label>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-glass-ink">
                  {s.output}
                </p>
              </div>
            </Pane>
          ))}
        </Frame>
      </Reveal>

      <Pane tone="clear" className="col-span-full px-4 py-5 md:px-6">
        <p className="g-body text-[0.9375rem]">
          This is the process run on client systems taken from first commit to production. See{' '}
          <HashLink
            nodeId="experience"
            className="font-semibold text-cobalt underline underline-offset-4 hover:text-cobalt-deep"
          >
            where I have shipped this before
            <ArrowUpRight
              size={12}
              strokeWidth={2.5}
              aria-hidden="true"
              className="ml-0.5 inline-block align-baseline"
            />
          </HashLink>
          .
        </p>
      </Pane>
    </Bay>
  )
}
