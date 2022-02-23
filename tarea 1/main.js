/*TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
 en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"*/

function calcularSalarioMensual(salarioAnual) {
    const MESES_EN_UN_ANIO = 12
    return salarioAnual / MESES_EN_UN_ANIO;
}

document.querySelector('#calcular-salario-mensual').onclick = function() {
    let $salarioAnual = Number((document.querySelector('#salario-anual').value));
    let $salarioMensual = calcularSalarioMensual($salarioAnual).toFixed(2);
    document.querySelector('#salario-mensual').value = $salarioMensual;
}