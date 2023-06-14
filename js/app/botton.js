const botonDer = document.querySelector('.aDeslizadorDER');
const botonIzq = document.querySelector('.aDeslizadorIZQ');
const controlHead_input = document.querySelector('#controlHead_input');
const btnCalcular = document.querySelector('#btnCalcular');

//Disparador:

botonDer.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();

    f_botonDer();    
});

botonIzq.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();

    f_botonIzq();
});


//funciones:

function f_botonDer(){
    botonDer.style.visibility = "hidden";
    botonIzq.style.visibility = "visible";
    btnCalcular.style.visibility = "hidden";   
    
    controlHead_input.style.visibility = "visible";
    controlHead_input.style.width = "700px";
    controlHead_input.style.height = "100px";
    controlHead_input.style.overflow = "hidden";
    controlHead_input.style.transition = "all 2s linear"
    
}

export function f_botonIzq(){
    botonDer.style.visibility = "visible";
    botonIzq.style.visibility = "hidden";
    btnCalcular.style.visibility = "visible";
    
    controlHead_input.style.visibility = "hidden";
    controlHead_input.style.width = "0";
    controlHead_input.style.height = "0";
    controlHead_input.style.overflow = "hidden";
    controlHead_input.style.transition = "all 2s linear"
}