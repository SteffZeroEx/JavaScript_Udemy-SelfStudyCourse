'use strict';

let s = " Lorem ipsum dolor sit amet ipsum.     ";

    // Bereits gelernte Möglichkeiten aus anderen Bereichen, wie Arrays

s.length;
console.log(s.length);
console.log(s.indexOf("ipsum", 20));        // Ohne Startindex: 7       / Mit Startindex: 28            // Werden sie nicht gefunden, geben sie "-1" zurück.
console.log(s.lastIndexOf("ipsum", 10));    // Ohne Startindex: 28      / Mit Startindex 10: 7          // Werden sie nicht gefunden, geben sie "-1" zurück.
console.log(s.includes("sit", 28));         // Ohne Startindex: true    / Mit Startindex 28: false      // Werden sie nicht gefunden, geben sie "false" zurück.
                                            // Alle 3 Varianten (includes, lastIndexOf, indexOf) sind "Case sensitiv". Das heißt, Groß- und Kleinschreibung spielt eine Rolle

    // Neue Methoden

console.log(s.toLowerCase());               // String in Kleinbuchstaben
console.log(s.toUpperCase());               // String in Großbuchstaben

console.log(s.trim());                      // Überflüssige Leerzeichen entfernen. In der Praxis sehr sehr häufig z.B. beim Benutzernamen oder ähnliches. Ganz ganz wichtig!

console.log(s.repeat(10));                  // Wiederholt den String anhand der Anzahl des Indizes

console.log(s.search("ipsum"));             // Ähnlich der indexOf-Methode, jedoch kann die search-Methode nichts mit einem Startindex anfangen
console.log(s.replace("ipsum", "opsum"));   // 1. Parameter: Das gewählte Wort/der gewählte String  / 2. Parameter: Der/Das ändernde Begriff/String/Wort  -> nur das 1. Wort des Strings wurde geändert
                                            //      - Hat etwas mit Thema "reguläre Ausdrücken" zu tun
console.log("______________________________________________________________________________");

    // Was sind reguläre Ausdrücke?

// Reguläre Ausdrücke sind nichts Javascript spezifisches.
// Fast alle Programmiersprachen haben reuläre Ausdrücke implementiert.


let regex = /i\w{4}/g;                          // g = Global. Die ein modifier / "flag", welche bestimmt, wie sie das RegEx verhalten soll. -> Hier also die Änderung = Global

console.log(s.search(regex));                   
console.log(s.replace(regex, "opsum"));         // Änderungen für "beide ipsum" in dem String funktioniert nur, mit der Modifikation "g" beim regex. Ansonsten wird nachwievor immer noch nur 1 Wort geändert.
console.log(s.match(regex));                    // Gibt uns ein Array, mit 2 Einträgen "ipsum", anhand der RegEx-Anforderung

