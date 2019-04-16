exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
		return RegExp('\\d', 'g').test(str);
  },

  containsRepeatingLetter: function(str) {
		for (let i = 0; i < str.length; i++) {
			if (!RegExp('\\d').test(str[i])) {
				const regex = RegExp(`${str[i]}{2,}`, 'g');
				const res = regex.test(str);
				if (res) {
					return res;
					break;
				}
			}
		}
		return false;
  },

  endsWithVowel: function(str) {
		return RegExp('[aeiou]$', 'i').test(str);
  },

  captureThreeNumbers: function(str) {
		const out = str.match(/\d{3}/g);
		return out ? out[0] : false;
  },

  matchesPattern: function(str) {
		return RegExp('^\\d{3}-\\d{3}-\\d{4}$').test(str);
  },

  isUSD: function(str) {
		return RegExp('^\\$\\d{1,3}(,\\d{3}|)+(\\.\\d{2}|)$').test(str);
  }
};
