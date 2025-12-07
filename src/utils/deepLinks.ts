/**
 * File Purpose: Deep link generation utilities for navigation apps
 * High-Level Summary: Generates URLs for Google Maps and Apple Maps directions
 * Dependencies: None
 * Semantic Tags: navigation, maps, deep-links, utility
 * Version: 1.0.0
 */

import type { Coordinates } from "../types/data";

// ============================================================================
// Types
// ============================================================================

/**
 * Navigation links for a destination
 */
export interface NavigationLinks {
  googleMaps: string;
  appleMaps: string;
}

// ============================================================================
// Deep Link Generation
// ============================================================================

/**
 * Generate Google Maps directions URL
 * Opens directions mode with the destination pre-filled
 *
 * @param coordinates - Destination coordinates
 * @param destinationName - Optional name for the destination (for labeling)
 * @returns Google Maps directions URL
 */
export function generateGoogleMapsUrl(
  coordinates: Coordinates,
  destinationName?: string
): string {
  const baseUrl = "https://www.google.com/maps/dir/";
  const params = new URLSearchParams({
    api: "1",
    destination: `${coordinates.lat},${coordinates.lng}`,
  });

  // Add destination name as query parameter if provided (helps with labeling)
  if (destinationName) {
    params.set("destination_place_id", "");
    // Note: For pure coordinate navigation, we use lat,lng format
    // The destination name is used as a fallback in the URL for clarity
  }

  return `${baseUrl}?${params.toString()}`;
}

/**
 * Generate Apple Maps directions URL
 * Opens Apple Maps with driving directions to destination
 *
 * @param coordinates - Destination coordinates
 * @param destinationName - Optional name for the destination
 * @returns Apple Maps directions URL
 */
export function generateAppleMapsUrl(
  coordinates: Coordinates,
  destinationName?: string
): string {
  // Apple Maps URL scheme for directions
  // daddr = destination address (can be coordinates)
  // dirflg = direction flag (d = driving, w = walking, r = transit)
  const params = new URLSearchParams({
    daddr: `${coordinates.lat},${coordinates.lng}`,
    dirflg: "d", // Default to driving
  });

  // Add destination name if provided
  if (destinationName) {
    params.set("q", destinationName);
  }

  return `maps://maps.apple.com/?${params.toString()}`;
}

/**
 * Generate both Google Maps and Apple Maps URLs for a destination
 *
 * @param coordinates - Destination coordinates
 * @param destinationName - Optional name for the destination
 * @returns Object with googleMaps and appleMaps URLs
 */
export function generateNavigationLinks(
  coordinates: Coordinates,
  destinationName?: string
): NavigationLinks {
  return {
    googleMaps: generateGoogleMapsUrl(coordinates, destinationName),
    appleMaps: generateAppleMapsUrl(coordinates, destinationName),
  };
}

// ============================================================================
// Platform Detection (Client-Side Only)
// ============================================================================

/**
 * Detect if the current device is running iOS
 * Note: This function only works in browser context
 *
 * @returns true if device is iOS, false otherwise
 */
export function isIOSDevice(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }

  // Check for iOS devices using multiple methods for reliability
  const userAgent = navigator.userAgent || navigator.vendor || "";
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);

  // Also check for iPad on iOS 13+ which reports as Mac
  const isMacSafari =
    /Macintosh/.test(userAgent) && "ontouchend" in document;

  return isIOS || isMacSafari;
}

/**
 * Get the primary navigation URL based on platform
 * iOS devices get Apple Maps, others get Google Maps
 *
 * @param coordinates - Destination coordinates
 * @param destinationName - Optional name for the destination
 * @returns Primary navigation URL for the current platform
 */
export function getPrimaryNavigationUrl(
  coordinates: Coordinates,
  destinationName?: string
): string {
  if (isIOSDevice()) {
    return generateAppleMapsUrl(coordinates, destinationName);
  }
  return generateGoogleMapsUrl(coordinates, destinationName);
}

/**
 * Get the secondary navigation URL based on platform
 * iOS devices get Google Maps as secondary, others get Apple Maps
 *
 * @param coordinates - Destination coordinates
 * @param destinationName - Optional name for the destination
 * @returns Secondary navigation URL for the current platform
 */
export function getSecondaryNavigationUrl(
  coordinates: Coordinates,
  destinationName?: string
): string {
  if (isIOSDevice()) {
    return generateGoogleMapsUrl(coordinates, destinationName);
  }
  return generateAppleMapsUrl(coordinates, destinationName);
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Format coordinates for display
 *
 * @param coordinates - Coordinates to format
 * @param precision - Decimal precision (default: 4)
 * @returns Formatted coordinate string (e.g., "12.9821, 80.2582")
 */
export function formatCoordinates(
  coordinates: Coordinates,
  precision: number = 4
): string {
  return `${coordinates.lat.toFixed(precision)}, ${coordinates.lng.toFixed(precision)}`;
}

/**
 * Validate that coordinates are within valid ranges
 *
 * @param coordinates - Coordinates to validate
 * @returns true if coordinates are valid, false otherwise
 */
export function isValidCoordinates(coordinates: Coordinates | null | undefined): boolean {
  if (!coordinates) return false;

  const { lat, lng } = coordinates;

  // Check for valid latitude (-90 to 90) and longitude (-180 to 180)
  return (
    typeof lat === "number" &&
    typeof lng === "number" &&
    !isNaN(lat) &&
    !isNaN(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180
  );
}
