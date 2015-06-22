var handlers = require('./presets_handlers.js');

exports.register = function(server, options, next) {
  server.bind(options);
  server.route([{
    method: 'GET',
    path: '/api/presets/',
    handler: handlers.getPresets
  }]);

  //Callback, completes the registration process
  return next();
};

exports.register.attributes = {
  name: 'api-presets-route',
  version: '1.0.0'
};

