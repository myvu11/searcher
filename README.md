# 🔍 Search Project

A **TypeScript-powered search library** that lets you query data structures using composable matchers.
The project demonstrates flexible querying logic (like `AND` and `EQUAL` operators) and is tested with **Mocha + Chai**.
This library provides flexible search functions that can be easily integrated into applications or used standalone.

---
## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) >= 16
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
```bash
git clone https://github.com/myvu11/searcher.git
cd searcher
npm install
```

### Usage
```TypeScript

import { Searcher } from  "./searcher";
import { fruitData } from  "../test/fruitdata";
import { And, Equal, ExpressionMatcher } from  "./matcher";
import { Fruit } from  "./types";

// find an element that is a type="apple" and has color="green"
const  searcher  =  new  Searcher(fruitData);
const  expressions:  ExpressionMatcher<Fruit>[] = [
	new  Equal("type", "apple"),
	new  Equal("color", "green"),
	];

const  result  =  searcher.query(new  And(expressions));

console.log("Query result: ", result);
```


### Scripts
#### Start the project
```bash
npm start
```
#### Run the test suite
```bash
npm test
```
