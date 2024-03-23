/**
 * Converts provided underscore format string to camel case
 *
 * @param {string} value The value to convert
 * @return {boolean} Returns `true` if `value` is a valid iso date, else `false`.
 * @example
 * ```ts
 * underscoreToCamelCase("hello_world");
 * // => Hello World
 * ```
 */
export function underscoreToCamelCase(value: string): string {
  value = value.charAt(0).toUpperCase() + value.slice(1);
  value = value.replace(/_(.)/g, (_match: string, letter) => {
    return ` ${letter.toUpperCase()}`;
  });
  return value.replace("_", " ");
}
