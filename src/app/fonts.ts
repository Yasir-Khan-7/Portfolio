import {
  Archivo,
  Bricolage_Grotesque,
  Fraunces,
  Geist,
  Geist_Mono,
  Instrument_Sans,
  Instrument_Serif,
  Inter,
  Old_Standard_TT,
} from 'next/font/google'

/* Site shell: preloaded, they are above the fold on every page. */
export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '800'],
  variable: '--font-display',
  display: 'swap',
})
export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['italic'],
  variable: '--font-serif',
  display: 'swap',
})
export const geist = Geist({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-body', display: 'swap' })
export const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

/* Project-card fonts: only used below the fold, so never preloaded. */
export const archivo = Archivo({ subsets: ['latin'], weight: ['500', '800'], variable: '--font-archivo', preload: false })
export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  preload: false,
})
export const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter', preload: false })
export const oldStandard = Old_Standard_TT({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-oldstandard',
  preload: false,
})
export const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-isans',
  preload: false,
})

export const fontVars = [
  bricolage,
  instrumentSerif,
  geist,
  geistMono,
  archivo,
  fraunces,
  inter,
  oldStandard,
  instrumentSans,
]
  .map((f) => f.variable)
  .join(' ')
