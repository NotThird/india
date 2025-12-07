# Spec Requirements: Static Site Foundation

## Initial Description
Create the foundational static site structure for an India trip planning website using Astro with TypeScript. This establishes the core architecture, navigation, and placeholder pages for a Chennai wedding trip in January 2026.

## Requirements Discussion

### First Round Questions

**Q1:** Framework and structure confirmation?
**Answer:** Standard Astro structure with TypeScript. JSON data files stored in src/data/.

**Q2:** What pages/routes are needed for Phase 1?
**Answer:**
- Home (landing/overview)
- Itinerary (includes wedding schedule embedded)
- Bookings
- Packing List
- Map (PLACEHOLDER ONLY - full implementation in Phase 2)
- Shopping (PLACEHOLDER ONLY - full implementation in Phase 2)

**Q3:** Design direction?
**Answer:** Warm tones (golds, oranges) reflecting India. Sidebar navigation following best practices. Simple, clean layout.

**Q4:** Deployment target?
**Answer:** Netlify (simple push to deploy). No GitHub repo setup needed initially.

**Q5:** What should be excluded from Phase 1?
**Answer:**
- No interactive map yet (Phase 2)
- No full shopping page yet (Phase 2)
- No auth/real-time features (Phase 3)

### Existing Code to Reference
No similar existing features identified for reference. This is a greenfield project.

### Follow-up Questions
None required - user provided comprehensive details including actual trip data.

## Visual Assets

### Files Provided:
No visual assets provided.

### Visual Insights:
N/A

## Requirements Summary

### Functional Requirements
- Astro static site with TypeScript configuration
- JSON-based data storage in src/data/ directory
- 6 pages total (4 fully implemented, 2 placeholders)
- Sidebar navigation component
- Responsive layout with warm India-inspired color palette
- Wedding event schedule integrated into Itinerary page

### Pages Specification

| Page | Status | Description |
|------|--------|-------------|
| Home | Full | Landing page with trip overview |
| Itinerary | Full | Day-by-day schedule with embedded wedding events |
| Bookings | Full | Flight, hotel, and reservation tracking |
| Packing List | Full | Categorized packing checklist |
| Map | Placeholder | "Coming in Phase 2" message |
| Shopping | Placeholder | "Coming in Phase 2" message |

### Design Requirements
- **Color Palette:** Warm tones - golds, oranges, earth tones reflecting India
- **Navigation:** Sidebar (persistent, following UX best practices)
- **Layout:** Simple, clean, content-focused
- **Typography:** Readable, appropriate for travel/planning content

### Technical Requirements
- Astro framework with TypeScript
- Static site generation (SSG)
- JSON data files for trip content
- Netlify-compatible build output
- No build-time external API dependencies

### Reusability Opportunities
- Layout component for consistent page structure
- Navigation sidebar component
- Card/section components for content display
- Color/theme variables for consistent styling

### Scope Boundaries

**In Scope:**
- Astro project initialization with TypeScript
- Base layout with sidebar navigation
- 4 fully functional pages (Home, Itinerary, Bookings, Packing List)
- 2 placeholder pages (Map, Shopping)
- JSON data structure for trip information
- Warm color scheme implementation
- Netlify deployment configuration
- Actual Chennai wedding trip data integration

**Out of Scope:**
- Interactive map functionality (Phase 2)
- Full shopping page with vendor data (Phase 2)
- User authentication (Phase 3)
- Real-time collaboration features (Phase 3)
- GitHub repository setup
- Custom domain configuration

### Technical Considerations
- Astro's file-based routing for page structure
- Static JSON imports for data
- CSS variables or Tailwind for theming
- Netlify's automatic Astro detection for deployment
- Mobile-responsive sidebar behavior
