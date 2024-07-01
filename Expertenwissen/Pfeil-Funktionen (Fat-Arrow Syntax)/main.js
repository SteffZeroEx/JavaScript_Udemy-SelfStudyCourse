'use strict';
// Normale Funktion:
const multiplizieren = function (a,b) {return a * b};
console.log(multiplizieren(5, 10));

// Pfeil-Funktion:
// Regel 1: function-Keyword wird durch => nach Parametern ersetzt
const multiplizieren_pfeil_funktion_1 = (a, b) => {return a*b; };
console.log(multiplizieren_pfeil_funktion_1(10,10));

// Regel 2: Wenn die Logik der Funktion aus nur einem Ausdruck besteht, kann man die {} weglassen
// Regel 3: Wenn es sich sogar nur um eine return-Anweisung handelt, kann auch das return weggelassen werden
const multiplizieren_pfeil_funktion_2 = (a, b) => a * b;
console.log(multiplizieren_pfeil_funktion_2(5,5));

// Normale Funktion:
const begruessung_1 = function (name) {return `Halle ${name}!`; };

// Regel 4: Wenn nur ein Parameter übergeben wird, können die () weggelassen werden
const begruessung_2 = name => `Hallo ${name}!`;
console.log(begruessung_2("Max"));

// Normale Funktion:
const sinnDesLebens_1 = function () {return 42;};

// Regel 5: Wenn keine Parameter übergeben werden, müssen leere () gesetzt werden
const sinnDesLebens_2 = () => 42;
console.log(sinnDesLebens_2());

// Praxis-Beispiel: Pfeil-Funktionen sind super praktisch z.B. in Call-Back-Funktionen
  // wie sie die forEach()-Methode erwartet
let einkaufsliste = ["Brot", "Käse", "Tomaten", "Butter", "Eier", "Orangensaft"];

// Normale Funktion:
einkaufsliste.forEach(function (e) {console.log(e);} );

// Pfeil-Funktion:
einkaufsliste.forEach( e => console.log(e));