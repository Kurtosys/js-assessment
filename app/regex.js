exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return str.match(/\d/) !== null;
  },

  containsRepeatingLetter: function(str) {
    return str.match(/([a-zA-Z])(?=\1)/) !== null;
  },

  endsWithVowel: function(str) {
    return str.match(/[aeiou]$/gi) !== null;
  },

  captureThreeNumbers: function(str) {
    const match = str.match(/\d{3}/);
    return match && match[0] ? match[0] : false;
  },

  matchesPattern: function(str) {
    return str.match(/^\d{3}\-\d{3}\-\d{4}$/g) !== null;
  },

  isUSD: function(str) {
    /*
      DECIMAL: 
        (\.[0-9]{2})? -> '' / '.09'

      ZERO: 
        0 -> '0'

      Hundreds:
        [1-9]{1}[0-9]{2} -> '1' / '9' / '19' / '99' / '109' / '999'

      Thousands Seperator with optional DECIMAL
        [1-9]{1}[0-9]{0,2}(\,[0-9]{3})* -> '1,009' / '9,009' / '19,009' / '99,009' / '109,009,009' / thousand seperators are recurring
    */

    // return str.match(currencyRegex) !== null;
    return str.match(/^\$([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*|[1-9]{1}[0-9]{2}|0)(\.[0-9]{2})?$/g) !== null;
  }
};
