"use strict";

let eingezahlt = 250;
let abhebung = 300;

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
  // weitere Eigenschaft hinzufügen inklusive Funktionen (= Methoden):
  einzahlen: function (k, e) {
    k.kontostand += e;
  },
  abheben: function (k, a) {
    k.kontostand -= a;
  },
};

// console.log(); // <- log() ist nichts weiter als eine Methode des Objekts "console". (Im Hintergrund haben wir ein "console"-Objekt, gefolgt von einer Dot-Notation und der Methode "log")
// Daraus folgt, wir können folgendes machen:
konto.einzahlen(konto, 500);
console.log(konto.kontostand); //error?

/*
const einzahlen = function (ein, o) {
  o.kontostand = o.kontostand + ein;
  // o.kontostand += ein; -> Kurzschreibweise / simpler wenn man gleiche Werte ändern will
};

const abheben = function (ab, o) {
  o.kontostand = o.kontostand - ab;
  //  o.kontostand -= ab; -> erneut Kurzschreibweise
};
*/
