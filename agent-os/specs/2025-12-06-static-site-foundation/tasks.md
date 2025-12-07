# Tasks: Static Site Foundation

## Overview

This task breakdown implements the Static Site Foundation spec for the Chennai Wedding Trip website. Tasks are grouped by specialization and ordered by dependencies.

**Total Task Groups:** 7
**Estimated Total Tasks:** 32

---

## Group 1: Project Initialization

**Dependencies:** None
**Purpose:** Establish the Astro project with TypeScript, Tailwind, and tooling configuration.

- [x] 1.1 Initialize Astro project with TypeScript
  - Run `npm create astro@latest` with TypeScript strict mode
  - Select empty template (minimal starter)
  - Output directory: `C:\Users\theth\india-trip-website`

- [x] 1.2 Configure astro.config.mjs for static output
  - Set `output: 'static'` for Netlify compatibility
  - Configure site URL placeholder
  - File: `astro.config.mjs`

- [x] 1.3 Install and configure Tailwind CSS integration
  - Install `@astrojs/tailwind` and dependencies
  - Add integration to astro.config.mjs
  - File: `tailwind.config.mjs`

- [x] 1.4 Configure TypeScript path aliases
  - Add path aliases: `@components/*`, `@layouts/*`, `@data/*`
  - File: `tsconfig.json`

- [x] 1.5 Add Prettier and ESLint with Astro plugins
  - Install: `prettier`, `eslint`, `eslint-plugin-astro`, `prettier-plugin-astro`
  - Create configuration files
  - Files: `.prettierrc`, `.eslintrc.cjs`

**Acceptance Criteria:**
- `npm run dev` starts development server without errors
- TypeScript compilation succeeds with strict mode
- Tailwind classes apply correctly
- Path aliases resolve in imports

---

## Group 2: Design System and Theming

**Dependencies:** Group 1
**Purpose:** Establish the warm India-inspired color palette and design tokens.

