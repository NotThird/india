# Trip Data Reference: Chennai Wedding Trip

This document contains the actual trip details for implementation reference.

## Trip Overview

| Field | Value |
|-------|-------|
| Destination | Chennai, India |
| Primary Areas | Thiruvanmiyur, Palavakkam |
| Travel Dates | January 20 - February 5, 2026 |
| Wedding Events | January 25-29, 2026 |
| Purpose | Wedding celebration + cloth shopping |

---

## Traveler Information

### Austin Coleman Franklin

| Field | Value |
|-------|-------|
| Passport Number | 678129367 |
| Date of Birth | November 7, 1991 |
| Nationality | United States of America |

### Visa Details

| Field | Value |
|-------|-------|
| Visa Type | e-Tourist Visa |
| ETA Number | 902B1538P |
| Application ID | I008V4163725 |
| Issue Date | November 18, 2025 |
| Expiry Date | November 17, 2030 |
| Entries | Multiple |
| Max Stay | 180 days per calendar year |
| Activities | Meeting Friends/Relatives |
| Status | **GRANTED** |

**Important Notes:**
- Carry ETA email or printed copy
- Biometrics captured on arrival
- Yellow fever card required if arriving from affected countries
- Not valid for land border crossings

---

## Flights

### Booking Details

| Field | Value |
|-------|-------|
| Airline | Emirates |
| Confirmation Code | ES6BFF |
| Route | Dallas ↔ Dubai ↔ Chennai |

### Outbound: Dallas → Chennai

| Segment | Date | Departure | Arrival | Duration | Flight |
|---------|------|-----------|---------|----------|--------|
| Dallas (DFW) → Dubai (DXB) | Tue, Jan 20 | 11:30 AM | 12:00 PM (+1) | 14h 30m | EK222 |
| Dubai (DXB) → Chennai (MAA) | Wed, Jan 21 | 2:45 PM | 8:10 PM | 3h 55m | EK546 |

**Arrives Chennai:** Wednesday, January 21, 2026 at 8:10 PM local time

### Return: Chennai → Dallas

| Segment | Date | Departure | Arrival | Duration | Flight |
|---------|------|-----------|---------|----------|--------|
| Chennai (MAA) → Dubai (DXB) | Wed, Feb 4 | 9:45 PM | 12:45 AM (+1) | 4h 30m | EK547 |
| Dubai (DXB) → Dallas (DFW) | Thu, Feb 5 | 2:40 AM | 8:55 AM | 16h 15m | EK221 |

**Departs Chennai:** Wednesday, February 4, 2026 at 9:45 PM local time

---

## Events Schedule

### Pre-Wedding: January 21-24

| Date | Activity |
|------|----------|
| Wed, Jan 21 | Arrive Chennai 8:10 PM - Check into hotel |
| Thu-Fri, Jan 22-24 | Free days - Cloth shopping, exploration |

### Day 1: Saturday, January 25, 2026

**Mehendi Ceremony**
- Time: 11:00 AM - 3:00 PM
- Venue: Keys Prima by Lemon Tree
- Address: 11/23 Kalakshetra Rd, Thiruvanmiyur, Chennai
- Type: Pre-wedding ceremony

### Day 2-3: Sunday-Monday, January 26-27, 2026

- No scheduled events
- Free time / exploration days

### Day 4: Wednesday, January 28, 2026

**Wedding Ceremony**
- Time: 9:00 AM - 10:30 AM
- Venue: TBC (To Be Confirmed)
- Type: Main ceremony

**Wedding Lunch**
- Time: Following ceremony (~11:00 AM onwards)
- Venue: Dwarka Grand Palace
- Address: 63 1st Seaward Rd, Thiruvanmiyur, Chennai
- Type: Reception lunch

### Day 5: Thursday, January 29, 2026

**Cocktail Party**
- Time: 7:00 PM
- Venue: Origami at Green Meadows Resort
- Address: Palavakkam, Chennai
- Type: Post-wedding celebration

### Post-Wedding: January 30 - February 4

| Date | Activity |
|------|----------|
| Thu-Tue, Jan 30 - Feb 4 | Free days - More shopping, sightseeing |
| Wed, Feb 4 | Depart Chennai 9:45 PM |

---

## Accommodation

**Considering:** Park Hyatt Chennai
- Location: Guindy, Chennai
- Notes: Closest major hotel to wedding venues (~9-15 min drive)
- Status: Under consideration (not confirmed)

---

## Key Locations Summary

| Location | Area | Purpose |
|----------|------|---------|
| Chennai Airport (MAA) | Meenambakkam | Arrival/Departure |
| Park Hyatt Chennai | Guindy | Hotel (considering) |
| Keys Prima by Lemon Tree | Thiruvanmiyur | Mehendi venue |
| Dwarka Grand Palace | Thiruvanmiyur | Wedding lunch |
| Origami, Green Meadows Resort | Palavakkam | Cocktail party |

---

## JSON Data Structure

