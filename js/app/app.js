var lblStatus = document.querySelector('#laberlStatus');

//Accionar del boton
let bttn = document.querySelector("#aplicarBtn");
bttn.addEventListener("click", ()=>{
    //limpiarAnterior();
    
    //get fecha, NºAlumnos
    let fechaMes = document.querySelector("#input_month");
    let alumnos = document.querySelector("#input_alumnos");
    
    const maxDias = capturarFecha(fechaMes);
    const maxAlumnos = capturarN_Alumnos(alumnos);
    construirFilasDias(maxDias);
    construirFilasContenido(maxAlumnos,maxDias)
    
});


function crearTagsSelect(){
    //TAREA: corregir los códigos reiterados!!!!!!!!!!!!!!!!!!!!!!!!!

    const option1 = document.createElement('option');
    const option1Texto = document.createTextNode("P");
    option1.appendChild(option1Texto);

    const option2 = document.createElement('option');
    const option2Texto = document.createTextNode("A");
    option2.appendChild(option2Texto);

    const option3 = document.createElement('option');
    const option3Texto = document.createTextNode("J");
    option3.appendChild(option3Texto);

    const option4 = document.createElement('option');
    const option4Texto = document.createTextNode("X");
    option4.appendChild(option4Texto);
    
    
    const select = document.createElement('select');
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);

    return select;
}


//Captura la fecha y retorna el "año-mes".
export function capturarFecha(fechaMes){
    let cadena = fechaMes.value;
    let anio = cadena.substring(0, 4);
    let mes = cadena.substring(5, 7);
    
    let diasEnUnMes = new Date(anio, mes, 0).getDate(); //Obtenemos el ultimo dia del mes
    return diasEnUnMes;
};


//generamos las filas TH y devuelve NºAlumnos.
function capturarN_Alumnos(alumnos){
    let N_alumnos = alumnos.value;

    //Construimos las filas de alumnos
    for(var i = 1; i <= N_alumnos; i++){
        const th_alumnos = document.createElement('th');
        th_alumnos.innerHTML = i;
        
        const tr_alumnos = document.createElement('tr');
        tr_alumnos.appendChild(th_alumnos);
        
        const tbody = document.querySelector('[data-tr-filas]');
        tbody.appendChild(tr_alumnos);
    };
    
    return N_alumnos;
};


//construimos las filas de los dias
function construirFilasDias(valorMax){
    
    for(var i = 1; i <= valorMax; i++){
        // Construimos los días
        const tr_dias = document.querySelector('[data-tr-dias]');
        const td_dias = document.createElement('th');
        td_dias.innerHTML = i;
        tr_dias.appendChild(td_dias);
        
        // Construimos los checkbox
        const tr_checkbox = document.querySelector('[data-tr-checkbox]');
        const td_checkbox = document.createElement('td');
        const input = document.createElement('input'); input.setAttribute("type", "checkbox"); input.setAttribute("checked", true);
        
        tr_checkbox.appendChild(td_checkbox);
        td_checkbox.appendChild(input);
        
    };
};

//////////////////construmimos el contenido TD///////////////////
function construirFilasContenido(xAlumnos,MaxColumnas){
    if(xAlumnos >= 1 & MaxColumnas >= 28){ 
        const tbody_Rows = document.querySelector('[data-tr-filas]');
        for(let i = 0; i < xAlumnos; i++){
            for(let x = 1; x <= MaxColumnas; x++){
                const input_List = crearTagsSelect();
                
                const td_rows = document.createElement('td');
                td_rows.appendChild(input_List);
                tbody_Rows.rows[i].appendChild(td_rows);
            }
        }
    }
};


