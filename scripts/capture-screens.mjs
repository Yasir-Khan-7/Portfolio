/**
 * Captures fresh desktop and mobile screenshots of the four PUBLIC client sites
 * shown in the project cards, at 2x device scale, and saves them as WebP.
 *
 *   npm run shots
 *
 * Pak Sadat is deliberately absent: it is a private client system. Its card is
 * an HTML/CSS mock-up with demo data only. Never add it here.
 */
import { chromium } from 'playwright'
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const OUT = path.resolve('public/images/clients')

const SITES = [
  { id: 'otenga', url: 'https://otenga.io' },
  { id: 'madikha', url: 'https://dr-madikha-khan-website.vercel.app/' },
  { id: 'bebenoura', url: 'https://www.bebenoura.com/' },
  { id: 'orbit', url: 'https://orbitdigital.uk/' },
]

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900, isMobile: false, outWidth: 1440 },
  { name: 'mobile', width: 390, height: 844, isMobile: true, outWidth: 780 },
]

// Hides floating WhatsApp/chat bubbles and cookie banners before capture.
const HIDE_FLOATERS = `
  (() => {
    const sel = [
      'a[href*="wa.me"]', 'a[href*="whatsapp"]', '[class*="whatsapp" i]', '[id*="whatsapp" i]',
      '[class*="chat-widget" i]', '[id*="chat-widget" i]', 'iframe[src*="tawk"]', '[class*="intercom" i]',
      '[class*="crisp" i]', '[id*="crisp" i]', '[class*="cookie" i]', '[id*="cookie" i]',
    ];
    for (const s of sel) {
      document.querySelectorAll(s).forEach((el) => {
        const cs = getComputedStyle(el);
        // Only hide fixed/floating elements, never inline content links.
        let node = el, floating = false;
        for (let i = 0; i < 4 && node; i++, node = node.parentElement) {
          const p = getComputedStyle(node).position;
          if (p === 'fixed' || p === 'sticky' && s.includes('cookie')) { floating = true; el = node; break; }
        }
        if (floating || cs.position === 'fixed') el.style.setProperty('display', 'none', 'important');
      });
    }
    // Any remaining small fixed element pinned to the bottom-right corner.
    document.querySelectorAll('body *').forEach((el) => {
      const cs = getComputedStyle(el);
      if (cs.position !== 'fixed') return;
      const r = el.getBoundingClientRect();
      if (r.width < 120 && r.height < 120 && r.right > innerWidth - 160 && r.bottom > innerHeight - 160) {
        el.style.setProperty('display', 'none', 'important');
      }
    });
  })();
`

await mkdir(OUT, { recursive: true })
const browser = await chromium.launch()

for (const site of SITES) {
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
      isMobile: vp.isMobile,
      hasTouch: vp.isMobile,
      reducedMotion: 'reduce',
    })
    const page = await ctx.newPage()
    try {
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 60000 })
    } catch {
      await page.goto(site.url, { waitUntil: 'load', timeout: 60000 })
    }
    await page.waitForTimeout(2500)
    await page.evaluate(HIDE_FLOATERS)
    await page.waitForTimeout(400)
    const png = await page.screenshot({ type: 'png' })
    const file = path.join(OUT, `${site.id}-${vp.name}.webp`)
    await sharp(png).resize({ width: vp.outWidth }).webp({ quality: 82 }).toFile(file)
    console.log('saved', file)
    await ctx.close()
  }
}

await browser.close()
