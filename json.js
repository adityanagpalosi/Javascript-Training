// JSON String
const jsonString = `{
    "name": "John",
    "age": 30,
    "isStudent": false,
    "courses": [
        "Math",
        "Science"
    ]
}`;

// Parse JSON string to JavaScript object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); // Output: John

// JavaScript object
const user = {
    name: "Alice",
    age: 25,
    isStudent: true,
    courses: ["English", "History"]
};

// Convert JavaScript object to JSON string
const jsonStringified = JSON.stringify(user);
console.log(jsonStringified);
// Output: '{"name":"Alice","age":25,"isStudent":true,"courses":["English","History"]}'
