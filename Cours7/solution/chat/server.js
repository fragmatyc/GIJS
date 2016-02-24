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

io.on('connection', function (socket) {    
    socket.on('player move', function (player) {
        players[socket.id] = player;
        io.emit('player move', player);
    });
    
    socket.on('player logged', function (player) {
        players[socket.id] = player;
        console.log("Player " + player.id + " connected on session " + socket.id + " (Count: " + Object.keys(players).length + ")");
        io.emit('player logged', players);
    });
    
    socket.on('disconnect', function() {
        console.log("Player disconnected on session " + socket.id);
        
        if (players[socket.id]) {
            io.emit('player disconnect', players[socket.id].id);
            delete players[socket.id];
        }
    });
});


app.get('/', function (request, response) {
    response.render('index');
});

http.listen('1337', function () {
    console.log('Listening...');
});
