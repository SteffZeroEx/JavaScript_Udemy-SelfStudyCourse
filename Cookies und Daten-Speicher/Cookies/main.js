"use strict";


// Syntax Orig:
// document.cookie = "cookie_name=[cookie_wert]"

// Cookies setzen

document.cookie = "vorname=Steffen";
document.cookie = "nachname=Kieske";
document.cookie = `${encodeURIComponent("ein key;value-paare")}=${encodeURIComponent("key=value")}`;

// Syntax Haltbarkeit:
// document.cookie = "cookie_name=[cookie_wert][; max-age=zeit_in_s]"  -> Haltbarkeit setzen
document.cookie = "10s_cookie=; max-age=10";
setTimeout(() => console.log(document.cookie), 9000);
setTimeout(() => console.log(document.cookie), 11000);
document.cookie = `mein_alter=32; max-age=${60*60*24*365}`;

const set_cookie = function (name, wert, haltbarkeit) {
  let cookie = `${encodeURIComponent(name)}=`;
  if (wert) {
    cookie += `${encodeURIComponent(wert)}`;
  }
  if (haltbarkeit) {
    cookie += `; max-age=${haltbarkeit}`;
  }
  document.cookie = cookie;
};
set_cookie("password", "%A$g[]hm;§8", 60*60*2);



// Cookies überschreiben

set_cookie("zahlen", "1234", 60*60);
set_cookie("zahlen", "5678", 60*60*1,5);

// Cookies löschen
const delete_cookie = function (name) {
    document.cookie = `${encodeURIComponent(name)}=; max-age=-1`
}
delete_cookie("ein key;value-paare");

console.log(document.cookie);