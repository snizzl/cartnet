// Die Datei habe ich per KI generiert :-)

// Function to calculate Easter Sunday for a given year using the Gaussian algorithm
// Returns a Date object for Easter Sunday of the specified year
export function getEasterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31); // Gibt 3 für März, 4 für April zurück
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  // Note: JavaScript Date months are 0-indexed (0=Jan, 1=Feb, ..., 11=Dec)
  return new Date(year, month - 1, day); // Korrektur: month - 1 für den 0-indizierten JS-Monat
}

// Define the window around Easter for the Easter egg
const EASTER_EGG_DAYS_BEFORE = 3; // e.g., from Good Friday
const EASTER_EGG_DAYS_AFTER = 7; // e.g., until the following Sunday (Low Sunday)

// Function to check if the current date is within the "Easter time" window
export function isEasterTime(): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to start of day for comparison

  const currentYear = today.getFullYear();
  const easterSunday = getEasterSunday(currentYear);
  easterSunday.setHours(0, 0, 0, 0); // Normalize to start of day

  const startOfEasterWindow = new Date(easterSunday);
  startOfEasterWindow.setDate(easterSunday.getDate() - EASTER_EGG_DAYS_BEFORE);

  const endOfEasterWindow = new Date(easterSunday);
  endOfEasterWindow.setDate(easterSunday.getDate() + EASTER_EGG_DAYS_AFTER);

  // Check if today falls within the defined window
  return today >= startOfEasterWindow && today <= endOfEasterWindow;
}
