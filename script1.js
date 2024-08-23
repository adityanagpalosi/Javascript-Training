// JavaScript string basics
let nam = "John";
let greeting = 'Hello';
let quoteExample = "He said, 'Hello!'";
let text = "JavaScript";
let length = greeting[0];

//console.log(nam, greeting, quoteExample, text, length);



//String methods

let nam1 = "John";
let text1 = `Hello, ${nam1}!`;
let part = text1.slice(0, 4); // 'Hell'
let upper = text1.toUpperCase(); // 'HELLO, JOHN!'
let lower = text1.toLowerCase(); // 'hello, john!'

/*document.getElementById("demo").innerHTML = `
    Name: ${nam1}<br>
    Text: ${text1}<br>
    Part: ${part}<br>
    Upper: ${upper}<br>
    Lower: ${lower}<br>
`; */



let text2 = "  Hello, John!  ";
let pos = text2.indexOf('o'); // 6
let lastPos = text2.lastIndexOf('o'); // 10
let newText = text2.replace('John', 'Jane'); // 'Hello, Jane!'
let trimmed = text2.trim(); // 'Hello, John!'

/*document.getElementById("demo").innerHTML = `
    Text2: ${text2}<br>
    Position: ${pos}<br>
    Last Position: ${lastPos}<br>
    New Text: ${newText}<br>
    Trimmed: ${trimmed}<br>
`; */


let intNum = 42;
let floatNum = 3.14;
let result = intNum * 2; // 84
let remainder = intNum % 5; // 2

/*document.getElementById("demo").innerHTML += `
    Integer Number: ${intNum}<br>
    Float Number: ${floatNum}<br>
    Result: ${result}<br>
    Remainder: ${remainder}<br>
`; */


let pi = Math.PI; // 3.141592653589793
let rounded = Math.round(4.7); // 5
let ceil = Math.ceil(4.1); // 5
let floor = Math.floor(4.9); // 4

/*document.getElementById("demo").innerHTML += `
    Pi: ${pi}<br>
    Rounded: ${rounded}<br>
    Ceil: ${ceil}<br>
    Floor: ${floor}<br>
`; */



let randomNum = Math.random(); // e.g., 0.123456789
let randomInt = Math.floor(Math.random() * 10); // e.g., 7
let randomInRange = Math.floor(Math.random() * (20 - 10 + 1)) + 10; // Random number between 10 and 20

/*document.getElementById("demo").innerHTML += `
    Random Number: ${randomNum}<br>
    Random Integer: ${randomInt}<br>
    Random Number in Range: ${randomInRange}<br>
`; */


//Arrays

let fruits = ["Apple", "Banana", "Cherry"];
let firstFruit = fruits[0]; // 'Apple'
let count = fruits.length; // 3


fruits.push("Orange"); // ['Apple', 'Banana', 'Cherry', 'Orange']
let lastFruit = fruits.pop(); // 'Orange'
fruits.splice(1, 0, "Mango", "Pineapple"); // ['Apple', 'Mango', 'Pineapple', 'Banana', 'Cherry']
let sliced = fruits.slice(1, 3); // [Mango,Pineapple]

/*document.getElementById("demo").innerHTML += `
    Fruits: ${fruits}<br>
    First Fruit: ${firstFruit}<br>
    Count: ${count}<br>
    Last Fruit: ${lastFruit}<br>
    Sliced: ${sliced}<br>
`; */


let fruits1 = ["Apple", "Banana", 45];
let lengths = fruits1.map(fruit => fruit.length); // [5, 6, 6]
let longFruits = fruits1.filter(fruit => fruit.length > 5); // ['Banana', 'Cherry']
let totalLength = fruits1.reduce((sum, fruit) => sum + fruit.length, 0); // 17

console.log(lengths);
console.log(longFruits);
console.log(totalLength); 



//Loops

/*
let fruits2 = ["Apple", "Banana", "Cherry"];

// for loop
for (let i = 0; i < fruits2.length; i++) {
    console.log(fruits[i]); // 'Apple', 'Banana', 'Cherry'
}

// for...in loop
for (let index in fruits2) {
    console.log(fruits[index]); // 'Apple', 'Banana', 'Cherry'
}

// for...of loop
for (let fruit of fruits2) {
    console.log(fruit); // 'Apple', 'Banana', 'Cherry'
}



//forEach method


fruits.forEach(fruit => console.log(fruit)); // 'Apple', 'Banana', 'Cherry'


//break and continue

let fruits3 = ["Apple", "Banana", "Cherry"];
// Using break
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'Banana') break;
    console.log(fruits[i]); // 'Apple'
}

// Using continue
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'Banana') continue;
    console.log(fruits[i]); // 'Apple', 'Cherry'
} 


let fruits4 = ["Apple", "Banana", "Cherry"];
let moreFruits = fruits4.concat(["Orange", "Mango"]); // ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango']
let fruitString = fruits4.join(", "); // 'Apple, Banana, Cherry'



//spread operator

//copy array

const originalArray = [1, 2, 3];   //calledFun(...orginalArray)  calledFun(1,2,3)
const copiedArray = [...originalArray]; //shallow copy

//combining arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

const array3=array1;


//example of spread operator

const fruits5 = ["apple", "banana"];
const moreFruits1 = ["cherry", "date"];

const combinedFruits = [...fruits5, ...moreFruits1]; // ["apple", "banana", "cherry", "date"]

// Modifying the original array
fruits5.push("elderberry");

// combinedFruits remains unchanged
//console.log(combinedFruits); // ["apple", "banana", "cherry", "date"]


*/








