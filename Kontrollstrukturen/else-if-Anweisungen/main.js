'use strict';

/*
if (Bedingung) {
    Code der ausgeführt wird, wenn die Bedingung erfüllt (true) ist
} else {
    if (Bedingung) {
    Code der ausgeführt wird, wenn die Bedingung erfüllt (true) ist
} else {
    if (Bedingung) {
        Code der ausgeführt wird, wenn die Bedingung erfüllt (true) ist
} else {
    Code der ausgeführt wird, wenn die Bedingung nicht erfüllt (false) ist
}
}
}
// Chotisch und viel zu sehr durcheinander
*/


// Übersichtlich und bessere Variante! 
/* 
if (Bedingung_1) {
    Code der ausgeführt wird, wenn die Bedingung_1 erfüllt (true) ist
} else if (Bedingung_2) {
    Code der ausgeführt wird, wenn die Bedingung_2 erfüllt (true) ist
} else if (Bedingung_3) {
    Code der ausgeführt wird, wenn die Bedingung_3 erfüllt (true) ist
} else {
    Code der ausgeführt wird, wenn die Bedingung nicht erfüllt (false) ist
}
    */

const mindestalter = 18;
let alter_benutzer = 18;

if (alter_benutzer == mindestalter) {
    console.log("Du bist gerade alt genug!");
} else if (alter_benutzer > mindestalter) {
     console.log("Du bist alt genug!");
} else {
    console.log("Du bist noch nicht alt genug!");
}