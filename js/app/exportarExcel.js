//Escuchamos la acción clic del botón
const btn = document.getElementById('btnDescargar');
btn.addEventListener("click", descargarArchivo);

//Función para generar el archivo y realizar la descarga
export function descargarArchivo(){
    console.log("Descargando tabla HTML a Excel");
    
    var table2excel = new Table2Excel();
    table2excel.export(document.getElementById('tabla'));
}