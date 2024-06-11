'use strict';

let vorname = 'Steffen';
let nachname = 'Kieske';
let alter = 32;

let Name = vorname + ' ' + nachname

console.log(Name);

let begruessung = 'Hallo ' + vorname + ' ' + nachname + '!';

console.log(begruessung);

let zusammenfassung = Name + ' (' + alter + ' Jahre)';
console.log(zusammenfassung);

// zusammenhängen von Strings = konkatinieren

let einzeiliger_string = 'Das ist ein einzeiliger String!';

let meherzeiliger_string = 'Ich will diesen String ' + 
'in der nächsten Zeile fortsetzen. ' +
'\n\tUnd wenn ich will, ' +
'kann es auch noch weiter so gehen';

console.log(meherzeiliger_string);

// \n = Zeilenumbruch/ Neue Zeile
// \t = Zeile wird eingerückt