exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    this.name = str2;
    this.greeting = str1;
    this.sayIt = () => {
      return this.greeting + ', ' + this.name;
    }
    return this;
  }
};
