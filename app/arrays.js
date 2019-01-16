exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    const sum = arr.reduce((total, amount) => total + amount);
    return sum;
  },

  remove: function (arr, item) {
    for( let i = arr.length + 1; i >= 0; i--){
      if ( arr[i] === item){
        arr.splice(i, 1);
      } 
    }
      return arr;
  },

  removeWithoutCopy: function (arr, item) {
    for( let i = arr.length + 1; i >= 0; i--){
      if ( arr[i] === item){
        arr.splice(i, 1);
      } 
    }
      return arr;
  },

  append: function (arr, item) {
    const indx = arr.length;
    arr[indx] = item;
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    arr = arr1.concat(arr2);
    return arr;
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    let count = 0;
    const length = arr.length;
    for (let i = 0; i < length + 1; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function (arr) {
    const duplicatesArr = [];
    const returnArr = [];
    const sortArr = arr.sort();
    for (let i = 0; i < arr.length; i++) {
      if (sortArr[i] === sortArr[i + 1]) {
        duplicatesArr.push(sortArr[i]);
      }
    }
    for (let i = 0; i < duplicatesArr.length; i++) {
      if (duplicatesArr[i] !== duplicatesArr[i + 1]) {
        returnArr.push(duplicatesArr[i]);
      }
    }
    return returnArr;
  },

  square: function (arr) {
    const sqrArr = [];
    for (let i = 0; i < arr.length; i++) {
      let root = arr[i] * arr[i];
      sqrArr.push(root);
    }
    return sqrArr;
  },

  findAllOccurrences: function (arr, target) {
    const occIndexArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occIndexArr.push(arr[i]);
      }
    }
    return occIndexArr;
  }
};