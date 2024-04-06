# @utility/string

[![JSR Version](https://jsr.io/badges/@utility/string)](https://jsr.io/@utility/string)
[![JSR Score](https://jsr.io/badges/@utility/string/score)](https://jsr.io/@utility/string/score)
[![ci](https://github.com/utilityjs/string/actions/workflows/test.yml/badge.svg)](https://github.com/utilityjs/string/actions/workflows/test.yml)
[![Coverage](https://codecov.io/gh/utilityjs/string/branch/main/graph/badge.svg?token=OzlniGFmNp)](https://codecov.io/gh/utilityjs/string)
[![License](https://img.shields.io/github/license/utilityjs/string.svg?label=License)](/LICENSE)

Collection of string utility functions

## Install

Deno

```shell
deno add @utility/string
```

Node

```shell
npx jsr add @utility/string
```

Bun

```shell
bunx jsr add @utility/string
```

## Usage

```typescript
import { underscoreToCamelCase } from "@utility/string";

underscoreToCamelCase("hello_world");
// => Hello World
```
