'use strict';

let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let ejs = require('ejs');

var players = {};

app.engine('.html', ejs.__express);
app.set('view engine', '.html');
app.use(express.static('node_modules'));

app.get('/', function (request, response) {
    response.render('index');
});

http.listen('1337', function () {
    console.log('Listening...');
});
