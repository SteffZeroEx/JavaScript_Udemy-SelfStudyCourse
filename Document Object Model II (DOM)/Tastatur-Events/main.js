"use strict";

document.addEventListener("keydown", (e) => {
//   console.log(e);
  if (e.key === "@") {
    console.log("Das @-Zeichen wurde gedrückt");
  }
});

document.addEventListener("keyup", e => {
    if (e.key === "p") {
        console.log("Das p-Zeichen wurde gedrückt!");
    }
});

document.addEventListener("keypress", e => {
    if (e.key === ":") {
        console.log("Das :-Zeichen wurde gedrückt!");
    }
});

// Ausnahmefall keypress: Hört nicht auf Shift, Fn oder Capslock
document.addEventListener("keypress", e => {
    console.log(e);
});