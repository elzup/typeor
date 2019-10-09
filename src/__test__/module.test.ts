import m from "../"

const { numOr, strOr, numHardOr, boolOr, objOr, objNullOr, funcOr, arrayOr } = m

test("strOr", () => {
  expect(strOr("aaa", "bbb")).toBe("aaa")
  expect(strOr("", "bbb")).toBe("")

  expect(strOr(1, "bbb")).toBe("bbb")
  expect(strOr(null, "bbb")).toBe("bbb")
  expect(strOr(NaN, "bbb")).toBe("bbb")

  expect(strOr("abc")).toBe("abc")
  expect(strOr(10)).toBe("")
})

test("numOr", () => {
  expect(numOr(0, 2)).toBe(0)
  expect(numOr(100, 2)).toBe(100)
  expect(numOr(-1, 2)).toBe(-1)

  expect(numOr("a", 2)).toBe(2)
  expect(numOr(null, 2)).toBe(2)
  expect(numOr(NaN, 2)).toBeNaN()

  expect(numOr(10)).toBe(10)
  expect(numOr("")).toBe(0)
})

test("numHardOr", () => {
  expect(numHardOr(10, 12)).toBe(10)

  expect(numHardOr(NaN, 12)).toBe(12)

  expect(numHardOr(10)).toBe(10)
  expect(numHardOr(NaN)).toBe(0)
})

test("boolOr", () => {
  expect(boolOr(true, false)).toBe(true)

  expect(boolOr(1, false)).toBe(false)
  expect(boolOr(undefined, false)).toBe(false)

  expect(boolOr(true)).toBe(true)
  expect(boolOr(false)).toBe(false)
  expect(boolOr(10)).toBe(false)
})

test("objOr", () => {
  expect(objOr({ b: 2 }, { a: 1 })).toStrictEqual({ b: 2 })

  expect(objOr(1, { a: 1 })).toStrictEqual({ a: 1 })
  expect(objOr(null, { a: 1 })).toStrictEqual({ a: 1 })

  expect(objOr({ a: 1 })).toStrictEqual({ a: 1 })
  expect(objOr(false)).toStrictEqual({})
})

test("objNullOr", () => {
  expect(objNullOr({ b: 2 }, { a: 1 })).toStrictEqual({ b: 2 })
  expect(objNullOr(1, { a: 1 })).toStrictEqual({ a: 1 })

  expect(objNullOr(null, { a: 1 })).toBeNull()

  expect(objNullOr({ a: 1 })).toStrictEqual({ a: 1 })
  expect(objNullOr(false)).toStrictEqual({})
})

test("funcOr", () => {
  expect(funcOr(() => 1, () => 2)()).toBe(1)
  expect(funcOr(true, () => 2)()).toBe(2)
})

test("arrayOr", () => {
  expect(arrayOr([1], [2])).toStrictEqual([1])
  expect(arrayOr([1, 2], [2])).toStrictEqual([1, 2])

  expect(arrayOr(100, [2])).toStrictEqual([2])
  expect(arrayOr({}, [2])).toStrictEqual([2])

  expect(arrayOr([1])).toStrictEqual([1])
  expect(arrayOr(false)).toStrictEqual([])
})
