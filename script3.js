//if else

let hour = 19;
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
//console.log(greeting); // "Good evening"


let time = 15;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
//console.log(greeting); // "Good day"

//Switch Case
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  default:
    day = "Weekday";
}
//console.log(day); // Outputs the current day based on the case match


// Ternary Operator

let age = 20;
let message = (age >= 18) ? "You are an adult" : "You are a minor";
//console.log(message); // "You are an adult"



//Sets
const letters = new Set(["a", "b", "c"]);
//console.log(letters); // Set { 'a', 'b', 'c' }

letters.add("d");
console.log(letters.has("a")); // true
letters.forEach(value => console.log(value)); // Logs 'a', 'b', 'c', 'd'


//Maps

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
  ]);
  //console.log(fruits); // Map { 'apples' => 500, 'bananas' => 300 }


const fruits1 = new Map();
fruits1.set("oranges", 500);
//console.log(fruits.get("apples")); // 500
fruits1.delete("oranges");
//console.log(fruits.has("apples")); // false


//Type of Operator

console.log(typeof "Hello, world!"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof [1, 2, 3]); // object
console.log(typeof { name: "John", age: 30 }); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof function() {}); // function


//Type conversion, truthy and falsy values
/*
let x = 10;
console.log(x.toString()); // "10"
console.log(String(x)); // "10"

let y = "20";
console.log(Number(y)); // 20

let z = "Hello";
console.log(Boolean(z)); // true

let a = 0;
console.log(Boolean(a)); // false

let b = 1;
console.log(Boolean(b)); // true

let c = "";
console.log(Boolean(c)); // false

let d = " ";
console.log(Boolean(d)); // true

let e = null;
console.log(Boolean(e)); // false

let f = undefined;
console.log(Boolean(f)); // false

*/

//Javascript Destructuring

const person = {
    name: "Alice",
    age1: 20,
    address: {
      city: "New York",
      country: "USA",
    },
  };
  
  const { name, age1 , address: { city, country } } = person;
  //console.log(name, age, city, country); // Alice 20 New York USA
8
  const fruits2 = ["apple", "banana", "cherry"];
  const [first, second] = fruits2;
  //console.log(first, second); // apple banana

  const [a, ...rest] = fruits2;
  //console.log(a, rest); // apple [ 'banana', 'cherry' ]

  const [x, y, z] = fruits2;
  //console.log(x, y, z); // apple banana cherry

  const [, , c1] = fruits2;
  //console.log(c1); // cherry

  const [, , c2, c3 = "strawberry"] = fruits2;
  //console.log(c2, c3); // cherry strawberry

  const [, , c4, c5 = "strawberry"] = ["apple", "banana"];
  //console.log(c4, c5); // undefined strawberry



//try catch finally

function checkNumber(value) {
    try {
      if (value > 10) throw "Too high";
      if (value < 5) throw "Too low";
    } catch (err) {
      console.log("Error: " + err.message); //name and message
    } finally {
      console.log("Check complete");
    }
  }
  
  checkNumber(15); // Error: Too high, Check complete

  //different kind of errors in Javascript

  //ReferenceError: An error that occurs when an undefined variable is referenced.

    //SyntaxError: An error that occurs when there is a syntax error in the code.

    //TypeError: An error that occurs when a value is not of the expected type.

    //RangeError: An error that occurs when a value is not within the expected range.


//Examples of different kind of errors in Javascript

//ReferenceError

console.log(myVariable); // ReferenceError: myVariable is not defined

//SyntaxError

//console.log("Hello, world! // SyntaxError: Unexpected token

//TypeError

const myArray = [1, 2, 3,];
myArray.push(4);
myArray = [4, 5, 6]; // TypeError: Assignment to constant variable.






