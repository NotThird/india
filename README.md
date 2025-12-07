# India Trip Website

A comprehensive web application for planning and documenting the Chennai Wedding Trip 2026 - a 17-day India trip.

## Live Site

Deployed on Netlify (configured via netlify.toml)

## Features

### Phase 1 - Core Pages (Complete)

- **Home Page**: Trip overview with countdown, quick links, and trip summary
- **Itinerary Page**: Day-by-day schedule with wedding events and activities
- **Bookings Page**: Flight details, hotel reservations, and trip logistics
- **Packing List Page**: Categorized checklist with progress tracking

### Phase 2 - Enhanced Features (Complete)

- **Interactive Map Page**: Leaflet-powered map with all Chennai locations
  - Color-coded markers (venues, hotel, airport, shopping areas)
  - Route polylines with transport options (taxi, auto-rickshaw, walking)
  - Popup details with venue information and directions
  - Fullscreen toggle and map legend

- **Shopping Guide Page**: Comprehensive Chennai shopping resource
  - Women's and Men's wedding attire guides
  - 4 shopping areas (T-Nagar, Mylapore, Kanchipuram, Chennai Menswear)
  - 16+ shop listings with ratings, hours, and specialties
  - Price ranges, bargaining tips, and quality checks

- **Packing List Persistence**: localStorage-backed checkbox states
  - Per-category progress indicators
  - Bulk actions (Mark All / Clear All)
  - Real-time progress bar updates

- **Flight Tracker**: Emirates flight countdown banner
  - Live countdown timer to next flight
  - 4-segment journey display (DFW-DXB-MAA-DXB-DFW)
  - Boarding-pass inspired design
  - Mobile-responsive collapsible view

- **Mini-Maps on EventCards**: Venue context in itinerary
  - Compact non-interactive Leaflet maps
  - Get Directions buttons (Google Maps / Apple Maps)
  - Clickable addresses for quick navigation

## Tech Stack

- **Framework**: Astro 5.x (Static Site Generator)
- **Styling**: Tailwind CSS v4 with custom CSS properties
- **Language**: TypeScript
- **Maps**: Leaflet.js (OpenStreetMap tiles - no API key required)
- **Storage**: localStorage for persistence
- **Design System**: India-inspired warm palette (golds, oranges, earth tones)

## Project Structure

```
src/
  components/       # Reusable Astro components
    FlightTracker.astro      # Flight countdown banner
    InteractiveMap.astro     # Leaflet map with markers/routes
    MiniMap.astro            # Compact venue maps
    RoutePanel.astro         # Route toggle controls
    EventCard.astro          # Itinerary event display
    ShopCard.astro           # Shopping shop listing
    ShoppingAreaSection.astro # Shopping area with map
    PackingItem.astro        # Checkbox item component
    ...
  data/             # JSON data files
    flights.json      # Emirates flight segments
    events.json       # Wedding events schedule
    locations.json    # Map locations with coordinates
    routes.json       # Route segments with transport options
    shopping.json     # Shopping guide data
    packing.json      # Packing list categories
    ...
  layouts/          # Page layouts
    BaseLayout.astro  # Common HTML structure with sidebar
  pages/            # Route pages
    index.astro       # Home
    itinerary.astro   # Day-by-day schedule
    bookings.astro    # Flights & hotel
    packing.astro     # Packing checklist
    map.astro         # Interactive map
    shopping.astro    # Shopping guide
  styles/           # Global styles
    global.css        # Design tokens & base styles
  types/            # TypeScript definitions
    data.ts           # Data type interfaces
  utils/            # Utility functions
    deepLinks.ts      # Navigation URL generators
```

## Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment

No API keys required - uses OpenStreetMap tiles for maps.

## Design Highlights

- **India-Inspired Palette**: Ceremonial golds, marigold oranges, grounding earth tones
- **Responsive Design**: Mobile-first approach with sidebar/mobile menu navigation
- **Accessibility**: Focus states, ARIA labels, keyboard navigation
- **Performance**: Static site generation, CDN-loaded Leaflet, minimal JavaScript

## Trip Details

- **Duration**: January 20 - February 5, 2026 (17 days)
- **Destination**: Chennai, Tamil Nadu, India
- **Purpose**: Tamil Wedding Celebration
- **Flights**: Emirates via Dubai (DFW-DXB-MAA, return MAA-DXB-DFW)

## License

Private - Personal trip planning website

---

Built with Astro and deployed on Netlify.
