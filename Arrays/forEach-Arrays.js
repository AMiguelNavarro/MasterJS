var lenguajes = ["PHP", "Phyton", "Java", "Javascript", "C#"]; /* Ponerlos separados por comas, si se pone con + se concatena y no cuenta como otro dato */

document.write("<ul>");
lenguajes.forEach(function (elemento) {
    document.write("<li>" + elemento + "</li>");
})
document.write("</ul>");


console.log(lenguajes);