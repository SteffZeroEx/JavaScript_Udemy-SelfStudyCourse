'use strict';

const multiplizieren = function (a, b) {
 return a * b;   
 console.log("TEST!") // Code nach einem return (innerhalb der Funktion) wird nicht mehr ausgeführt
}

let z_1 = 13;
let z_2 = 3;

// let ergebnis = multiplizieren(z_1, z_2);  <- bräuchten nicht extra eine eigene Variable, um diese dann anschließend in die Console auszugeben
console.log(multiplizieren(z_1, z_2));  // <- stattdessen diese Variante

/*
let ergebnis_2 = multiplizieren(
  multiplizieren(z_1, z_2),
  multiplizieren(z_1, z_2)
);
*/
console.log(multiplizieren(multiplizieren(z_1, z_2), multiplizieren(z_1, z_2))); // ziemlich komplex, jedoch nicht unbedingt nötig

// Klammern und Aufrufe werden von Innen nach Außen aufgelöst