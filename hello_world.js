var fs = require("fs");

console.log("Start Reading 'hello_world.js'");

fs.readFile("hello_world.js", function (error, data) {
    if (error)
        return console.log(error.toString());
    else
        console.log(data.toString());
});


console.log("Create 'outFunc'")
function outFunc () {
    function inFunc () {
        a = 2;
    }
    inFunc();
    console.log(a);
}

console.log("Call 'outFunc'")
outFunc();
