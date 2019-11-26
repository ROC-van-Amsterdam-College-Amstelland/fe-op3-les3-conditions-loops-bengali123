//javascript codefunction check() {
function check()  {
    var saldo = document.getElementById("saldo").value;

    if (saldo==500) {
        document.getElementById("tekst").innerHTML = "salaris is gestort"
    } else if (saldo > 500){
        document.getElementById("tekst").innerHTML = "salaris en bonus is gestort";
    } else {
        document.getElementById("tekst").innerHTML = "geen salaris"
    }
}
