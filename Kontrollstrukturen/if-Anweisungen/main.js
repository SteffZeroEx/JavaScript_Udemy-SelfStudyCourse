'use strict';

// if (Bedingung) {
//     Code der ausgeführt wird, wenn die Bedingung erfüllt (true) ist
// }

/*
if (true) {
    console.log("If wurde ausgeführt!")
}

if (false) {
    console.log("If wurde ausgeführt!")
}



if (10 < 20) {
    console.log("If wurde ausgeführt");
}


if (10 < 20 && 10 < 30) {
    console.log("If wurde ausgeführt!")
}

*/

// Übung Alterstest über den Browser
let alter_benutzer = prompt("Alter: ")
const mindestalter = 18;

if (alter_benutzer >= mindestalter) {
    console.log("Perfekt! Du hast das Mindestalter erreicht!")
}

if (alter_benutzer < mindestalter) {
    console.log("Du bist noch nicht alt genug");
} // Unschöne Variante und wird ungerne oder sogar gar nicht genommen

const passwort = "vogelsang";
let passwortPrüfung = prompt("Gib dein Passwort ein!");

if (passwort === passwortPrüfung) {
    console.log("Super! Du hast dich richtig eingeloggt!")

}

if (passwort !== passwortPrüfung) {
    console.log("Dein Passwort war falsch!")
}