# Stage 2: AI log

## Tools
- ChatGPT / Gemini

## Conversations
- Adapted the data logic for FleetFlow (Fleet Management application) covering functions for reading, searching, immutable adding, state toggling, and deletion.

## Key requests
### 1. Fleet Management Data Logic Implementation
- Asked: How to adapt Stage 2 JavaScript functions for a vehicle fleet model using immutability (spread operator, map, filter, reduce).
- Got: ES6 code with strict immutability, data validation for vehicle name and fuel type, and zero DOM manipulation.
- Changed or rejected: Kept all logic purely in JavaScript using console output for tests.

## What I learned / what did not work
Learned how array immutability (`[...list, newItem]`, `map`, `filter`) prevents unexpected side effects, which is crucial for state management in framework environments like React.