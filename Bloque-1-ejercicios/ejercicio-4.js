/* Mostrar todos los números impares que estén entre 2 números introducidos por teclado */

var num1 = parseInt(prompt("Introduce el primer número"));
var num2 = parseInt(prompt("Introduce el segundo número"));

while (num1 < num2) {

    if (num1 % 2 != 0) {
        console.log("El número " + num1 + " es impar");
    }

    num1++;
}