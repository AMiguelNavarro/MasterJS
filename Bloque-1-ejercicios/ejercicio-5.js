/* Mostrar todos los números divisores de un número introducido por pantalla */

/* Un número es divisor de otro número cuando al dividirlo entre sí te da como resto 0 */

var num = parseInt(prompt("Introduce un número"));

for (var i = 1; i <= num; i++) {

    if (num % i == 0) {
        console.log("Divisor: " + i);
    } else {
        console.log(i + " NO ES DIVISOR")
    }


}