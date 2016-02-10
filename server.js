'use strict';

var io = require('socket.io');
var express = require('express');
var path = require('path');
var app = express();

var logger = require('winston');
var config = require('./config')(logger);

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(config.server.port, function () {
	logger.info('Server listening on %s', config.server.port);
});



var sio = io(server);

sio.set('authorization', function (handshakeData, accept) {
	// @todo use something else than a private `query`
	handshakeData.isAdmin = handshakeData._query.access_token === config.auth.token;
	accept(null, true);
});


// @todo extract in its own
sio.on('connection', function (socket) {

	socket.on('viewer:new', function () {

	});

	socket.on('disconnect', function () {

	});



});
