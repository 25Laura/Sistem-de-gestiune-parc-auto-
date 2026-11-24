# Stage 6: AI log

## Tools
- Claude

## Conversations
- Moved the vehicle data from the React code to `db.json`, served by json-server 0.17.4 on port 3001 (resource `vehicule`).
- Added `api.js` with `fetchVehicule`, the API address read from `VITE_API_URL`, and the loading / error states in the list page, with the effect cleaned up through `ignore`.
- Replaced json-server 1.x with 0.17.4, as the guide requires.

## What I checked myself
- 
