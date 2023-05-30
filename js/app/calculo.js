import { capturarFecha,limpiarCalculo } from "./app.js";

const btnCalcular = document.querySelector('#btnCalcular');

var tBody = document.querySelector("[data-tr-filas]");
var alumnos = document.querySelector("#input_alumnos").value;
alumnos = parseInt(alumnos);
var fechaMes = document.querySelector("#input_month");
var maxDias = capturarFecha(fechaMes);


btnCalcular.addEventListener("click",()=>{

    tBody = document.querySelector("[data-tr-filas]");
    alumnos = document.querySelector("#input_alumnos").value;
    alumnos = parseInt(alumnos);
    fechaMes = document.querySelector("#input_month");
    maxDias = capturarFecha(fechaMes);

    limpiarCalculo();

    //Sección de llamadas:
    construirTitulos_UltimasColumnas();
    construirTitulos_UltimasFilas();
    for (let i = 0; i < alumnos; i++) {        
        filaTD(i);
    }
    
    for (let x = 1; x <= maxDias; x++) { 
        columnasTD(x);
    }
    
    construirTotalGeneral();
});


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
    const filaTR = tBody.rows[rowIndice];
    const elementTH_Presentes = document.createElement('th'); elementTH_Presentes.classList.add('totalColumn_P');
    elementTH_Presentes.innerHTML = p;
    filaTR.appendChild(elementTH_Presentes);

    const elementTH_Ausentes = document.createElement('th'); elementTH_Ausentes.classList.add('totalColumn_A');
    elementTH_Ausentes.innerHTML = a;
    filaTR.appendChild(elementTH_Ausentes);
    
}

function filaTD(rowIndice){
    var array_P=[], array_A=[];
    const resultado = tBody.rows[rowIndice].getElementsByTagName("td");

    for (const iterator of resultado) {
        const tagsSelect = iterator.getElementsByTagName('select')[0];
        const textOption = tagsSelect.options[tagsSelect.selectedIndex].text;

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
    const tabla_Rows = document.querySelector("[data-tr-filas]");

    const tr_P = document.createElement('tr'); tr_P.classList.add('tr_LastFilas_P');
    const th_P = document.createElement('th');
    th_P.innerHTML = "Presentes";
    tr_P.appendChild(th_P);
    tabla_Rows.appendChild(tr_P);
    
    const tr_A = document.createElement('tr'); tr_A.classList.add('tr_LastFilas_A');
    const th_A = document.createElement('th');
    th_A.innerHTML = "Ausentes";
    tr_A.appendChild(th_A);
    tabla_Rows.appendChild(tr_A);

}

function construirUltimasFilas(p,a){ //el parametro "columns" me devuelve de 1 al 28 veces
    const tablaBody = document.querySelector("[data-tr-filas]");
    const row_P = alumnos; //Recorda que alumno no empiesa desde 0.
    const row_A = alumnos + 1;
    
    const totalPrecentes = document.createElement('th');
    totalPrecentes.innerHTML = p;
    const filaTotal_P = tablaBody.rows[row_P];
    filaTotal_P.appendChild(totalPrecentes);
    
    const totalAusentes = document.createElement('th');
    totalAusentes.innerHTML = a;
    const filaTotal_A = tablaBody.rows[row_A];
    filaTotal_A.appendChild(totalAusentes);
}

function columnasTD(columns){
    const array_P=[], array_A=[], array_Column=[];
    
    for (let row = 0; row < alumnos; row++) {        
        const resultado = tBody.rows[row].cells[columns];
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
    porcentaje_P.innerHTML = Number(((p*100)/suma_PyA).toFixed(2));
    porcentaje_A.innerHTML = Number(((a*100)/suma_PyA).toFixed(2));

    div_Resumen.appendChild(template);

    // Si la porción fraccionaría del número es 0.5 o mayor, el argumento es redondeado al siguiente número entero superior. Si la porción de la fracción del número es menor a 0.5, el argumento es redondeado al siguiente número entero inferior.
}

function diaHabiles(){
    const array_True=[];
    //const array_False=[];
    const checkBox = document.querySelector("#td_checkBox");
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
    const todosLosTD = tBody.getElementsByTagName('td');

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

    /*************  style  *************/
    // const bordeTabla = document.querySelector('#tabla');
    // bordeTabla.style.border = '1px solid black';
}

