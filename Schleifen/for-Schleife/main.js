'use strict';

let x = 0; // Zählvariable

while (x < 5) { // Bedingung
    console.log(x); // Code
    x++; // Anweisung für die Zählvariable
}



console.log("");
/* // verbalisierte Schreibweise des Codes

for (Zählvariable; Bedingung, Anweisung für die Zählvariable) {
    Code
}

*/


for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    } else if ( i == 4) {
        break;
    }
    console.log(i);
}
console.log("for-Schleife ist beendet");



// Mit der while-Schleife hat man eine Art "Schalter-Funktion", bei der man sie eher dort benutzt, wo man 
// z.B. Booleans nutzt. -> Als Beispiel:
// Während (while) der Schalter auf Aktiv (also true) steht, wird der und der Code ausgeführt. Steht er auf
// Inaktiv (false), wird der Code nicht ausgeführt

// Die for-Schleife ist dafür gemacht, um zu zählen.
// Wird auch für Arrays genutzt und sind super wichtig dafür.

// Aber auch hier zählt: VORSICHT VOR ENDLOSSCHLEIFEN!

/* zum Beispiel:

for (let j = 0; j >= 0; j++) {
    //...
}

*/