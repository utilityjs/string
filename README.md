# @utility/string

[![JSR Version](https://jsr.io/badges/@utility/string)](https://jsr.io/@utility/string)
[![JSR Score](https://jsr.io/badges/@utility/string/score)](https://jsr.io/@utility/string/score)
[![Test Status](https://github.com/utilityjs/string/actions/workflows/test.yml/badge.svg)](https://github.com/utilityjs/string/actions/workflows/test.yml)
[![Coverage](https://codecov.io/gh/utilityjs/string/branch/main/graph/badge.svg?token=OzlniGFmNp)](https://codecov.io/gh/utilityjs/string)
[![License](https://img.shields.io/github/license/utilityjs/string.svg?label=License)](/LICENSE)

Collection of string utility functions

## Usage

**underscoreToTitleCase** - Converts provided underscore format string to camel case
```typescript
import { underscoreToTitleCase } from "@utility/string";

underscoreToTitleCase("hello_world");
// => Hello World
```


**toBoolean** - Converts a string value to a boolean.
```typescript
import { toBoolean } from "@utility/string";

const trueValue = toBoolean("true"); // true
```
