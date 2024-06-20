'use strict';

let zahlen = [12, 23, 34, 77, 2, 32, 9, 55, 43, 11, 1];

//  let neue_zahlen = [];

    // Kann man machen, gibt aber bessere Möglichkeiten
/*
    for (let i = 0; i < zahlen.length; i++) {
        if (zahlen[i] >= 20) {
            neue_zahlen.push(zahlen[i]);
        }
    
    }
    console.log(neue_zahlen);
*/
/*
    for (let i = 0; i < zahlen.length; i++) {
        if (zahlen[i] < 20) {
            neue_zahlen.push(zahlen[i]);   
        }
    }
    console.log(neue_zahlen);

*/

    // bessere Möglichkeit

let kleinerGleichZwanzig = zahlen.filter(function (e) {  // e = zahlen(Array)
    if (e <= 20) {
        return true;
    } else {
        return false;
    }
})
console.log(kleinerGleichZwanzig);

// Die Methode filter durchläuft alle Elemente des Arrays (hier "zahlen") auf dem sie aufgerufen wurde und 
//  erzeugt ein neues Array mit denjenigen Elementen des ursprünglichen Arrays, 
//  für welche die als Argument an filter übergebene Callbackfunktion den Wert true zurückgibt.