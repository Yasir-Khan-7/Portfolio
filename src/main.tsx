import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import './styles/workbench.css'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'
import NotFound from './pages/NotFound'
import ServicesMoved from './pages/ServicesMoved'

/**
 * Every route below is also emitted as a real static HTML file by the build
 * (see vite.config.ts), so each one returns a 200 with its own head tags rather
 * than relying on the 404 shim. The paths here must match those file names
 * exactly — GitHub Pages serves `projects.html` at `/projects`, so the route is
 * `/projects` with no trailing slash. `/services` was a separate page and now
 * forwards to the services section of the home page.
 *
 * The wildcard renders NotFound, never Home. Rendering Home here would let React
 * overwrite a correctly served page with the wrong one on hydration, and would
 * turn every bad URL into an indexable duplicate of the home page.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesMoved />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
