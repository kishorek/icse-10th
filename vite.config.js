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
        physics1: resolve(root, 'chapter-physics-1.html'),
        physics2: resolve(root, 'chapter-physics-2.html'),
        chapter1: resolve(root, 'chapter-1.html'),
        chapter12a: resolve(root, 'chapter-12a.html'),
        chapter12b: resolve(root, 'chapter-12b.html'),
        chapter12c: resolve(root, 'chapter-12c.html'),
        chapter12d: resolve(root, 'chapter-12d.html'),
        chapter12e: resolve(root, 'chapter-12e.html'),
        chapter12f: resolve(root, 'chapter-12f.html')
      }
    }
  }
})
