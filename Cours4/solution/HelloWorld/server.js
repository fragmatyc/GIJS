var express = require('express');
var ejs = require('ejs');
var app = new express();

app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname + "/backend/view");
app.use(express.static('frontend'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api/Hello/:who?', function (req, res) {
    var who = req.params.who || 'world';
    res.json({
        success: true,
        requestDate: new Date(),
        message: 'Hello ' + who
    });
});

app.listen('1337', function () {
    console.log("En attente de connexions...");
});