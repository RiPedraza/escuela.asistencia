import { input_alumnos, input_month } from './getElement.js';
import { limpiarTodo } from './clear.js';
import { generateTitleThAlumnos } from './createANDappendChild.js';
import { crearTagsSelect } from './tagSelect.js';
import { f_botonIzq } from "./botton.js";
import { styleSelect } from "./styleSelect.js";
import { checkboxColumna } from './checkBoxInteractivo.js';

//Retorna el "año-mes" & construye los días y CheckBox
function capturarFecha(fechaMes){
    let cadena = fechaMes.value;
    let anio = cadena.substring(0, 4);
    let mes = cadena.substring(5, 7);
    let diasEnUnMes = new Date(anio, mes, 0).getDate(); //Obtenemos el ultimo dia del mes
    
    function contruirDias(i){
        if(i != 0){
            // Construimos los días
            const tr_dias = document.querySelector('[data-tr-dias]');
            const td_dias = document.createElement('th');
            td_dias.innerHTML = i;
            tr_dias.appendChild(td_dias);
        }
    }

    function construirCheckBox(i){
        // Construimos los checkbox
        if(i != 0){
            const tr_checkbox = document.querySelector('[data-tr-checkbox]');
            const td_checkbox = document.createElement('td');
            const input = document.createElement('input'); input.setAttribute("type", "checkbox"); input.setAttribute("checked", true);
            tr_checkbox.appendChild(td_checkbox);
            td_checkbox.appendChild(input);
        }else{
            const tr_checkbox = document.querySelector('[data-tr-checkbox]');
            const th_checkbox = document.createElement('th');
            th_checkbox.innerText = '(Días hábiles)';
            tr_checkbox.appendChild(th_checkbox);
            

        }
    }

    for(let i = 0; i <= diasEnUnMes; i++){
        contruirDias(i);
        construirCheckBox(i);
    };

    return diasEnUnMes;
};


//Devuelve NºAlumnos.
function capturarN_Alumnos(alumnos){
    let N_alumnos = alumnos.value;
    generateTitleThAlumnos();
    
    //Construimos las filas de alumnos
    for(var i = 1; i <= N_alumnos; i++){
        const th_alumnos = document.createElement('th');
        th_alumnos.innerHTML = i;
        th_alumnos.style.background = "black";
        th_alumnos.style.color = "white";

        const tr_alumnos = document.createElement('tr');
        tr_alumnos.appendChild(th_alumnos);
        
        const tbody = document.querySelector('[data-tr-filas]');
        tbody.appendChild(tr_alumnos);
    };
    
    return N_alumnos;
};


function generarTabla(){
    limpiarTodo();
    
    let maxAlumnos = capturarN_Alumnos(input_alumnos);
    let maxDias = capturarFecha(input_month);
    
    const tbody_Rows = document.querySelector('[data-tr-filas]');
    for(let i = 0; i < maxAlumnos; i++){
        for(let x = 1; x <= maxDias; x++){
            const input_List = crearTagsSelect(); //devuelve un "Select" con sus option
            input_List.style.color = "rgb(177, 175, 175)";
            const td_rows = document.createElement('td');
            td_rows.classList.add('td');
            
            td_rows.appendChild(input_List);
            tbody_Rows.rows[i].appendChild(td_rows);
        }
    }
    
    f_botonIzq();    
    styleSelect();
    checkboxColumna(maxAlumnos);

    
}






export { generarTabla };