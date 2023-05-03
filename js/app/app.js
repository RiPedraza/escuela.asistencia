//Accionar del boton
let bttn = document.querySelector("#aplicarBtn");

bttn.addEventListener("click", ()=>{
    //limpiarAnterior();
    
    //get fecha, NºAlumnos
    let fechaMes = document.querySelector("#input_month");
    let alumnos = document.querySelector("#input_alumnos");
    
    capturarFecha(fechaMes);
    capturarN_Alumnos(alumnos);
});

function capturarN_Alumnos(alumnos){
    let N_alumnos = alumnos.value;
    
    for(var i = 1; i <= N_alumnos; i++){
        const th_alumnos = document.createElement('th');
        th_alumnos.innerHTML = i;
        
        const tr_alumnos = document.createElement('tr');
        tr_alumnos.appendChild(th_alumnos);
        
        const tbody = document.querySelector('[data-tr-filas]');
        tbody.appendChild(tr_alumnos);
    }
}

//Captura la fecha y envía por parámetro el "año-mes".
function capturarFecha(fechaMes){
    let cadena = fechaMes.value;
    let anio = cadena.substring(0, 4);
    let mes = cadena.substring(5, 7);
    
    let diasEnUnMes = new Date(anio, mes, 0).getDate(); //Obtenemos el ultimo dia del mes
    console.log(diasEnUnMes);
    construirFilas(diasEnUnMes);
}


//construimos las filas

function construirFilas(valorMax){
    
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

    }  
}


