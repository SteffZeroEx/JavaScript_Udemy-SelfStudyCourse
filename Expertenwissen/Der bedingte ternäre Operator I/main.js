'use strict';

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
console.log( meine_zahl > 10 ? "Größer als 10!" : "Kleiner oder gleich 10!");

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
  return fuehrerschein ? "Darf Auto fahren!" : "Darf nicht Auto fahren!"  
};

console.log(fuehrerschein_kontrolle_1());