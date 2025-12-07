/**
 * Tailwind CSS Configuration
 *
 * Purpose: Define custom theme extensions for India-inspired design system.
 *
 * Design Tokens:
 * - Gold palette: Warm ceremonial gold (#D4A843 base)
 * - Orange palette: Vibrant marigold/saffron (#E07C3E base)
 * - Earth palette: Grounding brown tones (#5C4033 base)
 *
 * Note: Tailwind CSS 4.x uses CSS-first configuration.
 * Custom theme values are defined in src/styles/global.css using @theme.
 * This file serves as documentation and for tooling compatibility.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      /**
       * India-Inspired Color Palette
       *
       * Gold: Ceremonial and decorative gold (#D4A843 as 500)
       *   - Used for: Headings, accents, decorative elements
       *   - Lighter shades (100-400): Backgrounds, borders
       *   - Darker shades (600-900): Text, emphasis
       *
       * Orange: Marigold/Saffron warmth (#E07C3E as 500)
       *   - Used for: CTAs, highlights, event indicators
       *   - Represents festivity and celebration
       *
       * Earth: Grounding brown (#5C4033 as 700)
       *   - Used for: Text, borders, subtle backgrounds
       *   - Provides visual stability and warmth
       *
       * Actual values defined via @theme in global.css for Tailwind v4
       */
      colors: {
        gold: {
          50: '#FDF9F0',
          100: '#FBF2DC',
          200: '#F5E4B8',
          300: '#EDD28E',
          400: '#E3BE64',
          500: '#D4A843',
          600: '#B88E36',
          700: '#9A752C',
          800: '#7C5D23',
          900: '#5E461A',
          950: '#3F2F11',
        },
        orange: {
          50: '#FEF5F0',
          100: '#FDEAD9',
          200: '#FAD0B0',
          300: '#F5B07D',
          400: '#ED8E4F',
          500: '#E07C3E',
          600: '#C56630',
          700: '#A45126',
          800: '#833F1E',
          900: '#632F17',
          950: '#421F0F',
        },
        earth: {
          50: '#F7F5F3',
          100: '#EDE9E5',
          200: '#DCD4CC',
          300: '#C5B9AB',
          400: '#AC9A87',
          500: '#8C7A66',
          600: '#746351',
          700: '#5C4033',
          800: '#4A3329',
          900: '#38271F',
          950: '#251A14',
        },
      },

      /**
       * Typography
       *
       * System font stack for performance and native feel.
       * Base size: 16px (1rem)
       * Heading scale follows typographic ratio
       */
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },

      /**
       * Border Radius Tokens
       *
       * card: 8px - Content sections, modal containers
       * button: 4px - Interactive elements, form inputs
       */
      borderRadius: {
        card: '0.5rem',
        button: '0.25rem',
      },

      /**
       * Box Shadows
       *
       * Subtle shadows for card elevation
       */
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
