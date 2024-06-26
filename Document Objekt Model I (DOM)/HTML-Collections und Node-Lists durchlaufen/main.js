"use strict";

// HTML-Collections (getElementsByClassName & getElementsByTagName)

// Sowohl HTML-Collections, als auch Node-Lists sind Array ähnliche Objekte
// - funktionieren daher erstmal grundsätzlich wie ein Array
// - zum duchlaufen von Arrays hatten wir die for-Schleife, die for-of-Schleife und die forEach-Methode
// - HTML-Collections verfügen über keine forEach-Methode, werden also mit for-(of)-Schleifen durchlaufen

let html_collection_1 = document.getElementsByClassName("jumbotron");
let html_collection_2 = document.getElementsByTagName("li");
console.log(html_collection_1);
console.log(html_collection_2);

console.log(
  "______________________________ FOR-SCHLEIFE ___________________________"
);

// for-Schleife
for (let i = 0; i < html_collection_1.length; i++) {
  console.log(html_collection_1[i]);
}

for (let j = 0; j < html_collection_2.length; j++) {
  console.log(html_collection_2[j]);
}

console.log(
  "______________________________ FOR-OF-SCHLEIFE ________________________"
);

// for-of-Schleife
for (let e of html_collection_1) {
  console.log(e);
}
for (let f of html_collection_2) {
  console.log(f);
}

// Node-Lists (querySelektor/-All)

// Für Node-Lists haben wir 3 Varianten, wie wir sie durchlaufen können
// - for-Schleife, for-of-Schleife und die forEach-Methode

let node_lists = document.querySelectorAll("p");
console.log(node_lists);

console.log(
  "______________________________ FOR-SCHLEIFE ___________________________"
);

for (let i = 0; i < node_lists.length; i++) {
  console.log(node_lists[i]);
}
console.log(
  "______________________________ FOR-OF-SCHLEIFE ________________________"
);

for (let e of node_lists) {
  console.log(e);
}
console.log(
  "______________________________ FOREACH-METHODE ________________________"
);
node_lists.forEach(function (e) {       // node_lists = e
  console.log(e);
})


// Zusatznotizen: 
// Punkt 1: Die for-Schleife ist kompatibel mit allen gängigen Browsern und damit der gediente Veteran unter diesen Varianten