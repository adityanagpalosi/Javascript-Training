// Global Context
console.log(this); // In browsers: refers to the global object (window)

// Inside an Object Method
const obj = {
  value: 42,
  method: function() {
    console.log(this.value); // 'this' refers to the obj
  }
};
obj.method(); // Output: 42

// Event Handler
document.getElementById('demo').addEventListener('click', function() {
  console.log(this); // 'this' refers to the clicked button element
});

// Arrow Function
const arrowFunc = () => {
  console.log(this); // 'this' refers to the context in which the arrow function was defined
};
arrowFunc(); // Output depends on where arrowFunc is defined
