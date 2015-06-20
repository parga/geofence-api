var request = require('request');
var _ = require('lodash');
var debug = require('debug')('geofence:app');

var handlers = {
    GET_presets: function(req, res) {
        res(_.get(this, ['config', 'presets']));
            return;
    }
};

exports = module.exports = handlers;