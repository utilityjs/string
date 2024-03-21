import { assertEquals, describe, it } from "../test_deps.ts";

import { underscoreToCamelCase } from "../mod.ts";

describe("string", function() {

	it("underscoreToCamelCase()", function() {
		assertEquals(
			underscoreToCamelCase("hello_world"),
			"Hello World"
		);
		assertEquals(
			underscoreToCamelCase("_hello_world_"),
			" Hello World "
		);
	});
});
