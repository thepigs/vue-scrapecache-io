var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();
// static file serve
app.use(logger('dev'));
app.use(express.static(__dirname))
// not found in static files, so default to index.html
app.use((req, res) => res.sendFile(`${__dirname}/index.html`))

module.exports = app;
