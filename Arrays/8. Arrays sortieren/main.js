'use strict';
/*
let zahlen = [1, 20, 2000, 1000000, 50];

let neu_sortiert = zahlen.sort(); 

console.log(neu_sortiert);

*/ 

let worte = ["Zahl", "Wahnsinn", "Mangel", "Abspann"];

let worte_neu = worte.sort();

console.log(worte_neu);

// Für das sortieren von Zahlen-Arrays sollte deshalb eine Vergleichsfunktion gesetzt werden
// Ist Rückgabewert der Vergleichsfunktion < 0, wirde a auf einen niedrigeren Index als b gesetzt
// Ist Rückgabewert der Vergleichsfunktion > 0, wird a auf einen höheren Index als b gesetzt
// Ist Rückgabewert der Vergleichsfunktion = 0, bleibt alles wie es ist
// return a - b sortiert in aufsteigender Reihenfolge
// return b - a sortiert in absteigender Reihenfolge

let zahlen = [1, 20, 2000, 1000000, 50];

let zahlen_neu = zahlen.sort(function (a, b) {  // Parameter sind völlig egal zu wählen, aber üblich werden "a" und "b" gewählt
    return a - b;           // Vergleichsfunktion (compare function) -> vergleicht immer 2 Werte aus diesem Array -> hier a und b ( 1 und 20)
                            // Wenn diese compare function "< 0 returnt", sortiert sie a auf die niedrigere Position, als b
});
console.log(zahlen_neu);

