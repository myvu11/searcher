import { ExpressionMatcher } from "./matcher";

export class Searcher<Item> {
  constructor(private data: Item[]) {}

  query(matcher: ExpressionMatcher<Item>): Item | undefined {
    const result = this.data.find((item) => matcher.evaluate(item));
    return result;
  }
}
