/**
 * Absolute URLs for canonicals, Open Graph and JSON-LD.
 *
 * Imported by vite.config.ts at build time, so this module must stay free of
 * `import.meta.env` and anything else browser-only at module scope.
 */

export const SITE_ORIGIN = 'https://yasir-khan-7.github.io'
export const SITE_URL = `${SITE_ORIGIN}/Portfolio/`

/**
 * No trailing slash: the build emits a flat `projects.html`, which GitHub Pages
 * serves at `/Portfolio/projects` with a 200 and no redirect, matching the
 * router path exactly.
 */
export const PROJECTS_URL = `${SITE_ORIGIN}/Portfolio/projects`

/** 1200x630 share card, matching the `og:image:width`/`height` the head declares. */
export const OG_IMAGE_HOME = `${SITE_ORIGIN}/Portfolio/images/og/og-home.png`
