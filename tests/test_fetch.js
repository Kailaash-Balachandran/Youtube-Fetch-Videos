var test = require('tape');
var search = require('../');



test('Throw error if no query exists ', function (t) {
  t.throws(function(){
    search(undefined, undefined);
  });
  t.end();
});



test('Throw error if no key or term exists ', function (t) {
  var options_no_key = {
    no_key: null
  };
  t.throws(function(){
    search(options, null);
  });

  var options_no_term = {
    key: 'dummy_key'
  };
  t.throws(function(){
    search(options, null);
  });

  t.end();
});


test('Assign default values for maxResults and order if not present', function (t) {
  var options = {
    key: 'AIzaSyC3yFwYR-Ifih7RJeB1zXibczCSQzkvVWw',
    term: "Test Term"
  };
  search(options, function (err, results) {
    t.equal(options.maxResults, '50');
    t.equal(options.order, 'relevance');
  });
  t.end();
});
