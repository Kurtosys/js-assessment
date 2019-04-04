exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
		return {
			name: str2,
			greeting: str1,
			sayIt: function() {
				return `${ this.greeting }, ${ this.name }`;
			},
		}
	}
};

hello = {
	somethingElse: function(str1, str2) {
		this.name = str1;
		this.greeting = str2;
		this.sayIt = () => {
			return this.greeting + ', ' + this.name;
		};
		return this;
	}
}