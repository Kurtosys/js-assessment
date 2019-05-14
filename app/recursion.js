exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
		const getFilesName = (data, outfiles) => {
			const arr = data.files;
			for (let i = 0; i < arr.length; i++) {
				if (typeof arr[i] === 'string') {
					outfiles.push(arr[i]);
				}
				else {
					getFilesName(arr[i], outfiles);
				}
			}
		}
		const getDir = (data, dir) => {
			if (data.dir === dir) {
				return data;
			}
			else {
				const arr = data.files;
				let dirCheck = {};
				for (let i = 0; i < arr.length; i++) {
					if (typeof arr[i] !== 'string') {
						dirCheck = getDir(arr[i], dir);
						if (dirCheck) {
							break;
						}
					}
				}
				if (dirCheck) {
					return dirCheck;
				}
				return null;
			}
		}
		const files = [];

		if (dirName) {
			data = getDir(data, dirName);
		}

		getFilesName(data, files);

		return files;
  },

  permute: function(arr) {
		const outArr = [];
		const startIdx = arr.length - 1;

		const swapPos = (swapArr, i1, i2) => {
			return swapArr.map((elem, idx, arr) => {
				return idx === i1 ? arr[i2] : idx === i2 ? arr[i1] : elem;
			});
		};

		const getNext = (thisArr, idx) => {
			for (let i = idx - 1; i >= 0; i--) {
				const newArr = swapPos(thisArr, idx, i);
				if (outArr.indexOf(newArr) === -1) {
					outArr.push(newArr);
				}
				if (idx > 0) {
					getNext(newArr, idx - 1);
				}
			}

			if (idx > 0) {
				getNext(thisArr, idx - 1);
			}
		};

		outArr.push(arr);

		getNext(arr, startIdx);

		// outArr.sort();
		// outArr.map((elem) => console.log('outArr', elem));
		// console.log(outArr.length);

		return outArr;
  },

  fibonacci: function(n) {
		const cache = {};
		const getFib = (itr) => {
			let res;
			if (cache[itr]) {
				return cache[itr];
			}
			if (itr < 2) {
				res = itr === 0 ? itr : 1;
			}
			else {
				res = getFib(itr - 2) + getFib(itr - 1);
			}
			cache[itr] = res;
			return res;
		};

		return getFib(n);
  },

  validParentheses: function(n) {
		const brackets = [];
    const buildBrackets = (openParentheses, closeParentheses, str) => {

      console.log({openParentheses, closeParentheses, str});

      // when all parentheses are closed, add to array
      if (openParentheses == 0 && closeParentheses == 0) {
        brackets.push(str);
      }
      // when there are still open parentheses, recall method and decrement open, increment close parentheses
      if (openParentheses > 0) {
        buildBrackets(openParentheses - 1, closeParentheses + 1, `${str}(`);
      }
      // continue to close unclosed parentheses
      if (closeParentheses > 0) {
        buildBrackets(openParentheses, closeParentheses - 1, `${str})`);
      }
		}
		
    buildBrackets(n, 0, "");
    return brackets;
  }
};