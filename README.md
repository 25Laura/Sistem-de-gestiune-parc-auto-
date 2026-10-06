# AutoParc
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
Open `index.html` in a browser and check the developer console (F12) to see Stage 2 data logic output.

## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| ChatGPT | Generating initial HTML structure and CSS variables for Stage 1 |
| Gemini / ChatGPT | Generating Stage 2 pure JavaScript data logic and validation |

Details per stage: see the `ai-log/` folder.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

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