'use strict';


console.log(Math);

// Kreisfläche berechnen mit radius
// A = PI * r^2

let a = Math.PI * Math.pow(12, 2);
console.log(a);

// Zahlen runden 
// ceil-Methode: Immer aufrunden
// floor-Methode: Immer abrunden
// round-Methode

let a_gerundet = Math.round(a);
console.log(a_gerundet);

let a_abgerundet = Math.floor(a);
console.log(a_abgerundet);

let a_aufgerundet = Math.ceil(a);
console.log(a_aufgerundet);

    // Nachkommastellen

let a_nachkommastellen = a.toFixed(5);          // Nachkommastellen -> Gibt uns jedoch einen String aus
console.log(a_nachkommastellen);

    // Strings in Zahlen umwandeln

let a_integer = parseInt(a_nachkommastellen);   // Wandelt den Zahlenstring in eine Number um -> Als Ganzzahl
console.log(a_integer);

let a_float = parseFloat(a_nachkommastellen);   // Wandel den Zahlenstring in eine Number um -> Mit Nachkommastellen
console.log(a_float);