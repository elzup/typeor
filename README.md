[![npm version](https://badge.fury.io/js/typeor.svg)](https://badge.fury.io/js/typeor)
![](https://github.com/elzup/typeor/workflows/Node%20CI/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# typeor

> Return default value if wrong type

## Install

```
$ npm install typeor
```



## API

### strOr(v: unknown, defaultValue = ""): string

`typeof v === "string" ? v : defaultValue`

```ts
import { strOr } from 'typeor'
strOr("aaa", "bbb")
// "aaa"
strOr("", "bbb")
// ""
strOr(1, "bbb")
// "bbb"
strOr(null, "bbb")
// "bbb"
strOr(NaN, "bbb")
// "bbb"

strOr("abc")
// "abc"
strOr(10)
// ""
```

### numOr(v: unknown, defaultValue = 0): number

`typeof v === "number" ? v : defaultValue`

```ts
numOr(0, 2)
// 0
numOr(100, 2)
// 100
numOr(-1, 2)
// -1

numOr("a", 2)
// 2
numOr(null, 2)
// 2
numOr(NaN, 2)
// NaN

  numOr(10)
// 10
  numOr("")
// 0
```

### numHardOr(v: unknown, defaultValue = 0): number

`typeof v === "number" && !isNaN(v) ? v : defaultValue`

```ts
numHardOr(10, 12)
// 10

numHardOr(NaN, 12)
// 12

numHardOr(10)
// 10
numHardOr(NaN)
// 0
```

### boolOr(v: unknown, defaultValue = false): boolean

`typeof v === "boolean" ? v : defaultValue`

```ts
boolOr(true, false)
// true

boolOr(1, false)
// false
boolOr(undefined, false)
// false

boolOr(true)
// true
boolOr(false)
// false
boolOr(10)
// false
```

### objOr(v: unknown, defaultValue: object = {}): object

`typeof v === "object" && v !== null ? v : defaultValue`

```ts
objOr({ b: 2 }, { a: 1 })
// { b: 2 }

objOr(1, { a: 1 })
// { a: 1 }
objOr(null, { a: 1 })

// { a: 1 }
objOr({ a: 1 })
// { a: 1 }
objOr(false)
// {}
```

### objNullOr(v: unknown, defaultValue: object = {}): object | null

`typeof v === "object" ? v : defaultValue`

```ts
objNullOr({ b: 2 }, { a: 1 })
// { b: 2 }
objNullOr(1, { a: 1 })
// { a: 1 }

objNullOr(null, { a: 1 })
// 

objNullOr({ a: 1 })
// { a: 1 }
objNullOr(false)
// {}
```

### funcOr(v: unknown, defaultValue: Function): Function

`typeof v === "function" ? v : defaultValue`

```ts
funcOr(() => 1, () => 2))
// () => 1
funcOr(true, () => 2))
// () => 2
```

### arrayOr(v: unknown, defaultValue: any[] = []): any[]

`Array.isArray(v) ? v : defaultValue`

```ts
arrayOr([1], [2])
// [1]
arrayOr([1, 2], [2])
// [1]

arrayOr(100, [2])
// [2]
arrayOr({}, [2])
// [2]

arrayOr([1])
// [1]
arrayOr(false)
// []
```
