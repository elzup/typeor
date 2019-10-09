export const strOr = (v: unknown, defaultValue = ""): string =>
  typeof v === "string" ? v : defaultValue

export const numOr = (v: unknown, defaultValue = 0): number =>
  typeof v === "number" ? v : defaultValue

export const numHardOr = (v: unknown, defaultValue = 0): number =>
  typeof v === "number" && !isNaN(v) ? v : defaultValue

export const boolOr = (v: unknown, defaultValue = false): boolean =>
  typeof v === "boolean" ? v : defaultValue

export const objOr = (v: unknown, defaultValue: object = {}): object =>
  typeof v === "object" && !Array.isArray(v) && v !== null ? v : defaultValue

export const objNullOr = (
  v: unknown,
  defaultValue: object = {}
): object | null =>
  typeof v === "object" && !Array.isArray(v) ? v : defaultValue

export const funcOr = (v: unknown, defaultValue: Function): Function =>
  typeof v === "function" ? v : defaultValue

export const arrayOr = (v: unknown, defaultValue: any[] = []): any[] =>
  Array.isArray(v) ? v : defaultValue

export default {
  strOr,
  numOr,
  numHardOr,
  boolOr,
  objOr,
  objNullOr,
  funcOr,
  arrayOr,
}
