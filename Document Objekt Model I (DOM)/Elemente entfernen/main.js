"use strict";

let nav = document.querySelector("#navigation");
console.log(nav);
nav.remove();

let jumbo = document.querySelectorAll(".jumbotron");
// console.log(jumbo);
// jumbo.remove();          // funktioniert nicht, da für die "Nodelist", welche entstanden ist, nicht die Methode "remove()" zur Verfügung steht.
                            //  - das heißt, wir müssen über die Nodelist drüber iterieren und jedes einzelne Element ansprechen

jumbo.forEach(function (e) {
    e.remove();
});