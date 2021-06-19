"use strict";
//if / else Statements
const school = 2012;

let century;
if (school <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// The switch Statement
const day = "friday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Monday mania");
    break;
  case "tuesday":
    console.log("Tuesday korma");
    break;
  case "wednesday":
    console.log("Wednesday kfc");
    break;
  case "thursday":
  case "friday":
    console.log("No food");
    break;
  default:
    console.log("Not a valid day!");
}

// For loop
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// The while Loop
let repp = 1;
while (repp <= 10) {
  console.log(`WHILE: Lifting weights repetition ${repp} 🏋️‍♀️`);
  repp++;
}

// Dice problem
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(" You got 6, Ypu win!");
}
