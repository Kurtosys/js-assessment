exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
		const binary = parseInt(num, 10).toString(2);
		const char = binary.charAt(binary.length - bit);
		return Number(char);
  },

  base10: function(str) {
		return parseInt(str, 2);
  },

  convertToBinary: function(num) {
		let val = parseInt(num, 10).toString(2);
		for (let i = val.length; i < 8; i++) {
			val = `0${val}`
		}
		return val;
  },

  multiply: function(a, b) {
		const comMultiplier = '1000000';
		a *= comMultiplier;
		b *= comMultiplier;
		return (a * b) / (comMultiplier * comMultiplier);
  }
};
