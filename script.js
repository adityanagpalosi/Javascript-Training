console.log("Hello World");


 //Declare the element
var element = document.getElementById("demo");

// Changing HTML Content
element.innerHTML = "Hello, JavaScript!";


// JavaScript Can Change HTML Styles (CSS)
element.style.fontSize = "35px";
//element.style.display = "none";


//We can handle events in JavaScript
element.addEventListener("click", changeText);

function changeText() {
    document.getElementById("demo").innerHTML = "Text changed!";
  }


document.write("This is output using document.write()");
alert("This is an alert box");
console.log("Output to console");


// var: Variables declared with var have function scope and can be redeclared and reassigned.
// const: Constants declared with const have block scope and cannot be redeclared or reassigned.
// let: Variables declared with let have block scope and can be reassigned but not redeclared.

// Declare a variable using var
var myVar = "Variable declared using var";

// Declare a constant using const
const myConst = "Constant declared using const";

// Declare a variable using let
let myLet = "Variable declared using let";



//Data Types in Javascript

// String
var myString = "Hello, world!";
console.log(myString);

// Number
var myNumber = 42;
console.log(myNumber);

// Boolean
var myBoolean = true;
console.log(myBoolean);

// Array
var myArray = [1, 2, 3, "hello", 5];
console.log(myArray);

// Object
var myObject = { name: "John", age: 30 };
console.log(myObject);

// Null
var myNull = null;
console.log(myNull);

// Undefined
var myUndefined = undefined;
console.log(myUndefined);

