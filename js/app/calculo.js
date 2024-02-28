import { limpiarCalculo } from "./clear.js";
import { input_alumnos, input_month} from "./getElement.js";
import { bodyTabla } from "./getElement.js";
import { miGrafico } from "./myChart.js";
// import { obtenerDias } from "./importarExcel.js";
var days_Month = 0;

export function calcular(){
    const {maxDias, alumnos} = reCapturar();
    limpiarCalculo();
    
    //Construimos los titulos para los totales:
    construirTitulos_UltimasColumnas();
    construirTitulos_UltimasFilas();

    for (let i = 0; i < alumnos; i++) {        
        filaTD(i);
    }
    
    for (let x = 1; x <= maxDias; x++) { 
        columnasTD(x);
    }
    
    construirTotalGeneral();
    
}


function reCapturar(){

    /**necesitamos verificar si se importo*/


    var alumnos = input_alumnos.value;
    alumnos = parseInt(alumnos);
    var maxDias = capturarFecha(input_month);

    return {
        maxDias: maxDias, 
        alumnos: alumnos
    };
}

//En caso de Importar excel, modificamos la variable global: days_Month, para utilizar en la funcion: capturarFecha(fechaMes)
export function ifImportMonth(days){
    days_Month = days;
}

//Captura la fecha y retorna el "año-mes".
function capturarFecha(fechaMes){
    let cadena = fechaMes.value;

    if(cadena.length == 7){
        let anio = cadena.substring(0, 4);
        let mes = cadena.substring(5, 7);
        
        var diasEnUnMes = new Date(anio, mes, 0).getDate(); //Obtenemos el ultimo dia del mes
    }else{
        var diasEnUnMes = days_Month;
    }
    

    return diasEnUnMes;
};



/////////////////// ULTIMAS (2) COLUMNAS ////////////////////////
function construirTitulos_UltimasColumnas(){
    const tHead_TH = document.querySelector("[data-tr-dias]");
    
    const thPresentes = document.createElement('th');
    thPresentes.innerHTML = "Presentes";
    tHead_TH.appendChild(thPresentes);

    const thAusentes = document.createElement('th');
    thAusentes.innerHTML = "Ausentes";
    tHead_TH.appendChild(thAusentes);
}

function construirUltimasColumnas(p,a,rowIndice){ //rowIndice <-- va para abajo
    const tB = bodyTabla();
    const filaTR = tB.rows[rowIndice];
    const elementTH_Presentes = document.createElement('th'); elementTH_Presentes.classList.add('totalColumn_P');
    elementTH_Presentes.innerHTML = p;
    filaTR.appendChild(elementTH_Presentes);

    const elementTH_Ausentes = document.createElement('th'); elementTH_Ausentes.classList.add('totalColumn_A');
    elementTH_Ausentes.innerHTML = a;
    filaTR.appendChild(elementTH_Ausentes);
    
}

function filaTD(rowIndice){
    var array_P=[], array_A=[];
    let bT = bodyTabla();
    //console.log(bT); //ok

    const resultado = bT.rows[rowIndice].getElementsByTagName("td");
    //console.log(resultado); //ok

    for (const iterator of resultado) {
        const tagsSelect = iterator.getElementsByTagName('select')[0];
        const textOption = tagsSelect.options[tagsSelect.selectedIndex].text;
        //console.log(textOption); //ok

        switch (textOption) {
            case "P":
                array_P.push(textOption);
            break;
            case "A":
                array_A.push(textOption);
            break;
            default:
            break;
        }
    }

    let presentes = array_P.length; //por fila
    let ausentes = array_A.length; //por fila
    
    construirUltimasColumnas(presentes,ausentes,rowIndice);
}


/////////////////// ULTIMAS (2) FILAS ////////////////////////

function construirTitulos_UltimasFilas(){
    const tB = bodyTabla(); //CHEQUEAR: si en el fichero getElement se actualiza..

    const tr_P = document.createElement('tr'); tr_P.classList.add('tr_LastFilas_P');
    const th_P = document.createElement('th');
    th_P.innerHTML = "Presentes";
    tr_P.appendChild(th_P);
    tB.appendChild(tr_P);
    
    const tr_A = document.createElement('tr'); tr_A.classList.add('tr_LastFilas_A');
    const th_A = document.createElement('th');
    th_A.innerHTML = "Ausentes";
    tr_A.appendChild(th_A);
    tB.appendChild(tr_A);

}

