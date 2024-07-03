"use strict";

// Bedingung ? Ausdruck_1 : Ausdruck_2

/*

if (Bedingung) {
    Ausdruck_1
} else {
    Ausdruck_2
}

*/

let meine_zahl = 9;

/*
if (meine_zahl > 10){
    console.log("Größer als 10!");
} else {
    console.log("Kleiner oder gleich 10!");
}
*/

// if-else als bedingten ternären Operator geschrieben
console.log(meine_zahl > 10 ? "Größer als 10!" : "Kleiner oder gleich 10!");

let geschlecht = 1;
console.log(`Hallo ${geschlecht ? "Frau" : "Herr"} Mustermann`);

if (geschlecht) {
  console.log("Hallo Frau Mustermann!");
} else {
  console.log("Hallo Herr Mustermann");
}

let fuehrerschein = true;

const fuehrerschein_kontrolle = function () {
  if (fuehrerschein) {
    return "Darf Auto fahren!";
  } else {
    return "Darf nicht Auto fahren!";
  }
};
console.log(fuehrerschein_kontrolle());

// bedingter ternärer Operator mit der return Anweisung

const fuehrerschein_kontrolle_1 = function () {
  return fuehrerschein ? "Darf Auto fahren!" : "Darf nicht Auto fahren!";
};

console.log(fuehrerschein_kontrolle_1());

// ________________________________________________________________________________________________________________________________________________ //

let erdbeschleunigung = 8.5;
let panik = false;

erdbeschleunigung > 9.81 ? ((panik = true), (erdbeschleunigung = 9.81)) : ((panik = false), (erdbeschleunigung = 9.81));
console.log(erdbeschleunigung);
console.log(panik);

let farbe = "rot";
/*
if (farbe === "rot") {
    console.log("Ich mag rot!");
} else if (farbe === "blau"){
    console.log("Blau finde ich auch gut!");
} else if (farbe === "grün") {
    console.log("Grün mag ich nicht!");
} else {
    console.log(`Zur Farbe ${farbe} habe ich keine Meinung`);
}
*/
console.log(
  farbe === "rot"
    ? "Ich mag rot!"
    : farbe === "blau"
    ? "Blau finde ich auch gut"
    : farbe === "grün"
    ? "Grün mag ich nicht!"
    : `Zur Farbe ${farbe} habe ich keine Meinung`
);
