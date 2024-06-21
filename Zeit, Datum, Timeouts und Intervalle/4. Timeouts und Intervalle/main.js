'use strict';

    // Timeouts = Zeitverzögerungen, bei dem der Code verzögert oder nach einer gewissen Zeit ausgeführt wird
    // Intervalle = Sind da, um Code immer und immer wieder auszuführen, also in einem bestimmten Intervall


// Timeouts-Syntax I: setTimeout(callback-funktion, zeitspanne[, parameter1, parameter2, ..., parameterN]) / <- bessere Syntax

    console.log("Los");
    setTimeout(function(){
        console.log("Fertig");
    }, 2000);


// Timeout-Syntax II: setTimeout(code-string, zeitspanne)  -> absolut nicht wirklich schön


    console.log("Los");
    console.log(setTimeout("console.log('Fertig');", 2000));

    //clearTimeout(3);        // entfernen des Timeouts -> console.log(); des Timeouts, um die ID zu bekommen


// Interval-Syntax I:  setInterval(callback-funktion, zeitspanne[, parameter1, parameter2, ..., parameterN])

    setInterval(function () {
        console.log("Eine Sekunde ist um!");
    }, 1000);

// Interval-Syntax II: setInterval(code-string, zeitspanne)

console.log(setInterval("console.log('Eine Sekunde ist um!');", 1000));

 clearInterval(5);
 clearInterval(6);