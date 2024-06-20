'use strict';

let meine_map = new Map();

meine_map.set("Test", "Wert der Eigenschaft Test.");
meine_map.set(13, "Wert der Eigenschaft 13.");
meine_map.set([], "Wert zur Eigenschaft [].");
meine_map.set(function () {}, "Wert zur Eigenschaft function(){}.");
meine_map.set({}, "Wert zur Eigenschaft {}.");
console.log(meine_map);

let mein_set = new Set();

mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add(function () {});
mein_set.add({});
console.log(mein_set);

console.log("_______________________________________________________________________________________");

/*
    console.log(meine_map.entries());   // key-value in einem Array zusammen
    console.log(meine_map.values());    // Nur die Werte
    console.log(meine_map.keys());      // Nur die Eigenschaften
*/
    // Über Maps iterieren
for (let [eigenschaft, wert] of meine_map) {
    console.log(eigenschaft);
    console.log(wert);
}

for (let eigenschaft of meine_map.keys()){
    console.log(eigenschaft);
}

console.log(
  "_______________________________________________________________________________________"
);
    // Über Sets iterieren
    // keys und entries macht für Sets keinen Sinn
for (let wert of mein_set){
    console.log(wert);
}

for (let werte of mein_set.values()) {
    console.log(werte);
}

