'use strict';
// Einfaches Beispiel zur Veranschaulichung wie switches funktionieren

let ein_name = "David";
// let ein_name = "Peter";

switch (ein_name) {
    case "Martin":
        console.log("Hallo Martin!");
        break;
    case "David":
        console.log("Hallo David!");
         // break; entfernt als Veranschaulichung, was passiert -> "David" als auch "Sebastian" werden ausgeführt
    case "Sebastian":
        console.log("Hallo Sebastian!");
        break;
    default:
        console.log("Hallo! Wie heißt du?"); // wird ausgeführt, wenn ich 'let ein_name...' auf "Peter" ändere
        break;
}