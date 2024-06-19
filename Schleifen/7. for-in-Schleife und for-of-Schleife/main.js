'use strict';

let mein_array = [
    "Peter",
    "Mia",
    "Mark"
];
// iterables Objekt

let mein_objekt = {
    name: "Max",
    nachname: "Mustermann",
    alter: 26
};
// nicht iterable

console.log(mein_array);
console.log(mein_objekt);
console.log("");





    // for-in-Schleife: Durchläuft die Eigenschaften eines Objekts
// Test mit dem Array
for (let e in mein_array) { // e = eigenschaft
    console.log(e);
}
// Was wir jetzt gesagt haben, ist: Schnapp dir das Objekt (in dem Fall das Array "mein_Array"), iteriere über das Objekt drüber (mit "for")
//  und in jeder Iteration stell mir doch bitte die Eigenschaft, also den Namen der Eigenschaft in der Variable e (e = eigenschaft) zur Verfügung
//  - Eigenschaften in dem Fall = Index des Arrays

// Test mit dem Objekt
for (let e in mein_objekt) {
    console.log(e);
    // console.log(mein_objekt[e]); -> nicht der beste Weg, um an die Werte der Eigenschaften zu kommen
}
// Genauso wie beim Array bekommen wir hier auch die Eigenschaftennamen ausgegeben, also name, nachname, alter.

console.log("");




    // for-of-Schleife: Durchläuft die Werte eines Objekts

// Test mit dem Array
for (let w of mein_array) { // w = Wert
    console.log(w);
}


// Mit der for-of-Schleife können wir NICHT die Werte eines Objekts durchlaufen, sondern NUR eines Arrays
// Gute Alternative zur for-Schleife und auch eine Alternative zur forEach-Methode
// Man kann auch hier, wie bei der forEach-Methode, keine kompliziertere Logik implementieren

/*
    //Test mit dem Objekt

    for (let w of mein_objekt) {
        console.log(w);
    }

    // error: TypeError: mein_objekt is not iterable

*/