```json
{
  "trip": {
    "destination": "Chennai, India",
    "travelStart": "2026-01-20",
    "travelEnd": "2026-02-05",
    "eventStart": "2026-01-25",
    "eventEnd": "2026-01-29",
    "purpose": "Wedding celebration + cloth shopping",
    "timezone": "Asia/Kolkata"
  },
  "travelers": [
    {
      "id": "austin",
      "name": "Austin Coleman Franklin",
      "passport": "678129367",
      "dob": "1991-11-07",
      "nationality": "USA",
      "visa": {
        "type": "e-Tourist Visa",
        "etaNumber": "902B1538P",
        "applicationId": "I008V4163725",
        "issueDate": "2025-11-18",
        "expiryDate": "2030-11-17",
        "entries": "multiple",
        "status": "granted"
      }
    }
  ],
  "flights": {
    "confirmationCode": "ES6BFF",
    "airline": "Emirates",
    "segments": [
      {
        "id": "outbound-1",
        "direction": "outbound",
        "from": "DFW",
        "fromCity": "Dallas",
        "to": "DXB",
        "toCity": "Dubai",
        "date": "2026-01-20",
        "departureTime": "11:30",
        "arrivalTime": "12:00",
        "arrivalNextDay": true,
        "duration": "14h 30m",
        "flightNumber": "EK222"
      },
      {
        "id": "outbound-2",
        "direction": "outbound",
        "from": "DXB",
        "fromCity": "Dubai",
        "to": "MAA",
        "toCity": "Chennai",
        "date": "2026-01-21",
        "departureTime": "14:45",
        "arrivalTime": "20:10",
        "arrivalNextDay": false,
        "duration": "3h 55m",
        "flightNumber": "EK546"
      },
      {
        "id": "return-1",
        "direction": "return",
        "from": "MAA",
        "fromCity": "Chennai",
        "to": "DXB",
        "toCity": "Dubai",
        "date": "2026-02-04",
        "departureTime": "21:45",
        "arrivalTime": "00:45",
        "arrivalNextDay": true,
        "duration": "4h 30m",
        "flightNumber": "EK547"
      },
      {
        "id": "return-2",
        "direction": "return",
        "from": "DXB",
        "fromCity": "Dubai",
        "to": "DFW",
        "toCity": "Dallas",
        "date": "2026-02-05",
        "departureTime": "02:40",
        "arrivalTime": "08:55",
        "arrivalNextDay": false,
        "duration": "16h 15m",
        "flightNumber": "EK221"
      }
    ]
  },
  "events": [
    {
      "id": "mehendi",
      "name": "Mehendi Ceremony",
      "date": "2026-01-25",
      "startTime": "11:00",
      "endTime": "15:00",
      "venue": "Keys Prima by Lemon Tree",
      "address": "11/23 Kalakshetra Rd, Thiruvanmiyur, Chennai",
      "area": "Thiruvanmiyur",
      "type": "pre-wedding",
      "description": "Traditional henna ceremony"
    },
    {
      "id": "wedding",
      "name": "Wedding Ceremony",
      "date": "2026-01-28",
      "startTime": "09:00",
      "endTime": "10:30",
      "venue": "TBC",
      "address": null,
      "area": null,
      "type": "ceremony",
      "description": "Main wedding ceremony"
    },
    {
      "id": "lunch",
      "name": "Wedding Lunch",
      "date": "2026-01-28",
      "startTime": "11:00",
      "endTime": null,
      "venue": "Dwarka Grand Palace",
      "address": "63 1st Seaward Rd, Thiruvanmiyur, Chennai",
      "area": "Thiruvanmiyur",
      "type": "reception",
      "description": "Wedding reception lunch"
    },
    {
      "id": "cocktail",
      "name": "Cocktail Party",
      "date": "2026-01-29",
      "startTime": "19:00",
      "endTime": null,
      "venue": "Origami at Green Meadows Resort",
      "address": "Palavakkam, Chennai",
      "area": "Palavakkam",
      "type": "post-wedding",
      "description": "Evening cocktail celebration"
    }
  ],
  "accommodation": {
    "name": "Park Hyatt Chennai",
    "area": "Guindy",
    "status": "considering",
    "notes": "Closest to wedding venues (~9-15 min drive)"
  }
}
```

---

## Notes for Implementation

1. **Date Format:** Use ISO 8601 (YYYY-MM-DD) for consistency
2. **Time Format:** 24-hour format for unambiguous parsing
3. **Time Zone:** India Standard Time (IST, UTC+5:30) - use "Asia/Kolkata"
4. **TBC Venues:** Wedding ceremony venue marked as TBC - design should handle null/pending values gracefully
5. **Areas:** Thiruvanmiyur and Palavakkam are coastal neighborhoods in South Chennai
6. **Flight Times:** Stored in local time of departure city
7. **Visa Display:** Show key fields (ETA number, validity, status) on Bookings page
8. **Multi-traveler:** Structure supports adding partner's info later
