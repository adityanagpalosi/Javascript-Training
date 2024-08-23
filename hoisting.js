console.log(hoistedVar);   // Output: undefined (hoisted, but not initialized)
console.log(hoistedLet);   // Error: Cannot access 'hoistedLet' before initialization
console.log(hoistedConst); // Error: Cannot access 'hoistedConst' before initialization

var hoistedVar = 'I am a var';
let hoistedLet = 'I am a let';
const hoistedConst = 'I am a const';

hoistedFunction();         // Works: Function declaration is hoisted

function hoistedFunction() {
  console.log('I am a hoisted function');
}

hoistedExpression();     // Error: hoistedExpression is not a function

var hoistedExpression = function() {
  console.log('I am not hoisted');
};

   
