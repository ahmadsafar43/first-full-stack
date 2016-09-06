var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var quotesRouter = require('./routes/quotesRoute');

var app = express();
app.use(express.static("../frontend"));

mongoose.connect('mongodb://localhost/quotesList', function () {
    console.log("Connected to the database!");
});

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use("/quotes", quotesRouter);

app.listen(8000, function () {
    console.log("Your server is running on port 8000")
});