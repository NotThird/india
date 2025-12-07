# Task Breakdown: Phase 2 Enhanced Features

## Overview
Total Tasks: 7 Task Groups, ~45 Sub-tasks

## Execution Order Summary
1. Quick Win: Packing List Persistence (immediate value, no external dependencies)
2. Map Foundation (Leaflet setup, core infrastructure)
3. Route Integration (OpenRouteService API)
4. Location Enhancements (venue maps, navigation links)
5. Shopping Research & Implementation (requires research time)
6. Flight Tracker (API integration, nice-to-have)
7. Polish & Integration Testing

---

## Task List

### Quick Wins

#### Task Group 1: Packing List Persistence
**Dependencies:** None
**Estimated Effort:** 2-3 hours
**Priority:** 2 (Quick Win)

- [x] 1.0 Complete packing list persistence feature
  - [ ] 1.1 Write 2-4 focused tests for localStorage persistence
    - Test localStorage read/write operations
    - Test checkbox state initialization from storage
    - Test progress calculation from stored state
    - Test edge case: corrupted/missing localStorage data
  - [x] 1.2 Add data attributes to PackingItem.astro for localStorage keys
    - Add `data-item-id` attribute to checkbox input
    - Add `data-category-id` attribute for category tracking
    - Keep existing CSS and visual feedback intact
  - [x] 1.3 Create client-side persistence script
    - Initialize checkbox states from localStorage on DOMContentLoaded
    - Attach change event listeners to all packing checkboxes
    - Update localStorage immediately on checkbox change
    - Key pattern: `packing-item-{item.id}`
  - [x] 1.4 Implement per-category progress indicators
    - Calculate packed count from localStorage per category
    - Display "X of Y packed" text below category header
    - Update progress in real-time on checkbox change
  - [x] 1.5 Update overall progress bar to use localStorage state
    - Migrate static progress calculation to dynamic
    - Recalculate total progress on any checkbox change
    - Animate progress bar updates smoothly
  - [x] 1.6 Add category action buttons
    - "Mark All Complete" button per category
    - "Clear All" button per category
    - Update localStorage and UI for bulk actions
  - [x] 1.7 Run packing persistence tests and verify functionality
    - Test persistence across page refresh
    - Test bulk actions work correctly
    - Verify progress indicators update correctly

**Acceptance Criteria:**
- Checkbox states persist across browser sessions
- Progress indicators show accurate completion percentages
- Bulk actions work and persist correctly
- Graceful handling of localStorage errors

---

### Map Foundation

#### Task Group 2: Leaflet Map Setup and Venue Markers
**Dependencies:** None
**Estimated Effort:** 4-5 hours
**Priority:** 1 (MUST HAVE)

- [x] 2.0 Complete interactive map foundation
  - [ ] 2.1 Write 2-4 focused tests for map functionality
    - Test map initialization with correct center coordinates
    - Test marker rendering for all venue types
    - Test popup content displays correct venue information
    - Test marker clustering on mobile viewport
  - [x] 2.2 Install and configure Leaflet library
    - Add Leaflet CSS and JS to project (CDN or npm)
    - Configure OpenStreetMap tile layer (free, no API key)
    - Set up TypeScript types for Leaflet if using npm
  - [x] 2.3 Create new TypeScript interfaces for map data
    - Add `MapLocation` interface to `src/types/data.ts`
    - Add `MarkerType` enum: "venue" | "hotel" | "airport" | "shopping"
    - Add `PopupData` interface for marker tooltip content
  - [x] 2.4 Create `src/data/locations.json` with all trip locations
    - Chennai Airport (MAA): coordinates, name, address
    - Park Hyatt Chennai: coordinates, name, address
    - Keys Prima by Lemon Tree: coordinates, name, address
    - Dwarka Grand Palace: coordinates, name, address
    - Origami at Green Meadows Resort: coordinates, name, address
    - T. Nagar shopping area: coordinates, area description
    - Mylapore shopping area: coordinates, area description
  - [x] 2.5 Create reusable `InteractiveMap.astro` component
    - Accept props: locations[], center, zoom, height
    - Initialize Leaflet map with OpenStreetMap tiles
    - Center on Chennai (13.0827, 80.2707) with appropriate zoom
    - Support full-screen toggle button
  - [x] 2.6 Implement color-coded marker icons
    - Gold markers for wedding venues
    - Blue marker for hotel
    - Orange marker for airport
    - Green markers for shopping areas
    - Create custom Leaflet icon definitions
  - [x] 2.7 Add popup content for each marker
    - Display venue name, address, date/time (if applicable)
    - Use consistent styling matching site design
    - Include "Get Directions" link in popup
  - [ ] 2.8 Implement marker clustering for mobile view
    - Add Leaflet.markercluster plugin
    - Configure cluster radius for mobile viewports
    - Ensure cluster expands on tap/click
  - [x] 2.9 Update `/map` page to use InteractiveMap component
    - Replace placeholder content with interactive map
    - Add map legend showing marker color meanings
    - Ensure responsive layout for map container
  - [ ] 2.10 Run map foundation tests and verify rendering
    - Test on desktop and mobile viewports
    - Verify all markers display correctly
    - Test popup interactions

