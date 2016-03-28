/* ------------------------------------------------------------------------
    If you want the variable "x" to hold value 10, how will you declare the
    statement?
        var x = 10;  int x = 10;  num x = 10;  integer x = 10;
   ------------------------------------------------------------------------ */
var x = 10;


var x = "outside";
var f1 = function () {
    x = "inside";
}

f1();
/* ------------------------------------------------------------------------
    What is the result of console.log(x)?
        outside      inside       undefined    null
   ------------------------------------------------------------------------ */


function f1 (x) {
    console.log(x);
}
f1(10,"test",20)
/* ------------------------------------------------------------------------
    What is the result of the following code?
        10           test         20           error
   ------------------------------------------------------------------------ */


function wrapValue(n) {
    var localVariable = n;
    return localVariable;
}
var wrap1 = wrapValue(1);
console.log(wrap1());
/* ------------------------------------------------------------------------
    What is the result of the following code on the console?
        1            error        undefined    null           0
   ------------------------------------------------------------------------ */


var a = [];
a.push("a");
/* ------------------------------------------------------------------------
    From the following code, can we push number such `a.push(1)`?
   ------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------
    Is "try-catch" a way to handle an error from asynchronous function?
   ------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------
    What cause the error from the following object declaration?
   ------------------------------------------------------------------------
        var car = {
            speed = 10;
            color : "red",
            price : 20
        };
   ------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------
    What is the result of the following code on the console?
   ------------------------------------------------------------------------ */
function wrapValue(n) {
    var localVariable = n;
    return function() { return localVariable; };
}
var wrap1 = wrapValue(1);
console.log(wrap1());


/* ------------------------------------------------------------------------
    What is the result of the following code on the console?
   ------------------------------------------------------------------------ */
var activities = {
    run : false,
    eat : true
};
console.log(activities.sleep);


/* ------------------------------------------------------------------------
    What is the result of the following code on the console?
   ------------------------------------------------------------------------ */
var activities = {
    run : false,
    eat : true
};
activities.sleep = true;
console.log(activities.sleep);


var x = 0;
function foo() {
    x++;
    this.x = x;
    return foo;
}
var bar = new new foo;
console.log(bar.x);
/* ------------------------------------------------------------------------
    From the following code. What is printed on the console?
        undefined       1       2       TypeError      ReferrenceError
   ------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------
    Can we pass function as an arguments to other function?
   ------------------------------------------------------------------------ */


function Rabbit(type) {
    this.type = type;
}
var balckRabbit = new Rabbit("black");
Rabbits.legs = 4;
console.log(blackRabit.legs);
/* ------------------------------------------------------------------------
    What is the result on the console?
        undefined       4       null    TypeError      ReferrenceError
   ------------------------------------------------------------------------ */


var bar = 1,
    foo = {};
foo: {
  bar : 2;
  baz : ++bar;
};
console.log(foo.bar+bar)
/* ------------------------------------------------------------------------
    What will be printed on screen?
        undefined       3       Nan     TypeError   ReferenceError
   ------------------------------------------------------------------------ */


var day = function() {
    var name = "Sunday";
    return name;
}();
console.log(day);
/* ------------------------------------------------------------------------
    What is the result on the console?
        Sunday          function (){…}   undefined   null   TypeError
   ------------------------------------------------------------------------ */


function whatDoesitDo() {
    return Array(4).join("lol" + 2) + "Batman!";
}
console.log(whatDoesitDo());
/* ------------------------------------------------------------------------
    What is the result on the console?
        NaN NaN NaN Batman!
        ["Batman", "Batman", "Batman", "Batman"]
        Throws an error
        undefined
    ------------------------------------------------------------------------ */
