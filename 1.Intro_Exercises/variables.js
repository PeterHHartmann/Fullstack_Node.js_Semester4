// "use strict";

// never EVER do this
// totalGlobalVariable = "My total global variable";

// let someVarToDelete = "don't hurt me";
// delete someVarToDelete;

// are object truly immutable in JavaScript? NO!
const myObject = {
    attribute: "value"
};
myObject.attribute = "other value";

let variableA;
let variableB;

console.log(variableA + variableB);
console.log(variableA, variableB);
