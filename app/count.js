exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
		console.log(start);

		const interval = setInterval(() => {
			start++;
			console.log(start);
			if (start >= end) {
				clearInterval(interval);
			}
		}, 100);

		return {
				cancel: () => {
				clearInterval(interval);
			}
		}
	},
};
