'use strict';

let zahlen = [5, 56, 47, 8, 49, 35, 3, 67, 90];

console.log(zahlen);

/*

    for (let i = 0; i < zahlen.length; i++) {
        console.log([i]);
    
    }

*/

// forEach-Methode


/* 
    // normalerweise nicht die optimalste Schreibweise

    let meine_funktion = function (e) { // e = aktuelles Element im Array
    console.log(e);
    }

    zahlen.forEach(meine_funktion);

*/

// Die forEach Methode durchläuft Element für Element des Arrays und gibt durch die Funktion
// ein Element nach dem anderen aus

// richtige und optimale Schreibweise (ohne Pfeilfunktion)

    zahlen.forEach(function(e){
        console.log(e);
    });

    // Arrays haben eine Methode die "forEach" heißt.
    // Die Methode funktioniert im Prinzip wie eine for-Schleife, die ein Array von vorn nach hinten durchläuft
    // Die forEach Methode selbst durchläuft das Array nur und macht gar nichts
    // Im Prinzip ist es, als würden wir die for-Schleife nehmen und den Code darin entfernen würden. Deshalb braucht die forEach-Methode eine Anweisung, was sie eigentlich
    //  tun soll, während sie über die Elemte drüber läuft. 
    //      - Diese Anweisung erwartet die forEach Methode durch eine Funktion
    // Damit diese Funktion aber auch etwas mit dem aktuellen Element machen kann, ist die forEach Methode so nett, und stellt immer das aktuelle Element zur Verfügung
    //  und dieses Element können wir der Funktion übergeben und damit dann darin arbeiten (siehe Parameter "e").
    // Wenn Arrays meistens von vorn nach hinten laufen, sind forEach-Methoden meistens der "way to go".
    
    // Was die forEach Methode z.B. gegenüber der for-Schleife nicht ermöglicht, sind "Sonderlogiken"
    //  - Mit der forEach-Schleife können wir keine Arrays von hinten nach vorne durchlaufen
    //  - Wir sind auch nicht, ohne zusätzliche Logik in der Lage,nur jedes 2. Element in einem Array anzusprechen