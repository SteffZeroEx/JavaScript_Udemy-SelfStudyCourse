'use strict';


// für Funktionen
let meine_zahlen = [44, 51, 36];

const addieren =  function (a,b,c) {
    console.log(a + b + c);
};
// addieren(meine_zahlen[0], meine_zahlen[1], meine_zahlen[2]);
    // spread-Syntax
addieren(...meine_zahlen);


// für Arrays
let kleines_array = ["Apfel", "Banane", "Kiwi"
];
// let großes_array = [kleines_array[0], kleines_array[1], kleines_array[2], "Orange", "Weintraube"];
let grosses_array = [...kleines_array, "Orange", "Weintraube"];
let sehr_grosses_array = [...kleines_array, "Kartoffel", ...grosses_array, "Möhre"];
console.log(grosses_array);


// für Objekte
let kleines_objekt = {
    name: "Ein Objekt",
    groesse: 2,
    objekt: true
};

let großes_objekt = {
    ...kleines_objekt,
    betreff: "Spread-Syntax",
    datum: new Date
};
console.log(großes_objekt);


// für Instanzen von Objekten

let datumswert = [2020, 5, 14];
// let datum = new Date(datumswert[0], datumswert[1], datumswert[2]);
let datum = new Date(...datumswert);
console.log(datum);