'use strict';

    // Zufallszahlen
console.log(Math.random());         // Gibt uns eine Zufallszahl zwischen 0 & 1 zurück, wobei 0 inklusive ist und 1 exklusive
                                    //  - Bedeutet, es ist möglich die Zahl 0 zu bekommen, aber niemals möglich die Zahl 1 zu bekommen

console.log(Math.floor(Math.random() * (12+1))
);    


    // Berechnen einer Zahl zwischen Minimum und Maximum
let minimum = 40;
let maximum = 60;

console.log(Math.floor(Math.random() * (maximum - minimum + 1) + minimum));   

// Als Funktion
const zufallszahl = function (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(zufallszahl(minimum, maximum));