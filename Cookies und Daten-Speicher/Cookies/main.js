'use strict';

// console.log(document.cookie);

// Syntax:
// document.cookie = "cookie_name=[cookie_wert]"

document.cookie = "vorname=Steffen";
document.cookie = "nachname=Kieske";
document.cookie = `${encodeURIComponent("ein key;value-paare")}=${encodeURIComponent("key=value")}`;

const set_cookie = function (name, wert) {
    let cookie = `${encodeURIComponent(name)}=`;
    if (wert) {
        cookie += `${encodeURIComponent(wert)}`;
    }
    document.cookie = cookie;
}
set_cookie("password", "%A$g[]hm;§8");





console.log(document.cookie);
// - _ . ! ~ * ' ( )


