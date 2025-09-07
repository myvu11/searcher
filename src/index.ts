import { Searcher } from "./searcher";
import { fruitData } from "../test/fruitdata";
import { And, Equal, ExpressionMatcher } from "./matcher";
import { Fruit } from "./types";

// find an element that is a type="apple" and has color="green"
const searcher = new Searcher(fruitData);
const expressions: ExpressionMatcher<Fruit>[] = [
  new Equal("type", "apple"),
  new Equal("color", "green"),
];
const result = searcher.query(new And(expressions));
console.log("Query result: ", result); //{ type: 'apple', color: 'green', weight: 100 }
