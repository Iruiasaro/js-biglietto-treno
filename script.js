var kmEuro = 0.21;
var prezzoFinale = 0;

var km = parseInt(prompt ("Quanti Km dovrà percorrere?"));
document.getElementById("chilometri").innerHTML = km;

var age = parseInt(prompt ("Quanti anni ha?"));
document.getElementById("età").innerHTML = age;

if (age < 18) {
  kmEuro -= kmEuro * 0.2;
  prezzoFinale = km * kmEuro;
  text_msg = "Il costo finale del biglietto è di €" + prezzoFinale.toFixed(2) + ", è stato applicato lo sconto minorenni del 20%!";
} else if (age > 65) {
  kmEuro -= kmEuro * 0.4;
  prezzoFinale = km * kmEuro;
  text_msg = "Il costo finale del biglietto è di €" + prezzoFinale.toFixed(2) + ", è stato applicato lo sconto over 65 del 40%!";
} else {
  prezzoFinale = km * kmEuro;
  text_msg = "Il costo finale del biglietto è di €" + prezzoFinale + "!";
}

document.getElementById("risultato").innerHTML = text_msg;