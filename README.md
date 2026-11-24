# AutoParc
A fleet management web application designed to track vehicles, their operational status, fuel type, year of manufacture, category, and assigned driver.

## Data model
| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| vehicleName | text | required, max 60 characters, e.g. "Dacia Logan (B 101 ABC)" |
| activeFlag | boolean | toggled from list, default true (in service / out of service) |
| fuelType | fixed values | petrol, diesel, electric |
| an | number | year of manufacture, between 1950 and the current year |
| category | relation | Passenger, Freight, Utility (from week 10) |
| driver | relation | assigned driver / owner (from week 11) |

Sample data used across all stages:
1. Dacia Logan (B 101 ABC), active, Petrol
2. Volvo FH16 (B 202 DEF), inactive, Diesel
3. Tesla Model 3 (B 303 GHI), active, Electric

## How to run
```
cd frontend
npm install
npm run api    # terminal 1, http://localhost:3001
npm run dev    # terminal 2, http://localhost:5173
```

The API address is read from `VITE_API_URL` (see `frontend/.env.example`).
The `mockup/` folder and the root `index.html` are the Stage 1 and Stage 2 versions.

## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| ChatGPT | Generating initial HTML structure and CSS variables for Stage 1 |
| Gemini / ChatGPT | Generating Stage 2 pure JavaScript data logic and validation |
| Gemini / ChatGPT | React components for Stages 3-5 |
| Claude | Stages 6-8: API calls, form with validation, routing, CSS Modules |

Details per stage: see the `ai-log/` folder.

