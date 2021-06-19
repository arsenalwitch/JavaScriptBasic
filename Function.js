"use strict";
// Functions
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Declarations vs. Expressions
// Function declaration
function calcAge1(birthYeah) {
  return 2021 - birthYeah;
}
const age1 = calcAge1(1995);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2021 - birthYeah;
};
const age2 = calcAge2(1995);
console.log(age1, age2);

// Arrow functions
const calcAge3 = (birthYeah) => 2021 - birthYeah;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYeah, EmpName) => {
  const ages = 2021 - birthYeah;
  const retirement = 65 - ages;
  return `${EmpName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Motu"));

// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessorr(appless, orangess) {
  const applePieces = cutFruitPieces(appless);
  const orangePieces = cutFruitPieces(orangess);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessorr(2, 3));
