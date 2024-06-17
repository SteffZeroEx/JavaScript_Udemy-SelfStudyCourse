'use strict';

const kind = {
    vorname: "Amelie",
    nachname: "Jana",
    alter: 7,
    geschlecht: "weiblich",
    eingeschult: true
};

kind.vorname = "Marie";
kind.haarfarbe = "blond";
// delete kind.haarfarbe; // nur zur veranschaulichung

// kind = "Eine Person"; -> Funktioniert nicht (Erlaubt "const" uns nicht), da die Variable als Konstante mit dem Objekt definiert ist.
                        // Es ist jedoch möglich, die Eigenschaften des Objekte weiterhin zu ändern (Siehe Zeile 11-13)

console.log(kind);