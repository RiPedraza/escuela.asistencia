//get fecha
let fechaMes = document.querySelector("#input_month");
let bttnMes = document.querySelector("#aplicarMes");

//Captura la fecha y envía por parámetro el "año-mes".
bttnMes.addEventListener("click", (event)=>{
    event.preventDefault();

    let cadena = fechaMes.value;
    let anio = cadena.substring(0, 4);
    let mes = cadena.substring(5, 7);
    
    let diasEnUnMes = new Date(anio, mes, 0).getDate(); //Obtenemos el ultimo dia del mes
    console.log(diasEnUnMes);
    construirFilas(diasEnUnMes);
});


//construimos la fila de dias
function construirFilas(valorMax){

    for(var i = 1; i <= valorMax; i++){
        const tr_dias = document.querySelector('[data-tr-dias]');
        const td_dias = document.createElement('td');
        td_dias.innerHTML = i;
        tr_dias.appendChild(td_dias);

        // <input type="checkbox" name="1" id="1" checked></input>
        const tr_checkbox = document.querySelector('[data-tr-checkbox]');
        
        const td_checkbox = document.createElement('td');
        const input = document.createElement('input'); input.setAttribute("type", "checkbox"); input.setAttribute("checked", true);
        
        tr_checkbox.appendChild(td_checkbox);
        td_checkbox.appendChild(input);

    }

    

}


