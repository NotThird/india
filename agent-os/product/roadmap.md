# Product Roadmap

## Phase 1: MVP - Core Trip Display

1. [ ] Static Site Foundation — Set up project with chosen framework, configure Netlify deployment, establish routing structure `S`
2. [ ] Itinerary View — Day-by-day schedule display with dates, times, activities, and locations in a clean timeline format `M`
3. [ ] Booking Information Page — Display flight details, hotel reservations, and transportation with links to confirmation emails/sites `S`
4. [ ] Basic Navigation — Header with navigation between itinerary, bookings, and packing sections; mobile-responsive layout `S`
5. [ ] Data Structure — JSON/YAML-based data files for itinerary and bookings that can be easily edited and deployed `XS`

## Phase 2: Enhanced Planning Tools

6. [ ] Interactive Map Integration — Embed map showing all trip destinations with clickable markers linking to itinerary items `M`
7. [ ] Flight Tracker — Real-time flight status display showing delays, gate info, and countdown to departure using flight tracking API `S`
8. [ ] Packing Lists — Categorized checklists (essentials, wedding attire, shopping items) with check-off functionality using local storage `S`
9. [ ] Location Details — Expanded information for each destination including addresses, notes, and embedded map views `S`
10. [ ] Shopping Destinations — Dedicated section for cloth shopping locations with notes, prices, and recommendations `S`
11. [ ] Wedding Schedule — Detailed timeline for wedding events with dress codes and important notes `S`

## Phase 3: Collaboration Features

12. [ ] User Authentication — Simple auth via Supabase allowing family members to log in `M`
13. [ ] Real-time Data Sync — Move from static JSON to Supabase database for live updates across all users `M`
14. [ ] Comments System — Add discussion threads to itinerary items and bookings for group input `M`
15. [ ] Shared Packing Lists — Sync packing list state across users so everyone sees checked items `S`
16. [ ] Activity Log — Show recent changes and who made them for transparency `S`

> Notes
> - Phase 1 delivers a functional trip reference site deployable within days
> - Phase 2 adds planning utility without requiring backend infrastructure
> - Phase 3 introduces collaboration but can be skipped if static site meets needs
> - Effort estimates assume familiarity with chosen tech stack
