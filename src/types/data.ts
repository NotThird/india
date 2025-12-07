/**
 * File Purpose: TypeScript type definitions for trip data structures
 * High-Level Summary: Defines interfaces for all JSON data used in the India Trip Website
 * Dependencies: None
 * Semantic Tags: types, data, trip, travel
 * Version: 1.0.0
 */

// ============================================================================
// Trip Types
// ============================================================================

export interface Trip {
  destination: string;
  primaryAreas: string[];
  travelStart: string; // ISO date: YYYY-MM-DD
  travelEnd: string; // ISO date: YYYY-MM-DD
  eventStart: string; // ISO date: YYYY-MM-DD
  eventEnd: string; // ISO date: YYYY-MM-DD
  purpose: string;
  timezone: string; // IANA timezone (e.g., "Asia/Kolkata")
  durationDays: number;
}

// ============================================================================
// Traveler Types
// ============================================================================

export interface Visa {
  type: string;
  etaNumber: string;
  applicationId: string;
  issueDate: string; // ISO date: YYYY-MM-DD
  expiryDate: string; // ISO date: YYYY-MM-DD
  entries: "single" | "multiple";
  maxStay: string;
  activities: string;
  status: "GRANTED" | "PENDING" | "DENIED";
  notes: string[];
}

export interface Traveler {
  id: string;
  name: string;
  passport: string;
  dob: string; // ISO date: YYYY-MM-DD
  nationality: string;
  visa: Visa;
}

export interface TravelersData {
  travelers: Traveler[];
}

// ============================================================================
// Flight Types
// ============================================================================

export type FlightDirection = "outbound" | "return";

export interface FlightSegment {
  id: string;
  direction: FlightDirection;
  from: string; // Airport code (e.g., "DFW")
  fromCity: string;
  to: string; // Airport code (e.g., "DXB")
  toCity: string;
  date: string; // ISO date: YYYY-MM-DD
  departureTime: string; // 24-hour format: HH:MM
  arrivalTime: string; // 24-hour format: HH:MM
  arrivalNextDay: boolean;
  duration: string;
  flightNumber: string;
}

export interface FlightsData {
  confirmationCode: string;
  airline: string;
  segments: FlightSegment[];
}

// ============================================================================
// Event Types
// ============================================================================

export type EventType = "pre-wedding" | "ceremony" | "reception" | "post-wedding";

export interface WeddingEvent {
  id: string;
  name: string;
  date: string; // ISO date: YYYY-MM-DD
  startTime: string; // 24-hour format: HH:MM
  endTime: string | null; // 24-hour format: HH:MM or null if open-ended
  venue: string | null; // null if TBC
  address: string | null; // null if TBC
  area: string | null; // null if TBC
  type: EventType;
  description: string;
  venueTBC?: boolean; // true if venue is to be confirmed
  coordinates?: Coordinates | null; // Venue coordinates for mini-map and navigation
}

export interface EventsData {
  events: WeddingEvent[];
}

// ============================================================================
// Packing Types
// ============================================================================

export interface PackingItem {
  id: string;
  name: string;
  packed: boolean;
}

export interface PackingCategory {
  id: string;
  name: string;
  items: PackingItem[];
}

export interface PackingData {
  categories: PackingCategory[];
}

// ============================================================================
// Accommodation Types
// ============================================================================

export type AccommodationStatus = "confirmed" | "considering" | "cancelled";

export interface AccommodationContact {
  phone: string | null;
  email: string | null;
  website: string | null;
}

export interface Accommodation {
  id: string;
  name: string;
  area: string;
  city: string;
  status: AccommodationStatus;
  checkIn: string | null; // ISO date: YYYY-MM-DD or null if not confirmed
  checkOut: string | null; // ISO date: YYYY-MM-DD or null if not confirmed
  confirmationNumber: string | null;
  notes: string;
  amenities: string[];
  contact: AccommodationContact;
}

export interface AccommodationData {
  accommodations: Accommodation[];
}

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Day type for itinerary display
 */
export type DayType = "travel" | "event" | "free";

/**
 * Itinerary day entry for timeline display
 */
export interface ItineraryDay {
  date: string; // ISO date: YYYY-MM-DD
  dayType: DayType;
  dayNumber: number; // Day 1, Day 2, etc.
  events: WeddingEvent[];
  flights: FlightSegment[];
  notes?: string;
}

// ============================================================================
// Map Types (Phase 2)
// ============================================================================

/**
 * Marker type for color-coded map icons
 */
export type MarkerType = "venue" | "hotel" | "airport" | "shopping";

/**
 * Geographic coordinates
 */
export interface Coordinates {
  lat: number;
  lng: number;
}

/**
 * Map location data for markers
 */
export interface MapLocation {
  id: string;
  name: string;
  type: MarkerType;
  coordinates: Coordinates;
  address: string | null;
  area: string | null;
  description?: string;
  // Event-specific fields (optional)
  eventName?: string;
  eventDate?: string; // ISO date: YYYY-MM-DD
  eventTime?: string; // 24-hour format: HH:MM
}

/**
 * Popup data for marker tooltips
 */
