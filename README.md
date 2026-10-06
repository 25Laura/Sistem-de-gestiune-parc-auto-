# FleetFlow
A fleet management web application designed to track vehicles, their operational status, fuel type, category, and assigned driver.

## Data model
| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| vehicleName | text | required, e.g. "Dacia Logan (B 123 ABC)" |
| activeFlag | boolean | toggled from list, default true (In service / In service) |
| fuelType | fixed values | Petrol, Diesel, Electric |
| category | relation | Passenger, Freight, Utility (from week 10) |
| driver | relation | assigned driver / owner (from week 11) |

Sample data used across all stages:
1. Dacia Logan (B 101 ABC), active, Petrol
2. Volvo FH16 (B 202 DEF), inactive, Diesel
3. Tesla Model 3 (B 303 GHI), active, Electric

## How to run
Open `index.html` in a browser. No build step, no server.

## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| ChatGPT | Generating initial HTML structure and CSS variables for Stage 1 |

Details per stage: see the `ai-log/` folder.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript