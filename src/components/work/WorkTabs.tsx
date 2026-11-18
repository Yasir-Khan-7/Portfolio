'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, type ReactNode } from 'react'

type Tab = 'delivered' | 'personal'

/**
 * Two tabs as real toggle buttons (aria-pressed). The choice lives in the URL
 * (?tab=personal) so it survives reloads and can be linked to.
 */
export function WorkTabs({ counts, delivered, personal }: { counts: Record<Tab, number>; delivered: ReactNode; personal: ReactNode }) {
  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const tab: Tab = params.get('tab') === 'personal' ? 'personal' : 'delivered'

  const select = (t: Tab) => {
    router.replace(t === 'personal' ? `${pathname}?tab=personal` : pathname, { scroll: false })
  }

  // New content entering after a tab switch should be visible straight away.
  useEffect(() => {
    document.querySelectorAll('.work-panel [data-reveal]').forEach((el) => el.classList.add('is-in'))
  }, [tab])

  return (
    <>
      <div className="work-tabs" role="group" aria-label="Show projects">
        <button type="button" className="work-tab" aria-pressed={tab === 'delivered'} aria-controls="work-panel" onClick={() => select('delivered')}>
          Recently delivered · {counts.delivered}
        </button>
        <button type="button" className="work-tab" aria-pressed={tab === 'personal'} aria-controls="work-panel" onClick={() => select('personal')}>
          Personal projects · {counts.personal}
        </button>
      </div>
      <div id="work-panel" className="work-panel" aria-live="polite">
        <p className="label work-panel__label">{tab === 'delivered' ? 'Recently delivered for clients' : 'Personal projects'}</p>
        {tab === 'delivered' ? delivered : personal}
      </div>
    </>
  )
}
