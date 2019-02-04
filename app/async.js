exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: async function(value) {
    return value;
  },

  manipulateRemoteData: function(url) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url
      }).done(function(data) {
        if (data && Array.isArray(data.people)) {
          resolve(data.people.map(person => person.name).sort());
        }
        else {
          reject('No data found');
        }
      });
    });
  }
};
