"use strict";
//Printing in console
console.log("Hello");
console.log(20);
console.log(40 + 8 + 23 - 10);

let Fun = true;
console.log(Fun);
console.log(typeof Fun);

let year;
console.log(year);
console.log(typeof year);
year = 1995;
console.log(typeof year);

// let, const and var
let age = 25;
age = 30;

const birthYear = 1995;

var job = "programmer";
job = "teacher";

// Basic Operators
// Math operators
const now = 2021;
const ageMona = now - 1996;
console.log(age, ageMona);

console.log(age * 2, ageMona / 10, 2 ** 3);

const firstName = "Monalisa";
const lastName = "Saha";
console.log(firstName + " " + lastName);
// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
console.log(x);
// Comparison operators
console.log(age >= 18);
console.log(now - 1995 > now - 2018);

let y, z;
z = y = 25 - 10 - 5;
console.log(z, y);

// Type Conversion and Coercion

// type conversion
const inputYear = "2021";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 20);

console.log(String(20), 20);

// type coercion
console.log("I am " + 25 + " years old");
console.log("20" - "10" - 5);
console.log("20" / "2");
console.log("25" > "18");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

// Equality Operators: == vs. ===
const Myage = "25";
if (Myage === 25) console.log("You just became an adult :D (strict)");
if (Myage == 25) console.log("You just became an adult :D (loose)");
