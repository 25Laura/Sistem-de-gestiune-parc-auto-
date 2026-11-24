# Stage 8: AI log

## Tools
- Claude

## Conversations
- Added React Router: list page, detail page at `/vehicule/:id`, about page and 404 page, inside a shared `Layout` with `NavLink` navigation.
- The detail page reads the id with `useParams`, requests the vehicle with `fetchVehicul(id)` and shows an error for a missing id.
- Moved component styles to CSS Modules; `index.css` keeps only the variables and the shared classes. Fixed values moved to `constants.js`.

## What I checked myself
- 
