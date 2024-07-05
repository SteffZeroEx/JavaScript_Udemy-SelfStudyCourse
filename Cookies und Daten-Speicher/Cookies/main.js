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

// Cookies auslesen
// password=%25A%24g%5B%5Dhm%3B%C2%A78; mein_alter=32; vorname=Steffen; nachname=Kieske; 10s_cookie=; zahlen=5678

const get_cookie = function (name) {
  let cookie_array = document.cookie.split(";");
  // ['password=%25A%24g%5B%5Dhm%3B%C2%A78', ' mein_alter=32', ' vorname=Steffen', ' nachname=Kieske', ' 10s_cookie=', ' zahlen=5678']
  let regex = new RegExp(`^\\s?${encodeURIComponent(name)}=`);
  for (let cookie of cookie_array) {
    if (cookie.match(regex)) {
        return decodeURIComponent(cookie.replace(regex, ""));
    }
  }
};
console.log( get_cookie("password"));

// Cookies prüfen
const has_cookie = function (name) {
  let cookie_array = document.cookie.split(";");
  // ['password=%25A%24g%5B%5Dhm%3B%C2%A78', ' mein_alter=32', ' vorname=Steffen', ' nachname=Kieske', ' 10s_cookie=', ' zahlen=5678']
  let regex = new RegExp(`^\\s?${encodeURIComponent(name)}=`);
  for (let cookie of cookie_array) {
    if (cookie.match(regex)) {
      return true;
    }
  }
  return false;  
};
console.log(has_cookie("nachname"));

console.log(document.cookie);