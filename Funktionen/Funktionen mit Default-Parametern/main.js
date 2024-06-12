'use strict';

let z_1 = 32;
let z_2 = 20;

const rechnung = function (a, b = 10) {
    console.log(a);
    console.log(b);
    console.log(a * b);
}
rechnung(z_1, z_2)

// Minichallenge
/*  - konstante "begruessung" initialisiert function mit 3 parameter (vorname, nachname, alter)
    - in der funktion ein console.log ("Hallo ... ... du bist ... jahre alt")
    - parameter default werte: Max, Mustermann, 18
    - 3 variablen -> Variablen (eigene Daten)
    - funktion 2x aufrufen: einmal alle parameter mitgeben und einmal ohne
    */


const begruessung = function (vorname = "Max", nachname = "Mustermann", alter = 18) {
    console.log(`Hallo ${vorname} ${nachname}! Du bist ${alter} Jahre alt.`);
};

let vor = "Steffen";
let nach = "Kieske";
let alt = 32;

begruessung();
begruessung(vor, nach, alt);
begruessung(undefined, nach, alt); // bei undefined wird der Default-Wert genutzt