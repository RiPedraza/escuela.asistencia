const btnCalcular = document.querySelector('#btnCalcular');
const tBody = document.querySelector("[data-tr-filas]");
let alumnos = document.querySelector("#input_alumnos").value;
alumnos = parseInt(alumnos);

btnCalcular.addEventListener("click",()=>{
    //Sección de llamadas:
    construirTitulos_UltimasColumnas();

    for (let i = 0; i < alumnos; i++) {        
        filaTD(i);
    }

});

/////////////////// ULTIMAS (2) COLUMNAS ////////////////////////
function construirTitulos_UltimasColumnas(){
    const tHead_TH = document.querySelector("[data-tr-dias]");
    
    const thPresentes = document.createElement('th');
    thPresentes.innerHTML = "Presentes";
    tHead_TH.appendChild(thPresentes);

    const thAusentes = document.createElement('th');
    thAusentes.innerHTML = "Ausentes";
    tHead_TH.appendChild(thAusentes);
}

function construirUltimasColumnas(p,a,rowIndice){
    const filaTR = tBody.rows[rowIndice];
    const elementTH_Presentes = document.createElement('th');
    elementTH_Presentes.innerHTML = p;
    filaTR.appendChild(elementTH_Presentes);

    const elementTH_Ausentes = document.createElement('th');
    elementTH_Ausentes.innerHTML = a;
    filaTR.appendChild(elementTH_Ausentes);
    
}

function filaTD(rowIndice){
    var array_P=[], array_A=[];
    const resultado = tBody.rows[rowIndice].getElementsByTagName("td");

    for (const iterator of resultado) {
        const tagsSelect = iterator.getElementsByTagName('select')[0];
        const textOption = tagsSelect.options[tagsSelect.selectedIndex].text;

        switch (textOption) {
            case "P":
                array_P.push(textOption);
            break;
            case "A":
                array_A.push(textOption);
            break;
            default:
            break;
        }
    }

    let presentes = array_P.length; //por fila
    let ausentes = array_A.length; //por fila
    console.log(presentes,ausentes)
    construirUltimasColumnas(presentes,ausentes,rowIndice);
}

/////////////////// ULTIMAS (2) FILAS ////////////////////////
