"use strict";
// Strings and Template Literals
const Name = "Sameer";
const jobs = "Tester";
const birth = 1996;
const yearNow = 2021;

/* const Sameer ="I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(Sameer); */

const Sameer = `I'm ${Name}, a ${yearNow - birth} year old ${jobs}!`;
console.log(Sameer);

console.log("String with \n\
multiple \n\
lines");
