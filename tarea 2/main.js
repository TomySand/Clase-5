//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!



document.querySelector('#ingresar').onclick = function() {
    let primerNombre = document.querySelector("#primer-nombre").value;
    let segundoNombre = document.querySelector("#segundo-nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let edad = document.querySelector("#edad").value;
    document.querySelector("#bienvenida").innerText = `Bienvenido, ${primerNombre} ${segundoNombre} ${apellido}!`
    document.querySelector("#datos-usuario").value = `Tu nombre es ${primerNombre} ${segundoNombre} ${apellido} y tenes ${edad} años.`

}