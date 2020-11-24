/* Programa que nos diga si un número es par o impar
    1.- Ventana pedir número
    2.- Si no es válido que lo pida de nuevo
    3.- Que muestre si es par o impar
*/

var numero;

while (isNaN(numero)) {
    numero = parseInt(prompt("Introduce un número"));
}

if (numero % 2 == 0) {
    alert("Es par");
} else {
    alert("es impar");
}