/* Hacer la tabla de multiplicar de un número introducido por pantalla */

var numero;

numero = parseInt(prompt("Introduce un número"));

for (var i = 1; i <= 10; i++) {
    console.log(i + " x " + numero + " = " + (i * numero));
}