function styleSelect(){
    const tabla = document.querySelector('#tabla').getElementsByTagName('select');

    for (const iterator of tabla){

        iterator.addEventListener('change', (event) => {
            const parent = event.target;
            
            switch (parent.value) {
                case "P":
                    //Nodo Padre: td
                    parent.parentNode.style.background = "transparent";

                    //Nodo target: select
                    parent.style.color = "rgb(177, 175, 175)";
                break;
                case "A":
                    //Nodo Padre: td
                    parent.parentNode.style.background = "transparent";

                    //Nodo target: select
                    parent.style.color = "red";
                break;
                case "F":
                    //Nodo Padre: td
                    parent.parentNode.style.background = "darkgray";

                    //Nodo target: select
                    parent.style.color = "black";
                break;
                case "X":
                    //Nodo Padre: td
                    parent.parentNode.style.background = "#403e3e";

                    //Nodo target: select
                    parent.style.color = "white";
                break;
                default:
                break;
            };

            disparador();

        });
    }
    
};

function styleSelectStandar(){
    const tabla = document.querySelector('#tabla').getElementsByTagName('select');

    for (const parent of tabla){

        switch (parent.value) {
            case "P":
                //Nodo Padre: td
                parent.parentNode.style.background = "transparent"

                //Nodo target: select
                parent.style.color = "rgb(177, 175, 175)";
            break;
            case "A":
                //Nodo Padre: td
                parent.parentNode.style.background = "transparent"

                //Nodo target: select
                parent.style.color = "red";
            break;
            case "F":
                //Nodo Padre: td
                parent.parentNode.style.background = "darkgray";

                //Nodo target: select
                parent.style.color = "black";
            break;
            case "X":
                //Nodo Padre: td
                parent.parentNode.style.background = "#403e3e";

                //Nodo target: select
                parent.style.color = "white";
            break;
            default:
            break;
        }
    }
};



//////////////////////////////////////////////////////////////////////
function disparador(){
    let efecto = ['jello-horizontal', 'jello-vertical', 'shake-vertical','shake-left-right','jello-diagonal','wobble-horizontal-top','bounce-top','bounce-bottom','blur-out-expand','rotate-scale-down'];
    efecto = efecto[Math.floor(Math.random() * efecto.length)];
    
    btnCalcular.style.animation = `${efecto} .9s linear both`;
    setTimeout(()=>{btnCalcular.style.removeProperty("animation")}, 650);
};

/////////////////////////////////////////////////////////////////////////

export { styleSelect, styleSelectStandar };