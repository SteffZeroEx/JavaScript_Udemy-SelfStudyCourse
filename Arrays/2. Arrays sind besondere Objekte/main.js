'use strict';

let produkte_array = [
    "Bananen",
    "Äpfel",
    "Schokolade",
    "Brot",
    "Müsli"
];
console.log(produkte_array);
console.log(produkte_array.length);
console.log(produkte_array.length - 1);
console.log(produkte_array[produkte_array.length - 1]);

let produkte_objekt = {
    0: "Bananen",
    1: "Äpfel",
    2: "Schokolade",
    3: "Brot",
    4: "Müsli"
};
console.log(produkte_objekt);



/* Arrays sind besondere Objekte, weil sie immer eine Eigenschaft "length", welche die Anzahl der Arrays ausgibt/Länge der Arrays bestimmt und mit " - 1"
die Position des letzten Elements widergibt.
Stellt uns außerdem noch weitere Methoden zur Verfügung (Siehe Console -> prototype), mit dem wir dann sehr einfach und sehr effzient mit dem Array arbeiten können.
*/