'use strict'
var route = require('./route');
var app = require('./server');
var requestHandle = require('./requestHandle');

var handle = {};
handle['/'] = requestHandle.start;
handle['/start'] = requestHandle.start;
handle['/update'] = requestHandle.update;

app.start(route.route,handle); 