function construirUltimasFilas(p,a){ //el parametro "columns" me devuelve de 1 al 28 veces
    const tB = bodyTabla();
    const {alumnos} = reCapturar();
    const row_P = alumnos; //Recorda que alumno no empiesa desde 0.
    const row_A = alumnos + 1;
    
    const totalPrecentes = document.createElement('th');
    totalPrecentes.innerHTML = p;
    const filaTotal_P = tB.rows[row_P];   
    filaTotal_P.appendChild(totalPrecentes);
    
    const totalAusentes = document.createElement('th');
    totalAusentes.innerHTML = a;
    const filaTotal_A = tB.rows[row_A];
    filaTotal_A.appendChild(totalAusentes);
}

function columnasTD(columns){
    const array_P=[], array_A=[], array_Column=[];
    let bT = bodyTabla();
    const {alumnos} = reCapturar();
    
    for (let row = 0; row < alumnos; row++) {        
        const resultado = bT.rows[row].cells[columns];
        const tagsSelect = resultado.getElementsByTagName('select')[0];
        const textOption = tagsSelect.options[tagsSelect.selectedIndex].text;    
        
        array_Column.push(textOption);
    }

    for (const iterator of array_Column) {
        switch (iterator) {
            case "P":
                array_P.push(iterator);
            break;
            case "A":
                array_A.push(iterator);
            break;
            default:
            break;
        }

    }

    let presentes = array_P.length;
    let ausentes = array_A.length; 

    construirUltimasFilas(presentes,ausentes);
}


/////////////////// TOTAL GENERAL ////////////////////////
function construirTabla(p,a){

    const template = template_tablaGnl.content.cloneNode(true); //con true clona todo (y no solo el primer elemento)
    const valor_P = template.querySelector("#valor_P");
    const valor_A = template.querySelector("#valor_A");
    const asistenciaMedia = template.querySelector("#Asistencia_Media");
    const div_Resumen = document.querySelector("[data-DivResumen]");
    const diasHabiles = diaHabiles();
    const suma_PyA = p + a;
    const porcentaje_P = template.querySelector("#porcentaje_P");
    const porcentaje_A = template.querySelector("#porcentaje_A");

    //Valor
    valor_P.innerHTML = p;
    valor_A.innerHTML = a;
    let calculo = p/diasHabiles;
    asistenciaMedia.innerHTML = Number(calculo.toFixed(2));

    //Porcentaje
    porcentaje_P.innerHTML = (Number(((p*100)/suma_PyA ).toFixed(2))) + '%';
    porcentaje_A.innerHTML = (Number(((a*100)/suma_PyA ).toFixed(2))) + '%';

    div_Resumen.appendChild(template);

    /*************  Título  ***************/
    if(document.querySelector('.tituloResumen')){

        document.querySelector('.tituloResumen').remove();
    }

    const titulo = document.createElement('h3');
    titulo.textContent = 'Resumen: Presentismo del Mes';
    titulo.className= "tituloResumen";

    const tabla_calculo = document.querySelector('#tabla_calculo');
    div_Resumen.insertBefore(titulo,tabla_calculo);


    /*************  Gráfico  *************/
    miGrafico(p, a);
}

function diaHabiles(){
    const array_True=[];
    //const array_False=[];
    // const checkBox = document.querySelector("#td_checkBox");
    const checkBox = document.querySelector("[data-tr-checkbox]");
    const td_checkBox = checkBox.getElementsByTagName('td');

    for (const iterator of td_checkBox) {
        const input_cBox = iterator.getElementsByTagName('input')[0];
        const result = input_cBox.checked;

        switch (result) {
            case true:
                array_True.push(result);
            break;
            default:
                //array_False.push(result);
            break;
        }
    }
    
    return array_True.length;
}

function construirTotalGeneral(){
    const array_P=[], array_A=[];
    const bT = bodyTabla();
    const todosLosTD = bT.getElementsByTagName('td');

    for (const iterator of todosLosTD) {
        const tagsSelect = iterator.getElementsByTagName('select')[0];
        const textOption = tagsSelect.options[tagsSelect.selectedIndex].text;
  
        switch (textOption) {
            case "P":
                array_P.push(iterator);
            break;
            case "A":
                array_A.push(iterator);
            break;
            default:
            break;
        }
    }

    let presentesTotal = array_P.length;
    let ausentesTotal = array_A.length; 
        
    construirTabla(presentesTotal, ausentesTotal);    
}

