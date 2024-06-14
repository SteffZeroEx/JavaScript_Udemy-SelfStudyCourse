'use strict';

/*
let iban = "DE6941247506874125";
let bic = "NOLADE55SKI";
let kontostand = 3500;
let aktiv = true;
*/

// Inhaber-Objekt (Vorname, Nachname, Geschlecht, Alter)
/*
let inhaber_1 = {
    vorname: "Steffen",
    nachname: "Kieske",
    geschlecht: "männlich",
    alter: 32
};
console.log(inhaber_1);

let inhaber_2 = {
    vorname: "Amelie",
    nachname: "Jana",
    geschlecht: "weiblich",
    alter: 7
};
console.log(inhaber_2);
*/
//

let konto_1 = {
  iban: "DE6941247506874125",
  bic: "NOLADE55SKI",
  inhaber: {
    vorname: "Steffen",
    nachname: "Kieske",
    geschlecht: "männlich",
    alter: 32
  },
  kontostand: 3500,
  aktiv: true
};
console.log(konto_1);

let konto_2 = {
  iban: "DE694124750687875",
  bic: "NOLADE55SKI",
  inhaber: {
    vorname: "Amelie",
    nachname: "Jana",
    geschlecht: "weiblich",
    alter: 7
  },
  kontostand: 5500,
  aktiv: true
};

console.log(konto_2);

/* Aufgabe als Challenge:
    Objekt für ein Auto anlegen

    - Marke
    - Modell
    - Kraftstoffart
    - Kilometerstand
    - Ausstattung
        - Navigationssystem
        - Klimaanlage
        - Sitzheizung
        - Tempomat
        - Panoramadach
    - Zustand
    - Preis
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
        panoramadach: false
    },
    zustand: "gebraucht",
    preis: 14700
};

console.log(auto);