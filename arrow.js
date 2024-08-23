// 1. Syntax
function normalFunction(a, b) {
    return a + b;
  }
  
  const arrowFunction = (a, b) => a + b;
  
  console.log(normalFunction(2, 3)); // Output: 5
  console.log(arrowFunction(2, 3));  // Output: 5
  
  // 2. `this` Binding
  
  const obj = {
    value: 10,
    normalMethod: function() {
      console.log(this.value); // 'this' refers to the object
    },
    arrowMethod: () => {
      console.log(this.value); // 'this' refers to the outer scope (in this case, the global object)
    }
  };
  
  obj.normalMethod(); // Output: 10
  obj.arrowMethod();  
  
  // 3. Arguments Object
  
  function normalWithArguments() {
    console.log(arguments); // Output: [2, 3, 4]
  }
  
  const arrowWithArguments = () => {
    console.log(arguments); // Error: arguments is not defined in arrow functions
  };
  
  normalWithArguments(2, 3, 4);
  arrowWithArguments(2, 3, 4); // This will throw an error
  
  // 4. Constructor function
  
  function NormalConstructor() {
    this.value = 5;
  }
  
  const instance = new NormalConstructor();
  console.log(instance.value); // Output: 5
  
  const ArrowConstructor = () => {
    this.value = 5;
  };
  
  // Uncommenting the below line will throw an error
  // const arrowInstance = new ArrowConstructor(); // Error: ArrowConstructor is not a constructor
  