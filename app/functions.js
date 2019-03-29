exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.bind(obj)();
  },

  functionFunction: function(str) {
    return (str2) => {
      return str + ', ' + str2;
    };
  },

  makeClosures: function(arr, fn) {
    return arr.map(e => () => fn(e));
  },

  partial: function(fn, str1, str2) {
    return (str3) => {
      return fn(str1, str2, str3);
    }
  },

  useArguments: function(...args) {
    return args.reduce((sum, item) => sum += item, 0);
  },

  callIt: function(fn, ...args) {
    fn (...args);
  },

  partialUsingArguments: function(fn, ...args1) {
    return (...args2) => {
      return fn(...([].concat(args1, args2)));
    };
  },

  curryIt: function(fn) {
    const args = [];
    const func = (arg) => {
      args.push(arg);
      return (args.length < fn.length) ? func : fn(...args);
    };
    return func
  }
};
