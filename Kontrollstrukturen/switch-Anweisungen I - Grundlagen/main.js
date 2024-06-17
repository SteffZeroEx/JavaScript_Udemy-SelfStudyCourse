'use strict';

switch (ausruck) {
    case wert_1:
        // auszuführender Code 
        break;
    case wert_2:
        // auszuführender Code
        break
    case wert_3:
        // auszuführender Code
        break
    default:
        // auszuführender Code
}

/*
// Bei einem switch wird als erstes der Ausdruck ausgewertet (z.B. eine Variable)
    und anschließend wird der erste case gesucht, der mit dem Ausdruck übereinstimmt.
    Der Wert von dem Ausdruck und der Wert in der "case-klausel" werden also miteinander
    verglichen. Das ist ein strenger Vergleich ( === ).
    Wenn ein case gefunden wurde, der dem Wert des Ausdrucks entspricht, dann wird der
    darin enthaltene Code ausgeführt und am Ende folgt dann der break.
    Natürlich gibt es in einem switch-Statement nicht nur ein case, also 1 Fall den
    wir prüfen. Stattdessen gibt es mehrere Fälle.

    Wenn mehrere cases mit dem Ausdruck übereinstimmen, dann wird der case ausgeführt, 
    welcher zuerst dran ist. (Von oben nach unten natürlich).

    default klausel:    
    Wenn absolut keiner der Werte mit dem Ausdruck übereinstimmt, dann kommt die "default klausel"
    zum Einsatz, welcher einen default-code ausgibt. 
    Dabei ist die default-klausel dennoch optional(!)

    break:
    Die break Answeisung weißt das Programm an, den aktuellen switch zu beenden. Das heißt, sobald
    das Programm bei der Ausführung in einem switch auf ein break stößt, wird der restliche Switch 
    nicht weiter ausgewertet und das Programm wird einfach unterhalb des switches ausgeführt.
    (In den meisten Fällen gewünschtes Verhalten)
    Jedoch ist auch hier die break-Anweisung optional(!).

    */
