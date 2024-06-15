'use strict';

let meine_variable = "Steffen";
let mein_objekt = {
    zahl: 5000
};

const meine_funktion = function (v, o) {
  v = "Dennis";
  o.zahl = 2500;  
};
meine_funktion(meine_variable, mein_objekt);

console.log(meine_variable);
console.log(mein_objekt.zahl);

// call-by-value (dt.: Übergabe als Wert): gilt für primitive Datentypen (String, Number, Boolean)
// call-by-reference (dt.: Übergabe als Verweis/Rückverweis): gilt für komplexere Datentypen (Objekte, Funktionen, Arrays)

let konto = {
  iban: "DE6941247506874125",
  bic: "NOLADE55SKI",
  inhaber: {
    vorname: "Steffen",
    nachname: "Kieske",
    geschlecht: "männlich",
    alter: 32,
  },
  kontostand: 3500,
  aktiv: true,
};

/* Übung: 2 Funktionen -> geld_einzahlen & geld_abheben
            Veränderung des Kontostandes
*/

let eingezahlt = 250;
let abhebung = 300;

const geld_einzahlen = function (ein, o) {
    o.kontostand = o.kontostand + ein;
    // o.kontostand += ein; -> Kurzschreibweise / simpler wenn man gleiche Werte ändern will
};
geld_einzahlen(eingezahlt, konto);

console.log(konto.kontostand);

const geld_abheben = function (ab, o) {
    o.kontostand = o.kontostand - ab;
//  o.kontostand -= ab; -> erneut Kurzschreibweise
};
geld_abheben(abhebung, konto);

console.log(konto.kontostand);