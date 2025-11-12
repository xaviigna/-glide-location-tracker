# Real-Time Location Tracker
### Glide Plugin - No API Keys Required

This plugin allows you to track and display user's real-time location on an interactive map using OpenStreetMap. Shows live coordinates, accuracy, and location updates.

## Features

- ✅ **Real-Time Location Tracking** - Continuously tracks user's location
- ✅ **Interactive Map** - OpenStreetMap integration (no API keys required!)
- ✅ **Live Coordinates** - Shows latitude, longitude, and accuracy
- ✅ **Location History** - Optional trail showing movement path
- ✅ **Battery Efficient** - Configurable update intervals
- ✅ **Privacy Friendly** - Runs entirely in browser, no server needed

## Setup

1. In an experimental code column, paste the URL where this plugin is hosted
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

## How It Works

1. Plugin requests location permission from user
2. Gets current location using browser's Geolocation API
3. Displays location on OpenStreetMap (free, no API key needed)
4. Continuously updates location if tracking is enabled
5. Sends location data to Glide via postMessage
6. Stores location in localStorage for Glide to read

## Use Cases

- **Delivery Tracking** - Track delivery driver location in real-time
- **Field Service** - Monitor field workers' locations
- **Fitness Tracking** - Track running/walking routes
- **Safety Apps** - Share live location in emergencies
- **Asset Tracking** - Monitor vehicle/equipment location

## Requirements

- User must grant location permission
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
- Uses browser's **Geolocation API** for location tracking
- Uses **postMessage** to communicate with Glide
- Uses **localStorage** to store location data

Enjoy real-time location tracking in your Glide apps! 🚀
