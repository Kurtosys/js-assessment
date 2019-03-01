exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
		return new Promise((resolve) => {
			setTimeout(resolve(value), 100);
		});
  },

  manipulateRemoteData: function(url) {
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.open('GET', url);
			request.onload = function(event) {
				if (request.response) {
					const data = [];
					JSON.parse(request.response).people.forEach(elem => data.push(elem.name));
					resolve(data.sort());
				}
				else {
					reject();
				}
			};
			request.send();
		});
  }
};
