import { assertEquals, describe, it } from "../test_deps.ts";

import { underscoreToTitleCase } from "../mod.ts";

describe("string", function () {
  it("underscoreToTitleCase()", function () {
    assertEquals(underscoreToTitleCase("hello_world"), "Hello World");
    assertEquals(underscoreToTitleCase("_hello_world_"), " Hello World ");
    assertEquals(underscoreToTitleCase(null), "");
    assertEquals(underscoreToTitleCase(undefined), "");
  });
});