- [x] 2.1 Configure Tailwind custom color palette
  - Add custom colors: `gold-500` (#D4A843), `orange-500` (#E07C3E), `earth-700` (#5C4033)
  - Extend default theme with India-inspired palette
  - File: `tailwind.config.mjs`

- [x] 2.2 Define typography and spacing scale
  - Configure system font stack
  - Set base font size (16px) and heading scale
  - Define consistent border radius tokens (8px cards, 4px buttons)
  - File: `tailwind.config.mjs`

- [x] 2.3 Create global CSS with base styles
  - Reset/normalize styles
  - Define CSS custom properties for theme colors
  - Body and typography defaults
  - File: `src/styles/global.css`

**Acceptance Criteria:**
- Custom colors available as Tailwind utilities (e.g., `bg-gold-500`)
- Typography renders with system font stack
- Spacing and sizing are consistent across components

---

## Group 3: JSON Data Layer

**Dependencies:** Group 1
**Purpose:** Create structured JSON data files containing all trip information.

- [x] 3.1 Create trip metadata JSON
  - Trip destination, dates, timezone, purpose
  - File: `src/data/trip.json`

- [x] 3.2 Create travelers JSON with visa information
  - Traveler profile: Austin Coleman Franklin
  - Visa details: ETA number, dates, status
  - File: `src/data/travelers.json`

- [x] 3.3 Create flights JSON with all segments
  - Emirates confirmation code (ES6BFF)
  - 4 flight segments with ISO dates, 24-hour times
  - Outbound: DFW->DXB->MAA, Return: MAA->DXB->DFW
  - File: `src/data/flights.json`

- [x] 3.4 Create events JSON with wedding ceremonies
  - 4 events: Mehendi, Wedding Ceremony (TBC venue), Wedding Lunch, Cocktail Party
  - Handle null/TBC values for pending venue
  - File: `src/data/events.json`

- [x] 3.5 Create packing list JSON with categories
  - Categories: Essentials, Documents, Wedding Attire, Electronics, Shopping Supplies
  - Each item with id, name, category
  - File: `src/data/packing.json`

- [x] 3.6 Create accommodation JSON
  - Park Hyatt Chennai with "considering" status
  - File: `src/data/accommodation.json`

- [x] 3.7 Create TypeScript types for data structures
  - Type definitions for Trip, Traveler, Flight, Event, PackingItem
  - Export types for use in components
  - File: `src/types/data.ts`

**Acceptance Criteria:**
- All JSON files contain accurate trip data from planning/trip-data.md
- TypeScript types match JSON structures
- JSON imports work correctly in Astro components
- TBC/null values handled without errors

---

## Group 4: Layout and Navigation Components

**Dependencies:** Groups 1, 2, 3
**Purpose:** Build the core layout structure with sidebar navigation.

- [x] 4.1 Create BaseLayout component
  - Wrap all pages with consistent HTML structure
  - Include head meta tags (SEO, Open Graph)
  - Import global styles
  - Sidebar on left (240px), main content area
  - File: `src/layouts/BaseLayout.astro`

- [x] 4.2 Create Sidebar navigation component
  - Navigation links to all 6 pages
  - Order: Home, Itinerary, Bookings, Packing List, Map, Shopping
  - Active page indicator using `Astro.url.pathname`
  - Map/Shopping styled as "Coming Soon" (muted)
  - File: `src/components/Sidebar.astro`

- [x] 4.3 Implement responsive sidebar behavior
  - Desktop: Fixed sidebar (240px width)
  - Mobile (<768px): Hamburger menu toggle
  - Mobile menu: Full-screen overlay with close button
  - Add hamburger icon component
  - Files: `src/components/Sidebar.astro`, `src/components/MobileMenu.astro`

- [x] 4.4 Create reusable Card component
  - Content sections with subtle shadows
  - Consistent padding and border radius (8px)
  - Props for title, optional subtitle
  - File: `src/components/Card.astro`

- [x] 4.5 Create Badge/Status component
  - Event type badges (pre-wedding, ceremony, reception)
  - Status badges (Granted, Considering, TBC)
  - Color variants matching design system
  - File: `src/components/Badge.astro`

**Acceptance Criteria:**
- Layout renders correctly with sidebar and main content
- Navigation highlights current page
- Sidebar collapses to hamburger on mobile
- Components use design system colors consistently

---

## Group 5: Core Page Implementation

**Dependencies:** Groups 3, 4
**Purpose:** Build the 4 fully functional pages.

- [x] 5.1 Create Home page
  - Route: `/`
  - Hero section: "Chennai Wedding Trip 2026" with date range
  - Quick stats cards: days until departure, number of events, trip duration
  - Wedding events overview (dates only, not full details)
  - Quick links to Itinerary and Bookings
  - File: `src/pages/index.astro`

- [x] 5.2 Create Itinerary page structure
  - Route: `/itinerary`
  - Timeline view organized by date (Jan 20 - Feb 5, 2026)
  - File: `src/pages/itinerary.astro`

- [x] 5.3 Implement Itinerary day entries
  - Each day: date header with day type indication
  - Visual distinction: travel days, free days, event days
  - Generate all 17 days programmatically
  - File: `src/pages/itinerary.astro`

- [x] 5.4 Implement Itinerary event display
  - Wedding events show: venue, time, address, type badge
  - Handle TBC venues with "Venue To Be Confirmed" placeholder
  - Event cards nested within day entries
  - File: `src/pages/itinerary.astro`, `src/components/EventCard.astro`

- [x] 5.5 Create Bookings page - Flight section
  - Route: `/bookings`
  - Emirates confirmation code display
  - All 4 flight segments with route, date, times, duration, flight number
  - Visual grouping: Outbound vs Return
  - File: `src/pages/bookings.astro`, `src/components/FlightCard.astro`

- [x] 5.6 Create Bookings page - Visa section
  - ETA number, validity dates (Nov 2025 - Nov 2030)
  - Status badge: "GRANTED" in green
  - Important notes display
  - File: `src/pages/bookings.astro`

- [x] 5.7 Create Bookings page - Accommodation section
  - Park Hyatt Chennai with "Under Consideration" status
  - Location and notes
  - File: `src/pages/bookings.astro`

- [x] 5.8 Create Packing List page
  - Route: `/packing`
  - Category sections with headers and item counts
  - Categories: Essentials, Documents, Wedding Attire, Electronics, Shopping Supplies
  - File: `src/pages/packing.astro`

- [x] 5.9 Implement packing list items
  - Each item as checkbox with label
  - Visual grouping by category
  - Note: checkbox state not persisted (Phase 1 limitation)
  - File: `src/pages/packing.astro`, `src/components/PackingItem.astro`

**Acceptance Criteria:**
- All 4 pages render with correct data from JSON files
- Itinerary shows all 17 days with appropriate styling
- TBC venue shows placeholder text
- Bookings displays all flight, visa, and accommodation info
- Packing list shows all categories with item counts

---

## Group 6: Placeholder Pages

**Dependencies:** Group 4
**Purpose:** Create placeholder pages for Phase 2 features.

- [x] 6.1 Create Map placeholder page
  - Route: `/map`
  - Centered "Coming in Phase 2" message with map icon
  - Brief description: "Interactive map with venue locations and travel routes"
  - Preview of venues that will be mapped
  - Consistent styling with site (warm gold/orange gradient banner)
  - File: `src/pages/map.astro`

- [x] 6.2 Create Shopping placeholder page
  - Route: `/shopping`
  - Centered "Coming in Phase 2" message with shopping bag icon
  - Brief description: "Shopping recommendations for wedding attire and cloth shopping"
  - Preview of shopping categories (silk sarees, cotton fabrics, wedding attire, jewelry)
  - Preview of shopping areas (T. Nagar, Mylapore, Pondy Bazaar, George Town)
  - Consistent styling with site
  - File: `src/pages/shopping.astro`

**Acceptance Criteria:**
- Placeholder pages accessible via navigation
- Messages clearly indicate Phase 2 status
- Navigation works correctly from placeholder pages

---

## Group 7: Final Polish and Deployment

**Dependencies:** Groups 5, 6
**Purpose:** Verify complete implementation and prepare for Netlify deployment.

- [x] 7.1 Verify responsive behavior across pages
  - Test all pages at mobile (320px), tablet (768px), desktop (1024px+)
  - Confirm sidebar toggle works on mobile
  - Fix any layout issues
  - All pages
  - Fixed: Map/Shopping nav links now navigate to actual pages (were blocked with href="#")

- [x] 7.2 Add meta tags for SEO and social sharing
  - Page-specific titles and descriptions
  - Open Graph tags for social preview
  - Created India-themed favicon (diya/lamp SVG with gold/orange colors)
  - File: `src/layouts/BaseLayout.astro`, `public/favicon.svg`

- [x] 7.3 Create Netlify configuration
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Created `netlify.toml` with security headers and caching rules
  - File: `netlify.toml`

- [x] 7.4 Build verification
  - Run `npm run build` and verify successful static output
  - Check `dist/` folder contains all expected pages (6 pages confirmed)
  - Verify no TypeScript or build errors
  - Build completes in ~1 second

- [x] 7.5 Final manual review
  - Navigate through all pages
  - Verify all trip data displays correctly
  - Confirm visual design matches warm India-inspired theme
  - TBC venue handling works correctly for Wedding Ceremony

**Acceptance Criteria:**
- Build completes without errors
- All pages render correctly at all breakpoints
- Site ready for Netlify drag-and-drop deployment
- Visual theme consistent across all pages

---

## Execution Order

1. **Group 1: Project Initialization** - Foundation must exist first
2. **Group 2: Design System** - Colors and styles before components
3. **Group 3: JSON Data Layer** - Data before pages that consume it
4. **Group 4: Layout and Navigation** - Shared components before pages
5. **Group 5: Core Pages** - Main functionality (can parallelize some tasks)
6. **Group 6: Placeholder Pages** - Simple pages depend on layout only
7. **Group 7: Final Polish** - Verification after all pages complete

---

## File Structure Summary

```
india-trip-website/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── netlify.toml
├── .prettierrc
├── .eslintrc.cjs
├── src/
│   ├── data/
│   │   ├── trip.json
│   │   ├── travelers.json
│   │   ├── flights.json
│   │   ├── events.json
│   │   ├── packing.json
│   │   └── accommodation.json
│   ├── types/
│   │   └── data.ts
│   ├── styles/
│   │   └── global.css
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Sidebar.astro
│   │   ├── MobileMenu.astro
│   │   ├── Card.astro
│   │   ├── Badge.astro
│   │   ├── EventCard.astro
│   │   ├── FlightCard.astro
│   │   └── PackingItem.astro
│   └── pages/
│       ├── index.astro
│       ├── itinerary.astro
│       ├── bookings.astro
│       ├── packing.astro
│       ├── map.astro
│       └── shopping.astro
└── dist/  (generated)
```
