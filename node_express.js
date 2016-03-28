var express = require('express');
var app     = express();

app.get("/hello", function (request, response, next) {
    // next() for next operation.
    response.end("World");
});

// Show static webpage
app.use(express.static("./asserts"));

// Redirection
app.use('/the-fox', function (request, response, next) {
    response.redirect("/arhi.jpg");
});

// Download
app.use('/download-fox', function (request, response, next) {
    response.download(__dirname + '/asserts/arhi.jpg');
});

// Status: 404
app.use(function (request, response, next) {
    // IE not show anything after status(404)
    response.status(404).end("Not found.");
});

app.listen(80);
