'use strict';

let vorname = 'Steffen';
let nachname = 'Kieske';
let alter = 32;

let Name = vorname + ' ' + nachname;
console.log(Name);


let begruessung = `Hallo ${Name}!`;
console.log(begruessung);

let zusammenfassung = `${vorname} ${nachname} (${alter} Jahre)`;
console.log(zusammenfassung);

// Template-Strings = Variable Name = `${}`;

let mehrzeiliger_template_string = `Hallo ${Name}!
Du bist ${alter} Jahre alt.
Wie geht es dir?`;
console.log(mehrzeiliger_template_string);

let konkatinierter_template_string = `Hallo ${Name}! ` +
`Du bist ${alter} Jahre alt. ` +
`Wie geht es dir?`;
console.log(konkatinierter_template_string);