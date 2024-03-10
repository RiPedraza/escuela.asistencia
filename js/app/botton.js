import { botonDer, botonIzq, btnCalcular, btnAplicar, controlHead_input, controlHead_boton, btnExportar } from "./getElement.js";


function f_botonDer(){
    botonIzq.style.visibility    = "visible";
    botonDer.style.visibility    = "hidden";
    btnCalcular.style.visibility = "hidden";
    btnExportar.style.visibility = "hidden";
        
    btnAplicar.style.visibility  = "visible";
    btnAplicar.style.width = "64px";
    btnAplicar.style.transition = "all 2s linear";
    
    controlHead_input.style.visibility = "visible";
    if(window.innerWidth <= 400){
        controlHead_input.style.width = "180px";
        controlHead_input.style.height = "auto";
        controlHead_boton.style.width = "70px";
    }else{
        controlHead_input.style.width = "700px";
        controlHead_input.style.height = "102px";
    }
    controlHead_input.style.overflow = "hidden";
    controlHead_input.style.transition = "all 2s linear";

    // initial call
    resizeHandler(controlHead_input);

    
}

function f_botonIzq(){
    botonIzq.style.visibility    = "hidden";
    botonDer.style.visibility    = "visible";
    btnCalcular.style.visibility = "visible";
    btnExportar.style.visibility = "visible";

    btnAplicar.style.visibility  = "hidden";
    btnAplicar.style.width = "0";
    btnAplicar.style.transition = "all 2s linear";
    
    controlHead_input.style.visibility = "hidden";
    controlHead_input.style.width = "0";
    controlHead_input.style.height = "0";
    controlHead_input.style.overflow = "hidden";
    controlHead_input.style.transition = "all 2s linear";

    controlHead_boton.style.width = "200px";

}




// calculate size
function resizeHandler(box) {
    // get window width
    let iw = window.innerWidth;
    if (iw <= 400) {
        box.style.width = "180px";
        box.style.height = "auto";
    };
};

export {f_botonDer, f_botonIzq, resizeHandler};