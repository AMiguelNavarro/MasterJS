/* Calculadora que pida 2 numeros por patalla
    - si se mete uno mal que los vuelva a pedir
    - en el body nos muestre en una alerta y por consola el resultado de sumar, resta, multiplicar y dividir esas 2 cifras
*/

var num1;
var num2;

while (isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("Introduce el primer número: "));
    num2 = parseInt(prompt("Introduce el segundo número: "));
}

alert("Mira la consola, tienes los resultados");

console.log("La suma de " + num1 + " + " + num2 + " = " + (num1 + num2));
console.log("La resta de " + num1 + " - " + num2 + " = " + (num1 - num2));
console.log("La multiplicación de " + num1 + " x " + num2 + " = " + (num1 * num2));
console.log("La división de " + num1 + " / " + num2 + " = " + (num1 / num2));


