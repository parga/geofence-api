var handlers = require('./index_handlers.js');

exports.register = function (server, options, next) {
    server.bind(options);
    server.route([
        {
            method: 'GET',
            path: '/',
            handler: handlers.GET_index
        }
    ]);

    //Callback, completes the registration process
    return next();
};

exports.register.attributes = {
    name: 'tasks-route',
    version: '1.0.0'
};