# Specification: Static Site Foundation

## Goal

Establish the foundational Astro static site with TypeScript, JSON-based data storage, sidebar navigation, and warm India-inspired styling, delivering 4 functional pages (Home, Itinerary, Bookings, Packing List) and 2 placeholder pages (Map, Shopping) ready for Netlify deployment.

## User Stories

- As the primary trip planner, I want a single website that displays all trip information so that I can access itinerary, bookings, and packing lists from any device
- As a travel companion, I want to see the wedding event schedule integrated into the itinerary so that I know exactly when and where each ceremony takes place

## Specific Requirements

**Astro Project Initialization**
- Initialize Astro project with TypeScript strict mode enabled
- Configure `astro.config.mjs` with static output mode for Netlify compatibility
- Install and configure Tailwind CSS via `@astrojs/tailwind` integration
- Create `tsconfig.json` with path aliases: `@components/*`, `@layouts/*`, `@data/*`
- Add Prettier and ESLint with Astro-specific plugins

**JSON Data Architecture**
- Create `src/data/trip.json` containing trip metadata (destination, dates, timezone, purpose)
- Create `src/data/travelers.json` with traveler profiles and visa information
- Create `src/data/flights.json` with flight segments using ISO 8601 dates and 24-hour times
- Create `src/data/events.json` with wedding ceremony details (venue, time, type, address)
- Create `src/data/packing.json` with categorized packing items (essentials, wedding attire, shopping)
- All JSON files must handle null/TBC values gracefully for pending venue confirmations

**Base Layout Component**
- Create `src/layouts/BaseLayout.astro` wrapping all pages with consistent structure
- Layout includes sidebar navigation (fixed left, 240px width on desktop)
- Main content area with proper padding and max-width constraints
- Responsive behavior: sidebar collapses to hamburger menu on screens below 768px
- Include meta tags for SEO and social sharing (Open Graph)

**Sidebar Navigation Component**
- Create `src/components/Sidebar.astro` with navigation links to all 6 pages
- Visual indicator for active page using Astro's `Astro.url.pathname`
- Navigation order: Home, Itinerary, Bookings, Packing List, Map, Shopping
- Map and Shopping links styled as "Coming Soon" with muted appearance
- Mobile: full-screen overlay menu with close button

**Home Page**
- Route: `/` (src/pages/index.astro)
- Hero section with trip title "Chennai Wedding Trip 2026" and date range
- Quick stats cards: days until departure, number of events, trip duration
- Overview of wedding events with dates (not full details)
- Quick links to Itinerary and Bookings pages

**Itinerary Page**
- Route: `/itinerary` (src/pages/itinerary.astro)
- Timeline view organized by date from January 20 to February 5, 2026
- Each day shows: date header, activities/events for that day
- Wedding events display venue, time, address, and event type badge
- Visual distinction between travel days, free days, and event days
- Handle "TBC" venues by showing "Venue To Be Confirmed" placeholder

**Bookings Page**
- Route: `/bookings` (src/pages/bookings.astro)
- Flight section: Emirates confirmation code, all 4 flight segments with times
- Visa section: ETA number, validity dates, status badge ("GRANTED")
- Accommodation section: Park Hyatt Chennai with "Under Consideration" status
- Each flight segment shows: route, date, departure/arrival times, duration, flight number
- Visual grouping of outbound vs return flights

**Packing List Page**
- Route: `/packing` (src/pages/packing.astro)
- Categorized sections: Essentials, Documents, Wedding Attire, Electronics, Shopping Supplies
- Each item rendered as checkbox with label (state not persisted in Phase 1)
- Category headers with item count
- Clean list layout without complex interactivity

**Placeholder Pages**
- Route: `/map` and `/shopping` (src/pages/map.astro, src/pages/shopping.astro)
- Display centered "Coming in Phase 2" message with brief description
- Consistent styling with rest of site
- Navigation remains fully functional

**Design System and Theming**
- Tailwind config with custom color palette: gold-500 (#D4A843), orange-500 (#E07C3E), earth-700 (#5C4033)
- Typography: system font stack with readable sizes (base 16px, headings scale)
- Spacing scale following Tailwind defaults (4px base unit)
- Card component pattern for content sections with subtle shadows
- Consistent border radius (8px for cards, 4px for buttons)

## Visual Design

No visual mockups provided. Implementation follows described design direction: warm India-inspired tones (golds, oranges, earth tones), sidebar navigation, clean content-focused layout.

## Existing Code to Leverage

**Greenfield Project**
- No existing codebase to reference
- Standard Astro project structure and conventions should be followed
- Tailwind CSS documentation patterns for responsive design
- Astro component patterns from official documentation

## Out of Scope

- Interactive map with Leaflet/markers (Phase 2)
- Full shopping page with vendor data and recommendations (Phase 2)
- Flight tracking API integration and real-time status (Phase 2)
- Packing list checkbox state persistence via LocalStorage (Phase 2)
- User authentication and login (Phase 3)
- Real-time collaboration and data sync via Supabase (Phase 3)
- Comments system on itinerary items (Phase 3)
- GitHub repository setup and CI/CD configuration
- Custom domain configuration on Netlify
- PWA/offline functionality
- Dark mode toggle
