import {destruirGrafico} from "./myChart.js";

//Remover Tablas
function limpiarTodo(){
    
    destruirGrafico();

    limpiarCalculo();
    
    const tabla = document.querySelector('#tabla');
    tabla.remove();

    const templateT = template_tabla.content.cloneNode(true);
    const conteiner = document.querySelector('.table-responsive');
    const br = document.querySelector('#br');
    
    conteiner.insertBefore(templateT,br); //No inserta el templateT si no le doy el segundo parámetro como referencia. -Sintaxis: parentNode.insertBefore(newNode, referenceNode);

    
}


//Remover Tabla Cálculo
function limpiarCalculo(){  
    
    if(document.querySelector('.tituloResumen')){
        document.querySelector('.tituloResumen').remove();
    }

    if(document.querySelector('.tituloGrafico')){
        //por si fallar la libreria chart.js y no se crea el grafico, se separa esta condicion del '.tituloResumen' :D
        document.querySelector('.tituloGrafico').remove();
    }
    
    if(document.querySelector('#tabla_calculo')){
        const tablaCalculo = document.querySelector('#tabla_calculo');
        tablaCalculo.remove();
    }

    if(!document.getElementsByClassName('totalColumn_P').length == 0){
        borrarTotal();   
    }

    function borrarTotal(){
        const trHeadColumn = document.querySelector('[data-tr-dias]');
        const collection = trHeadColumn.getElementsByTagName('th');
        const indice = collection.length;
        collection[indice-1].remove();
        collection[indice-2].remove();
    
        //Últimas dos Filas (mediante Class)
        const tr_LastFilas_P = document.querySelector('.tr_LastFilas_P');
        const tr_LastFilas_A = document.querySelector('.tr_LastFilas_A');
        tr_LastFilas_P.remove();
        tr_LastFilas_A.remove();
    
        // Total en column: 
        /* Metodo Array.aply() para presentes */
        var nodeList = document.querySelectorAll('.totalColumn_P');
        const totalColumn_P = Array.apply(null,nodeList); 
        /* Metodo  ES2015 [... ] para ausentes */
        const totalColumn_A = [...document.querySelectorAll('.totalColumn_A')];   
        
        for (const iteratorP of totalColumn_P) {
            iteratorP.remove();
        }
        
        for (const iteratorA of totalColumn_A) {
            iteratorA.remove();
        }
    }

};

export { limpiarTodo, limpiarCalculo };