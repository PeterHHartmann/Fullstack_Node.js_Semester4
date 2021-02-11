// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const combined = Number(numberOne) + Number(numberTwo);
console.log(combined);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

// --------------------------------------

const anotherCombined = Number(anotherNumberOne) + Number(anotherNumberTwo);
const anotherTwoDecimals = anotherCombined.toFixed(2);
console.log(anotherTwoDecimals);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const sum = one + two + three;
const avg = sum / 3;
const avgWithFiveDecimals = avg.toFixed(5);
console.log(avgWithFiveDecimals);

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const letterC = letters.charAt(2);
console.log(letterC);

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const replaced = fact.replace("j", "J");
console.log(replaced);

// --------------------------------------



