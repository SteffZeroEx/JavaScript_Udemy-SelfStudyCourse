"use strict";

let produkte = ["Bananen", "Äpfel", "Schokolade", "Brot", "Müsli"];

console.log(produkte);
//Anzeige in der Console:
/*

0: "Bananen"
1: "Äpfel"
2: "Schokolade"
3: "Brot"
4: "Müsli"
length: 5

Die Zahlen vor dem String ist der "Index".
Das letzte Element ist immer die Länge des Arrays minus 1.
Länge hier: length: 5  -> letztes Element: [4]...

*/

// Zugriff auf den Index (auf das wievielte Element) eine Arrays:

console.log(produkte[0]);
console.log(produkte[1]);
console.log(produkte[2]);
console.log(produkte[3]);
console.log(produkte[4]);
console.log(produkte[5]); // nicht definiert - undefined
