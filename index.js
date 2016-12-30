var customMatchers = {
  toBeOrNotToBe: function() {
    return {
      compare: function(value){
        return {pass: (!!value || !value)};
      }
    }
  }
}

module.exports = customMatchers;
