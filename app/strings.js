exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    const match = str.match(/([a-zA-Z])(?:\1+)/g);
    if (Array.isArray(match) && match.length > 0) {
      for (let i = 0; i < match.length; i++) {
        const characterGroup = match[i];
        if (characterGroup.length > amount) {
          const newCharacterGroup = characterGroup.substr(0, amount);
          str = str.replace(characterGroup, newCharacterGroup);
        }
      }
    }
    return str;
  },

  wordWrap: function(str, cols) {
    // console.log('word wrap', str, cols);
    // const strArr = str.split('');

    // const lines = [];
    // while (strArr.length > 0) {
    //   console.log('str.length before', strArr.length);

    //   let endOfRowIndex = 0;
    //   for (let i = (cols - 1); i < strArr.length; i++) {
    //     const char = strArr && strArr[i] ? strArr[i] : null;
    //     console.log(`increment ${i}`, char);
    //     if (char === null) {
    //       endOfRowIndex = strArr.length;
    //       break;
    //     }
    //     else {
    //       endOfRowIndex = i;
    //       if (char && char === ' ') {
    //         break;
    //       }
    //     }
    //   }

    //   console.log('endOfRowIndex', endOfRowIndex);

    //   const line = strArr.splice(0, endOfRowIndex);
    //   console.log('str.length after', strArr.length);



    //   lines.push(line.join(''));
    // }

    // console.log('lines', lines.join('\n'));

    // return lines.join('\n');
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