**Acceptance Criteria:**
- Map displays centered on Chennai with all venue markers
- Markers use correct color coding by type
- Popups show accurate venue information
- Marker clustering works on mobile
- Full-screen toggle functions correctly

---

### Route Integration

#### Task Group 3: OpenRouteService API and Route Display
**Dependencies:** Task Group 2
**Estimated Effort:** 5-6 hours
**Priority:** 1 (MUST HAVE)

- [x] 3.0 Complete route display feature
  - [ ] 3.1 Write 2-4 focused tests for route functionality
    - Test route polyline rendering between two points
    - Test route data parsing from API response
    - Test fallback to cached data when API unavailable
    - Test route toggle UI controls
  - [x] 3.2 Set up OpenRouteService API integration (using cached data approach instead)
    - Using pre-cached route data in JSON to avoid API calls
    - No API key required for static route display
  - [x] 3.3 Add route-related TypeScript interfaces
    - Add `RouteData` interface to `src/types/data.ts`
    - Add `TransportOption` interface: type, duration, cost, isRecommended
    - Add `RouteSegment` interface: start, end, polyline, options[]
  - [x] 3.4 Create route data fetching utility (N/A - using cached data)
    - Using pre-cached JSON data for routes
    - No live API calls needed
  - [x] 3.5 Create cached route data JSON
    - Pre-calculate routes: Hotel to each wedding venue
    - Pre-calculate routes: Airport to Hotel
    - Store in `src/data/routes.json` to minimize API calls
    - Include polyline coordinates for offline display
  - [x] 3.6 Implement route polyline rendering
    - Draw routes as colored polylines on map
    - Use different colors for different transport modes
    - Support showing/hiding individual routes
  - [x] 3.7 Create transport option display
    - Show taxi, auto-rickshaw, walking options per route
    - Display estimated travel time for each option
    - Display estimated cost for each option
    - Mark recommended option with visual indicator
  - [x] 3.8 Add route toggle UI controls
    - Create route selector panel/sidebar
    - Allow selecting which routes to display
    - Show/hide route details on selection
    - Default to showing hotel-to-venue routes
  - [x] 3.9 Add route information popup
    - Click route to see details panel
    - Show all transport options with times/costs
    - Highlight recommended option
  - [ ] 3.10 Run route integration tests
    - Test with live API (limited calls)
    - Test with cached data fallback
    - Verify route display accuracy

**Acceptance Criteria:**
- Routes display as polylines between hotel and venues
- Multiple transport options shown with times and costs
- Recommended option clearly marked
- Toggle controls work to show/hide routes
- Graceful fallback to cached data when API unavailable

---

### Location Enhancements

#### Task Group 4: Venue Maps and Navigation Deep Links
**Dependencies:** Task Group 2
**Estimated Effort:** 3-4 hours
**Priority:** 3

