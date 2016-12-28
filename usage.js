var toBeOrNotToBe = require('./index')

describe("Custom matcher: 'toBeOrNotToBe'", function() {
  beforeEach(function() {
    jasmine.addMatchers(toBeOrNotToBe)
  })

  it("is allways the case, since it is a tautology", function() {
    expect(true).toBeOrNotToBe(true)
    expect(true).toBeOrNotToBe(false)
    expect(false).toBeOrNotToBe(true)
    expect(false).toBeOrNotToBe(false)
  })
})
