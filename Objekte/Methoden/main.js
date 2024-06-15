"use strict";


let konto_Beispiel= {
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
konto_Beispiel.einzahlen(konto_Beispiel, 500);
console.log(konto_Beispiel.kontostand); 

//
//
// Schlüsselwort "this". Damit beziehen wir uns immer auf das aktuelle Objekt.

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
  // "this" Position inkl. Kurzschreibweise (benannte Funktion)
  einzahlen(e) {
  //einzahlen: function (e) {
    this.kontostand += e;
  },
  abheben(a){
  //abheben: function (a) {
    this.kontostand -= a;
  },
};
konto.einzahlen(1000);
console.log(konto.kontostand);


/* Zusammenfassung:

Opjekte können Funktionen haben 
und diese Funktionen nennen sich "Methode" 
des Objekts.
Um innerhalb dieser Methode auf das Objekt selbst zuzugreifen
benutzen wir das Keyword "this" und dann mit der 
Dot-Notation die jeweilige Eigenschaft ansprechen.
Mit "this" machen wir klar, das es um DIESES OBJEKT, also 
das Objekt selbst geht, in dem die Methode definiert ist.
Dank der neuesten Version von JavaScript können wir auch einfach eine
benannte Funktion in dem Objekt definieren können und
auch das als Methode funktioniert. 
*/

// Challenge: Methode in Objekt einbauen

let person = {
  vorname: "Steffen",
  nachname: "Kieske",
  alter: 32,
  person_verarbeiten(){
    return {
      n: `${this.vorname} ${this.nachname}`,
      z: `${this.vorname} ${this.nachname} (${this.alter} Jahre)`,
      b: `Hallo ${this.vorname} ${this.nachname}!`
    };
  
  },
};
console.log(person.person_verarbeiten());


/*
const person_verarbeiten_4 = function (p) {
  return {
    n: `${p.vorname} ${p.nachname}`,
    z: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
    b: `Hallo ${p.vorname} ${p.nachname}!`,
  };
  
};
console.log(person_verarbeiten_4(person));

*/