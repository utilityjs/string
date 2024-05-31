import { toString } from "./utils.ts";

/**
 * Converts provided underscore format string to camel case
 *
 * @param {string} value The value to convert
 * @return {string} Returns the title cased string.
 * @example
 * ```ts
 * underscoreToTitleCase("hello_world");
 * // => Hello World
 * ```
 */
export function underscoreToTitleCase(
  value: string | null | undefined,
): string {
  let strValue = toString(value);
  strValue = strValue.charAt(0).toUpperCase() + strValue.slice(1);
  strValue = strValue.replace(/_(.)/g, (_match: string, letter) => {
    return ` ${letter.toUpperCase()}`;
  });
  return strValue.replace("_", " ");
}

/**
 * Converts provided string into kebab case
 *
 * @param {string} value The value to convert
 * @return {string} Returns the kebab cased string.
 * @example
 * ```ts
 * toKebabCase("HelloWorld");
 * // => hello-world
 *
 * toKebabCase("hello_world")
 * // => hello-world
 * ```
 */
export function toKebabCase(value: string | null | undefined): string {
  const strValue = toString(value);
  let kebabCase = '';
  for (let i = 0; i < strValue.length; i++) {
    const char = strValue[i];
    if (char.toUpperCase() === char && char.toLowerCase() !== char) {
      if (i > 0) {
        kebabCase += '-';
      }
      kebabCase += char.toLowerCase();
    } else if (char === ' ' || char === '_' || char === '-') {
      kebabCase += '-';
    } else {
      kebabCase += char;
    }
  }
  return kebabCase;
}

/**
 * Converts a string value to a boolean.
 * @param {string | null | undefined} value - The input value to convert.
 * @returns {boolean} The boolean representation of the input value.
 * @example
 * ```ts
 * const trueValue = toBoolean("true"); // true
 * const falseValue = toBoolean("false"); // false
 * const nullValue = toBoolean(null); // false
 * const undefinedValue = toBoolean(undefined); // false
 * ```
 */
export function toBoolean(value: string | null | undefined): boolean {
  if (value === null || value === undefined) {
    return false;
  }
  switch (value.toLowerCase().trim()) {
    case "true":
    case "yes":
    case "1":
      return true;
    case "false":
    case "no":
    case "0":
    case null:
      return false;
    default:
      return Boolean(value);
  }
}
