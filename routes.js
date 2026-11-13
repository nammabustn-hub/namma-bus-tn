
/*
  NAMMA BUS TN
  Tamil Nadu Bus Route Database

  Add only verified bus route information here.
*/

export const busRoutes = [
  // Verified routes will be added here.
];


/* Normalize location names */
function normalizeLocation(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/,?\s*tamil nadu/gi, "")
    .replace(/,?\s*india/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}


/* Search buses between two locations */
export function searchRoutes(from, to) {
  const start = normalizeLocation(from);
  const destination = normalizeLocation(to);

  if (!start || !destination) {
    return [];
  }

  return busRoutes.filter(route => {
    const routeFrom = normalizeLocation(route.from);
    const routeTo = normalizeLocation(route.to);

    const fromMatches =
      routeFrom === start ||
      routeFrom.includes(start) ||
      start.includes(routeFrom);

    const toMatches =
      routeTo === destination ||
      routeTo.includes(destination) ||
      destination.includes(routeTo);

    return fromMatches && toMatches;
  });
}
