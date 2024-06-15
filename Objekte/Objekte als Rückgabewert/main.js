'use strict';

let person = {
    vorname: "Steffen",
    nachname: "Kieske",
    alter: 32
};
/*
const person_verarbeiten_1 = function (p) {
    
    let name =`${p.vorname} ${p.nachname}`;
    let zusammenfassung = `${p.vorname} ${p.nachname} (${p.alter} Jahre)`;
    let begruessung = `Hallo ${p.vorname} ${p.nachname}!`;

    return name, zusammenfassung, begruessung; // funktioniert so leider nicht, da der Browser immer das Letzte zurückgeben will.
};
console.log(person_verarbeiten_1(person));

*/
// 

/*

const person_verarbeiten_2 = function (p) {
  let name = `${p.vorname} ${p.nachname}`;
  let zusammenfassung = `${p.vorname} ${p.nachname} (${p.alter} Jahre)`;
  let begruessung = `Hallo ${p.vorname} ${p.nachname}!`;

  let rueckgabe_objekt = {
    n: name,
    z: zusammenfassung,
    b: begruessung
  };
  return rueckgabe_objekt;
};
console.log(person_verarbeiten_2(person));

// funktioniert wie gewollt, jedoch ist der Code noch relativ "lang" (redundant) und man wünscht in JavaScript immer einen kurzen Code 

*/

// Variante 3: 
/*

const person_verarbeiten_3 = function (p) {
  
  let rueckgabe_objekt = {
    n: `${p.vorname} ${p.nachname}`,
    z: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
    b: `Hallo ${p.vorname} ${p.nachname}!`,
  };
  return rueckgabe_objekt;
};
console.log(person_verarbeiten_3(person));

*/

// Beste Variante!

const person_verarbeiten_4 = function (p) {
  return {
    n: `${p.vorname} ${p.nachname}`,
    z: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
    b: `Hallo ${p.vorname} ${p.nachname}!`,
  };
  
};
console.log(person_verarbeiten_4(person));


// Kurz, knackig, übersichtlich