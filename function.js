window.function = function (enableTracking, updateInterval, mapZoom, showHistory) {
	// DYNAMIC VALUES
	enableTracking = enableTracking.value ?? "true";
	updateInterval = updateInterval.value ?? "1000";
	mapZoom = mapZoom.value ?? "16";
	showHistory = showHistory.value ?? "false";

	// LOG SETTINGS TO CONSOLE
	console.log(
		`Enable Tracking: ${enableTracking}\n` +
			`Update Interval: ${updateInterval}ms\n` +
			`Map Zoom: ${mapZoom}\n` +
			`Show History: ${showHistory}`
	);

	const customCSS = `
	* { margin: 0; padding: 0; box-sizing: border-box; }
	body {
	  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	  overflow: hidden;
	}
	#map { 
	  width: 100%; 
	  height: 100vh; 
	}
	#status {
	  position: absolute;
	  top: 10px;
	  left: 10px;
	  background: rgba(255, 255, 255, 0.95);
	  padding: 12px 16px;
	  border-radius: 8px;
	  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
	  z-index: 1000;
	  font-size: 13px;
	  max-width: 300px;
	}
	#coordinates {
	  position: absolute;
	  bottom: 10px;
	  left: 10px;
	  background: rgba(0, 0, 0, 0.85);
	  color: white;
	  padding: 12px 16px;
	  border-radius: 8px;
	  z-index: 1000;
	  font-size: 12px;
	  font-family: 'Monaco', 'Courier New', monospace;
	  line-height: 1.6;
	}
	.status-active { color: #16a34a; }
	.status-error { color: #dc2626; }
	.status-waiting { color: #ea580c; }
	button {
	  background: #4285f4;
	  color: white;
	  border: none;
	  padding: 8px 16px;
	  border-radius: 6px;
	  cursor: pointer;
	  font-size: 12px;
	  margin-top: 8px;
	}

	button:hover { background: #357ae8; }
	button:disabled { background: #ccc; cursor: not-allowed; }
	`;

	// HTML THAT IS RETURNED AS A RENDERABLE URL
	const originalHTML = `
	  <!DOCTYPE html>
	  <html>
	  <head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
	  <style>${customCSS}</style>
	  </head>
	  <body>
		<div id="map"></div>
		<div id="status" class="status-waiting">📍 Requesting location permission...<br><small style="color: #666; font-size: 11px; display: block; margin-top: 5px;">Please allow location access when prompted by your browser.</small></div>
		<div id="coordinates">Lat: --<br>Lng: --<br>Accuracy: --</div>
		
		<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
	  <script>
		  let map;
		  let marker;
		  let circle;
		  let watchId;
		  let locationHistory = [];
		  let isTracking = false;
		  let polyline;
		  
		  // Initialize map
		  function initMap(lat, lng) {
			map = L.map('map').setView([lat, lng], ${mapZoom});
			
			// OpenStreetMap tiles (free, no API key required)
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			  attribution: '© OpenStreetMap contributors',
			  maxZoom: 19
			}).addTo(map);
			
			// Create marker
			marker = L.marker([lat, lng], {
			  icon: L.divIcon({
				className: 'custom-marker',
				html: '<div style="background: #4285f4; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
				iconSize: [20, 20],
				iconAnchor: [10, 10]
			  })
			}).addTo(map);
			
			// Create accuracy circle
			circle = L.circle([lat, lng], {
			  radius: 50,
			  color: '#4285f4',
			  fillColor: '#4285f4',
			  fillOpacity: 0.1,
			  weight: 2
			}).addTo(map);
			
			// Create polyline for history if enabled
			if ('${showHistory}' === 'true') {
			  polyline = L.polyline([], {
				color: '#4285f4',
				weight: 3,
				opacity: 0.5
			  }).addTo(map);
			}
		  }
		  
		  // Update location
		  function updateLocation(position) {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;
			const accuracy = position.coords.accuracy;
			const timestamp = new Date(position.timestamp);
			
			// Store in history
			locationHistory.push({ lat, lng, accuracy, timestamp: Date.now() });
			
			// Update display
			document.getElementById('coordinates').innerHTML = 
			  \`Lat: \${lat.toFixed(6)}<br>
			   Lng: \${lng.toFixed(6)}<br>
			   Accuracy: \${Math.round(accuracy)}m<br>
			   Updates: \${locationHistory.length}<br>
			   Time: \${timestamp.toLocaleTimeString()}\`;
			
			// Update map
			if (map) {
			  map.setView([lat, lng], map.getZoom());
			  marker.setLatLng([lat, lng]);
			  circle.setLatLng([lat, lng]);
			  circle.setRadius(accuracy);
			  
			  // Update history trail if enabled
			  if ('${showHistory}' === 'true' && polyline) {
				const path = locationHistory.map(loc => [loc.lat, loc.lng]);
				polyline.setLatLngs(path);
			  }
			} else {
			  initMap(lat, lng);
			}
			
			// Update status
			document.getElementById('status').innerHTML = 
			  \`✅ Tracking active • \${locationHistory.length} updates\`;
			document.getElementById('status').className = 'status-active';
			
			// SEND TO GLIDE VIA POSTMESSAGE
			if (window.parent && window.parent !== window) {
			  window.parent.postMessage({
				type: 'location-update',
				data: {
				  latitude: lat,
				  longitude: lng,
				  accuracy: accuracy,
				  timestamp: position.timestamp,
				  speed: position.coords.speed || null,
				  heading: position.coords.heading || null
				}
			  }, '*');
			}
			
			// STORE IN LOCALSTORAGE
			localStorage.setItem('lastLocation', JSON.stringify({
			  lat, lng, accuracy, 
			  timestamp: position.timestamp,
			  speed: position.coords.speed,
			  heading: position.coords.heading
			}));
			
			// Store history (last 100 points)
			if (locationHistory.length > 100) {
			  locationHistory = locationHistory.slice(-100);
			}
			if ('${showHistory}' === 'true') {
			  localStorage.setItem('locationHistory', JSON.stringify(locationHistory.slice(-50)));
			}
		  }
		  
		  // Handle errors
		  function handleError(error) {
			console.error('Geolocation error:', error);
			let message = 'Unknown error';
			let instructions = '';
			const isInIframe = window.self !== window.top;
			
			switch(error.code) {
			  case error.PERMISSION_DENIED:
				message = '❌ Location permission denied';
				if (isInIframe) {
				  instructions = 'This plugin runs in an iframe and needs separate location permission. Click the location icon in your browser address bar (near the URL) to allow location access for the GitHub Pages site, or open this page directly in a new tab to grant permission.';
				} else {
				  instructions = 'Please allow location access in your browser settings. Look for the location icon in your browser address bar, or go to Settings → Privacy → Location Services.';
				}
				break;
			  case error.POSITION_UNAVAILABLE:
				message = '❌ Location unavailable';
				instructions = 'Your device cannot determine your location. Check that GPS/Location Services are enabled in your device settings.';
				break;
			  case error.TIMEOUT:
				message = '⏱️ Location request timeout';
				instructions = 'The location request took too long. Please try again or check your internet connection.';
				break;
			}
			let statusHTML = message + '<br><small style="color: #666; font-size: 11px; display: block; margin-top: 5px; line-height: 1.4;">' + instructions + '</small>';
			
			// Add a button to open in new tab if in iframe and permission denied
			if (isInIframe && error.code === error.PERMISSION_DENIED) {
			  statusHTML += '<br><button onclick="window.open(window.location.href, \'_blank\')" style="margin-top: 8px; background: #4285f4; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 12px;">Open in New Tab to Grant Permission</button>';
			}
			
			document.getElementById('status').innerHTML = statusHTML;
			document.getElementById('status').className = 'status-error';
			
			// Log to console for debugging
			console.log('Error details:', {
			  code: error.code,
			  message: error.message,
			  isInIframe: isInIframe,
			  userAgent: navigator.userAgent,
			  origin: window.location.origin
			});
		  }
		  
		  // Check if we're in an iframe
		  function isInIframe() {
			try {
			  return window.self !== window.top;
			} catch (e) {
			  return true;
			}
		  }
		  
		  // Start tracking
		  function startTracking() {
			if (!navigator.geolocation) {
			  document.getElementById('status').innerHTML = '❌ Geolocation not supported<br><small style="color: #666; font-size: 11px; display: block; margin-top: 5px;">Your browser does not support location services.</small>';
			  document.getElementById('status').className = 'status-error';
			  return;
			}
			
			const inIframe = isInIframe();
			console.log('Starting location tracking...', { inIframe, origin: window.location.origin });
			
			// Show permission request message with iframe-specific instructions
			let permissionMsg = '📍 Requesting location permission...';
			if (inIframe) {
			  permissionMsg += '<br><small style="color: #666; font-size: 11px; display: block; margin-top: 5px;">If no prompt appears, click the location icon (📍) in your browser address bar to allow access for this site.</small>';
			} else {
			  permissionMsg += '<br><small style="color: #666; font-size: 11px; display: block; margin-top: 5px;">Please allow location access when prompted.</small>';
			}
			document.getElementById('status').innerHTML = permissionMsg;
			document.getElementById('status').className = 'status-waiting';
			
			const options = {
			  enableHighAccuracy: true,
			  timeout: 15000, // Increased timeout for iframe scenarios
			  maximumAge: 0
			};
			
			// Get initial position
			console.log('Calling getCurrentPosition...');
			navigator.geolocation.getCurrentPosition(
			  (position) => {
				console.log('Location obtained successfully:', position);
				updateLocation(position);
				
				// Start watching if enabled
				if ('${enableTracking}' === 'true' && !isTracking) {
				  isTracking = true;
				  watchId = navigator.geolocation.watchPosition(
					updateLocation,
					handleError,
					{ ...options, timeout: parseInt('${updateInterval}') || 1000 }
				  );
				}
			  },
			  (error) => {
				console.error('getCurrentPosition error:', error);
				handleError(error);
			  },
			  options
			);
		  }
		  
		  // Stop tracking
		  function stopTracking() {
			if (watchId) {
			  navigator.geolocation.clearWatch(watchId);
			  watchId = null;
			  isTracking = false;
			  document.getElementById('status').innerHTML = '⏸️ Tracking stopped';
			  document.getElementById('status').className = 'status-waiting';
			}
		  }
		  
		  // Listen for messages from Glide
		  window.addEventListener('message', function(event) {
			if (event.data && event.data.type === 'stop-tracking') {
			  stopTracking();
			} else if (event.data && event.data.type === 'start-tracking') {
			  startTracking();
			} else if (event.data && event.data.type === 'get-location') {
			  // Send current location on request
			  const lastLoc = localStorage.getItem('lastLocation');
			  if (lastLoc) {
				window.parent.postMessage({
				  type: 'location-response',
				  data: JSON.parse(lastLoc)
				}, '*');
			  }
			}
		  });
		  
		  // Start on load
		  window.addEventListener('load', startTracking);
		  
		  // Cleanup
		  window.addEventListener('beforeunload', stopTracking);
	  </script>
	  </body>
	  </html>
	  `;
	var encodedHtml = encodeURIComponent(originalHTML);
	return "data:text/html;charset=utf-8," + encodedHtml;
};
