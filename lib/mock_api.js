var MockApiServer = require('mock-api-server');
var api = new MockApiServer({port: 7000});
api.start(function(err) {
  if (err) console.error(err);
});

module.exports = api;
