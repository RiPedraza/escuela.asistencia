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
        const fila = tabla.rows[index].getElementsByTagName('td'); /**console.log(filas[0])  me devuelve por columna */
        arrayPorFila(fila,index);

        for (let x = 0; x < fila.length; x++){
            const tagsSelect = fila[x].getElementsByTagName('select')[0];
            const textOption = tagsSelect.options[tagsSelect.selectedIndex].text;
            myArray.push(textOption);
        }
    }
    

    function arrayPorFila(filas,filaN){
        console.log("****inicio*********");

        for (let index = 0; index < filas.length; index++){
            const tagsSelect = filas[index].getElementsByTagName('select')[0];
            const textOption = tagsSelect.options[tagsSelect.selectedIndex].text;
            columnaPresente(textOption,filaN);
        }
        console.log("****Fin*********");
    }

    var array_A=[], array_X=[], array_J=[], array_P=[], indice=[];

    
    function columnaPresente(evaluar,index){
                
        if(index != indice[indice.length-1]){
            indice.push(index);
        }


        switch (evaluar) {
            case "P":
                array_P.push(evaluar);
            break;
            case "A":
                array_A.push(evaluar);
            break;
            case "X":
                array_X.push(evaluar);
            break;
            case "J":
                array_J.push(evaluar);
            break;
            default:
                console.log("ocurrio un error en switch()")
            break;
        }
    }
    

    

    ///////////aca limpio los array's ////////////////////
    myArray=[];
    arrayFilas_x_Filas=[];
}   