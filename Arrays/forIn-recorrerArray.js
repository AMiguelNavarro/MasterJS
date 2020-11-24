var comida = ["carne", "pescado", "jamón"];

comida.push("salmón");

document.write("<ul>");

for (let indice in comida) {
    document.write("<li>" + comida[indice] + "</li>")
}

document.write("</ul");