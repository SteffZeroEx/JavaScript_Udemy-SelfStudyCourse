"use strict";

// Maus-CLICK(click)-Event
let jumbo = document.querySelector(".jumbotron");
jumbo.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.clientX);
  console.log(e.clientY);
  console.log(e.target);
});


// Maus-DOUBLECLICK(dblclick)-Event
jumbo.addEventListener("dblclick", (e) => {
  console.log("DBLCLICK:");
  console.log(e);
});

// MOUSEDOWN(mousedown)-Event
jumbo.addEventListener("mousedown", (e) => {
  console.log("MOUSEDOWN:");
  console.log(e);
});

// MOUSEUP(mouseup)-Event
jumbo.addEventListener("mouseup", (e) => {
  console.log("MOUSEUP:");
  console.log(e);
});

jumbo.addEventListener("mouseover", (e) => {
  console.log("MOUSEOVER:");
  console.log(e);
//   jumbo.style.backgroundColor = "#989978";
});

jumbo.addEventListener("mouseout", (e) => {
  console.log("MOUSEOUT:");
  console.log(e);
//   jumbo.style.backgroundColor = "";
});







// Nur ein Test für mich selber :D
/*
let jumboAll = document.querySelectorAll(".jumbotron");
jumboAll.forEach(function (jumbo) {
    jumbo.addEventListener("click", function (event) {
     event.target.remove();
    });
});
*/