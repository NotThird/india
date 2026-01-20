/**
 * Timezone Utilities
 *
 * Purpose: Handle dual timezone display for Dallas (CST) and India (IST).
 *
 * Features:
 * - Format dates in both home and destination timezones
 * - Live clock formatting for sidebar widget
 * - Flight time display with dual timezones
 * - Automatic DST handling via Intl.DateTimeFormat
 */

export const TIMEZONES = {
  home: "America/Chicago", // Dallas CST/CDT
  destination: "Asia/Kolkata", // India IST (UTC+5:30, no DST)
} as const;

export const TIMEZONE_LABELS = {
  home: "Dallas",
  destination: "India",
} as const;

/**
 * Format a date/time in both home and destination timezones.
 * Returns both times with timezone abbreviations.
 */
export function formatDualTime(
  date: Date | string,
  options?: { includeDate?: boolean; includeSeconds?: boolean }
): { home: string; destination: string } {
  const d = typeof date === "string" ? new Date(date) : date;
  const { includeDate = false, includeSeconds = false } = options || {};

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    ...(includeSeconds && { second: "2-digit" }),
  };

  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    ...timeOptions,
    ...(includeDate && { month: "short", day: "numeric" }),
  };

  const homeTime = new Intl.DateTimeFormat("en-US", {
    ...dateTimeOptions,
    timeZone: TIMEZONES.home,
  }).format(d);

  const destTime = new Intl.DateTimeFormat("en-US", {
    ...dateTimeOptions,
    timeZone: TIMEZONES.destination,
  }).format(d);

  return {
    home: homeTime,
    destination: destTime,
  };
}

/**
 * Get current time in both timezones for live clock display.
 */
export function getCurrentDualTime(): { home: string; destination: string } {
  return formatDualTime(new Date(), { includeSeconds: false });
}

/**
 * Format time for flight display with timezone abbreviation.
 */
export function formatFlightTime(
  date: Date | string,
  timezone: "home" | "destination"
): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const tz = TIMEZONES[timezone];

  return new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  }).format(d);
}

/**
 * Get timezone abbreviation for a given date and timezone.
 * Handles DST for Dallas (CST vs CDT).
 */
export function getTimezoneAbbr(
  date: Date | string,
  timezone: "home" | "destination"
): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const tz = TIMEZONES[timezone];

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    timeZoneName: "short",
  }).formatToParts(d);

  const tzPart = parts.find((p) => p.type === "timeZoneName");
  return tzPart?.value || (timezone === "home" ? "CST" : "IST");
}

/**
 * Calculate timezone offset difference in hours.
 * Useful for displaying "India is X hours ahead" messages.
 */
export function getTimezoneOffsetDiff(date?: Date): number {
  const d = date || new Date();

  // Get offset for each timezone
  const homeOffset = getTimezoneOffset(d, TIMEZONES.home);
  const destOffset = getTimezoneOffset(d, TIMEZONES.destination);

  // Return difference in hours (positive means destination is ahead)
  return (destOffset - homeOffset) / 60;
}

/**
 * Get timezone offset in minutes for a specific timezone.
 */
function getTimezoneOffset(date: Date, timeZone: string): number {
  const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
  const tzDate = new Date(date.toLocaleString("en-US", { timeZone }));
  return (utcDate.getTime() - tzDate.getTime()) / 60000;
}

/**
 * Format a date for display in India timezone (for itinerary events).
 */
export function formatIndiaDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;

  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONES.destination,
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(d);
}

/**
 * Format a time for display in India timezone.
 */
export function formatIndiaTime(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;

  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONES.destination,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(d);
}

/**
 * Check if a date falls within the trip dates.
 */
export function isDuringTrip(date: Date | string): boolean {
  const d = typeof date === "string" ? new Date(date) : date;
  const tripStart = new Date("2026-01-20T00:00:00");
  const tripEnd = new Date("2026-02-05T23:59:59");

  return d >= tripStart && d <= tripEnd;
}

/**
 * Get the current day number of the trip (1-17) or null if not during trip.
 */
export function getTripDayNumber(date?: Date): number | null {
  const d = date || new Date();
  const tripStart = new Date("2026-01-20T00:00:00");

  if (!isDuringTrip(d)) {
    return null;
  }

  const diffTime = d.getTime() - tripStart.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays + 1;
}
