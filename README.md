[![npm version](https://badge.fury.io/js/typeor.svg)](https://badge.fury.io/js/typeor)
![](https://github.com/elzup/typeor/workflows/Node%20CI/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# typeor

> Return default value if wrong type

## Install

- module

```
$ npm install typeor
```



## API

### strOr(v: unknown, defaultValue = ""): string

`typeof v === "string" ? v : defaultValue`

```ts
import { strOr } from 'typeor'
strOr("aaa", "bbb")
// => "aaa"
strOr("", "bbb")
// => ""
strOr(1, "bbb")
// => "bbb"
strOr(null, "bbb")
// => "bbb"
strOr(NaN, "bbb")
// => "bbb"

strOr("abc")
// => "abc"
strOr(10)
// => ""
```

### numOr(v: unknown, defaultValue = 0): number

`typeof v === "number" ? v : defaultValue`

### numHardOr(v: unknown, defaultValue = 0): number

`typeof v === "number" && !isNaN(v) ? v : defaultValue`

### boolOr(v: unknown, defaultValue = false): boolean

`typeof v === "boolean" ? v : defaultValue`

### objOr(v: unknown, defaultValue: object = {}): object

`typeof v === "object" && v !== null ? v : defaultValue`

### objNullOr(v: unknown, defaultValue: object = {}): object | null

`typeof v === "object" ? v : defaultValue`

### funcOr(v: unknown, defaultValue: Function): Function

`typeof v === "function" ? v : defaultValue`

const arrayOr = (v: unknown, defaultValue: any[] = []): any[] =>
  Array.isArray(v) ? v : defaultValue
