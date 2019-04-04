exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
		return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
		constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
		const props = Object.keys(obj);
		const retArr = [];
		props.forEach((elem) => {
			if (obj.hasOwnProperty(elem)) {
				retArr.push(`${elem}: ${obj[elem]}`);
			}
		});
		return retArr;
  }
};
