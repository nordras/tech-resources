import { describe, it } from "node:test";
import assert from "node:assert";
import impl1 from "../DKP01/DPK01_impl_1.js";
import impl2 from "../DKP01/DPK01_impl_2.js";
import impl3 from "../DKP01/DPK01_impl_3.js";

describe("A thing", () => {
  const e = "Hello"; // entrance
  const r = "olleH"; // result
  it("some test", (t) => {
    assert.strictEqual(1, 1);
  });
  it("Should pass implementation 1", () => {
    assert.strictEqual(impl1(e), r);
  });
  it("Should pass implementation 2", () => {
    assert.strictEqual(impl2(e), r);
  });
  it("Should pass implementation 3", () => {
    assert.strictEqual(impl3(e), r);
  });
});
