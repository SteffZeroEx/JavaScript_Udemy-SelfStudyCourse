"use strict";
// Eigene Minichallenge - Vorbereitung
let li = document.createElement("li");
li.setAttribute("id", "mein_listenelement");

let anker = document.createElement("a");
anker.setAttribute("href", "#");
anker.setAttribute("id", "mein_ankerelement");

let text = document.createTextNode("Element");

anker.appendChild(text);
li.appendChild(anker);

let liste = document.querySelector("#navigation > ul");
// liste.appendChild(li);       // anstatt unser listenelement nur mit appendchild hinzuzufügen, nutzen wir alternativ:

        // insertAdjacentElement()-Methode

// liste.insertAdjacentElement("beforebegin", li);      // funktioniert theoretisch, aber ist als "listenelement" unschön
// liste.insertAdjacentElement("afterbegin", li);          // Steht an erster Stelle nach dem Elternelement "ul"
// liste.insertAdjacentElement("beforeend", li);
// liste.insertAdjacentElement("afterend", li);             

        // insertAdjacentHTML();- Methode
let dom_string = "<li id='mein-listenelement'><a id='mein-ankerelement' href='#'>Element</a></li>";

// liste.insertAdjacentHTML("beforebegin", dom_string);
// liste.insertAdjacentHTML("afterbegin", dom_string);
// liste.insertAdjacentHTML("beforeend", dom_string);
// liste.insertAdjacentHTML("afterend", dom_string);

        // insertAdjacentText();-Methode
let inAdj_text = "Lorem ipsum dolor sit amet.";

// liste.insertAdjacentText("beforebegin", inAdj_text);
// liste.insertAdjacentText("afterbegin", inAdj_text);
// liste.insertAdjacentText("beforeend", inAdj_text);
liste.insertAdjacentText("afterend", inAdj_text);