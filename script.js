"use strict";

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 }
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello I am a %s string", "cool");
// the %s trick lets you pass the second object in the parenthesis where you put it

// Styled
// console.log(
//  "%c I am some great text",
//  "font-size: 50px; background:red; text-shadow: 10px 10px 0 blue"
// );
// by putting the %c at the beginning, it allows to insert style

// warning !
console.warn("OH NOOOO");

// Eror :/
console.error("shit !");

// Info
console.info("Crocodiles eat 3-4 peoples per year");

// Testing
console.assert(1 === 2, "That is wrong !");
