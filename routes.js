
/*
 NAMMA BUS TN
 Initial route directory
 Source: TNSTC official popular destinations
 Note: These are route listings, NOT live bus timings.
*/

export const busRoutes = [
  {
    from: "Chennai",
    to: "Madurai",
    busName: "TNSTC / SETC",
    timing: null
  },
  {
    from: "Chennai",
    to: "Tiruchendur",
    busName: "TNSTC / SETC",
    timing: null
  },
  {
    from: "Chennai",
    to: "Tirunelveli",
    busName: "TNSTC / SETC",
    timing: null
  },
  {
    from: "Chennai",
    to: "Salem",
    busName: "TNSTC / SETC",
    timing: null
  },
  {
    from: "Chennai",
    to: "Tiruppur",
    busName: "TNSTC / SETC",
    timing: null
  },
  {
    from: "Chennai",
    to: "Trichy",
    busName: "TNSTC / SETC",
    timing: null
  },
  {
    from: "Chennai",
    to: "Nagercoil",
    busName: "TNSTC / SETC",
    timing: null
  },
  {
    from: "Chennai",
    to: "Thanjavur",
    busName: "TNSTC / SETC",
    timing: null
  },
  {
    from: "Coimbatore",
    to: "Chennai",
    busName: "TNSTC / SETC",
    timing: null
  }
];

function normalizeLocation(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/,?\s*tamil nadu/gi, "")
    .replace(/,?\s*india/gi, "")
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
      (routeFrom.includes(start) || start.includes(routeFrom)) &&
      (routeTo.includes(destination) || destination.includes(routeTo))
    );
  });
}
