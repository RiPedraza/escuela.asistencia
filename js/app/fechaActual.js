// IIFE (inmediately invoked function expression) expresión de función inmediatamente invocada:
//Esta funcion sirve para obtener la fecha
export const fechaActual = (function (){
    const date = new Date();
    const year = date.getFullYear();
    document.getElementById("footer_date").innerHTML = year;
})();

