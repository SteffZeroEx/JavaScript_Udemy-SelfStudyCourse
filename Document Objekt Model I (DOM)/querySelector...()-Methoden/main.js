"use strict";

    // Element mit CCS-Selektor auswählen
let qs_1 = document.querySelector("body > #navigation > ul");
console.log(qs_1);

let qs_2 = document.querySelector(".jumbotron");    // querySelector -> gibt uns ein Element-Objekt zurück, für das ERSTE Element, was auf diesen Selektor passt
console.log(qs_2);

let qs_3 = document.querySelector(".test");
console.log(qs_3);

/*
let qs_4 = document.querySelector("%67§ >");        // Test mit einem "nicht-validen" CSS-Selektor -> DOMException error
console.log(qs_4);
*/

    // Elemente mit CSS-Selektor auswählen          // Gibt und eine Node-list zurück
    
let qsa_1 = document.querySelectorAll("body > #navigation > ul > li > a");
console.log(qsa_1);

let qsa_2 = document.querySelectorAll(".test");
console.log(qsa_2);
// console.log(qsa_2.length == 0);

// let qsa_3 = document.querySelectorAll("%67§");      // erneut error