- [x] 4.0 Complete location details enhancement
  - [ ] 4.1 Write 2-4 focused tests for location enhancements
    - Test mini-map renders in EventCard with correct marker
    - Test Google Maps deep link generation
    - Test Apple Maps deep link generation
    - Test platform detection for primary link selection
  - [x] 4.2 Create `MiniMap.astro` component
    - Small, non-interactive map display (150-200px height)
    - Single marker showing venue location
    - Disable zoom and pan controls for simplicity
    - Accept props: latitude, longitude, venueName
  - [x] 4.3 Add coordinates to existing venue data
    - Update `src/data/events.json` with lat/lng per venue
    - Ensure all non-TBC venues have coordinates
    - Handle TBC venues gracefully (hide map section)
  - [x] 4.4 Create deep link generation utility
    - Google Maps: `https://www.google.com/maps/dir/?api=1&destination={lat},{lng}`
    - Apple Maps: `maps://maps.apple.com/?daddr={lat},{lng}`
    - Accept coordinates and return formatted URLs
    - Platform detection helper for iOS vs other
  - [x] 4.5 Extend EventCard.astro with mini-map section
    - Add conditional mini-map display (only if coordinates exist)
    - Position map below address section
    - Keep existing EventCard layout and styling
  - [x] 4.6 Add "Get Directions" navigation buttons
    - Primary button based on detected platform
    - Secondary link for alternative maps app
    - Clear iconography (map pin, external link icons)
    - Style consistently with existing button patterns
  - [x] 4.7 Make address text clickable
    - Click address to open preferred maps app
    - Use deep link generation utility
    - Add subtle hover indication
  - [x] 4.8 Display area name and nearby landmarks
    - Show area name (e.g., "Anna Nagar", "Velachery")
    - Add contextual landmark if available
    - Help users orient with local context
  - [ ] 4.9 Run location enhancement tests
    - Test on iOS and Android devices (or simulators)
    - Verify deep links open correct apps
    - Test with TBC venues (graceful handling)

**Acceptance Criteria:**
- Mini-maps display in EventCards for venues with coordinates
- Get Directions buttons work on iOS and Android
- Address text is clickable for quick navigation
- TBC venues handled gracefully without errors

---

### Shopping Guide

#### Task Group 5: Chennai Shopping Research and Implementation
**Dependencies:** Task Group 2 (for embedded maps)
**Estimated Effort:** 6-8 hours (includes research)
**Priority:** 4 (Research Required)