## Stage 2 Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [index.html#L70](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/20345d572b040468cf587ecae6aff84ee01e239b/index.html#L68) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [vehicule.js#L2-L6](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/20345d572b040468cf587ecae6aff84ee01e239b/vehicule.js#L1) | read |
| S2-R3 | list, count, search, add, toggle, delete | [vehicule.js#L12-L66](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/20345d572b040468cf587ecae6aff84ee01e239b/vehicule.js#L9) | console output |
| S2-R4 | add rejects empty name and invalid tag | [vehicule.js#L34-L42](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/20345d572b040468cf587ecae6aff84ee01e239b/vehicule.js#L29) | last 2 console lines |
| S2-R5 | original array unchanged after add | [vehicule.js#L75-L77](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/20345d572b040468cf587ecae6aff84ee01e239b/vehicule.js#L60) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md#L24](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/README.md), [ai-log/etapa-02.md](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | [Commit Stage 2](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/commit/20345d572b040468cf587ecae6aff84ee01e239b#diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5R30) | commit history |

## Stage 4: components
The list is rendered from the data, through two components:
- VehicleList receives the whole array and renders one card per item
- VehicleCard receives a single item through props and displays it

## Stage 6: data from a mock API
The list is served by json-server (0.17.4) from `frontend/db.json`, resource `vehicule`.
The app fetches it on load and shows a loading state and an error state.

## Stage 7: form and validation
Vehicles can be added from the page. The form is controlled and validated
(name required, max 60 characters; year between 1950 and the current year),
and every change (add, toggle, delete) goes to the API before it shows up in the list.
`tw.json` and the `data-testid` attributes mark the elements for the automatic check.

## Stage 8: routing and detail page
Three pages behind React Router: the fleet list, a detail page at `/vehicule/:id`,
and an about page, plus a 404 page. Component styles moved to CSS Modules;
`index.css` keeps only the variables and the shared classes.

## Stage 6 Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S6-R1 | npm run api starts, route shows JSON | [package.json#L11](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/package.json#L11), [db.json](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/db.json) | open localhost:3001/vehicule |
| S6-R2 | data no longer in React code | [VehiculePage.jsx#L8](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/pages/VehiculePage.jsx#L8) | read |
| S6-R3 | loading message while waiting | [VehiculePage.jsx#L84-L88](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/pages/VehiculePage.jsx#L84-L88) | --delay 4000 |
| S6-R4 | error message when API is down | [VehiculePage.jsx#L12-L30](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/pages/VehiculePage.jsx#L12-L30), [#L89-L93](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/pages/VehiculePage.jsx#L89-L93) | stop npm run api, refresh |
| S6-R5 | fetch only in api.js, URL from env | [api.js#L1-L12](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/api.js#L1-L12), [.env.example](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/.env.example) | search for fetch |
| S6-R6 | README Stage 6 section + AI log | [README.md](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/README.md), [ai-log/etapa-06.md](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/ai-log/etapa-06.md) | read |
| S6-R7 | commit "Stage 6" pushed | link to the commit | commit history |

## Stage 7 Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S7-R1 | controlled form: value + onChange on every field | [VehicleForm.jsx#L52-L101](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/components/VehicleForm.jsx#L52-L101) | read |
| S7-R2 | empty name shows an error, nothing is sent | [VehicleForm.jsx#L14-L23](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/components/VehicleForm.jsx#L14-L23) | submit empty, watch Network |
| S7-R3 | added item shows in the list and survives refresh | [VehiculePage.jsx#L32-L35](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/pages/VehiculePage.jsx#L32-L35), [api.js#L22-L24](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/api.js#L22-L24) | add, refresh |
| S7-R4 | toggle and delete survive refresh | [VehiculePage.jsx#L37-L54](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/pages/VehiculePage.jsx#L37-L54) | toggle/delete, refresh |
| S7-R5 | button disabled while sending, form cleared only on success | [VehicleForm.jsx#L25-L49](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/components/VehicleForm.jsx#L25-L49), [#L97](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/components/VehicleForm.jsx#L97) | --delay 3000; stop API and submit |
| S7-R6 | tw.json and the data-testid attributes from table 7.3 | [tw.json](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/tw.json), [VehicleCard.jsx#L6-L52](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/components/VehicleCard.jsx#L6-L52) | querySelectorAll in the console |
| S7-R7 | README Stage 7 section + AI log | [README.md](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/README.md), [ai-log/etapa-07.md](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/ai-log/etapa-07.md) | read |
| S7-R8 | commit "Stage 7" pushed | link to the commit | commit history |

## Stage 8 Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S8-R1 | header navigation changes page without reload | [App.jsx](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/App.jsx), [Layout.jsx#L39-L60](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/components/Layout.jsx#L39-L60) | click links, watch Network |
| S8-R2 | click on an item opens its detail page | [VehicleCard.jsx#L28-L34](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/components/VehicleCard.jsx#L28-L34), [VehiculDetaliuPage.jsx](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/pages/VehiculDetaliuPage.jsx) | click a title |
| S8-R3 | refresh on the detail URL works; missing id shows an error | [VehiculDetaliuPage.jsx#L13-L55](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/pages/VehiculDetaliuPage.jsx#L13-L55) | refresh /vehicule/1, open /vehicule/999 |
| S8-R4 | unknown URL shows the app 404 page | [App.jsx#L15](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/App.jsx#L15), [NotFoundPage.jsx](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/pages/NotFoundPage.jsx) | open /ceva |
| S8-R5 | each component has its .module.css; index.css only shared styles | [src/components](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/components), [src/pages](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/pages), [index.css](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/index.css) | read |
| S8-R6 | data-testid attributes from tables 7.3 and 8.2; detail route /vehicule/:id | [Layout.jsx#L39](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/components/Layout.jsx#L39), [VehicleCard.jsx](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/components/VehicleCard.jsx), [VehiculDetaliuPage.jsx#L59-L68](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/pages/VehiculDetaliuPage.jsx#L59-L68), [NotFoundPage.jsx#L5](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/frontend/src/pages/NotFoundPage.jsx#L5) | querySelector in the console |
| S8-R7 | README Stage 8 section + AI log | [README.md](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/README.md), [ai-log/etapa-08.md](https://github.com/25Laura/Sistem-de-gestiune-parc-auto-/blob/main/ai-log/etapa-08.md) | read |
| S8-R8 | commit "Stage 8" pushed | link to the commit | commit history |

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: data from a mock API
- [x] Stage 7: form and validation
- [x] Stage 8: routing and detail page
- [ ] Stage 9: own backend with Express
