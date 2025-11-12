# Auto Location Tracker
### Glide Plugin - Real-Time Location Tracking with Map

**Automatically gets location from device** and displays on an interactive map with coordinates. Uses OpenStreetMap (same as Vercel app) - **no API keys needed**! Real-time tracking with auto-centering map. **No manual updates needed** - works automatically! Perfect for location tracking in Glide.

## Features

- ✅ **Interactive Map** - Displays location on OpenStreetMap (same as Vercel app)
- ✅ **Automatic Location** - Gets location directly from device (no manual updates!)
- ✅ **Real-Time Updates** - Updates continuously using `watchPosition()` (like Vercel app)
- ✅ **Auto-Centering** - Map automatically centers on location updates
- ✅ **Location Marker** - Shows current location with accuracy circle
- ✅ **Coordinates Display** - Shows coordinates in multiple formats (lat/lng, lng/lat, json)
- ✅ **No API Keys** - Works entirely in browser with OpenStreetMap
- ✅ **No Backend** - Everything runs in the plugin (no Firebase needed)
- ✅ **No Glide Actions Needed** - Works automatically without setting up actions

## Setup

### Step 1: Add Plugin to Glide
1. Create an **Experimental Code Column**
2. Paste the URL: `https://xaviigna.github.io/-glide-location-tracker/`
3. Configure parameters:
   - **Use Browser Geolocation**: `"true"` (default - enables automatic location)
   - **Output Format**: Choose format - `"lat,lng"` (default), `"lng,lat"`, or `"json"`
   - **Update Interval**: `"1000"` (milliseconds - e.g., 1000 for 1 second, 5000 for 5 seconds)

### Step 2: Display on Layout
1. Add a **Web Embed** component to your layout
2. Select the Experimental Code column as the source
3. The map will display with your location and coordinates will update automatically!

### Step 3: Grant Location Permission
1. When the plugin loads, browser will prompt for location permission
2. Click **"Allow"** to enable location tracking
3. Coordinates will start updating automatically!

### Step 4: Use Coordinates in Glide (Optional)
1. The plugin displays coordinates in the Web Embed component
2. Coordinates are also sent to Glide via postMessage (if you need to capture them)
3. Use coordinates for mapping, calculations, or display

## Parameters

- **useBrowserGeolocation** (string): Enable browser geolocation - `"true"` (default) or `"false"`
- **outputFormat** (string): Output format - `"lat,lng"` (default), `"lng,lat"`, or `"json"`
- **updateInterval** (string): Update interval in milliseconds - `"1000"` (1 second), `"5000"` (5 seconds), etc.

## Output Formats

### Default: `"lat,lng"`
Returns: `"40.7128,-74.0060"`

### Format: `"lng,lat"`
Returns: `"-74.0060,40.7128"`

### Format: `"json"`
Returns: `{"lat":40.7128,"lng":-74.0060,"latitude":40.7128,"longitude":-74.0060}`

## Examples

### Example 1: Extract from Starting Point
- **Starting Point**: `[Glide Location Column]`
- **Output Format**: `"lat,lng"`
- **Result**: `"40.7128,-74.0060"`

### Example 2: Combine Separate Lat/Lng
- **Latitude**: `"40.7128"`
- **Longitude**: `"-74.0060"`
- **Output Format**: `"lat,lng"`
- **Result**: `"40.7128,-74.0060"`

### Example 3: JSON Output
- **Starting Point**: `[Glide Location Column]`
- **Output Format**: `"json"`
- **Result**: `{"lat":40.7128,"lng":-74.0060,"latitude":40.7128,"longitude":-74.0060}`

## Use Cases

- **Combine Coordinates** - Merge lat and lng into a single string
- **Format Coordinates** - Convert between different coordinate formats
- **Extract from Location** - Get coordinates from Glide's Starting Point column
- **Pass to Other Functions** - Use coordinates in Glide formulas or actions
- **Display Coordinates** - Show coordinates in text components

## How It Works

1. **Plugin loads** - Returns HTML that runs in browser
2. **Browser gets location** - Uses `navigator.geolocation.getCurrentPosition()` and `watchPosition()`
3. **Coordinates update automatically** - Updates every X seconds (based on updateInterval)
4. **Display coordinates** - Shows coordinates in the Web Embed component
5. **Send to Glide** - Coordinates are also sent to Glide via postMessage (optional)

## Automatic Updates

**Yes, coordinates are automatically pulled from device - no manual updates needed!**

### How Automatic Updates Work:

1. **Plugin loads** - HTML with JavaScript runs in browser
2. **Browser requests location** - Asks user for location permission
3. **User grants permission** - Location access is granted
4. **Coordinates update automatically** - Updates every X seconds (configurable)
5. **Display updates** - Coordinates display in real-time in the Web Embed component

### No Setup Required:

- ✅ **No Glide actions needed** - Works automatically without setting up actions
- ✅ **No automations needed** - Browser handles location tracking
- ✅ **No manual updates** - Coordinates update automatically
- ✅ **Real-time** - Updates continuously every X seconds
- ✅ **Works immediately** - Just add plugin and grant permission!

### Update Frequency:

- **Every 1 second** (`"1000"`) - Near real-time (good for tracking)
- **Every 5 seconds** (`"5000"`) - Balanced (good battery life)
- **Every 10 seconds** (`"10000"`) - Less frequent (battery efficient)
- **Custom** - Set any interval you want (in milliseconds)

### Important Notes:

- ✅ **Automatic** - No manual updates or Glide actions needed
- ✅ **Real-time** - Updates continuously from device
- ✅ **Requires permission** - User must grant location permission
- ⚠️ **Browser geolocation** - Uses browser's geolocation API (may be blocked in some browsers)
- ⚠️ **HTTPS required** - Browser geolocation requires HTTPS (or localhost)

## Supported Input Formats

The plugin supports multiple input formats:

- **Glide Location Column** - `{coordinates: [-74.0060, 40.7128]}`
- **JSON String** - `'{"lat": 40.7128, "lng": -74.0060}'`
- **Comma-Separated** - `"40.7128,-74.0060"`
- **Separate Parameters** - `latitude: "40.7128"`, `longitude: "-74.0060"`

## Technical Details

- Parses multiple location formats (JSON, coordinates array, lat/lng object)
- Handles Glide's location column format `[longitude, latitude]`
- Validates coordinates (latitude: -90 to 90, longitude: -180 to 180)
- Returns empty string if no valid location found

Created by [@xaviigna](https://github.com/xaviigna) 🚀