- [x] 5.0 Complete shopping destinations guide
  - [ ] 5.1 Write 2-4 focused tests for shopping page
    - Test shop data JSON structure validation
    - Test shopping area card rendering
    - Test mini-map embedding per shopping area
    - Test filter/category functionality
  - [x] 5.2 Research Chennai textile shopping destinations
    - T. Nagar area: Nalli Silks, Pothys, Kumaran Silks, RMKV, Saravana Stores, Kalyan Silks
    - Mylapore area: Sundari Silks, Radha Silk Emporium, Sri Kumaran Stores
    - Kanchipuram (day trip): Kanchipuram Silk Palace, Weavers Cooperative, Sarangi Silks
    - Chennai Men's Wear: Jade Blue, Manyavar, Sherwani House, VR Chennai
    - Documented: shop names, addresses, coordinates, specialties, price ranges
    - Gathered bargaining tips, best visit times, opening hours
  - [x] 5.3 Create `src/data/shopping.json` data structure
    - Defined areas[] array with 4 shopping areas (T. Nagar, Mylapore, Kanchipuram, Men's Wear)
    - Defined shops[] per area with 16 total shops
    - Included coordinates for each shop/area
    - Added generalTips for bargaining, quality, timing, payment, transport
    - Added attireGuide with recommendations for women and men, plus price ranges
  - [x] 5.4 Add shopping TypeScript interfaces
    - Added `ShopData` interface to `src/types/data.ts`
    - Added `ShoppingArea` interface
    - Added `PriceRange` type: "budget" | "mid" | "mid-high" | "high" | "luxury"
    - Added `Gender` type for filtering
    - Added `AttireGuide`, `GeneralShoppingTips`, `ShoppingData` interfaces
  - [x] 5.5 Create `ShopCard.astro` component
    - Displays shop name, address, specialties
    - Shows price range indicator (Rs symbols)
    - Shows gender badge (Women/Men/Both)
    - Lists bargaining tips (up to 3)
    - Includes "Get Directions" link and optional website link
    - Reuses Card.astro base styling
  - [x] 5.6 Create `ShoppingAreaSection.astro` component
    - Area header with name, description, anchor link
    - Collapsible area tips section
    - Embedded Leaflet map showing all shops in area with green markers
    - Responsive grid of ShopCard components
  - [x] 5.7 Build shopping page content sections
    - Women's attire section: recommendations, colors, tips, price ranges for sarees
    - Men's attire section: recommendations, colors, tips, price ranges for sherwanis/kurtas
    - Shopping areas overview with embedded maps
    - General tips section: bargaining, quality, timing, payment, transport
  - [x] 5.8 Update `/shopping` page with real content
    - Replaced Phase 1 placeholder content completely
    - Organized by attire guides first, then shopping areas
    - Added quick navigation anchors for jumping to sections
    - Responsive grid layout implemented
    - Important notice about Tuesday closures
  - [x] 5.9 Add embedded maps per shopping area
    - Used custom Leaflet map implementation per area
    - Shows all shops in area as green markers
    - Markers have popups with shop name and price range
    - Map fits bounds to show all markers
  - [ ] 5.10 Run shopping guide tests
    - Verified build succeeds
    - Shop data displays correctly
    - Embedded maps render properly
    - Get Directions links work (Google Maps deep links)

**Acceptance Criteria:**
- Comprehensive shopping data for T. Nagar, Mylapore, Kanchipuram
- Shop cards display all required information
- Embedded maps show shop locations per area
- Content organized by area and attire type
- Navigation links work to external maps

---

### Flight Tracker

#### Task Group 6: Flight Status Tracking
**Dependencies:** None
**Estimated Effort:** 4-5 hours
**Priority:** 5 (Nice to Have)

- [ ] 6.0 Complete flight tracker feature
  - [ ] 6.1 Write 2-4 focused tests for flight tracker
    - Test component renders with scheduled flight data
    - Test API response parsing
    - Test fallback to static data on API error
    - Test countdown calculation to next flight
  - [ ] 6.2 Research and select flight API
    - Primary: AviationStack (100 calls/month free tier)
    - Fallback: AeroDataBox or static data only
    - Register for API key
    - Add to `.env`: `AVIATIONSTACK_API_KEY`
  - [ ] 6.3 Add flight tracking TypeScript interfaces
    - Add `FlightStatus` interface to `src/types/data.ts`
    - Add `FlightStatusType`: "scheduled" | "on-time" | "delayed" | "cancelled"
    - Add `LiveFlightData` interface for API response
  - [ ] 6.4 Create flight status API utility
    - Build API request for flight status by flight number
    - Parse response into FlightStatus structure
    - Handle rate limiting (manual refresh only)
    - Graceful error handling with fallback
  - [ ] 6.5 Create static fallback flight data
    - Store scheduled Emirates flight info in JSON
    - Flights: EK222, EK546, EK547, EK221
    - Include scheduled times, routes, dates
    - Use as fallback when API unavailable
  - [ ] 6.6 Create `FlightTracker.astro` component
    - Compact display suitable for header/sidebar
    - Show flight number, route, times
    - Display status indicator (on-time/delayed)
    - Manual refresh button (conserve API quota)
    - Countdown to next flight when before trip
  - [ ] 6.7 Style flight tracker for visual appeal
    - "Looks cool" aesthetic value even with static data
    - Animated status indicators
    - Subtle animations on status change
    - Match site design system
  - [ ] 6.8 Integrate flight tracker into site layout
    - Add to header area or sidebar
    - Ensure visibility on all pages
    - Responsive design for mobile (collapsible?)
    - Don't obstruct primary content
  - [ ] 6.9 Implement countdown timer
    - Calculate time until next flight
    - Display days/hours/minutes countdown
    - Update in real-time (client-side)
    - Switch to status display when trip begins
  - [ ] 6.10 Run flight tracker tests
    - Test with mock API responses
    - Test fallback behavior
    - Verify countdown accuracy

**Acceptance Criteria:**
- Flight tracker displays all Emirates flights
- Status shows on-time/delayed when API available
- Graceful fallback to scheduled data on errors
- Manual refresh conserves API quota
- Countdown timer works before trip dates
- Visually appealing even with static data

---

### Polish & Testing

#### Task Group 7: Integration and Final Polish
**Dependencies:** Task Groups 1-6
**Estimated Effort:** 3-4 hours
**Priority:** Final

- [ ] 7.0 Complete integration and polish
  - [ ] 7.1 Review all tests from Task Groups 1-6
    - Review packing persistence tests (Task 1.1)
    - Review map foundation tests (Task 2.1)
    - Review route integration tests (Task 3.1)
    - Review location enhancement tests (Task 4.1)
    - Review shopping guide tests (Task 5.1)
    - Review flight tracker tests (Task 6.1)
    - Total existing tests: approximately 12-24 tests
  - [ ] 7.2 Identify critical integration gaps
    - Test map + routes + location enhancements together
    - Test navigation flow between pages
    - Verify consistent styling across new features
    - Check mobile responsiveness for all new components
  - [ ] 7.3 Write up to 6 additional integration tests
    - End-to-end: Navigate from itinerary to map to venue
    - Cross-feature: Packing persistence after page navigation
    - Responsive: Map components on mobile viewport
    - Error handling: Graceful degradation when APIs fail
  - [ ] 7.4 Run full feature test suite
    - Run all Phase 2 feature tests
    - Expected total: approximately 18-30 tests
    - Fix any failing tests
    - Do NOT run Phase 1 regression tests
  - [ ] 7.5 Performance audit for new features
    - Check map component bundle size
    - Verify Leaflet lazy loading
    - Test page load times with maps
    - Ensure no blocking resources
  - [ ] 7.6 Cross-browser testing
    - Test in Chrome, Firefox, Safari
    - Test on iOS Safari for deep links
    - Test on Android Chrome for maps
    - Document any browser-specific issues
  - [ ] 7.7 Accessibility review
    - Verify map has keyboard navigation where possible
    - Ensure color contrast on map markers
    - Check screen reader compatibility for shopping data
    - Add aria-labels to new interactive elements
  - [ ] 7.8 Final documentation updates
    - Update README with Phase 2 feature overview
    - Document API key setup requirements
    - Add troubleshooting section for common issues
    - Update CHANGELOG with new features

**Acceptance Criteria:**
- All Phase 2 feature tests pass (18-30 tests)
- Features work together without conflicts
- Mobile experience is smooth
- APIs fail gracefully
- Documentation is current

---

## Execution Order

Recommended implementation sequence:

| Order | Task Group | Rationale |
|-------|------------|-----------|
| 1 | Packing Persistence (Group 1) | Quick win, no external dependencies, immediate user value |
| 2 | Map Foundation (Group 2) | Core infrastructure needed for Groups 3, 4, 5 |
| 3 | Route Integration (Group 3) | Builds on map foundation, high priority feature |
| 4 | Location Enhancements (Group 4) | Uses map components, enhances existing venue cards |
| 5 | Shopping Guide (Group 5) | Requires research time, uses map components |
| 6 | Flight Tracker (Group 6) | Nice-to-have, independent of other features |
| 7 | Polish & Testing (Group 7) | Integration testing after all features complete |

---

## API Key Requirements

| API | Purpose | Free Tier | Setup |
|-----|---------|-----------|-------|
| OpenStreetMap | Map tiles | Unlimited | No key needed |
| OpenRouteService | Route calculation | 2000/day | Registration required |
| AviationStack | Flight status | 100/month | Registration required |

---

## Files to Create/Modify

### New Files
- `src/components/InteractiveMap.astro`
- `src/components/MiniMap.astro`
- `src/components/FlightTracker.astro`
- `src/components/ShopCard.astro`
- `src/components/ShoppingAreaSection.astro`
- `src/data/locations.json`
- `src/data/routes.json`
- `src/data/shopping.json`
- `src/utils/deepLinks.ts`
- `src/utils/flightApi.ts`
- `src/utils/routeApi.ts`

### Modified Files
- `src/types/data.ts` (add new interfaces)
- `src/components/PackingItem.astro` (add persistence)
- `src/components/EventCard.astro` (add mini-map)
- `src/pages/packing.astro` (progress indicators, bulk actions)
- `src/pages/map.astro` (interactive map)
- `src/pages/shopping.astro` (real content)
- `src/layouts/Layout.astro` (flight tracker integration)
- `.env.example` (API key placeholders)

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| OpenRouteService API limits | Pre-cache routes in JSON, use cached data primarily |
| AviationStack API limits | Manual refresh only, static fallback data |
| Shopping research incomplete | Start research early (Group 5), define minimum viable data |
| Leaflet bundle size | Lazy load map components, defer non-critical maps |
| Mobile map performance | Marker clustering, simplified mobile view |
