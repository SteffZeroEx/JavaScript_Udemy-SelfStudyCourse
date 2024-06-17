'use strict';
/*

let obst = [
    "Äpfel",
    "Birnen",
    "Bananen"
];
let gemüse = [
    "Möhren",
    "Sellerie",
    "Kohl"
];
let brot = [
    "Graubrot",
    "Schwarzbrot",
    "Vollkornbrot"
];

let waren = [
    obst,
    gemüse,
    brot
];
console.log(waren);

// Schreibweise ist etwas umständlich und macht man in der Regel nicht so

*/

let waren = [
    [
        "Äpfel", 
        "Birnen", 
        "Bananen"],
    [
        "Möhren", 
        "Sellerie", 
        "Kohl"],
    [
        "Graubrot", 
        "Schwarzbrot", 
        "Vollkornbrot"]
];

console.log(waren);
console.log(waren[0]); // Zugriff auf "Obst-Array"
console.log(waren[1]); // Zugirff auf "Gemüse-Array"
console.log(waren[2]); // Zugriff auf "Brot-Array"

console.log(waren[0][0]); // Zugriff auf jedes einzelne Array aus "Obst-Array"
console.log(waren[0][1]); // Zugriff auf jedes einzelne Array aus "Obst-Array"
console.log(waren[0][2]); // Zugriff auf jedes einzelne Array aus "Obst-Array"

console.log(waren[1][0]); // Zugriff auf jedes einzelne Array aus "Gemüse-Array"
console.log(waren[1][1]); // Zugriff auf jedes einzelne Array aus "Gemüse-Array"
console.log(waren[1][2]); // Zugriff auf jedes einzelne Array aus "Gemüse-Array"

console.log(waren[2][0]); // Zugriff auf jedes einzelne Array aus "Brot-Array"
console.log(waren[2][1]); // Zugriff auf jedes einzelne Array aus "Brot-Array"
console.log(waren[2][2]); // Zugriff auf jedes einzelne Array aus "Brot-Array"

