// const revert = require("./DKP01/DPK01_impl_1.js");
// const { describe, it } = require("node:test");
// const assert = require("node:assert");
import { describe, it } from "node:test";
import assert from "node:assert";
import impl1 from "../DKP01/DPK01_impl_1.js";

describe("A thing", () => {
  it("some test", (t) => {
    assert.strictEqual(1, 1);
  });
  it("Should pass implementation 1", () => {
    assert.strictEqual(impl1("Hello"), "olleH");
  });
});
