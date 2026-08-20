// src/utils/prerender.js
// True only during the build-time prerender capture (see scripts/prerender.mjs).
// Lets components render a deterministic "first paint" state so the snapshot
// matches exactly what the client sees before hydration settles, avoiding
// React hydration mismatches (error #418) from async/observer-driven content.
export function isPrerender() {
    return typeof window !== "undefined" && window.location.search.includes("prerender=1");
}
