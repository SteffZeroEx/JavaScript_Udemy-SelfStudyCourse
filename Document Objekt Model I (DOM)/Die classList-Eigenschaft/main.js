"use strict";

let jumbo = document.querySelector(".jumbotron");
// console.log(jumbo);

let class_list = jumbo.classList;       // Die Eigenschaft "classList" gibt uns einen DOMTokenList zurück
console.log(class_list);                //  DOMTokenList ist ein Array-ähnliches Objekt

// Hinzufügen
jumbo.classList.add("meine-klasse");                  // Wie bei Maps und Sets ähnlich. Zum hinzufügen einer Klasse
// Entfernen
jumbo.classList.remove("jumbotron");
// Ersetzen
jumbo.classList.replace("meine-klasse", "deine-klasse");
// Vorhanden sein von Klassen abfragen
console.log(jumbo.classList.contains("deine-klasse"));
// Wechsel/"Kippschalter"/An-Aus-Schalter
jumbo.classList.toggle("auch-eine-klasse");
// jumbo.classList.toggle("auch-eine-klasse");