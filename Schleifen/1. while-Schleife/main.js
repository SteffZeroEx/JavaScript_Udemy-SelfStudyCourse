'use strict';

/*
// "Während"-Schleife

while (condition) {
    //...
}
    */

let x = 0;  // <- Zählvariable

while (x < 5) {
    x = x + 1;
    // x += 1;
    // x++;
    console.log(`While: ${x}`)
}

// 0 < 5 -> x + 1 dann console.log -> x = 1 (Ausgabe: While: 1)
// 1 < 5 -> x + 1 dann console.log -> x = 2 (Ausgabe: While: 2)
// 2 < 5 -> x + 1 dann console.log -> x = 3 (Ausgabe: While: 3)
// 3 < 5 -> x + 1 dann console.log -> x = 4 (Ausgabe: While: 4)
// 4 < 5 -> x + 1 dann console.log -> x = 5 (Ausgabe: While: 5)
// 5 < 5 -> false

console.log("-----------------");

// Andere Logik:

let y = 0;

while (y < 5) {
  console.log(`While: ${y}`);
  y++;
}

// 0 < 5 -> Erst console.log(), dann y + 1 -> y = 0 (Ausgabe: "While: 0")
// 1 < 5 -> Erst console.log(), dann y + 1 -> y = 1 (Ausgabe: "While: 1")
// 2 < 5 -> Erst console.log(), dann y + 1 -> y = 2 (Ausgabe: "While: 2")
// 3 < 5 -> Erst console.log(), dann y + 1 -> y = 3 (Ausgabe: "While: 3")
// 4 < 5 -> Erst console.log(), dann y + 1 -> y = 4 (Ausgabe: "While: 4")
// 5 < 5 -> false


// VORSICHT VOR ENDLOSSCHLEIFEN!!!

/*
let z = 0;

while (z >= 0) {
    console.log("TEST");
    z++;
}

ODER

let a = 0;

while (a < 1){
    console.log("Never Ending Story");

}
*/