'use strict';
/*
const meine_funktion = function (parameter_1, parameter_2) {
    auszuführender Code
};
meine_funktion(p_1, p_2);
*/

// Lernmaterial / Lernbereich
/*
const log_die_zahl = function (a) {
    console.log(a);
};
log_die_zahl(42);



const begruessung = function (vorname, nachname) {
  console.log(`Hallo ${vorname} ${nachname}!`);  
};

let vor = "Max";
let nach = "Mustermann";
 
begruessung(vor, nach);
*/




/* Übung:   - 5 Variablen erstellen mit 5 unterschiedlichen Zahlen
            - 1 Funktion erstellen mit 2 parameter und 5 console.log's mit jeweils 1 anderen Grundrechenart (Multiplikation, Division, Addition, Subtraktion, Modulo Operator)
            - wenn fertig, dann im Anschluss 5 weitere Funktionen erstellen mit erneuten 2 parameter, aber unterschiedlicher Zahlen auf den Variablen
            - im Browser kontrollieren, ob der Code stimmt
            */

let zahl_1 = 54;
let zahl_2 = 32;
let zahl_3 = 3;
let zahl_4 = 29;
let zahl_5 = 45;

const rechnen = function (a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a % b);  
};
rechnen(zahl_1, zahl_2);
rechnen(zahl_3, zahl_4);
rechnen(zahl_1, zahl_5);
rechnen(zahl_5, zahl_3);
rechnen(zahl_4, zahl_2);
rechnen(zahl_3, zahl_1);


// Viiiiiel zu lang
// console.log("-----------------------------------------");

// const rechnen_2 = function (c, d) {
//   console.log(c + d);  
//   console.log(c - d);
//   console.log(c * d);
//   console.log(c / d);
//   console.log(c % d);
// };
// rechnen_2(zahl_3, zahl_4);

// console.log("-----------------------------------------");

// const rechnen_3 = function (e, f) {
//   console.log(e+f);  
//   console.log(e-f);
//   console.log(e*f);
//   console.log(e/f);
//   console.log(e%f);
// };
// rechnen_3(zahl_1, zahl_5);

// console.log("-----------------------------------------");

// const rechnen_4 = function (s, t){
//     console.log(s+t);  
//     console.log(s-t);
//     console.log(s*t);
//     console.log(s/t);
//     console.log(s%t);
// };
// rechnen_4(zahl_5, zahl_3);

// console.log("-----------------------------------------");

// const rechnen_5 = function (num1, num2) {
//   console.log(num1+num2);  
//   console.log(num1-num2);
//   console.log(num1*num2);
//   console.log(num1/num2);
//   console.log(num1%num2);
// };
// rechnen_5(zahl_4, zahl_2);

// console.log("-----------------------------------------");

// const rechnen_6 = function(x, y){
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// };
// rechnen_6(zahl_3, zahl_1);