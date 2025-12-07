# Spec Requirements: Phase 2 Enhanced Features

## Initial Description
Phase 2 features for the India Trip Website, building upon the Phase 1 foundation. This phase adds interactive mapping, flight tracking, persistent packing lists, comprehensive shopping guide research, and enhanced location details.

## Requirements Discussion

### First Round Questions

**Q1:** Routes between venues - should they show estimated travel times, costs, or both?
**Answer:** Show BOTH estimated travel times AND costs for each option.

**Q2:** Shopping guide - what specific types of shops should be included?
**Answer:** Research needed for comprehensive coverage:
- Clothing shops for BOTH men and women
- Tamil wedding attire specifically
- Sarees (for women)
- Loose pants (dhoti, churidar, salwar)
- Indian suit for men (sherwani, kurta pajama)
- Search for best spots in Chennai
- This needs comprehensive research on Chennai textile shopping

**Q3:** Code reuse approach?
**Answer:** Reuse Phase 1 components wherever possible. "Build build build!"

### Existing Code to Reference

**Similar Features Identified:**
- Feature: Phase 1 Components - Path: `src/components/` (existing React components)
- Components to potentially reuse: PackingItem, venue display components, layout components
- Backend logic to reference: Existing data structures and API patterns from Phase 1

### Follow-up Questions
None required - user provided comprehensive answers.

## Visual Assets

### Files Provided:
No visual assets provided.

### Visual Insights:
N/A - No visuals submitted for this spec.

## Requirements Summary

### Functional Requirements

#### 1. Interactive Map (MUST HAVE - Priority 1)
- Technology: Leaflet + OpenStreetMap
- All venues displayed as markers with popup tooltips containing:
  - Name
  - Date/time
  - Address
- Routes between venues showing:
  - Multiple travel options (taxi, auto-rickshaw, public transport)
  - Estimated travel times for each option
  - Estimated costs for each option
  - "Safest" recommended option and alternatives
- Required locations:
  - Chennai Airport (MAA)
  - Hotel (Park Hyatt Chennai)
  - All wedding venues
  - Shopping areas

#### 2. Flight Tracker (Priority 5 - Nice to Have)
- Always visible component (aesthetic value even before trip)
- Display flight times and on-time status
- Emirates flights to track:
  - EK222
  - EK546
  - EK547
  - EK221
- Simple status display: on-time or delayed
- Use free API tier (AviationStack or similar free flight API)

#### 3. Packing List Persistence (Priority 2 - Quick Win)
- Local storage to save checkbox state across sessions
- Progress indicator per category showing completion percentage
- Reuse existing PackingItem component from Phase 1

#### 4. Shopping Destinations Guide (Priority 4 - Research Required)
- Comprehensive research on Chennai textile shopping required
- Coverage areas:
  - T. Nagar
  - Mylapore
  - Kanchipuram
- Women's attire:
  - Sarees (Kanjeevaram silk specialty)
  - Traditional Tamil wedding attire
- Men's attire:
  - Sherwani
  - Kurta pajama
  - Loose pants (dhoti, churidar, salwar)
- Information per shop:
  - Shop name
  - Address
  - Price ranges
  - Bargaining tips
- Embedded maps for each shopping area

#### 5. Location Details Enhancement (Priority 3)
- Enhance existing venue display components
- Add embedded map per venue
- Include navigation links:
  - Google Maps deep link
  - Apple Maps deep link
- Make information easily accessible and actionable

### Reusability Opportunities
- PackingItem component - extend for persistence
- Existing venue display components - enhance with maps
- Layout and styling patterns from Phase 1
- Data structures and TypeScript interfaces

### Scope Boundaries

**In Scope:**
- Interactive map with Leaflet/OpenStreetMap
- Flight status tracking with free API
- Packing list local storage persistence
- Chennai shopping guide research and display
- Venue location enhancements with embedded maps
- Navigation deep links (Google/Apple Maps)

**Out of Scope:**
- Real-time location tracking
- User accounts or server-side persistence
- Payment or booking integrations
- Itinerary sharing features
- Push notifications
- Offline mode

### Technical Considerations
- Leaflet library for mapping (free, no API key required for tiles)
- OpenStreetMap tiles (free tier)
- AviationStack or similar free flight API (rate limits apply)
- localStorage for packing list persistence
- Reuse React component patterns from Phase 1
- Responsive design for mobile access during trip
- Deep linking to native maps apps

### Priority Order (User Specified)
1. Interactive Map (must have)
2. Packing List Persistence (quick win)
3. Location Details Enhancement (builds on existing)
4. Shopping Guide (requires research)
5. Flight Tracker (nice to have)
