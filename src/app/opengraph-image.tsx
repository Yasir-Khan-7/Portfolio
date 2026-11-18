import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'Yasir Khan — I ship AI systems from first call to production.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: '#FBFBF9', color: '#0A0A0A' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 34, fontWeight: 700 }}>
          <div style={{ width: 22, height: 22, borderRadius: 5, background: '#8ACBF3' }} />
          Yasir Khan
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 92, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
          <span>I ship AI systems</span>
          <span>from first call to</span>
          <span style={{ color: '#2E86C1' }}>production.</span>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#5C5C5C', letterSpacing: 2 }}>AI ENGINEER · FORWARD DEPLOYED ENGINEER</div>
      </div>
    ),
    size,
  )
}
