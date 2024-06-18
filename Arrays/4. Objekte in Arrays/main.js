"use strict";
/*

let auto_1 = {
    marke: "Hyundai",
    modell: "i30 N",
    farbe: "rot"
};

let auto_2 = {
    marke: "Ford",
    modell: "Fiesta ST",
    farbe: "schwarz",
};

let auto_3 = {
    marke: "VW",
    modell: "Golf GTI",
    farbe: "blau"
};

let autos = [
    auto_1,
    auto_2,
    auto_3
];
console.log(autos);

// Ein wenig umständlich und weiterhin zu redondant
*/

let autos = [
  {
    marke: "Hyundai",
    modell: "i30 N",
    farbe: "rot",
  },
  {
    marke: "Ford",
    modell: "Fiesta ST",
    farbe: "schwarz",
  },
  {
    marke: "VW",
    modell: "Golf GTI",
    farbe: "blau",
  },
];
console.log(autos);

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

console.log(autos[0].marke);
console.log(autos[0].modell);
console.log(autos[0].farbe);

console.log(autos[1].marke);
console.log(autos[1].modell);
console.log(autos[1].farbe);

console.log(autos[2].marke);
console.log(autos[2].modell);
console.log(autos[2].farbe);

/*
let waren = [
  ["Äpfel", "Birnen", "Bananen"],
  ["Möhren", "Sellerie", "Kohl"],
  ["Graubrot", "Schwarzbrot", "Vollkornbrot"],
];
*/

let waren = {
  obst: ["Äpfel", "Birnen", "Bananen"],
  gemüse: ["Möhren", "Sellerie", "Kohl"],
  brot: ["Graubrot", "Schwarzbrot", "Vollkornbrot"],
};

console.log(waren.obst);
console.log(waren.gemüse);
console.log(waren.brot);

console.log(waren.obst[0]);
console.log(waren.obst[1]);
console.log(waren.obst[2]);

console.log(waren.gemüse[0]);
console.log(waren.gemüse[1]);
console.log(waren.gemüse[2]);

console.log(waren.brot[0]);
console.log(waren.brot[1]);
console.log(waren.brot[2]);