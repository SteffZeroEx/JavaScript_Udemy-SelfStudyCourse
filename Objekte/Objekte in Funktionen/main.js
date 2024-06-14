"use strict";

let konto_1 = {
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


let konto_2 = {
  iban: "DE694124750687875",
  bic: "NOLADE55SKI",
  inhaber: {
    vorname: "Amelie",
    nachname: "Jana",
    geschlecht: "weiblich",
    alter: 7,
  },
  kontostand: 5,
  aktiv: true,
};


const kontostand_ausgeben = function (konto) {
   console.log(`${konto.inhaber.vorname} ${konto.inhaber.nachname} hat ${konto.kontostand}€ auf dem Konto.`);
};
kontostand_ausgeben(konto_1);
kontostand_ausgeben(konto_2);

// Challenge: Denkt euch noch ein paar hilfreiche Funktionen für unsere Konten aus.