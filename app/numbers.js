exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    // convert to binary and split string into array of characters
    const bitSplit = num.toString(2).split('');
    // invert bit selection 10110000 [bit 8 would be the first character '1']
    const pos = bitSplit[bitSplit.length - bit];
    // test is expecting a number and not a string.
    return parseInt(pos, 10);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let bin = num.toString(2);
    const remainder = bin.length % 4;
    if (remainder > 0) {
      for (let i = 0; i < (4 - remainder); i++) {
        bin = `0${bin}`;
      }
    }
    return bin;
  },

  multiply: function(a, b) {
    return (a * 10) * (b * 10) / 100;
  }
};
