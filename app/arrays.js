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

  },

  square: function(arr) {
		return arr.map(elem => elem * elem);
  },

  findAllOccurrences: function(arr, target) {

  }
};
