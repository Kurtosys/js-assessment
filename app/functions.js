exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
		return fn(...arr);
  },

  speak: function(fn, obj) {
		return fn.call(obj);
  },

  functionFunction: function(str) {
		return strDeep => { return str + ', ' + strDeep };
  },

  makeClosures: function(arr, fn) {
		return arr.map((elem) => {
			return () => fn(elem);
		});
  },

  partial: function(fn, str1, str2) {
		return str => fn(str1, str2, str);
  },

  useArguments: function() {
		let result = 0;
		for (let i = 0; i < arguments.length; i++) {
			result += arguments[i];
		}
		return result;
  },

  callIt: function(fn) {
		const args = Array.prototype.slice.call(arguments, 1);
		fn(...args);
  },

  partialUsingArguments: function(fn) {
		const args = Array.prototype.slice.call(arguments, 1);
		return (...deepArgs) => {
			return fn(...args, ...deepArgs);
		};
  },

  curryIt: function(fn) {
		const args = [];

		const callback = (arg) => {
			args.push(arg);
			return fn.length === args.length ? fn(...args) : callback;
		};

		return callback;
	}
};
