"use strict";

let ul = document.querySelector("#navigation > ul");
// console.log(nav);

// Kindelemente

let child_nodes = ul.childNodes;                            // alle Kindelemente INKLUSIVE Text und Kommentarknoten
console.log(child_nodes);                                    // NodeList -> text, comment, text, ul, text (dabei kann der Text auch ein Zeilenumbruch sein, siehe NodeValue in Prototype) (bei querySelector("#navigation") !!!)

let children = ul.children;                                 // alle Kindelemente EXKLUSIV Text- und Kommentarknoten
console.log(children);                          

let first_child = ul.firstChild;                            // erstes Kindelement INKLUSIVE Text- und Kommentarknoten
console.log(first_child);                                    // -> textknoten hier ein Zeilenumbruch

let last_child = ul.lastChild;                              // letztes Kindelement INKLUSIVE Text- und Kommentarknoten
console.log(last_child);            

let first_element_child = ul.firstElementChild;             // erstes Kindelemente EXKLUSIV Text- und Kommentarknoten
console.log(first_element_child);           

let last_element_child = ul.lastElementChild;               // letztes Kindelemente EXKLUSIV Text- und Kommentarknoten
console.log(last_element_child);            

// Geschwisterelemente          

let next_sibling = ul.nextSibling;                          // nächstes Geschwisterelement INKLUSIVE Text- und Kommentarknoten
console.log(next_sibling);          

let previous_sibling = ul.previousSibling;                  // vorangehende Geschwisterelement INKLUSIVE Text- und Kommentarknoten
console.log(previous_sibling);          

let next_element_sibling = ul.nextElementSibling;           // nächstes Geschwisterelement EXKLUSIVE Text- und Kommentarknoten
console.log(next_element_sibling);                              // - "null", da logischerweise, danach kein Geschwisterelement existiert

let previous_element_sibling = ul.previousElementSibling;   // vorangehende Geschwisterelement EXKLUSIVE Text- und Kommentarknoten
console.log(previous_element_sibling);                          // - "null", da logischerweise, davor kein Geschwisterelement existiert


// chaining (Verkettung) bzw im Falle von Methoden: mehod-chaining

let chaining_next_element_sibling = ul.firstElementChild.nextElementSibling;
console.log(chaining_next_element_sibling);
let chaining_previous_element_sibling = ul.lastElementChild.previousElementSibling;
console.log(chaining_previous_element_sibling);


// Elternelement

let parent_element = ul.parentElement;                      // Elternelement eines Elements
console.log(parent_element);

// Allgemeines navigieren

let anker = ul.querySelectorAll("li > a");
console.log(anker);
