var http = require('http');

console.log("Create server");
var server = http.createServer(function (request, response) {
    response.write("Hello user who request url: " + request.url)
    response.end();
});

console.log("Listening port");
server.listen(80);
