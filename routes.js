
/*
 NAMMA BUS TN
 Verified Bus Route Directory

 Only verified services will be displayed.
 No invented buses, timings or live locations.
*/

export const busRoutes = [];

function normalizeLocation(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/,?\s*tamil nadu/gi, "")
    .replace(/,?\s*india/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesLocation(selectedPlace, routePlace) {
  const selected = normalizeLocation(selectedPlace);
  const route = normalizeLocation(routePlace);

  return (
    selected === route ||
    selected.startsWith(route + ",")
  );
}

export function searchRoutes(from, to) {
  if (!from || !to) return [];

  return busRoutes.filter(route =>
    matchesLocation(from, route.from) &&
    matchesLocation(to, route.to)
  );
}
