var express = require('express');
var app     = express();

// Routing system
var router  = express.Router();

// Usage: router.ANYFUNC ~
// app.use(ANYPATH, router)

router.use(function (request, response, next) {
    response.send(`${request.url.substr(1)} bird`);
});

app.use("/bird", router);

app.get("/hello", function (request, response, next) {
    // next() for next operation.
    response.end("World");
});

// Show static webpage
app.use(express.static("./asserts"));

// redirect ( location )
app.use('/the-fox', function (request, response, next) {
    response.redirect("/arhi.jpg");
});

// download ( file_location [, name] );
app.use('/download-fox', function (request, response, next) {
    response.download(__dirname + '/asserts/arhi.jpg');
});

// status ( status_number )
app.use(function (request, response, next) {
    // IE not show anything after status(404)
    response.status(404).end("Not found.");
    // response.sendFile("File")
});

app.listen(80);
