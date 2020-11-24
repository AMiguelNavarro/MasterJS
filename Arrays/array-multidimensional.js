var comida = ["carne", "pescado", "jamón", "queso"];
var objeto = ["mesa", "silla", "plancha", "botella"];

var combinado = [comida, objeto];

console.log(combinado);

/* Si quiero acceder a jamón, tendría que acceder primero al array combinado y después al de comida */
console.log(combinado[0][2]);