import type { NextConfig } from 'next'

/**
 * Static export, so the same `out/` folder deploys to GitHub Pages or Vercel.
 *
 * GitHub Pages serves this repo from a project subpath, so the deploy workflow
 * builds with NEXT_PUBLIC_BASE_PATH=/Portfolio. Locally, and on Vercel or any
 * root domain, leave it unset.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const config: NextConfig = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  trailingSlash: false,
  reactStrictMode: true,
}

export default config
