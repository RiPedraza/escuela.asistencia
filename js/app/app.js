import { btnExportar, excelInput, btnAplicar, btnCalcular, botonDer, botonIzq, controlHead_input } from './getElement.js'; //GetElementoAll
import { descargarArchivo } from './exportarExcel.js'; //Módulo Exportar Excel
import { importarArchivo } from './importarExcel.js'; //Módulo Importar Excel
import { f_botonDer, f_botonIzq, resizeHandler } from './botton.js'; //Efectos de los Botones
import { generarTabla } from './generarTabla.js';
import { calcular } from './calculo.js';
import { fechaActual } from './fechaActual.js'; //IIFE  para obtener el año actual en el footer


//Exportar Excel
btnExportar.addEventListener("click", descargarArchivo);


//Importar Excel
excelInput.addEventListener('change', importarArchivo);


//Efecto del boton Derecha
botonDer.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();

    f_botonDer();    
});

//Efecto del boton Izquierda
botonIzq.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();

    f_botonIzq();
});

// observe window resize
window.addEventListener('resize', resizeHandler(controlHead_input));


btnAplicar.addEventListener('click', generarTabla);

btnCalcular.addEventListener('click', calcular);
