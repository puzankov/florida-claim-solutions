// Florida counties data
export const floridaCounties: string[] = [
  "Alachua",
  "Baker",
  "Bay",
  "Bradford",
  "Brevard",
  "Broward",
  "Calhoun",
  "Charlotte",
  "Citrus",
  "Clay",
  "Collier",
  "Columbia",
  "DeSoto",
  "Dixie",
  "Duval",
  "Escambia",
  "Flagler",
  "Franklin",
  "Gadsden",
  "Gilchrist",
  "Glades",
  "Gulf",
  "Hamilton",
  "Hardee",
  "Hendry",
  "Hernando",
  "Highlands",
  "Hillsborough",
  "Holmes",
  "Indian River",
  "Jackson",
  "Jefferson",
  "Lafayette",
  "Lake",
  "Lee",
  "Leon",
  "Levy",
  "Liberty",
  "Madison",
  "Manatee",
  "Marion",
  "Martin",
  "Miami-Dade",
  "Monroe",
  "Nassau",
  "Okaloosa",
  "Okeechobee",
  "Orange",
  "Osceola",
  "Palm Beach",
  "Pasco",
  "Pinellas",
  "Polk",
  "Putnam",
  "Santa Rosa",
  "Sarasota",
  "Seminole",
  "St. Johns",
  "St. Lucie",
  "Sumter",
  "Suwannee",
  "Taylor",
  "Union",
  "Volusia",
  "Wakulla",
  "Walton",
  "Washington",
];

export const countiesIds: string[] = floridaCounties.map(county =>
  county.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')
);

export const countyMap: { [key: string]: string } = floridaCounties.reduce((acc, county) => {
  const id = county.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');
  acc[id] = county;
  return acc;
}, {} as { [key: string]: string });

export const getCountyName = (id: string, withCounty: boolean = false): string => {
  const countyName = countyMap[id];
  return countyName ? (withCounty ? `${countyName} County` : countyName) : '';
};
