export function crearTagsSelect(){
    //TAREA: corregir los códigos reiterados!!!!!!!!!!!!!!!!!!!!!!!!!
    const option1 = document.createElement('option');
    option1.classList.add('optionP');
    const option1Texto = document.createTextNode("P");
    option1.appendChild(option1Texto);

    const option2 = document.createElement('option');
    option2.classList.add('optionA');
    const option2Texto = document.createTextNode("A");
    option2.appendChild(option2Texto);

    const option3 = document.createElement('option');
    option3.classList.add('optionF');
    const option3Texto = document.createTextNode("F");
    option3.appendChild(option3Texto);

    const option4 = document.createElement('option');
    option4.classList.add('optionX');
    const option4Texto = document.createTextNode("X");
    option4.appendChild(option4Texto);
    
    
    const select = document.createElement('select');
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);

    return select;
}

