const btnCalcular = document.querySelector('#btnCalcular');

btnCalcular.addEventListener("click",()=>{

    //Sección de llamadas:
    extraerTD();

});

function extraerTD(){
    // var combo = document.getElementById("producto");
    // var selected1 = combo.options[combo.selectedIndex].text;  
    // console.log(selected1);
    
    /**TABLA*/
    /*
    const tabla = document.querySelector('#tabla');
    console.log(tabla);
    */
   
       /**CELDA */
    /*
    const td = tabla.rows[2].cells[1];
    const select = td.getElementsByTagName('select')[0];
    const selected = select.options[select.selectedIndex].text;
    console.log(selected);
    */

    /**FILA*/
    var myArray = [];
    let alumnos = document.querySelector("#input_alumnos");
    alumnos = parseInt(alumnos.value) + 2;
    //var arrayFilas_x_Filas = [];

    for (let index = 2; index < alumnos; index++){ //Recorremos alumnos (Arriba --> Abajo)
        const fila = tabla.rows[index].getElementsByTagName('td');
        //arrayPorFila(fila);
        
        for (let index = 0; index < fila.length; index++) {
            const tagsSelect = fila[index].getElementsByTagName('select')[0];
            const textOption = tagsSelect.options[tagsSelect.selectedIndex].text;
            myArray.push(textOption);
        }

        
    }
    

    // function arrayPorFila(filas){
    //     console.log("****inicio*********");
    //     for (let index = 0; index < filas.length; index++) {
    //         const tagsSelect = filas[index].getElementsByTagName('select')[0];
    //         const textOption = tagsSelect.options[tagsSelect.selectedIndex].text;

    //         console.log(textOption);
    //     }
            
    //     console.log("****Fin*********");


    // }
    

    

    ///////////aca limpio los array's ////////////////////
    myArray=[];
    arrayFilas_x_Filas=[];
}   