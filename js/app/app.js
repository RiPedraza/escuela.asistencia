import { btnExportar, excelInput, btnAplicar, btnCalcular, botonDer, botonIzq, controlHead_input } from './getElement.js'; //GetElementoAll
import { descargarArchivo } from './exportarExcel.js'; //Módulo Exportar Excel
import { importarArchivo } from './importarExcel.js'; //Módulo Importar Excel
import { f_botonDer, f_botonIzq, resizeHandler } from './botton.js'; //Efectos de los Botones
import { generarTabla } from './generarTabla.js';
import { calcular } from './calculo.js';


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

// este sirve para obtener el nombre de la hoja excel, falta mover al fichero importarExcel y acoplarlo
const input = document.getElementById('impExcel');
input.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const data = new Uint8Array(event.target.result);
    try {
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      console.log('Nombre de la hoja de cálculo:', sheetName);
    } catch (error) {
      console.error('Error leyendo el archivo de Excel:', error);
    }
  };
  reader.readAsArrayBuffer(file);
});




