var btnExportar = document.querySelector("#btnDescargar");
var excelInput = document.querySelector('#excel-input');

var input_alumnos = document.querySelector('#input_alumnos');
var input_month = document.querySelector('#input_month');

var btnAplicar = document.querySelector('#btnAplicar');
var btnCalcular = document.querySelector('#btnCalcular');

var botonDer = document.querySelector('.aDeslizadorDER');
var botonIzq = document.querySelector('.aDeslizadorIZQ');
var controlHead_input = document.querySelector('#controlHead_input');

var tBody = document.querySelector("[data-tr-filas]");

function bodyTabla(){
    return document.querySelector("[data-tr-filas]");
}

export {btnExportar, excelInput, input_alumnos, input_month, btnAplicar, btnCalcular, botonDer, botonIzq, controlHead_input, tBody, bodyTabla};