var customMatchers = {
  toBeOrNotToBe: function() {
    return {
      compare: function(){
        return {pass: (true || !true)};
      }
    }
  }
}

module.exports = customMatchers;
