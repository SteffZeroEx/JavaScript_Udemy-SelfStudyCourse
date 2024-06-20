'use strict';

    // Arrays ähnlich
// Sets speichern einzelne Werte, wie ein Array (Es gibt NUR Werte)
// Können jeden beliebigen Datentyp haben
// Bei Sets ist es so, das wir jeden Wert nur 1-Mal im Set haben können, d.h. wir können bei Sets Werte tatsächlich nicht doppelt hinzufügen
// "Prüfung auf Eindeutigkeit" findet mit einem strikten Vergleich statt ( === )

let mein_set = new Set();
    // Werte setzen -> add-Methode
mein_set.add("Test");
mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
 mein_set.add([]);
mein_set.add(function() {});
 mein_set.add(function() {});
mein_set.add({});                       // Zwei Objekte sind niemals gleich, es sei denn, sie sind das selbe Objekt -> deswegen
 mein_set.add({});                      //  gibt es in der Konsole als Logik ein 2. Objekt
                                        // Tipp am Rande: Bis auf Numbers, Strings und Booleans ist ALLES in JavaScript ein Objekt (Funktionen, Arrays, Sets, Maps etc)
console.log(mein_set);

    // Fragen ob unser Set ein Wert enthält -> has-Methode

console.log(mein_set.has("Test"));      // true
console.log(mein_set.has("Beispiel"));  // false
console.log(mein_set.has({}));          // false
console.log(mein_set.has(7+6));         // true -> denn auch Ausdrücke funktionieren wunderbar

    // Werte entfernen -> delete und clear - Methode

mein_set.delete("Test");
// mein.set.clear();

console.log(mein_set);

    // Größe ausgeben -> size-Methode

console.log(mein_set.size);