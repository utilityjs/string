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
  let strValue = _toString(value);
  strValue = strValue.charAt(0).toUpperCase() + strValue.slice(1);
  strValue = strValue.replace(/_(.)/g, (_match: string, letter) => {
    return ` ${letter.toUpperCase()}`;
  });
  return strValue.replace("_", " ");
}

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0;

function _toString(value: any): string {
  if (value == null) {
    return "";
  }
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return `${
      value.map((other) => (other == null ? other : _toString(other)))
    }`;
  }
  const result = `${value}`;
  return result === "0" && 1 / value === -INFINITY ? "-0" : result;
}
