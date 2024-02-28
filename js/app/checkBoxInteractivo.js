////////////////Funcionalidades checkbox////////////////////////

export function checkboxColumna(cantidadFilas){
    var thead_tr = document.querySelector("[data-tr-checkbox]");
    var checkBox = thead_tr.getElementsByTagName('input');
    
    for (const iterator of checkBox) { //Este iterador despues de completar el ciclo, los cambios hechos quedan presentes para todos los checkbox//
        iterator.addEventListener('click',(even)=>{
            //preguntar si quiere hacer los cambios (?) 
            //Utilizar el --iterator.checked-- para dejar como estaba:
            status_Ubication_theTarget(even.target,iterator.checked,cantidadFilas);
        });
    }
};

function status_Ubication_theTarget(ubicacion,status,nFilas){
    const ubicacionTD = ubicacion.parentNode;
    var cBoxUbicacion = ubicacionTD.cellIndex;

    var td_ubicacion = document.querySelector("[data-tr-filas]");

    if(!status){
        //Ponemos FERIADO a la columna seleccionada
        for(let i = 0; i < nFilas; i++){
            const columna = td_ubicacion.rows[i].cells[cBoxUbicacion];
            var tagsSelect = columna.getElementsByTagName('select')[0];
            tagsSelect.value = "F";  
            tagsSelect.style.color = "black";
            tagsSelect.parentNode.style.background = "darkgray";
        }
    }else{
        //Ponemos PRESENTES a la columna seleccionada
        for(let i = 0; i < nFilas; i++){
            const columna = td_ubicacion.rows[i].cells[cBoxUbicacion];
            var tagsSelect = columna.getElementsByTagName('select')[0];
            tagsSelect.value = "P";
            tagsSelect.style.color = "gray";
            tagsSelect.parentNode.style.background = "transparent";
        }
    }

};

