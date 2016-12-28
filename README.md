# toBeOrNotToBe

Matchers are good. They make your code look like English. And Hamlet is the ultimate expression of the English language. So why not turning it into a matcher?

## Install

```bash
npm i -s to-be-or-not-to-be
```

## Usage

```js
var toBeOrNotToBe = require('to-be-or-not-to-be'),
    raining = require('./path/to/raining')

describe("your description", function() {
  beforeEach(function() {
    jasmine.addMatchers(toBeOrNotToBe)
  })

  it("is raining or it is not raining", function() {
    expect(raining()).toBeOrNotToBe(true)
    expect(raining()).toBeOrNotToBe(false)
  })
})
```

## Seriously?

Use [tape](https://github.com/substack/tape).
