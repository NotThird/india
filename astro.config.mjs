/**
 * Astro Configuration
 *
 * Purpose: Configure Astro for static site generation targeting Netlify deployment.
 *
 * Key Settings:
 * - output: 'static' for pre-rendered HTML files
 * - site: Placeholder URL for production deployment
 * - PWA support for offline access
 */
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  // Static output mode for Netlify compatibility
  output: 'static',

  // Site URL placeholder - update when Netlify domain is configured
  site: 'https://india-trip.netlify.app',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    AstroPWA({
      mode: 'production',
      base: '/',
      scope: '/',
      includeAssets: ['favicon.svg'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Chennai Wedding Trip 2026',
        short_name: 'India Trip',
        description: 'Plan and track your Chennai Wedding Trip - itinerary, bookings, packing lists, and more.',
        theme_color: '#D4A853',
        background_color: '#FFF8F0',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any'
          }
        ]
      },
      workbox: {
        navigateFallback: '/offline',
        navigateFallbackDenylist: [/^\/api/],
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,json,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.exchangerate-api\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'exchange-rate-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 // 1 hour
              }
            }
          },
          {
            urlPattern: /^https:\/\/.*\.tile\.openstreetmap\.org\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'map-tiles-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 1 week
              }
            }
          }
        ]
      },
      devOptions: {
        enabled: false
      }
    })
  ]
});
