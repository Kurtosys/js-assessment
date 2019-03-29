exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    const searchFiles = function (folder, isSubSearch, searchName) {
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

  permute: function (arr) {

    const copy = function (arr) {
      return JSON.parse(JSON.stringify(arr));
    }

    const permutate = function (items) {
      let permutations = [];
      const newItems = copy(items);
      console.log('permutate 1', {newItems});
      if (items.length > 2) {
        for (let i = 0; i < newItems.length; i++) {
          const frontItem = newItems[i];
          const backItems = newItems.filter(item => item !== frontItem);
          const iterations = permutate(backItems);
          const modified = copy(iterations).map((permutation) => {
            permutation.unshift(frontItem);
            return permutation;
          });
          console.log('permutate 2', {frontItem, backItems, iterations: copy(iterations), modified: copy(modified)});
          permutations.push(...modified);
        }
        console.log('permutate 3', {permutations});
        return permutations;
      }
      else {
        return [
          copy(newItems),
          copy(newItems).reverse()
        ]
      }
    }

    const permutation = permutate(arr);

    console.log('permute final', permutation);

    return permutation;
  },

  fibonacci: function (n) {
    const numbers = [0, 1];

    if (n <= 0) {
      return;
    }
    if (n > 0 && n < 2) {
      return number[n];
    }

    for (let index = 2; index <= n; index++) {
      numbers[index] = numbers[index - 2] + numbers[index - 1];
    }

    return numbers[n];
  },

  validParentheses: function (n) {
    const brackets = [];
    const buildBrackets = (openParentheses, closeParentheses, str) => {

      console.log({openParentheses, closeParentheses, str});

      // when all parentheses are closed, add to array
      if (openParentheses == 0 && closeParentheses == 0) {
        brackets.push(str);
      }
      // when there are still open parentheses, recall method and decrement open, increment close parentheses
      if (openParentheses > 0) {
        buildBrackets(openParentheses - 1, closeParentheses + 1, `${str}(`);
      }
      // continue to close unclosed parentheses
      if (closeParentheses > 0) {
        buildBrackets(openParentheses, closeParentheses - 1, `${str})`);
      }
    }
    buildBrackets(n, 0, "");
    return brackets;
  }
};
