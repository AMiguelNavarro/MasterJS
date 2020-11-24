/*
Hacer un programa que
    1.- Pida 6 numeros por pantalla y los meta en un array
    2.- Mostrar los elementos del array en el cuerpo de la página y en la consola
    3.- Ordenarlo y mostrarlo de nuevo
    4.- Invertir el orden y mostrarlo
    5.- Mostrar cuantos elementos tiene
    6.- Buscar un valor introducido por el usuario, que nos diga si está en el array y nos diga su posición si elo encuentra
*/

function mostrarArray(arrayAmostrar) {
    document.write("*************************");
    document.write("<ul>");
    for (let indice in arrayAmostrar) {
        document.write("<li>" + arrayAmostrar[indice] + "</li>");
    }
    document.write("</ul>");
    document.write("*************************");
}

/* 1 */
var numero;
var array = [];

for (var i = 0; i < 6; i++) {
    numero = parseInt(prompt("Introduce un número: "));
    array.push(numero);
}

/* 2 */
document.write("Array normal" + "<br>");
mostrarArray(array);
console.log(array);

/* 3 */
array.sort(function (a, b) { return a - b });
document.write("<br>" + "<br>" + "<br>" + "Array ordenado de menor a mayor" + "<br>");
mostrarArray(array);
console.log(array);

/* 4 */
array.reverse(function (a, b) { return b - a });
document.write("<br>" + "<br>" + "<br>" + "Array ordenado de mayor a menor" + "<br>");
mostrarArray(array);
console.log(array);

/* 5 */
document.write("<br>" + "<br>" + "<br>" + "El array tiene: " + array.length + " elementos");


