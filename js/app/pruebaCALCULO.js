import { capturarFecha } from "./app.js";

const btnCalcular = document.querySelector('#btnCalcular');
const tBody = document.querySelector("[data-tr-filas]");
let alumnos = document.querySelector("#input_alumnos").value;
alumnos = parseInt(alumnos);
let fechaMes = document.querySelector("#input_month");
const maxDias = capturarFecha(fechaMes);

btnCalcular.addEventListener("click",()=>{
    //Sección de llamadas:
    construirTitulos_UltimasColumnas();
    construirTitulos_UltimasFilas();
    for (let i = 0; i < alumnos; i++) {        
        filaTD(i);
    }
    for (let x = 1; x <= maxDias; x++) { 
        columnasTD(x);
    }

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
    const elementTH_Presentes = document.createElement('th');
    elementTH_Presentes.innerHTML = p;
    filaTR.appendChild(elementTH_Presentes);

    const elementTH_Ausentes = document.createElement('th');
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

    const tr_P = document.createElement('tr');
    const th_P = document.createElement('th');
    th_P.innerHTML = "Presentes";
    tr_P.appendChild(th_P);
    tabla_Rows.appendChild(tr_P);
    
    const tr_A = document.createElement('tr');
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
    // console.log("-----------");
    // console.log(presentes,ausentes);

    construirUltimasFilas(presentes,ausentes);
}

