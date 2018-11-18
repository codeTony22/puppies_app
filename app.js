const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
const puppiesRouter = require('./routes/puppyRoutes');
var puppies = require("./dummy/dummy");
// Instantiate express server-size application
const app = express();

// See the documentation for express and the use of app.use(string, callback)
// Middleware is the middle software that happens in between the input and output.
// In this case, the request is the input and the respose is the output.
// Middleware is all the function is the middle that intercept a request before a respose is send.
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Static middleware
app.use(express.static(path.join(__dirname, '/public')))
app.use('/puppies', puppiesRouter);

app.use('*', function(req, res, next) {
    res.send('This is the default route');
});


var server = app.listen(3333, function(){
    console.log('listening on port', server.address().port);
});

