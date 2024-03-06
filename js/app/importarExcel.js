import { excelInput, input_alumnos, input_month } from "./getElement.js";
import { limpiarTodo } from "./clear.js";
import { generateTd_in_TrCheckbox, generateCheckBox, generateTrFilas, generateTd_in_TrFilas, generateTitleThAlumnos } from "./createANDappendChild.js";
import { styleSelect, styleSelectStandar } from "./styleSelect.js";
import { ifImportMonth } from "./calculo.js";
import { f_botonIzq } from "./botton.js";
import { checkboxColumna } from "./checkBoxInteractivo.js";


class ExcelMy{
    constructor(content){
        this.content = content;
    }

    headerCheck(){
        return this.content[0];
    }
    headerDay(){
        return this.content[1];
    }

    rows(){
        return this.content.slice(2,this.content.length);
    }

    rowTr(indice){
        return (this.content.slice(2,this.content.length)[indice]);
    }



}


class ExcelPrinter{

    static print(tableId, excel){
        
        let table = document.getElementById(tableId);
        
        //01 Imprimimos head CheckList(el resultado)
        excel.headerCheck().forEach(title => {
            
            if(title != null){
                if(title != '(Días hábiles)'){
                    
                    let input = generateCheckBox();
    
                    if(title == "VERDADERO" || title == "TRUE" || title == true){
                        input.checked=true;
                        generateTd_in_TrCheckbox(input);
                    }else{
                        input.checked=false;
                        generateTd_in_TrCheckbox(input);
                    }
    
                }else{
    
                    const th_checkbox = document.createElement('th');
                    th_checkbox.textContent = '(Días hábiles)';
                  
                    const tr_checkbox = document.querySelector('[data-tr-checkbox]');
                    tr_checkbox.appendChild(th_checkbox);
                    
    
                };
            }
            
        });

        //02 Imprimimos el head de los Días
        let disparador = false;
        var contarDias = 0;
        excel.headerDay().forEach(title => {
            
            if(title == 'Presentes'){
                disparador = true;
            }
            
            //En esta condicional omitimos imprimir la primer columnna
            if(title != 'Presentes' && title != 'Ausentes'){
                if(title == 'Alumnos Nº:'){
                    generateTitleThAlumnos();
                }else{
                    table.querySelector('[data-tr-dias]').innerHTML += `<td>${title}</td>`;
                    contarDias++;
                }
            }

        });

        
        ifImportMonth(contarDias);
        
        
        // 03 Imprimimos las demas Filas, sin contar con las dos primeras filas que serían los head
        let trLong = excel.rows().length;
        
        if(disparador == true){
            trLong = trLong -2;
        };
        
        for (let index = 0; index < trLong; index++) {
            let tr = generateTrFilas(table);
            let conTotal = excel.rowTr(index).length - 2;
            let sinTotal = excel.rowTr(index).length;

            if(disparador == true){
                generateTd_in_TrFilas(conTotal, excel, index, tr);
            }else{
                generateTd_in_TrFilas(sinTotal, excel, index, tr);
            }
            
        };
        
        //El valor obtenido de trLong se inserta en el Input de Alumnos
        input_alumnos.value = trLong;
        
        styleSelectStandar();
        styleSelect();
        checkboxColumna(trLong);
    }


}

function limpiarInputs(){
    input_alumnos.innerHTML  = '';
    input_month.value = '';
}



export async function importarArchivo(){
    
    limpiarTodo();
    limpiarInputs();
    f_botonIzq();

    /**Obtenemos el nombre del archivo */
    const fileName = excelInput.files[0].name;
    const fileBaseName = fileName.substring(0, fileName.lastIndexOf('.'));
    console.log(fileBaseName);

    
    /**Obtenemos el nombre de la hoja del excel */
    const file = excelInput.files[0];
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
    

    /**Empieza la magia */
    let content = await readXlsxFile(excelInput.files[0]);
    const excel = new ExcelMy(content);
    ExcelPrinter.print('tabla', excel);

}





