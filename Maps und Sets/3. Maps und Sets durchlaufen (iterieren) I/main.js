'use strict';

let meine_map = new Map();

meine_map.set("Test", "Wert der Eigenschaft Test.");
meine_map.set(13, "Wert der Eigenschaft 13.");
meine_map.set([], "Wert zur Eigenschaft [].");
meine_map.set(function(){}, "Wert zur Eigenschaft function(){}.")
meine_map.set({}, "Wert zur Eigenschaft {}.");
console.log(meine_map);

let mein_set = new Set();

mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add(function(){});
mein_set.add({});
console.log(mein_set);

console.log(
  "____________________________________________________________________________________"
);
console.log("                           Iteration mit der forEach-Variante");
console.log(
  "____________________________________________________________________________________"
);
    // Iteration mit der forEach-Variante

meine_map.forEach(function (wert, eigenschaft, map) {   // 3 parameter möglich
    console.log(wert);
    console.log(eigenschaft);
    // console.log(map);            // nur für die übersichtlichkeit auskommentiert
});

mein_set.forEach(function (wert, NULL, set) {           // NULL -> Eigenschaft, welche bei Sets sowieso nicht vorhanden ist und wird dadurch nicht verwendet und als "Lücke" genutzt,
  console.log(wert);                                    //  um sonst noch auf set zugreifen zu koönnen
  // console.log(set);                                  // nur für die übersichtlichkeit auskommentiert
});

console.log(
  "____________________________________________________________________________________"
);
console.log("                           Iteration mit der for-of-Variante");
console.log(
  "____________________________________________________________________________________"
);

    // Iteration mit der for-of-Variante

for (let paar of meine_map) {           // paar -> key-value Päärchen
    console.log(paar);
}
console.log("____________________________________________________________________________________");

// [eigenschaft, wert] -> weiterer kleiner Trick
for (let [eigenschaft, wert] of meine_map){
    console.log(eigenschaft);
    console.log(wert);
}

console.log(
  "____________________________________________________________________________________"
);

for (let wert of mein_set) {
    console.log(wert);
}