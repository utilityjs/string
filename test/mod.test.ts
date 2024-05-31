import { assertEquals, describe, it } from "../test_deps.ts";

import { toBoolean, toKebabCase, underscoreToTitleCase } from "../mod.ts";

describe("string", function () {
  it("underscoreToTitleCase()", function () {
    assertEquals(underscoreToTitleCase("hello_world"), "Hello World");
    assertEquals(underscoreToTitleCase("_hello_world_"), " Hello World ");
    assertEquals(underscoreToTitleCase("_hello_world_"), " Hello World ");
    assertEquals(underscoreToTitleCase(null), "");
    assertEquals(underscoreToTitleCase(undefined), "");
  });

  it("toKebabCase()", function () {
    assertEquals(toKebabCase("HelloWorld"), "hello-world");
    assertEquals(toKebabCase("hello_world"), "hello-world");
  });

  it("toBoolean()", function () {
    assertEquals(toBoolean("true"), true);
    assertEquals(toBoolean("false"), false);
    assertEquals(toBoolean("1"), true);
    assertEquals(toBoolean("0"), false);
  });
});
