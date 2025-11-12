# Real-Time Location Tracker
### Glide Plugin - No API Keys Required

Display and track location on an interactive map using OpenStreetMap. Uses Glide's "Starting Point" column for reliable location updates, with browser geolocation as a fallback.

## Features

- ✅ **Uses Glide's Starting Point** - Works with Glide's native location column
- ✅ **Interactive Map** - OpenStreetMap integration (no API keys required!)
- ✅ **Live Coordinates** - Shows latitude, longitude, and accuracy
- ✅ **Continuous Updates** - Updates when Starting Point column changes
- ✅ **Browser Geolocation Fallback** - Optional browser-based tracking
- ✅ **Location History Trail** - Shows movement path on map

## Setup

### Step 1: Create Starting Point Column
1. In your Glide table, create a **Location** column (type: "Location" or "Starting Point")
2. Name it something like "Current Location" or "User Location"

### Step 2: Set Up Continuous Updates (Recommended)
1. Add an **Action** to your layout (button, automation, or on page load)
2. Use **"Get Current Location"** action
3. Set it to update your Starting Point column
4. Configure the action to run periodically (e.g., every 5-10 seconds) using:
   - **Automation** (runs automatically)
   - **Button** (user triggers)
   - **On Page Load** (updates when page loads)

### Step 3: Add Plugin to Glide
1. Create an **Experimental Code Column**
2. Paste the URL: `https://xaviigna.github.io/-glide-location-tracker/`
3. Configure parameters:
   - **Starting Point**: Select your Starting Point column
   - **Map Zoom**: "16" (or your preferred zoom level)
   - **Use Browser Geolocation**: "true" (for fallback tracking)
   - **Update Interval**: "1000" (milliseconds, for browser geolocation)

### Step 4: Display on Layout
1. Add a **Web Embed** component to your layout
2. Select the Experimental Code column as the source
3. The map will display the location from your Starting Point column

## Parameters

- **startingPoint** (string): Glide location column (Starting Point) - Required for initial location
- **latitude** (string): Latitude (optional - if not using Starting Point)
- **longitude** (string): Longitude (optional - if not using Starting Point)
- **mapZoom** (string): Map zoom level (1-19) - e.g., "16", "18"
- **useBrowserGeolocation** (string): Enable browser geolocation for updates - "true" or "false"
- **updateInterval** (string): Update interval in milliseconds - e.g., "1000", "5000"

## How It Works

### Primary Method: Glide's Starting Point
1. **Glide gets location** using "Get Current Location" action (works reliably!)
2. **Location is stored** in Starting Point column
3. **Plugin reads** Starting Point column and displays on map
4. **Glide updates** Starting Point periodically via actions
5. **Plugin re-renders** automatically when Starting Point changes
6. **Map updates** with new location continuously

### Fallback Method: Browser Geolocation
1. Plugin tries browser Geolocation API (may be blocked in iframes)
2. If permission granted, gets location directly from browser
3. Updates map continuously using browser's location tracking
4. Works alongside Glide's Starting Point (both can update simultaneously)

## Continuous Updates Setup

To get continuous location updates:

### Method 1: Glide Actions (Recommended)
1. Create an automation or button action
2. Use "Get Current Location" action
3. Update your Starting Point column
4. Set action to run every 5-10 seconds (using automation or timer)
5. Plugin automatically updates when Starting Point changes

### Method 2: Browser Geolocation (Fallback)
1. Enable "Use Browser Geolocation" in plugin parameters
2. Grant location permission for the GitHub Pages site
3. Browser tracks location directly
4. Updates map in real-time (if permission works)

### Method 3: Hybrid (Best)
1. Use Starting Point for initial location (works reliably)
2. Enable browser geolocation as fallback
3. Both methods work together for maximum reliability

## Use Cases

- **Delivery Tracking** - Track delivery driver location in real-time
- **Field Service** - Monitor field workers' locations
- **Fitness Tracking** - Track running/walking routes
- **Safety Apps** - Share live location in emergencies
- **Asset Tracking** - Monitor vehicle/equipment location

## Requirements

- User must grant location permission (for Glide actions)
- HTTPS required (or localhost for development)
- Modern browser with Geolocation API support

## Privacy

- Location data is only processed in the browser
- No location data is sent to external servers
- User controls location permission
- Complies with browser privacy standards

## Technical Details

- Uses **Leaflet.js** for map rendering
- Uses **OpenStreetMap** tiles (free, no API key)
- Uses **Glide's Starting Point** column for location (primary method)
- Uses browser's **Geolocation API** for location tracking (fallback)
- Uses **postMessage** to communicate with Glide
- Uses **localStorage** to store location data
- Parses multiple location formats (JSON, coordinates array, lat/lng object)

## Why Starting Point?

Browser geolocation is often blocked in iframes (security restriction). Using Glide's "Starting Point" column:
- ✅ **Works reliably** - Glide handles location permission
- ✅ **No iframe issues** - Glide gets location natively
- ✅ **Continuous updates** - Update Starting Point via actions
- ✅ **Easy setup** - Just use Glide's built-in location actions

Created by [@xaviigna](https://github.com/xaviigna) 🚀
