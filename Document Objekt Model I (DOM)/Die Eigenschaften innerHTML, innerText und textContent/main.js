"use strict";

let jumbo = document.querySelector(".jumbotron");
// console.log(jumbo);

// console.log(jumbo.innerHTML);          
// console.log(jumbo.innerText);           
// console.log(jumbo.textContent);

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



 // Texte/Inhalt setzen

 let string_1 = "";
 let string_2 = "<header><h2>Lorem ipsum dolor sit amet</h2></header>";
 let string_3 = "<p> Lorem ipsum dolor sit amet.</p>";
 let string_4 = "Lorem ipsum dolor sit amet.";

//  jumbo.innerHTML = string_1;
// jumbo.innerHTML = string_2;
// jumbo.innerHTML += string_3;                // Text zum vorhandenen Text hinzufügen inklusive eines Paragraphen/Absatzes (p)
// jumbo.innerHTML += string_4;                // Geht auch, wie bei string_3, aber nicht so schön, da nur purer text in der HTML steht. dann lieber einen DOM-String wie bei string_3

//  jumbo.innerText = string_1;
// jumbo.innerText = string_2;                 // mit innerText einen DOM-String einsetzen funktioniert nicht. innerText gibt und ja logischerweise nur die Textinhalte zurück
// jumbo.innerText += string_3;                // Konkatination auch nicht möglich. Siehe innerText string_2


// jumbo.textContent = string_1;
// jumbo.textContent = string_2;               // Das gleiche wie bei innerText
// jumbo.textContent += string_3;              // Siehe innerText
