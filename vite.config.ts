import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      // Icons are already precached via globPatterns (png), avoid duplicates
      includeManifestIcons: false,

      manifest: {
        name: 'FrontendNow – PixelFlow',
        short_name: 'PixelFlow',
        description: 'Konferenzprogramm mit Sessions und Speakern',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        theme_color: '#101c2c',
        background_color: '#f9fafb',

        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          // Same file: background is full-bleed and "PF" lies inside the
          // maskable safe zone (central circle, 80 % diameter).
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },

      workbox: {
        // ── RULE A: App shell → Precaching ───────────────────────────────
        // Concept: "Statische Assets und App-Shell". Build files are
        // precached and replaced when a new SW version is installed.
        // json is deliberately NOT listed, so the conference data goes
        // through the runtime rules below.
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api\//], // data URLs never get index.html
        cleanupOutdatedCaches: true,

        // ── Personal program → no SW rule ────────────────────────────────
        // Concept: "Persönliches Programm". Stored in localStorage
        // (useMyProgram.ts), so no network request is involved. Offline it
        // only needs the app shell from RULE A.

        runtimeCaching: [
          // ── RULE B: Sessions → Cache First ─────────────────────────────
          // Concept: "Sessions und Speaker Daten". The program hardly
          // changes after it is published: serve from cache, go to the
          // network only if nothing is cached yet.
          {
            urlPattern: /\/api\/sessions\.json$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'pixelflow-sessions',
              cacheableResponse: { statuses: [200] } // never cache error responses
            }
          },

          // ── RULE C: Speakers → Cache First ─────────────────────────────
          // Same decision as RULE B: speaker profiles are effectively static.
          {
            urlPattern: /\/api\/speakers\.json$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'pixelflow-speakers',
              cacheableResponse: { statuses: [200] }
            }
          },

          // ── RULE D: Conference metadata (tracks, rooms) → Cache First ──
          // Part of the program, so it follows the same decision. Without
          // it, rooms and tracks would be missing from the offline views.
          {
            urlPattern: /\/api\/conference\.json$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'pixelflow-conference',
              cacheableResponse: { statuses: [200] }
            }
          }
        ]
      }
    })
  ]
})
