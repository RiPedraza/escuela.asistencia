import { crearTagsSelect } from "./tagSelect.js";

function generateCheckBox(){
    const input = document.createElement('input'); 
    input.setAttribute("type", "checkbox");    
    return input;
}

function generateTd_in_TrCheckbox(content){
    const tr_checkbox = document.querySelector('[data-tr-checkbox]');
    const td_checkbox = document.createElement('td');
    
    td_checkbox.appendChild(content);
    tr_checkbox.appendChild(td_checkbox);
    
    return tr_checkbox;
}


function generateTrFilas(table){
    const tbody = table.querySelector('[data-tr-filas]'); // <----- 01 aquí --------
    const tr = tbody.appendChild(document.createElement('tr')); // <----- 02 aquí --------

    return tr;
}

function generateTd_in_TrFilas(total, excel, index, tr){
        
    for (let i = 0; i < total; i++) { 
        let element = excel.rowTr(index)[i];

        if(i == 0){

            const th = document.createElement('th');
            th.setAttribute("style", "color: white; background: black;");
            tr.appendChild(th).innerHTML = element;

        }else{
            const input_List = crearTagsSelect(); 
            input_List.className = 'input_List';
            input_List.value = element;
    
            const td_rows = document.createElement('td'); 
            td_rows.appendChild(input_List); 
            tr.appendChild(td_rows); 
            
        }
    }

    

}

function generateTitleThAlumnos(){
    const th_dias = document.createElement('th');
    th_dias.setAttribute('background','black');
    th_dias.textContent = 'Alumnos Nº:';

    const tr_dias = document.querySelector('[data-tr-dias]');
    tr_dias.appendChild(th_dias);

    return  tr_dias;
}



export { generateTd_in_TrCheckbox, generateCheckBox, generateTrFilas, generateTd_in_TrFilas, generateTitleThAlumnos };