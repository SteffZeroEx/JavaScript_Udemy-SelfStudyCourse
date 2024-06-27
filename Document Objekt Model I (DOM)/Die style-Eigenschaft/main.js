"use strict";

let jumbo = document.querySelector(".jumbotron");

// Das CSSStyleDeclaration-Objekt ausgeben
console.log(jumbo.style);                           // Bezieht sich IMMER nur auf die Inline-Styles eines dokuments
                                                    // Gibt und ein "CSSStyleDeclaration" zurück. Dieses hat Eigenschaften und Werte.

// Inline-Styles abfragen/auslesen
console.log(jumbo.style.backgroundColor);

// Inline-Style verändern
jumbo.style.backgroundColor = "#ff7854";
jumbo.style.width = "85%";
jumbo.style.height = "1000px";
jumbo.style.fontSize = "20pt";                      // Die Eigenschaften erwarten immer einen String
jumbo.style.borderRadius = "10%";
jumbo.style.border
