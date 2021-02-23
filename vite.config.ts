import { defineConfig } from 'vite'

import preactRefresh from '@prefresh/vite'
import { minifyHtml } from 'vite-plugin-html'

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    assetsDir: './',
    emptyOutDir: true
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`
  },
  resolve: {
    alias: [
      { find: 'react', replacement: 'preact/compat' },
      { find: 'react-dom', replacement: 'preact/compat' }
    ]
  },
  plugins: [preactRefresh(), minifyHtml()]
})
