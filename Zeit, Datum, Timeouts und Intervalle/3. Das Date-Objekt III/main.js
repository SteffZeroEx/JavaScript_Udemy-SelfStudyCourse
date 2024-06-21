'use strict';
    // Umwandlung in sprach- oder regionsbezogenen Datum-String
let d = new Date();
console.log(d);

//Syntax: d.toLocalString([schema [, optionen]]);            // bcp-47-Spachcode = schema

let de_DE = d.toLocaleString("de-DE");
let en_US = d.toLocaleString("en-US");
console.log(de_DE);
console.log(en_US);

/*      // Lange Schreibweise =/= gut
    let optionen = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    };
*/
    // Optionen gleich direkt im Code
let de_DE_2 = d.toLocaleString("de-DE", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
});
console.log(de_DE_2);

    // weitere Methoden

let de_DE_datum = d.toLocaleDateString("de-DE", {           // Gibt NUR das Datum aus, nicht die Zeit. / Selbe Syntax wie toLocalString
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long"
});           
console.log(de_DE_datum);


let de_DE_zeit = d.toLocaleTimeString("de-DE", {           // Gibt NUR die Zeit aus, nicht das Datum. / Selbe Syntax wie toLocalString
    hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
});
console.log(de_DE_zeit);

