# Real-Time Location Tracker
### Glide Plugin - No API Keys Required

Real-Time Location Tracker plugin for Glide Apps. Track and display user's real-time location on an interactive map using OpenStreetMap.

## Features

- ✅ **Real-Time Location Tracking** - Continuously tracks user's location
- ✅ **Interactive Map** - OpenStreetMap integration (no API keys required!)
- ✅ **Live Coordinates** - Shows latitude, longitude, and accuracy
- ✅ **Location History** - Optional trail showing movement path
- ✅ **Battery Efficient** - Configurable update intervals
- ✅ **Privacy Friendly** - Runs entirely in browser, no server needed

## Setup

1. In an experimental code column, paste this URL: `https://xaviigna.github.io/-glide-location-tracker/`
2. Then on your layout screen, add a web-embed component and select this column as the source
3. Configure the parameters:
   - **Enable Tracking**: Set to "true" for real-time tracking
   - **Update Interval**: How often to update (in milliseconds, e.g., "1000" for 1 second)
   - **Map Zoom**: Zoom level for the map (1-19, default: "16")
   - **Show History**: Set to "true" to show location trail

## Parameters

- **enableTracking** (string): Enable real-time tracking - "true" or "false"
- **updateInterval** (string): Update interval in milliseconds - e.g., "1000", "5000"
- **mapZoom** (string): Map zoom level (1-19) - e.g., "16", "18"
- **showHistory** (string): Show location history trail - "true" or "false"

## Use Cases

- **Delivery Tracking** - Track delivery driver location in real-time
- **Field Service** - Monitor field workers' locations
- **Fitness Tracking** - Track running/walking routes
- **Safety Apps** - Share live location in emergencies
- **Asset Tracking** - Monitor vehicle/equipment location

## Technical Details

- Uses **Leaflet.js** for map rendering
- Uses **OpenStreetMap** tiles (free, no API key)
- Uses browser's **Geolocation API** for location tracking
- Uses **postMessage** to communicate with Glide
- Uses **localStorage** to store location data

Created by [@xaviigna](https://github.com/xaviigna) 🚀
