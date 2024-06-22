'use strict';

console.log(14.23 + 354.97);
console.log(1047.465 + 354.97);
console.log(99.999 + 354.97);

        // Gleitkommazahlen sind für die Maschine ein Problem (Maschine versteht ja nur binär)
        // Auch sehr sehr große Zahlen sind für Javascript ein Problem

console.log(9332654729891549);  // 9332654729891548 <- Limitierung einer binären Darstellung

// Wie lösen wir das Problem nun mit den Gleitkommazahlen?

console.log(99.93 + 354.97);
console.log(((99.93 * 100 + 354.97 * 100) / 100).toFixed(2));