'use strict';

/*

    const addieren = function (array) {
        let summe = 0;
        array.forEach(el => summe += el);
        return summe;
    };

    console.log(addieren([23, 23, 41, 64, 9, 109]));

*/



const addieren = function (...summanden) {
  let summe = 0;
  summanden.forEach((el) => (summe += el));
  return summe;
};
console.log(addieren(23, 23, 41, 64, 9, 109));

const personen_addieren = function (name_1, name_2, ...punkte) {
    let summe = 0;
    punkte.forEach(e => summe += e);
    return `${name_1} und ${name_2} haben zusammen ${summe} Punkte gesammelt!`;
};
console.log(personen_addieren("Jan", "Mona", 56, 89, 13, 67, 98, 100));