export function parseMoney(s: string): number {
  return parseNumber(s);
}

export function parsePercent(s: string): number {
  return parseNumber(s) / 100;
}

export function parseNumber(s: string): number {
  return parseFloat(s.replace(/,/g, ''));
}