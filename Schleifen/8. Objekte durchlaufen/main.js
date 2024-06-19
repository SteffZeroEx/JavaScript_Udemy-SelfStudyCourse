'use strict';

let mein_objekt = {
    name: "Mustermann",
    vorname: "Max",
    alter: 26
};

/*
    // So iteriert man NICHT über Objekte

    for (let e in mein_objekt) {
        console.log(mein_objekt[e]);
    }

*/

let paare = Object.entries(mein_objekt);        
console.log(paare);

for (let paar of paare){
    console.log(paar);
    for (let e of paar){
        console.log(e);
    }
}

// entries ist eine Methode dieses "Objects". Wir bekommen ein 2-dimensionales Array zurückgeliefert -> Es ist ein Array, was Arrays enthält die die Eigenschaft "wertpaare" des Objekts enthalten
// Struktur: Array -> Array -> Eigenschaft + Wert


let eigenschaften = Object.keys(mein_objekt);   
    console.log(eigenschaften);

for (let e of eigenschaften){
    console.log(e);
}

// Gibt es nur die Eigenschaften des Objekt (>Schlüssel< = Eigenschaften) -> in dem Fall name, vorname und alter
// Gibt uns also ein eindimensionales Array mit allen "Schlüsseln" (synonym für Eigenschaften des Objekts) zurück
// Struktur: Array -> Eigenschaften (hier name, vorname, alter)

let werte = Object.values(mein_objekt);        // Gibt nur die Werte des Objekts aus
console.log(werte);

for (let w of werte){
    console.log(w);
}


// Wenn man an die Eigenschaften eines Objekts dran will, dann macht man das nicht über eine for-in-Schleife, weil
//  das zu unerwünschten Nebenwirkungen führen kann.
// Gibt es ein eindimensionales Array mit den Wertes des Objekts zurück
// Struktur: Array -> Werte (hier Mustermann, Max, 26)
// Gute Methode, um über Objekte zu iterieren, ohne eine for-in-Schleife oder ungewünschten hack zu verwenden, welcher zu unterwünschten Problemen führen kann

    // Wir benötigen nicht jedesmal eine Variable.
    // Kürzere Schreibweise Beispiel

    for (let w of Object.values(mein_objekt)){
        console.log(w);
    }