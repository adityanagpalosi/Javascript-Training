//Object definition 

// Using an Object Literal
const personLiteral = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  console.log(personLiteral);
  // Using the `new` Keyword
  const personNew = new Object();
  personNew.firstName = "John";
  personNew.lastName = "Doe";
  personNew.age = 50;
  personNew.eyeColor = "blue";
  
  // Using an Object Constructor
  function Person2(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  const myFather = new Person2("John", "Doe", 50, "blue");
  const myMother = new Person2("Sally", "Rally", 48, "green");
  
  // Using Object.assign()
  const sourceObj = { lastName: "Smith", age: 45 };
  Object.assign(personLiteral, sourceObj);
  
  // Using Object.create()
  const proto = {
    greet() {
      return "Hello!";
    }
  };
  const personCreated = Object.create(proto);
  personCreated.firstName = "Jane";
  personCreated.lastName = "Doe";
  
  // Using Object.fromEntries()
  const entries = [
    ["firstName", "John"],
    ["lastName", "Doe"],
    ["age", 50],
    ["eyeColor", "blue"]
  ];
  const personFromEntries = Object.fromEntries(entries);
  


  //object methods

  //general methods

  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // General Methods
  const keys = Object.keys(person); // ["firstName", "lastName", "age", "eyeColor"]
  const values = Object.values(person); // ["John", "Doe", 50, "blue"]
  const entries1 = Object.entries(person); // [["firstName", "John"], ["lastName", "Doe"], ["age", 50], ["eyeColor", "blue"]]
  const grouped = Object.groupBy(entries, ([key, value]) => key.length > 3 ? "long" : "short");

  console.log(grouped); // { long: [["firstName", "John"], ["lastName", "Doe"], ["eyeColor", "blue"]], short: [["age", 50]] }
  
  // Property Management Methods
  Object.defineProperty(person, "nationality", { value: "English", writable: true });
  Object.defineProperties(person, {
    job: { value: "Developer" },
    hobby: { value: "Reading" }
  });


  //object protection methods

  const car = { type: "Fiat", model: "500", color: "white" };

// Object Protection Methods
Object.preventExtensions(car);
console.log(Object.isExtensible(car)); // false

Object.seal(car);
console.log(Object.isSealed(car)); // true

Object.freeze(car);
console.log(Object.isFrozen(car)); // true

//object prototype

// Constructor function
function Person1(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person1.prototype.greet = function() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Another method added to the prototype
Person1.prototype.isAdult = function() {
  return this.age >= 18;
};

// Creating an instance of Person
const alice = new Person1('Alice', 30);

console.log(alice);

// Using prototype methods
console.log(alice.greet()); // Output: Hello, my name is Alice and I am 30 years old.
console.log(alice.isAdult()); // Output: true

// Inheriting from Person
function Student(name, age, studentId) {
  Person1.call(this, name, age); // Call Person constructor
  this.studentId = studentId;
}

// Inheriting the prototype of Person
Student.prototype = Object.create(Person1.prototype);
Student.prototype.constructor = Student;

// Adding a new method specific to Student
Student.prototype.study = function() {
  return `${this.name} is studying with student ID: ${this.studentId}`;
};

// Creating an instance of Student
const bob = new Student('Bob', 20, 'S12345');

console.log(bob);
// Using inherited prototype methods and new methods
console.log(bob.greet()); // Output: Hello, my name is Bob and I am 20 years old.
console.log(bob.isAdult()); // Output: true
console.log(bob.study()); // Output: Bob is studying with student ID: S12345


//getters and setters

// Object with accessors
const person3 = {
  firstName: 'John',
  lastName: 'Doe',
  
  // Getter for fullName
  get fullName() {
      return `${this.firstName} ${this.lastName}`;
  },
  
  // Setter for fullName
  set fullName(name) {
      [this.firstName, this.lastName] = name.split(' ');
  }
};

// Accessing the getter
console.log(person3.fullName); // Output: John Doe

// Using the setter
person3.fullName = 'Jane Smith';

// Accessing the updated fullName
console.log(person3.fullName); // Output: Jane Smith


//call, apply and bind

// call() Example
const person4 = {
  fullName: function(city, country) {
    return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
  }
};

const person5 = { firstName: "John", lastName: "Doe" };
console.log(person4.fullName.call(person5, "Oslo", "Norway"));  // "John Doe, Oslo, Norway"

// apply() Example
console.log(person4.fullName.apply(person5, ["Oslo", "Norway"]));  // "John Doe, Oslo, Norway"

// bind() Example
const person6 = { firstName: "Hege", lastName: "Nilsen" };
const boundFullName = person4.fullName.bind(person6, "Oslo", "Norway");
console.log(boundFullName());  // "Hege Nilsen, Oslo, Norway"


//some more function concepts

// Default Parameter Values
function myFunction(x, y = 10) {
  return x + y;
}

console.log(myFunction(5,4)); // 15

// Rest Parameter
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(4, 9, 16, 25)); // 54


// Invoking a Function as a Function
function myFunction(a, b) {
  return a * b;
}
console.log(myFunction(10, 2));  // 20

// Invoking a Function as a Method
const myObject = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
console.log(myObject.fullName());  // "John Doe"

// Invoking a Function as a Constructor
function MyFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}
const myObj = new MyFunction("John", "Doe");
console.log(myObj.firstName);  // "John"


// Self-Invoking Function
(function () {
  let x = "Hello!!";
  console.log(x);
})();



//closure

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3



  
//classes

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
console.log(`My car is ${myCar.age()} years old.`);


//inheritance

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return  'It is a ' + this.model;
  }
}

const myCar1 = new Model("Ford", "Mustang");
console.log(myCar1.show()); // "I have a Ford, it is a Mustang"

//static methods

class Car1 {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar3 = new Car1("Ford");
console.log(Car1.hello()); // "Hello!!"

//getter and setter

class Car2 {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

mycar = new Car2("Ford");
console.log(mycar.cnam); // Ford
mycar.cnam = "Volvo";
console.log(mycar.cnam); // Volvo


