'use strict';

let meine_map = new Map();

// variablen_name.set(Eigenschaft, Wert);  -> fügt der Map-Variable eine Eigenschaft und einen Wert hinzu. Dabei spiel es keine Roll, was der Wert ist. Kann eine Number, ein String, ein Boolean, ein Objekt etc sein
meine_map.set("Test", "Wert zur Eigenschaft Test");
meine_map.set(13, "Wert zur Eigenschaft 13");
meine_map.set([], "Wert zur Eigenschaft []");
meine_map.set(function () {}, "Wert zur Eigenschaft Funktion");
meine_map.set({}, "Wert zur Eigenschaft {}");
console.log(meine_map);

// Wie komme ich nun an die Elemente dran?


console.log(meine_map.get("Test"));
console.log(meine_map.get(13));
console.log(meine_map.get([]));             // undefined -> siehe der Vergleich zu Objekte -> Objekte sind niemals gleich, es sei denn sie sind das selbe Objekt
console.log(meine_map.get(function(){}));   // undefined        - Objekte, als auch Funktionen, als auch Objekte selber, sind nichts weiter als Objekte
console.log(meine_map.get({}));             // undefined        - Wenn wir also ein leeres Array mit einem leeren Array vergleichen, dann ist es nicht das gleiche. Ebenfalls bei Funktionen und Objekte

// Ist ein bestimmtes Element im Array enthalten? -> has-Methode

console.log(meine_map.has(13));             // hier bekommen wir immer einen boolean zurück
console.log(meine_map.has(15));             // false
// beachte auch hier den Vergleich mit Objekten
console.log(meine_map.has({}));             // -> false
console.log(meine_map.has([]));             // -> false

// Ein bestimmtes Element entfernen -> delete-Methode

    meine_map.delete("Test");       
    console.log(meine_map);

    // meine_map.clear();                   // map komplett leeren
    // console.log(meine_map);

// Größe unserer Map lesen

console.log(meine_map.size);                // Ausgabe: 4