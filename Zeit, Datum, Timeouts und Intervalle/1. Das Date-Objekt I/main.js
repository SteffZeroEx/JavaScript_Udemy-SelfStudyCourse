'use strict';
    // Datumserstellung
    
let d = new Date();  // Datumsobjekt
console.log(d);

    // Randinfo: Unix Zeitrechnung = Die Unix Zeit in Millisekunden seit dem 01.01.1970

// Aktuelle Unix-Zeit 
console.log(Date.now());  // Dieses "Date" hat nichts mit dem Date dort oben zu tun. Stattdessen handelt es sich um ein allgemein zu Verfügung stehendes Datumsobjekt
                            // Könnte man super als Zeitstempel verwenden

    // Bestimmtes Datum erstellen
// 1. Möglichkeit mit der aktuellen Unix-Zeit

let e = new Date(1699895922490);
console.log(e);

// 2. Möglichkeit mit einem Datums-String

let f = new Date("Jul 01 2019 04:02:02 GMT+0200");  // Es muss sich um einen validen Datumsstring handeln
console.log(f);

// 3. Möglichkeit: new Date(jahr, monats-index[, tag[, stunde, [,minute, [, sekunde [, millisekunde]]]]])    // Daten in der [] sind optional

let g = new Date (2012, 5, 23, 15, 15, 15, 155)  // index 5 ([5]) = Juni  -> Indizes (Plural von Index) sind somit 0-11 für die Monate Januar-Dezember
console.log(g);