'use strict';

// localStorage als auch sessionStorage sind eine Eigenschaft des window-Objekt

// Items im localStorage setzen
localStorage.setItem("name", "Steffen Kieske");
console.log(localStorage.getItem("name"));

// Items aus dem localStorage entfernen
localStorage.setItem("alter", "32");
localStorage.removeItem("alter");

// localStorage säubern
/*
    localStorage.clear();
*/
console.log(localStorage);

//_______________________________________________________________//


// Items im sessionsStorage setzen
sessionStorage.setItem("passwort", "16%()&5hbh45)GHF%$");

// Items aus dem sessionStorage entfernen
sessionStorage.setItem("farbe", "blau");
sessionStorage.removeItem("farbe");

// sessionsStorage säubern
/*
    sessionStorage.clear();
*/
console.log(sessionStorage);