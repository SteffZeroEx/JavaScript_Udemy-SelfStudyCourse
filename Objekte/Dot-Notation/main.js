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
console.log(konto_1);

let konto_2 = {
  iban: "DE694124750687875",
  bic: "NOLADE55SKI",
  inhaber: {
    vorname: "Amelie",
    nachname: "Jana",
    geschlecht: "weiblich",
    alter: 7,
  },
  kontostand: 5500,
  aktiv: true,
};

console.log(konto_2);


// Werte auslesen (Dot-Notation)

let wert_1 = konto_1.iban;
console.log(wert_1);

let wert_2 = konto_2.bic;
console.log(wert_2);

let wert_3 = konto_1.inhaber.vorname;
console.log(wert_3);

/* Mini Challenge
    console.log mit template string -> z.B. "Max Mustermann hat 3000€ auf seinem Konto"
*/

console.log(`${konto_1.inhaber.vorname} ${konto_1.inhaber.nachname} hat ${konto_1.kontostand}€ auf seinem Konto.`);

// Eigenschaften setzen (Dot-Notation)

konto_1.abhebelimit = 1000;  // "abhebelimit" <- Eigenschaft
console.log(konto_1);
console.log(konto_1.abhebelimit);

// Werte setzen bzw. verändern (Dot Notation)
konto_1.kontostand = 3000;
console.log(konto_1);


/* Abschluss Challenge 
    - schnappt euch Auto-Objekt aus letzter Lektion
    - fügt Eigenschaft PS hinzu
    - verändert das Modell des Autos
    - gebt Template-String "Ein ... ... hat ... PS." aus
*/

let auto = {
  marke: "Kia",
  modell: "Ceed Sportswagon GT Line",
  kraftstoffart: "Benzin",
  kilometerstand: 43733,
  ausstattung: {
    navigationssystem: false,
    klimaanlage: true,
    sitzheizung: false,
    tempomat: true,
    panoramadach: false,
  },
  zustand: "gebraucht",
  preis: 14700,
};

console.log(auto);

auto.ps = 230;
auto.modell = "Stinger";
console.log(auto);
console.log(`Ein ${auto.marke} ${auto.modell} hat ${auto.ps} PS.`);