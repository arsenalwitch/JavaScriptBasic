// Introduction to Objects
const Person = {
  firstsName: "Monalisa",
  lastsName: "Saha",
  agee: 2021 - 1995,
  jobs: "IT job",
  friendss: ["Mona", "lisa", "guriya"],
  calcAge: function () {
    this.agee = 2021 - this.birthYeah;
    return this.agee;
  },
};
console.log(Person);
// Dot vs. Bracket Notation
console.log(Person.lastsName);
console.log(Person["lastsName"]);

const interestedIn = prompt(
  "What do you want to know about Person? Choose between firstsName, lastsName, agee, jobs, and friendss"
);
if (Person[interestedIn]) {
  console.log(Person[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstsName, lastsName, agee, jobs, and friendss"
  );
}

Person.location = "India";
console.log(Person);
