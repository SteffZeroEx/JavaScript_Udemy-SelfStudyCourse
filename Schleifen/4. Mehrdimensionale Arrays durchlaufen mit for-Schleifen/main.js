"use strict";

let obst = ["Äpfel", "Birnen", "Bananen"];
let gemüse = ["Möhren", "Sellerie", "Kohl"];
let brot = ["Graubrot", "Schwarzbrot", "Vollkornbrot"];

let waren = [obst, gemüse, brot];
// console.log(waren);

for (let i = 0; i < waren.length; i++) {
  console.log(waren[i]);
  for (let j = 0; j < waren[i].length; j++) {
    console.log(waren[i][j]);
  }
}

// Übung

let kia = [
  ["Ceed", "120PS", "weiß"],
  ["ProCeed", "190PS", "rot"],
  ["Stinger", "230PS", "silber"],
];

for (let y = 0; y < kia.length; y++) {
  console.log(kia[y]);
  for (let x = 0; x < kia[y].length; x++) {
    console.log(kia[y][x]);
  }
}

let maedchen = [
  ["Amelie", "Jana", "7 Jahre", "blond", "128cm"],
  ["Lina", "Mutschler", "7 Jahre", "blond", "125cm"],
  ["Lina", "Lühmann", "7 Jahre", "blond", "130cm"],
  ["Lara", "Schmidt", "7 Jahre", "brünett", "130cm"],
];

for (let k = 0; k < maedchen.length; k++) {
  console.log(maedchen[k]);
  for (let m = 0; m < maedchen[k].length; m++) {
    console.log(maedchen[k][m]);
  }
}
