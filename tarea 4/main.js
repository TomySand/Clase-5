/*Crear una lista de <ol> y <li> que contengan sólo números.
Convertir esos números a un array y:
1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."*/


function calcularPromedio(array) {
    let sumaTotal = 0;
    for (let i = 0; i < array.length; i++) {
        sumaTotal += array[i];
    }
    return sumaTotal / array.length;
};

function calcularNumeroMasPequenio(array) {
    let contador = 0;
    let numeroMasPequenio = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < numeroMasPequenio) {
            numeroMasPequenio = array[i]
        }
    }
    return numeroMasPequenio;
};

function calcularNumeroMasGrande(array) {
    let contador = 0;
    let numeroMasGrande = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numeroMasGrande) {
            numeroMasGrande = array[i]
        }
    }
    return numeroMasGrande;
};

function calcularNumeroMasRepetido(array) {
    let contadorRepeticiones = 0;
    let RepeticionesDelMasFrecuente = 0;
    let = NumeroMasRepetido = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                contadorRepeticiones++;
            }
            if (contadorRepeticiones > RepeticionesDelMasFrecuente) {
                RepeticionesDelMasFrecuente = contadorRepeticiones;
                NumeroMasRepetido = array[i];
            }
        }
        contadorRepeticiones = 0
    }
    return NumeroMasRepetido
}



let $numeros = document.querySelectorAll(".numero");
let arrayDeNumeros = [];

for (let i = 0; i < $numeros.length; i++) {
    arrayDeNumeros.push(Number($numeros[i].innerText));
};


document.querySelector("#calcular").onclick = function() {
    document.querySelector("#promedio").innerText += calcularPromedio(arrayDeNumeros);
    document.querySelector("#mas-pequenio").innerHTML += calcularNumeroMasPequenio(arrayDeNumeros);
    document.querySelector("#mas-grande").innerText += calcularNumeroMasGrande(arrayDeNumeros);
    document.querySelector("#mas-repetido").innerText += calcularNumeroMasRepetido(arrayDeNumeros);
}