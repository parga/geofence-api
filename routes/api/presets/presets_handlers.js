var _ = require('lodash');

var handlers = {
  getPresets: function(req, res) {
    res(_.get(this, ['config', 'presets']));
    return;
  }
};

exports = module.exports = handlers;
