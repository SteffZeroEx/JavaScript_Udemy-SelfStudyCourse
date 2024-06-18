'use strict';

let personen = [
    "Peter",
    "Anna",
    "Mark",
    "Maximilian",
    "Mia"
];
// Wenn wir wissen wie groß/wie viele Elemente unser Array ist/hat
/*
for (let i = 0; i < 5; i++) {
    console.log(`Hallo ${personen[i]}!`);    
}
*/

// Wenn wir nicht wissen, wie viele Elemente unser Array hat
// Man denke an: Arrays sind Objekte mit besonderen Zusatzfunktionen -> "length" ist hier wichtig
// Vorwärts durchlaufen lassen

for (let i = 0; i < personen.length; i++) {
    console.log(`Hallo ${personen[i]}!`);
    
}
console.log("");

// Rückwärts durchlaufen lassen

for (let i = personen.length - 1; i >= 0; i--) {
    console.log(`Tschüss ${personen[i]}!`);
}