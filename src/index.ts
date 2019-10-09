const strOr = (v: unknown, defaultValue = ""): string =>
  typeof v === "string" ? v : defaultValue

const numOr = (v: unknown, defaultValue = 0): number =>
  typeof v === "number" ? v : defaultValue

const numHardOr = (v: unknown, defaultValue = 0): number =>
  typeof v === "number" && !isNaN(v) ? v : defaultValue

const boolOr = (v: unknown, defaultValue = false): boolean =>
  typeof v === "boolean" ? v : defaultValue

const objOr = (v: unknown, defaultValue: object = {}): object =>
  typeof v === "object" && v !== null ? v : defaultValue

const objNullOr = (v: unknown, defaultValue: object = {}): object | null =>
  typeof v === "object" ? v : defaultValue

const funcOr = (v: unknown, defaultValue: Function): Function =>
  typeof v === "function" ? v : defaultValue

const arrayOr = (v: unknown, defaultValue: any[] = []): any[] =>
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
