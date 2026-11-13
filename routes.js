
// NAMMA BUS TN - Route Database

export const busRoutes = [];

// Search routes using From and To
export function searchRoutes(from, to) {
  const start = from.trim().toLowerCase();
  const destination = to.trim().toLowerCase();

  if (!start || !destination) {
    return [];
  }

  return busRoutes.filter(route =>
    route.from.toLowerCase().includes(start) &&
    route.to.toLowerCase().includes(destination)
  );
}
