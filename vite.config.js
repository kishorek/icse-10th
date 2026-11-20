import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        chapter1: resolve(root, 'chapter-1.html'),
        chapter12a: resolve(root, 'chapter-12a.html'),
        chapter12b: resolve(root, 'chapter-12b.html')
      }
    }
  }
})
