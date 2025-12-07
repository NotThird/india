# Tech Stack

## Frontend Framework

**Astro** (Recommended)

- **Rationale:** Astro ships zero JavaScript by default, resulting in extremely fast static sites. Perfect for content-focused sites like trip planners. Supports components from React/Vue/Svelte if needed later.
- **Alternative:** Next.js with static export if more familiar with React ecosystem

## Styling

**Tailwind CSS**

- **Rationale:** Utility-first approach enables rapid UI development without context-switching to CSS files. Built-in responsive utilities. Small production bundle with purging.
- **Configuration:** Use default theme with custom color palette for trip branding

## Maps

**Leaflet + OpenStreetMap**

- **Rationale:** Free, no API key required, lightweight (~40KB). Sufficient for displaying trip locations with markers and popups.
- **Alternative:** Mapbox GL JS if more sophisticated styling needed (requires free API key)
- **Integration:** Use `leaflet` npm package directly or `react-leaflet` if using React components

## Hosting

**Netlify**

- **Rationale:** Free tier covers this use case. Automatic deployments from Git. Built-in form handling if needed. Global CDN for fast access from anywhere.
- **Configuration:** Connect to GitHub repo, auto-deploy on push to main branch

## Data Storage

### Phase 1-2: Static Data

**JSON/YAML Files**

- **Rationale:** Itinerary and booking data stored as JSON files in the repo. Edit locally, commit, auto-deploy. Simple and version-controlled.
- **Structure:** `src/data/itinerary.json`, `src/data/bookings.json`, `src/data/packing.json`

### Phase 3: Collaborative Data

**Supabase** (if collaboration features needed)

- **Rationale:** Free tier includes PostgreSQL database, real-time subscriptions, and authentication. Simpler than Firebase for relational data like comments.
- **Features Used:** Auth (email/magic link), Database (itinerary, comments), Realtime (sync changes)
- **Alternative:** Firebase if preferring NoSQL or already familiar with it

## Local State

**Browser LocalStorage**

- **Rationale:** Packing list check states persist locally without backend. Each user has their own checked items until Phase 3 sync.

## Development Tools

| Tool | Purpose |
|------|---------|
| **Vite** | Build tool (included with Astro) |
| **TypeScript** | Type safety for data structures |
| **Prettier** | Code formatting |
| **ESLint** | Linting |

## Deployment Pipeline

```
Local Development
       |
       v
  Git Push (main)
       |
       v
  Netlify Build
       |
       v
  Static Site Live
```

## Browser Support

Target modern browsers only (Chrome, Safari, Firefox, Edge - latest 2 versions). No IE11 support required.

## Performance Targets

- Lighthouse Performance: 95+
- First Contentful Paint: < 1s
- Total bundle size: < 100KB (excluding map tiles)
