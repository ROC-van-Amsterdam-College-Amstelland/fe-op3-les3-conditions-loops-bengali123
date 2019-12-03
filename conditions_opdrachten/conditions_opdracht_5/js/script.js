//javascript code

function optellen() {
   var getal1 = parseInt(document.getElementById("getal1").value);
   var getal2 = parseInt(document.getElementById("getal2").value);
   document.getElementById("antwoord").innerHTML=getal1+getal2
}

function aftrekken() {
   var getal1 = parseInt(document.getElementById("getal1").value);
   var getal2 = parseInt(document.getElementById("getal2").value);
   document.getElementById("antwoord").innerHTML=getal1-getal2

}