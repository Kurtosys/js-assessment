exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
		return arr.indexOf(item);
  },

  sum: function(arr) {
		let tot = 0;
		arr.forEach(elem => tot = tot + elem);
		return tot;
  },

  remove: function(arr, item) {
		return arr.filter(elem => elem !== item);
  },

  removeWithoutCopy: function(arr, item) {
		for (let i = arr.length; i >= 0; i--) {
			if (arr[i] === item) {
				arr.splice(i, 1);
			}
		};
		return arr;
  },

  append: function(arr, item) {
		arr.push(item);
		return arr;
  },

  truncate: function(arr) {
		arr.pop();
		return arr;
  },

  prepend: function(arr, item) {
		arr.unshift(item);
		return arr;
  },

  curtail: function(arr) {
		arr.shift();
		return arr;
  },

  concat: function(arr1, arr2) {
		return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
		const arrStr = arr.slice(0, index);
		const arrEnd = arr.slice(index, arr.length);
		return arrStr.concat(item, arrEnd);
  },

  count: function(arr, item) {
		let counter = 0;
		arr.forEach((elem) => {
			if (elem === item) {
				counter++;
			}
		});
		return counter;
  },

  duplicates: function(arr) {
		const dups = [];
		arr.sort().forEach((elem, idx) => {
			if (idx !== 0 && elem === arr[idx - 1] && dups.indexOf(elem) <= 0) {
				dups.push(elem);
			}
		});
		return dups;
  },

  square: function(arr) {
		return arr.map(elem => elem * elem);
  },

  findAllOccurrences: function(arr, target) {
		const idxs = [];
		arr.forEach((elem, idx) => {
			if (elem === target) {
				idxs.push(idx);
			}
		});
		return idxs;
  }
};
