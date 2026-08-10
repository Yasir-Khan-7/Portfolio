import { skillGroups } from '../data/site'
import type { RunState } from '../hooks/useRun'
import { NodeHeading, NodeSection } from './NodeHeading'
import { Reveal } from './Reveal'

/**
 * Skill levels are a single measure, so they carry a single hue. `active` in the
 * source data is emphasis, not a second series — it is expressed in label weight
 * and a marker, never as a second fill colour with no legend to explain it.
 * Axis is a real shared 0–100 with gridlines, so the bars can be compared.
 */
function SkillBars({ title, skills }: (typeof skillGroups)[number]) {
  return (
    <figure className="node p-5 md:p-6">
      <figcaption className="mb-5 flex items-baseline justify-between gap-3 border-b border-rule pb-2.5">
        <h3 className="text-[1.0625rem] font-semibold text-ink">{title}</h3>
        <span className="t-mono text-ink-3">{skills.length} tracked</span>
      </figcaption>

      <div className="relative">
        <ul className="relative space-y-3.5">
          {skills.map((s) => (
            <li key={s.name}>
              <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <span
                  className={`flex items-center gap-2 text-[0.875rem] ${
                    s.active ? 'font-semibold text-ink' : 'font-normal text-ink-2'
                  }`}
                >
                  {s.active && (
                    <span
                      className="h-1.5 w-1.5 shrink-0 bg-signal"
                      aria-label="core skill"
                      role="img"
                    />
                  )}
                  {s.name}
                </span>
                <span className="t-mono shrink-0 text-ink-3">{s.level}</span>
              </div>
              {/* Quarter gridlines live inside the track, so they measure the
                  bars without cutting through the labels above them. */}
              <div
                className="h-1.5 w-full bg-panel-sunk"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(to right, var(--color-rule-soft) 0 1px, transparent 1px 25%)',
                }}
              >
                <div
                  className="h-full rounded-r-[2px] bg-ink"
                  style={{ width: `${s.level}%` }}
                  role="img"
                  aria-label={`${s.name}: ${s.level} out of 100`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex justify-between border-t border-rule-soft pt-2 t-mono text-ink-3">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
    </figure>
  )
}

export function Skills({ state }: { state: RunState }) {
  return (
    <NodeSection id="skills">
      <NodeHeading taskId="t2.skills" state={state} meta="resources · self-assessed">
        Skills
      </NodeHeading>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 70}>
            <SkillBars {...g} />
          </Reveal>
        ))}
      </div>
    </NodeSection>
  )
}
