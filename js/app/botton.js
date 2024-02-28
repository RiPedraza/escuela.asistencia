import { botonDer, botonIzq, btnCalcular, btnAplicar, controlHead_input, btnExportar } from "./getElement.js";


function f_botonDer(){
    botonDer.style.visibility = "hidden";
    botonIzq.style.visibility = "visible";
    btnCalcular.style.visibility = "hidden";
    btnExportar.style.visibility = "hidden";

    btnAplicar.style.visibility = "visible";
    btnAplicar.style.width = "64px";
    btnAplicar.style.transition = "all 2s linear";
    
    controlHead_input.style.visibility = "visible";
    if(window.innerWidth <= 400){
        controlHead_input.style.width = "124px";
        controlHead_input.style.height = "auto";
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
    botonIzq.style.visibility = "hidden";
    botonDer.style.visibility = "visible";
    btnCalcular.style.visibility = "visible";
    btnExportar.style.visibility = "visible";


    btnAplicar.style.visibility = "hidden";
    btnAplicar.style.width = "0";
    btnAplicar.style.transition = "all 2s linear";

    
    controlHead_input.style.visibility = "hidden";
    controlHead_input.style.width = "0";
    controlHead_input.style.height = "0";
    controlHead_input.style.overflow = "hidden";
    controlHead_input.style.transition = "all 2s linear";

}




// calculate size
function resizeHandler(box) {
    // get window width
    let iw = window.innerWidth;
    if (iw <= 400) {
        box.style.width = "124px";
        box.style.height = "auto";
    };
};

export {f_botonDer, f_botonIzq, resizeHandler};