'use strict';

/*
if (Bedingung) {
    Code der ausgeführt wird, wenn die Bedingung erfüllt (true) ist
} else {
    Code der ausgeführt wird, wenn die Bedingung nicht erfüllt (false) ist
}
  */
 
/*
if (false) {
    console.log("If wurde ausgeführt!")
} else {
    console.log("Else wird ausgeführt!")
}
    

const mindestalter = 18;
let alter_benutzer = 11;

if (alter_benutzer >= mindestalter) {
  console.log("Perfekt! Du hast das Mindestalter erreicht!");
} else {
    console.log("Du bist noch nicht alt genug!");
}
*/

const mindestalter = 18;
let alter_benutzer = 30;

if (alter_benutzer >= mindestalter) {

  if (alter_benutzer == mindestalter) {
    console.log("Du bist gerade alt genug!");
  } else {
    console.log("Du bist alt genug!");
  }

} else {
    console.log("Du bist noch nicht alt genug!");
}
