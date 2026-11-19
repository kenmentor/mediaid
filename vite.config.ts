import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import { optimizeCss, optimizeImports } from 'carbon-preprocess-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: [optimizeImports()]
    }),
    optimizeCss()
  ]
})
