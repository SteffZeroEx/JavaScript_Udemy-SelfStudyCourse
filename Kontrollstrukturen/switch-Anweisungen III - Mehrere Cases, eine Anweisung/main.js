"use strict";

let essen = "Nudeln";

switch (essen) {
  case "Nudeln":
    console.log("Das mag ich!");
    break;
  case "Fisch":
    console.log("Das mag ich nicht");
    break;
  case "Pizza":
    console.log("Das mag ich!");
    break;
  case "Hummer":
    console.log("Das mag ich nicht!");
    break;
  case "Steak":
    console.log("Das mag ich!");
    break;
  case "Kaviar":
    console.log("Das mag ich nicht!");
    break;
  default:
    console.log(`Ich kenne "${essen}" nicht! Was ist das?`);
    break;
}
// <- Leider sehr viel redondanter Code (wiederholter Code)
console.log("--------------------------");

// Deswegen:

switch (essen) {
  case "Nudeln":
  case "Pizza":
  case "Steak":
    console.log("Das mag ich!");
    break;
  case "Fisch":
  case "Hummer":
  case "Kaviar":
    console.log("Das mag ich nicht");
    break;
  default:
    console.log(`Ich kenne "${essen}" nicht! Was ist das?`);
    break;
}
