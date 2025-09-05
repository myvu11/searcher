import assert from "assert";
import {
  Equal,
  And,
  GreaterThan,
  LessThan,
  GreaterThanOrEqual,
  LessThanOrEqual,
} from "../src/matcher";
import { Fruit } from "../src/types";

describe("Matcher Tests", () => {
  it("Equal matcher works correctly", () => {
    const matcher = new Equal<{ type: string }>("type", "apple");
    assert.strictEqual(matcher.evaluate({ type: "apple" }), true);
    assert.strictEqual(matcher.evaluate({ type: "banana" }), false);
  });

  it("Equal matcher with number works correctly", () => {
    const matcher = new Equal<{ weight: number }>("weight", 100);
    assert.strictEqual(matcher.evaluate({ weight: 100 }), true);
    assert.strictEqual(matcher.evaluate({ weight: 150 }), false);
  });

  it("And matcer works correctly", () => {
    const matcher = new And<{ type: string; color: string }>([
      new Equal("type", "apple"),
      new Equal("color", "red"),
    ]);
    assert.strictEqual(matcher.evaluate({ type: "apple", color: "red" }), true);
    assert.strictEqual(
      matcher.evaluate({ type: "apple", color: "green" }),
      false
    );
    assert.strictEqual(
      matcher.evaluate({ type: "banana", color: "red" }),
      false
    );
  });
  it("GreatherThan matcher works correctly", () => {
    const matcher = new GreaterThan<Fruit>("weight", 50);
    assert.strictEqual(
      matcher.evaluate({ type: "apple", color: "red", weight: 100 }),
      true
    );
    assert.strictEqual(
      matcher.evaluate({ type: "pear", color: "green", weight: 30 }),
      false
    );
  });
  it("LessThan matcher works correctly", () => {
    const matcher = new LessThan<{ weight: number }>("weight", 100);
    assert.strictEqual(matcher.evaluate({ weight: 10 }), true);
    assert.strictEqual(matcher.evaluate({ weight: 175 }), false);
  });
  it("GreaterThanOrEqual works correctly", () => {
    const matcher = new GreaterThanOrEqual<{ weight: number }>("weight", 100);
    assert.strictEqual(matcher.evaluate({ weight: 145 }), true);
    assert.strictEqual(matcher.evaluate({ weight: 100 }), true);
    assert.strictEqual(matcher.evaluate({ weight: 54 }), false);
  });
  it("LessThanOrEqual matcher works corectly", () => {
    const matcher = new LessThanOrEqual<{ weight: number }>("weight", 110);
    assert.strictEqual(matcher.evaluate({ weight: 90 }), true);
    assert.strictEqual(matcher.evaluate({ weight: 110 }), true);
    assert.strictEqual(matcher.evaluate({ weight: 201 }), false);
  });
});
