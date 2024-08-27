//callback functions

//normal function sequence

function firstTask() {
    displayMessage("Hello");
}

function secondTask() {
    displayMessage("Goodbye");
}

firstTask();
secondTask();


//control function execution

function displayMessage(message) {
    document.getElementById("demo").innerHTML = message;
}

function calculateSum(a, b) {
    let sum = a + b;
    displayMessage(sum);
}

calculateSum(10, 20);

//callback

function calculateSumCallback(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

function displayMessageCallback(message) {
    document.getElementById("demo").innerHTML = message;
}

calculateSumCallback(10, 20, displayMessageCallback);


//callback array example

const numbers = [3, -1, 5, 8, -4];

function filterArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const positiveNumbers = filterArray(numbers, (num) => num > 0);
console.log(positiveNumbers);


//asynchronous programming

//set timeout
setTimeout(() => {
    document.getElementById("demo").innerHTML = "Hello after 3 seconds!";
}, 3000);


//set interval

setInterval(() => {
    document.getElementById("demo").innerHTML = "Hello";
}, 1000);


//callback hell

function firstTaskHell(callback) {
    setTimeout(() => {
        console.log("First task completed");
        callback();
    }, 2000);
}

function secondTaskHell(callback) {
    setTimeout(() => {
        console.log("Second task completed");
        callback();
    }, 1000);
}

function thirdTaskHell(callback) {
    setTimeout(() => {
        console.log("Third task completed");
        callback();
    }, 1500);
}

function fourthTaskHell(callback) {
    setTimeout(() => {
        console.log("Fourth task completed");
        callback();
    }, 500);
}

firstTaskHell(() => {
    secondTaskHell(() => {
        thirdTaskHell(() => {
            fourthTaskHell(() => {
                console.log("All tasks completed");
            });
        });
    });
});

//promise

let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }
});

promise.then(
    (message) => console.log(message),
    (error) => console.error(error)
);


//converting callback to promise

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(2000).then(() => {
    document.getElementById("demo").innerHTML = "Executed after 2 seconds!";
});


//solution for callback hell through promise

function firstTask1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First task completed");
            resolve();
        }, 2000);
    });
}

function secondTask2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second task completed");
            resolve();
        }, 1000);
    });
}

function thirdTask3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Third task completed");
            resolve();
        }, 1500);
    });
}

function fourthTask4() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fourth task completed");
            resolve();
        }, 500);
    });
}

// Chain the promises to avoid callback hell
firstTask1()
    .then(() => secondTask2())
    .then(() => thirdTask3())
    .then(() => fourthTask4())
    .then(() => {
        console.log("All tasks completed");
    })
    .catch((error) => {
        console.error(error);
    });


//example with reject

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x === 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise
    .then(function (value) {
        myDisplayer(value);
    })
    .catch(function (error) {
        myDisplayer(error);
    });


//async await

async function greet() {
    return "Hello!";
}

greet().then((message) => {
    console.log(message);
});



async function getMessage() {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("Hello, World!"), 1000);
    });

    let result = await promise;
    document.getElementById("demo").innerHTML = result;
}

getMessage();


//async await with fetch

async function fetchData(url) {
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
fetchData('https://jsonplaceholder.typicode.com/posts');



//github copiolit 


//write a program to add 2 numbers
function subtractNumbers(a, b) {
    return a - b;
}

const result = subtractNumbers(5, 10);
console.log(result);

