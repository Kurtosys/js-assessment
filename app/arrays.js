exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((list, item) => {
      return list += item;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(e => e !== item);
  },

  removeWithoutCopy: function(arr, item) {
    arr.forEach((value, index) => {
      const arrIndex = arr.indexOf(item);
      arr.splice(arrIndex, 1);
    });
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop()
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
    return [].concat(arr1, arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(e => e === item).length;
  },

  duplicates: function(arr) {
    return arr.reduce((duplicates, item) => {
      if (duplicates.indexOf(item) < 0 && arr.filter(e => e === item).length > 1) {
        duplicates.push(item);
      }
      return duplicates;
    }, []);
  },

  square: function(arr) {
    return arr.map((item => item * item));
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((list, item, index) => {
      if (item === target) {
        list.push(index);
      }
      return list;
    }, []);
  }
};
