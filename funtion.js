
const formulario = document.getElementById("formulario-mascota");
const mensaje = document.getElementById("mensaje");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const mascota = document.getElementById("mascota").value;
        const tipo = document.getElementById("tipo").value;
        const edad = document.getElementById("edad").value;
        const correo = document.getElementById("correo").value;
        const cuidados = document.getElementById("cuidados").value;
        const comentarios = document.getElementById("comentarios").value;

        mensaje.textContent = "¡Gracias, " + nombre + "! 🐾 Recibimos los datos de " + mascota + ". Nos alegra que quieras aprender sobre su cuidado.";

        mensaje.style.color = "#587653";
        mensaje.style.fontWeight = "bold";

        console.log("Nombre:", nombre);
        console.log("Nombre de la mascota:", mascota);
        console.log("Tipo de mascota:", tipo);
        console.log("Edad:", edad);
        console.log("Correo electrónico:", correo);
        console.log("Cuidados de interés:", cuidados);
        console.log("Comentarios:", comentarios);

        formulario.reset();

    });

}