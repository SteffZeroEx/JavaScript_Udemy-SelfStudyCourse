"use strict";

let jumbo = document.querySelector(".jumbotron");

let classes = jumbo.className;
console.log(classes);

jumbo.className = "meine-klasse";

jumbo.className += " lorem";        // WICHTIG!!! An das Leerzeichen im String denken!

jumbo.className = jumbo.className.replace("meine", "deine")

jumbo.className = jumbo.className.replace(" lorem", "");


// Mini-Challenge
// .active verändern/versetzen
document.querySelector("#navigation > ul > li:first-of-type > a").className = "";

document.querySelector("#navigation > ul > li:nth-of-type(3) > a").className = "active";