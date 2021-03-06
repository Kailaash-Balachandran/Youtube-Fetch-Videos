var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

module.exports = function (options, callback) {
  if (!options.key) throw new Error('Youtube Search expected key, received undefined');
  if (!options.term) throw new Error('Youtube Search expected search term, received undefined');
  if (!options.maxResults) options.maxResults = '5';
  if (!options.order) options.order = 'relevance';
  if (!options.type) options.type = 'video';

  var params = {
    part: 'snippet',
    key: options.key,
    q: options.term,
    type: options.type,
    maxResults: options.maxResults,
    order: options.order
  };

  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
};
