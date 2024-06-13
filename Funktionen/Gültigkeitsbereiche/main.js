'use strict';

// Gültigkeitsbereich: Bereich in dem man Zugriff auf eine Variable hat

// Globale Variable: Wird außerhalb aller Codeblöcke definiert und ist von überall zugänglich
// Lokale Variable: Wird innerhalb eines Codeblocks definiert und ist nur in diesem, und
// in den Codeblöcken die darin enthalten sind, verfügbar


// Globalen Gültigkeitsbereich: variable_1
    // Lokaler Gültigkeitsbereich 1: variable_2
        // Lokaler Gültigkeitsbereich 1.1: variable_3 (Weil innerhalb der if-Abfrage)
    // Lokaler Gültigkeitsbereich 2: variable_4 (Weil innerhalb der if-Abfrage)

let variable_1 = "Variable 1";

const meine_funktion = function () {
    let variable_2 = "Variable 2";

    if (true) {                         
        let variable_3 = "Variable 3";
        console.log(variable_2);
        console.log(variable_3);
    }

    console.log(variable_1);
    console.log(variable_2);
    // console.log(variable_3); // Erklärung siehe oben und unten
};
meine_funktion();

console.log(variable_1);
// console.log(variable_2); // Von außen kein Zugriff auf die Variable in der Funktion -> Gültigkeitsbereich liegt außerhalb -> wirft einen Fehler

if (true) {
    let variable_4 = "Variable 4";
}