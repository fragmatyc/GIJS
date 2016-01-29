var ejs = require('ejs');
var moment = require("moment");
var express = require("express");
var app = new express();

app.engine('.html', ejs.__express)
app.set('view engine', 'html');
app.set('views', __dirname + "/backend/view");
app.use(express.static('frontend/build'));

app.get('/', function (req, res) {
    res.render('template');
});

require("./backend/todo/routes")(app);

app.listen('1337', function () {
    console.log("Server started [" + moment().format('DD-MM-YYYY @ HH:mm:ss') + "]");
})