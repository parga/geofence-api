var request = require('request');
var _ = require('lodash');
var debug = require('debug')('geofence:app');

var handlers = {
  getIndex: function(req, res) {
    res('succesfull request');

    request({
      url: 'https://api.pushover.net/1/messages.json',
      method: 'POST',
      form: {
        token: _.get(this.config, 'token'),
        user: _.get(this.config, ['presets', req.query.preset, 'target']),
        message: _.get(this.config, ['presets', req.query.preset, 'message'])
      }
    }, function(err, response, body) {
      if(err) {
        debug(err);
      }
      debug(body);
    });
  }
};

exports = module.exports = handlers;
