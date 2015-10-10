var express = require('express');
var app = express();
var http = require('http').Server(app);

var socketio = require('socket.io');
var io = socketio(http);

var router = require('./router');
var async = require('./async');

router.init(express, app, http);
router.route('ejs');
router.listen(process.env.PORT || 5000);