export interface PopupData {
  title: string;
  subtitle?: string;
  address: string | null;
  area: string | null;
  datetime?: string; // Formatted date/time string
  directionsUrl: string; // Google Maps directions URL
  appleDirectionsUrl?: string; // Apple Maps directions URL
}

/**
 * Locations data structure for JSON file
 */
export interface LocationsData {
  locations: MapLocation[];
}

// ============================================================================
// Route Types (Phase 2)
// ============================================================================

/**
 * Transport mode for route options
 */
export type TransportMode = "taxi" | "auto-rickshaw" | "walking";

/**
 * Transport option for a route segment
 * Contains estimated time, cost, and recommendation status
 */
export interface TransportOption {
  mode: TransportMode;
  duration: number; // Duration in minutes
  durationDisplay: string; // Formatted display string (e.g., "25 mins")
  cost: number | null; // Cost in INR, null for walking
  costDisplay: string; // Formatted display string (e.g., "~₹150-200")
  isRecommended: boolean;
  notes?: string; // Optional notes (e.g., "Best for comfort")
}

/**
 * Route segment between two locations
 * Contains polyline coordinates and transport options
 */
export interface RouteSegment {
  id: string;
  startLocationId: string;
  endLocationId: string;
  startName: string;
  endName: string;
  distance: number; // Distance in kilometers
  distanceDisplay: string; // Formatted display string (e.g., "5.2 km")
  polyline: Coordinates[]; // Array of lat/lng points for drawing route
  transportOptions: TransportOption[];
  isActive?: boolean; // Whether route is currently displayed on map
}

/**
 * Complete route data structure for a trip
 */
export interface RouteData {
  id: string;
  name: string;
  description?: string;
  color: string; // Hex color for polyline display
  segments: RouteSegment[];
}

/**
 * Routes data structure for JSON file
 */
export interface RoutesData {
  routes: RouteSegment[];
}

// ============================================================================
// Shopping Types (Phase 2)
// ============================================================================

/**
 * Price range categories for shops
 */
export type PriceRange = "budget" | "mid" | "mid-high" | "high" | "luxury";

/**
 * Gender categories for shop filtering
 */
export type Gender = "women" | "men";

/**
 * Individual shop data
 */
export interface ShopData {
  id: string;
  name: string;
  address: string;
  coordinates: Coordinates;
  priceRange: PriceRange;
  specialties: string[];
  forGender: Gender[];
  tips: string[];
  openingHours: string;
  website: string | null;
}

/**
 * Shopping area containing multiple shops
 */
export interface ShoppingArea {
  id: string;
  name: string;
  description: string;
  coordinates: Coordinates;
  tips: string[];
  shops: ShopData[];
}

/**
 * Price range display info
 */
export interface PriceRangeInfo {
  symbol: string;
  sarees: string;
  sherwanis: string;
  kurtas: string;
  veshtis: string;
}

/**
 * Attire recommendations by gender
 */
export interface AttireRecommendation {
  recommended: string[];
  colors: string;
  tips: string[];
}

/**
 * Complete attire guide
 */
export interface AttireGuide {
  womenGuests: AttireRecommendation;
  menGuests: AttireRecommendation;
  priceRanges: {
    budget: PriceRangeInfo;
    mid: PriceRangeInfo;
    midHigh: PriceRangeInfo;
    luxury: PriceRangeInfo;
  };
}

/**
 * General shopping tips organized by category
 */
export interface GeneralShoppingTips {
  bargaining: string[];
  quality: string[];
  timing: string[];
  payment: string[];
  transport: string[];
}

/**
 * Complete shopping data structure for JSON file
 */
export interface ShoppingData {
  areas: ShoppingArea[];
  generalTips: GeneralShoppingTips;
  attireGuide: AttireGuide;
}

// ============================================================================
// Flight Status Types (Phase 2)
// ============================================================================

/**
 * Flight status categories for tracker display
 */
export type FlightStatusType = "scheduled" | "on-time" | "delayed" | "cancelled";

/**
 * Flight status information for display
 */
export interface FlightStatus {
  flightNumber: string;
  status: FlightStatusType;
  scheduledDeparture: string; // ISO datetime
  scheduledArrival: string; // ISO datetime
  actualDeparture?: string; // ISO datetime (if departed)
  actualArrival?: string; // ISO datetime (if arrived)
  departureGate?: string;
  arrivalGate?: string;
  terminal?: string;
  delayMinutes?: number;
}

/**
 * Live flight data from API response (if API is used)
 */
export interface LiveFlightData {
  flightNumber: string;
  airline: string;
  status: FlightStatusType;
  departure: {
    airport: string;
    city: string;
    scheduledTime: string;
    actualTime?: string;
    terminal?: string;
    gate?: string;
  };
  arrival: {
    airport: string;
    city: string;
    scheduledTime: string;
    actualTime?: string;
    terminal?: string;
    gate?: string;
  };
  lastUpdated: string; // ISO datetime
}

/**
 * Countdown timer display values
 */
export interface CountdownDisplay {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  targetDate: string; // ISO datetime
}
