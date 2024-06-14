'use strict';

let auto = {
    marke: "Kia"
};

// Eigenschaft ändern
auto.marke = "Hyundai";

// Eigenschaften hinzufügen
auto.modell = "i30";
auto.ps = 150;
auto.farbe = "Rot";

// Eigenschaften entfernen

delete auto.farbe;

console.log(auto);