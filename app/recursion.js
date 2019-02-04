exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const searchFiles = function(folder, isSubSearch, searchName) {
      let files = [];
      const isListDir = isSubSearch ? folder.dir === searchName : true;
      folder.files.forEach((item) => {
        if (typeof item === 'string' && isListDir) {
          files.push(item);
        }
        else if (typeof item !== 'string' && isListDir) {
          files = [].concat(files, searchFiles(item, isSubSearch, item.dir));
        }
        else if (typeof item !== 'string' && !isListDir) {
          files = [].concat(files, searchFiles(item, isSubSearch, searchName));
        }
      });
      return files;
    }
    return searchFiles(data, dirName !== undefined, dirName);
  },

  permute: function(arr) {
    const permutate = function(list) {
      const array = [];
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        list.splice(i, 0);
        
      }

    }
    
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
