"use strict";

    // Element nach ID auswählen                                        // Gibt uns ein Element-Objekt zurück
let el_by_id_1 = document.getElementById("navigation");
console.log(el_by_id_1);

let el_by_id_2 = document.getElementById("test");
console.log(el_by_id_2);

    // Elemente nach Klasse auswählen                                   // Geben eine HTML-Collection zurück
let els_by_class_name_1 = document.getElementsByClassName("jumbotron");
console.log(els_by_class_name_1);

let els_by_class_name_2 = document.getElementsByClassName("test");
console.log(els_by_class_name_2);
// console.log(els_by_class_name_2.length == 0);

    // Elemente nach Element-Namen (bzw. Tag-Namen) auswählen           // Geben eine HTML-Collection zurück
let els_by_tag_name_1 = document.getElementsByTagName("p");
console.log(els_by_tag_name_1);

let els_by_tag_name_2 = document.getElementsByTagName("test");
console.log(els_by_tag_name_2);
// console.log(els_by_class_name_2.length == 0);