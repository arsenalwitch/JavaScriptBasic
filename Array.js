"use strict";
const friends = ["Rose", "Mili", "Ram"];
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const yr = new Array(1995, 2000, 2018, 2020);

// Basic Array Operations (Methods)
// Add elements
const newLength = friends.push("Jays");
console.log(friends);
console.log(newLength);

friends.unshift("Jony");
console.log(friends);

// Remove elements
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Rose"));

console.log(friends.includes("Mili"));
