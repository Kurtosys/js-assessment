exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
		let out = '';
		str.split('').forEach((char) => {
			if (!RegExp(`${char}{${amount}}$`).test(out)){
				out += char;
			}
		});
		return out;
  },

  wordWrap: function(str, cols) {
		let out = '';

		const findSpace = (str, from, reverse) => {
			if (reverse) {
				for (let i = from; i >= 0; i--) {
					if (i === 0) {
						return false;
					}
					else if (str.charAt(i) === ' ') {
						return i;
					}
				}
			}
			else {
				for (from; from < str.length; from++) {
					if (str.charAt(from) === ' ') {
						return from;
					}
				}
				return from;
			}
		};

		let charsLeft = str.length;
		let last = false;
		do {
			const spaceBeforeCols = findSpace(str, cols, true);
			const spaceAfterCols = charsLeft >= cols ? findSpace(str, cols) : null;

			let breakIdx;
			if (charsLeft <= cols) {
				last = true;
			}
			else {
				breakIdx = spaceBeforeCols ? spaceBeforeCols : spaceAfterCols;
			}

			if (last) { // <-- End of string
				out += str;
				charsLeft = 0;
			}
			else {
				out += str.slice(0, breakIdx) + '\n';
				str = str.slice(breakIdx + 1);
				charsLeft = str.length;
			}
		} while (charsLeft > 0);
		
		return out;
  },

  reverseString: function(str) {
		const charArr = str.split('');
		let out = '';
		for (let i = charArr.length - 1; i >= 0; i--) {
			out += charArr[i];
		}
		return out;
  }
};