
/*
 NAMMA BUS TN
 Verified Bus Route Directory

 IMPORTANT:
 - Only verified bus services should be added.
 - No invented bus numbers or timings.
 - Route data and live tracking are separate.
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

export function searchRoutes(from, to) {
  const start = normalizeLocation(from);
  const destination = normalizeLocation(to);

  if (!start || !destination) return [];

  return busRoutes.filter(route => {
    const routeFrom = normalizeLocation(route.from);
    const routeTo = normalizeLocation(route.to);

    return (
      routeFrom === start &&
      routeTo === destination
    );
  });
}
