/**
 * Astro Configuration
 *
 * Purpose: Configure Astro for static site generation targeting Netlify deployment.
 *
 * Key Settings:
 * - output: 'static' for pre-rendered HTML files
 * - site: Placeholder URL for production deployment
 */
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Static output mode for Netlify compatibility
  output: 'static',

  // Site URL placeholder - update when Netlify domain is configured
  site: 'https://india-trip.netlify.app',

  vite: {
    plugins: [tailwindcss()],
  },
});