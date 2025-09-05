import {
  And,
  Equal,
  GreaterThan,
  LessThan,
  GreaterThanOrEqual,
  LessThanOrEqual,
} from "../src/matcher";
import { Searcher } from "../src/searcher";
import { assert } from "chai";
import { fruitData } from "./fruitdata";

const searcher = new Searcher(fruitData);

describe("Searcher module", () => {
  it("equal match 1 attribute type", () => {
    const result = searcher.query(new Equal("type", "apple"));
    assert.deepEqual(result?.type, "apple");
  });

  it("equal match 1 attribute color", () => {
    const result = searcher.query(new Equal("color", "red"));
    assert.deepEqual(result?.color, "red");
  });

  it("equal match 1 attribute weight", () => {
    const result = searcher.query(new Equal("weight", 100));
    assert.deepEqual(result?.weight, 100);
  });

  it("equal match no attribute", () => {
    const result = searcher.query(new Equal("type", "pink"));
    assert.deepEqual(result, undefined);
  });

  it("and match 2 attributes", () => {
    const result = searcher.query(
      new And([new Equal("type", "banana"), new Equal("color", "yellow")])
    );
    assert.deepEqual(result, { type: "banana", color: "yellow", weight: 86 });
  });

  it("and no match", () => {
    const result = searcher.query(
      new And([new Equal("type", "kiwi"), new Equal("color", "yellow")])
    );
    assert.deepEqual(result, undefined);
  });

  it("greaterThan match attribute weight", () => {
    const result = searcher.query(new GreaterThan("weight", 140));
    assert.deepEqual(result, {
      type: "orange",
      color: "orange",
      weight: 148,
    });
  });

  it("lessThan match attribute weight", () => {
    const result = searcher.query(new LessThan("weight", 83));
    assert.deepEqual(result, {
      type: "apple",
      color: "red",
      weight: 80,
    });
  });

  it("greaterThanOrEqual match attribute weight", () => {
    const result = searcher.query(new GreaterThanOrEqual("weight", 130));
    assert.deepEqual(result, {
      type: "pear",
      color: "yellow",
      weight: 130,
    });
  });

  it("greaterThanOrEqual match greater than", () => {
    const result = searcher.query(new GreaterThanOrEqual("weight", 149));
    assert.deepEqual(result, { type: "orange", color: "red", weight: 150 });
  });

  it("greatherThanOrEqual no match", () => {
    const result = searcher.query(new GreaterThanOrEqual("weight", 400));
    assert.deepEqual(result, undefined);
  });

  it("lessThanOrEqual match equal", () => {
    const result = searcher.query(new LessThanOrEqual("weight", 80));
    assert.deepEqual(result, {
      type: "apple",
      color: "red",
      weight: 80,
    });
  });

  it("lessThanOrEqual match less than", () => {
    const result = searcher.query(new LessThanOrEqual("weight", 90));
    assert.deepEqual(result, {
      type: "apple",
      color: "red",
      weight: 80,
    });
  });

  it("lessThanOrEqual no match", () => {
    const result = searcher.query(new LessThanOrEqual("weight", 37));
    assert.deepEqual(result, undefined);
  });
});
