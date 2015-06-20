var Hapi = require('hapi');
var debug = require('debug')('geofence:app');
var config = require('indecent');
var _ = require('lodash');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: _.get(config, "port")
});

var plugins = [
    {
        register: require('./routes/index.js'),
        options: {
            config: config
        }
    },
    {
        register: require('./routes/api/presets/presets.js'),
        options: {
            config: config
        }
    }
];

// Register plugins, and start the server if none of them fail
server.register(plugins, function (err) {
    if (err) { throw err; }

    // Start the server
    server.start(function() {
        debug('listening on port ' + _.get(config, "port"));
    });
});


