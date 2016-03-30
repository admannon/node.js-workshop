var fs = require("fs");

console.log("Start Reading 'hello_world.js'");

fs.readFile("hello_world.js", function (error, data) {
    if (error)
        return console.log(error.toString());
    else
        console.log(data.toString());
});
