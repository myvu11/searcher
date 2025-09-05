export interface ExpressionMatcher<Item> {
  evaluate(item: Item): boolean;
}

export class Equal<Item> implements ExpressionMatcher<Item> {
  constructor(private left: keyof Item, private right: Item[keyof Item]) {}

  evaluate(item: Item): boolean {
    return item[this.left] === this.right;
  }
}

export class And<Item> implements ExpressionMatcher<Item> {
  constructor(private matchers: ExpressionMatcher<Item>[]) {}

  evaluate(item: Item): boolean {
    return this.matchers.every((matcher) => matcher.evaluate(item));
  }
}

export class GreaterThan<Item> implements ExpressionMatcher<Item> {
  constructor(private left: keyof Item, private right: Item[keyof Item]) {}

  evaluate(item: Item): boolean {
    return item[this.left] > this.right;
  }
}

export class LessThan<Item> implements ExpressionMatcher<Item> {
  constructor(private left: keyof Item, private right: Item[keyof Item]) {}

  evaluate(item: Item): boolean {
    return item[this.left] < this.right;
  }
}

export class GreaterThanOrEqual<Item> implements ExpressionMatcher<Item> {
  constructor(private left: keyof Item, private right: Item[keyof Item]) {}

  evaluate(item: Item): boolean {
    return item[this.left] >= this.right;
  }
}

export class LessThanOrEqual<Item> implements ExpressionMatcher<Item> {
  constructor(private left: keyof Item, private right: Item[keyof Item]) {}

  evaluate(item: Item): boolean {
    return item[this.left] <= this.right;
  }
}
