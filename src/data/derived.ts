import { projects } from './projects'

export { identity, links, nodes, about, aiTools, skillGroups, experience, testimonials, contact } from './site'

export const projectCount = projects.length

/** Featured set shown on the home run; the full index lives on /projects. */
export const homeProjects = projects.slice(0, 4)
