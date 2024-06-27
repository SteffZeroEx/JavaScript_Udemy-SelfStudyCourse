"use strict";

console.log(window);

// Eigenschaften des window-Objekts

innerWidth;
// window.innerWidth;
console.log(innerWidth);

innerHeight;
// window.innerHeight;
console.log(innerHeight);

outerWidth;
// window.outerWidth;
console.log(outerWidth);

outerHeight;
// window.outerHeight;
console.log(outerHeight);

scrollX;
// window.scrollX;
console.log(scrollX);

scrollY;
// window.scrollY;
console.log(scrollY);

// für später im Kurs...

location;
window.location;
console.log(location);

localStorage;
// window.localStorage;
console.log(localStorage);

sessionStorage;
// window.sessionStorage;
console.log(sessionStorage);


        // Methoden des window-Objekts

// alert("ACHTUNG!");
// confirm("Bist du dir sicher?");                 // true/false
// prompt("Wie geht es dir?");
// print();                                        // Öffnet den Druckdialog
// open("https://www.google.de");
// close();
// getComputedStyle();

let nav = document.querySelector("#navigation");
let nav_styles = getComputedStyle(nav);
console.log(nav_styles);