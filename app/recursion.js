exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
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
			const newArr = swapArr.map((elem, idx, arr) => {
				return idx === i1 ? arr[i2] : idx === i2 ? arr[i1] : elem;
			});
			return newArr
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

		outArr.sort();
		outArr.map((elem) => console.log('outArr', elem));
		return outArr;
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};

function getFilesName(data, outfiles) {
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

function getDir(data, dir) {
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