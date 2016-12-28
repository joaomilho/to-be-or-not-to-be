var test = require('tape'),
    customMatchers = require('./index')


test('it returns an object with pass always true', function (t) {
    t.deepEqual(
      customMatchers.toBeOrNotToBe().compare(),
      {pass: true}
    )

    t.end()
})
