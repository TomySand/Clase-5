// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


document.querySelector("#mensaje-resultado").style.display = "none";
const SEGUNDOS_EN_UN_MINUTO = 60;
const MINUTOS_EN_UNA_HORA = 60

document.querySelector("#calcular-tiempo").onclick = function() {
    let $horasVideos = document.querySelectorAll(".horas");
    let $minutosVideos = document.querySelectorAll(".minutos");
    let $segundosVideos = document.querySelectorAll(".segundos");
    let horasTotales = 0;
    let minutosTotales = 0;
    let segundosTotales = 0;



    for (let i = 0; i < $horasVideos.length; i++) {
        horasTotales += Number($horasVideos[i].value);
    }
    for (let i = 0; i < $minutosVideos.length; i++) {
        minutosTotales += Number($minutosVideos[i].value);
    }

    for (let i = 0; i < $segundosVideos.length; i++) {
        segundosTotales += Number($segundosVideos[i].value);
    }

    while (segundosTotales >= SEGUNDOS_EN_UN_MINUTO) {
        minutosTotales++;
        segundosTotales -= SEGUNDOS_EN_UN_MINUTO;
    }

    while (minutosTotales >= MINUTOS_EN_UNA_HORA) {
        horasTotales++;
        minutosTotales -= MINUTOS_EN_UNA_HORA;
    }

    document.querySelector("strong").innerText = `${horasTotales} hs  ${minutosTotales} min ${segundosTotales} s`
    document.querySelector("#mensaje-resultado").style.display = "flex";
}