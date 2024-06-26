"use strict";

let jumbo = document.querySelector(".jumbotron");
// console.log(jumbo);

console.log(jumbo.innerHTML);          
console.log(jumbo.innerText);           // 
console.log(jumbo.textContent);

// innerHTML:
 // Die Eigenschaft innerHTML gibt uns die HTML-Struktur in einem Element inklusive aller Texte wieder, genauso wie sie im Quelltext stehen würde.
 // Die innerHTML gibt einen String, oder sogenannten "DOM-String" zurück, der die HTML Struktur des Elements darstellt.

// innerText:
 // Gibt uns den gesamten Textinhalt eines Elements und all seiner Kindelemente und nachfahrenden Elemente zurück und achtet dabei aber darauf, wie
 //  die Elemente im Frontend dargestellt werden würden.
 // Die Eigenschaft zeigt uns die gerenderten Textinhalte

// textContent:
 // Gibt uns den Text eines HTML-Elements und seiner Kindelemente und nachfahrenden Elemente zurück, allerdings ohne Rücksicht auf
 //  den gerenderten Text im Frontend, sondern es wird viel mehr des gesamte Text aus dem HTML-Elementen genommen und dargestellt, ohne
 //  die umgebenen HTML-Elemente