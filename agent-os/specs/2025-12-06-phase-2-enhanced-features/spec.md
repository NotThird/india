# Specification: Phase 2 Enhanced Features

## Goal

Enhance the India Trip Website with interactive mapping, flight tracking, persistent packing lists, comprehensive Chennai shopping guide, and improved location details, building upon the Phase 1 static site foundation.

## User Stories

- As the primary trip planner, I want an interactive map showing all trip locations with routes and travel options so that I can navigate Chennai efficiently during the trip
- As a traveler, I want my packing list progress to persist across browser sessions so that I can track what I have packed over time

## Specific Requirements

**Interactive Map with Leaflet**
- Integrate Leaflet library with OpenStreetMap tiles (free, no API key)
- Display all locations as custom markers with popup information: Chennai Airport (MAA), Park Hyatt Chennai, Keys Prima by Lemon Tree, Dwarka Grand Palace, Origami at Green Meadows Resort, T. Nagar, Mylapore
- Implement marker clustering for mobile view to prevent overlap
- Add full-screen map toggle capability
- Center map on Chennai (13.0827, 80.2707) with zoom level showing all markers
- Markers should use color-coded icons: gold for venues, blue for hotel, orange for airport, green for shopping

**Route Display Between Venues**
- Integrate OpenRouteService API (free tier, API key required) for route calculations
- Display routes as polylines between venue pairs (hotel to each event venue)
- Show multiple transport options per route: taxi, auto-rickshaw, walking (where applicable)
- Display estimated travel time and cost for each option in route popup
- Mark "recommended" route option based on safety/convenience rating
- Routes should be toggleable via UI controls
- Cache route data in JSON to minimize API calls during development

**Flight Tracker Component**
- Create always-visible flight status component for header or sidebar area
- Track Emirates flights: EK222, EK546, EK547, EK221
- Integrate AviationStack API (free tier: 100 calls/month) or AeroDataBox as fallback
- Display: flight number, route, scheduled times, current status (on-time/delayed/cancelled)
- Implement manual refresh button (no auto-refresh to conserve API quota)
- Show countdown to next flight when before trip dates
- Display "looks cool" aesthetic value even without live data (show scheduled info)
- Handle API errors gracefully with fallback to static scheduled data

**Packing List Persistence**
- Store checkbox state in localStorage with key pattern: `packing-item-{item.id}`
- Initialize checkboxes from localStorage on page load
- Update localStorage immediately on checkbox change
- Add per-category progress indicator showing "X of Y packed"
- Update overall progress bar to reflect actual persisted state
- Add "Clear All" and "Mark All Complete" buttons per category
- Extend existing PackingItem.astro component to include localStorage integration

**Shopping Destinations Guide**
- Create new `/shopping` page replacing Phase 1 placeholder
- Organize content by shopping area: T. Nagar, Mylapore, Kanchipuram (day trip)
- Include women's attire section: Kanjeevaram silk sarees, traditional Tamil wedding wear
- Include men's attire section: Sherwani, kurta pajama, dhoti, churidar options
- For each shop include: name, address, price range, specialty, bargaining tips
- Embed mini-maps per shopping area using Leaflet component
- Add links to Google Maps for navigation

**Shop Data Structure (JSON)**
- Create `src/data/shopping.json` with comprehensive Chennai shop research
- Include verified shops: Nalli Silks, Pothys, Kumaran Silks, Sundari Silks, RMKV
- Structure: areas[] > shops[] with coordinates, priceRange, specialties[], tips[]
- Include opening hours and best time to visit recommendations

**Location Details Enhancement**
- Enhance EventCard.astro with embedded mini-map per venue
- Add "Get Directions" button that generates Google Maps deep link
- Add Apple Maps deep link for iOS users
- Show venue coordinates on mini-map with single marker
- Display area name and nearby landmarks for context
- Make address clickable to open preferred maps app

**Deep Link Generation**
- Google Maps: `https://www.google.com/maps/dir/?api=1&destination={lat},{lng}`
- Apple Maps: `maps://maps.apple.com/?daddr={lat},{lng}`
- Detect platform and show appropriate primary link
- Always show both options as fallback

## Visual Design

No visual mockups provided. Implementation follows Phase 1 design direction: warm India-inspired tones (golds, oranges, earth tones), consistent card patterns, responsive layout.

## Existing Code to Leverage

**PackingItem.astro Component**
- Existing checkbox component with styling and visual feedback
- Extend with data attributes for localStorage key identification
- Keep existing CSS and hover states
- Add client-side script for persistence logic

**Card.astro Component**
- Reusable card wrapper with consistent styling
- Use for shopping area cards, route information panels
- Leverage noPadding prop for custom map layouts

**EventCard.astro Component**
- Contains venue and address display logic
- Extend to include embedded map and navigation links
- Reuse formatTime and date formatting utilities
- Add new slot or section for map embed

**types/data.ts TypeScript Interfaces**
- WeddingEvent interface already includes venue, address, area fields
- Add new interfaces: ShopData, ShoppingArea, RouteData, FlightStatus
- Extend existing patterns for type safety

**packing.astro Page Structure**
- Existing category iteration and progress bar implementation
- Migrate static progress to dynamic localStorage-based tracking
- Reuse category icon system and layout patterns

## Out of Scope

- Real-time GPS location tracking of user
- User accounts or server-side data persistence
- Payment or booking integrations
- Itinerary sharing with other users
- Push notifications for flight updates
- Offline/PWA mode
- Dark mode toggle
- Weather integration
- Currency converter
- Restaurant recommendations
- Public transit detailed schedules
- Multi-language support
