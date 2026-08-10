import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Deployed to GitHub Pages at https://yasir-khan-7.github.io/Portfolio/
// so every emitted asset URL has to carry the /Portfolio/ prefix.
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    assetsInlineLimit: 2048,
  },
})
