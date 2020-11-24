/* Hacer un programa que muestre todos los números que hay entre dos números introducidos por el usuario */

var num1 = parseInt(prompt("Introduce el primer número: "));
var num2 = parseInt(prompt("Introduce el segundo número: "));

for (var i = num1; i <= num2; i++) {
    document.write(i + "<br>");
}