// Global Scope
var globalVar = 'I am a global var';
let globalLet = 'I am a global let';
const globalConst = 'I am a global const';

function scopeExample() {
  // Function Scope
  var functionVar = 'I am function-scoped var';
  let functionLet = 'I am function-scoped let';
  const functionConst = 'I am function-scoped const';

  if (true) {
    // Block Scope
    var blockVar = 'I am still function-scoped var';
    let blockLet = 'I am block-scoped let';
    const blockConst = 'I am block-scoped const';

    console.log(blockVar);   // Accessible: var is function-scoped
    console.log(blockLet);   // Accessible: let is block-scoped
    console.log(blockConst); // Accessible: const is block-scoped
  }


  console.log(blockVar);   // Accessible: var is function-scoped
  console.log(blockLet);   // Error: let is not accessible outside the block
  console.log(blockConst); // Error: const is not accessible outside the block
}

scopeExample();
console.log(globalVar);   // Accessible: global scope
console.log(globalLet);   // Accessible: global scope
console.log(globalConst); // Accessible: global scope
