

export function miGrafico(presentes,ausentes){
    
    
    destruirGrafico();

    var ctx = document.getElementById('myChart'); 
            
    window.grafica = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Precentes', 'Ausentes'],
            datasets: [{
                label: 'Cantidad',
                data: [presentes, ausentes],
                borderWidth: 1
            }]
        }
        // options: {
        //     plugins: {
        //         title: {
        //             display: true,
        //             text: 'Gráfico de Presentismo del Mes',   
        //             padding: {
        //                 top: 5,
        //                 bottom: 10
        //             },
        //             font: {
        //                 size: 14
        //             }
                    
        //         }
        //     }
        // }
    });  
        
};


export function destruirGrafico(){
    //https://parzibyte.me/blog/2018/05/03/reiniciar-limpiar-grafica-chart-js/
    
    if (window.grafica && window.grafica.ctx != null ){     
        window.grafica.clear();
        window.grafica.destroy();
    }

    /*************  Título  ***************/
    if(document.querySelector('.tituloGrafico')){
        document.querySelector('.tituloGrafico').remove();
    }

    const titulo = document.createElement('h3');
    titulo.textContent = 'Gráfico-Donut: Presentismo del Mes';
    titulo.className= "tituloGrafico";
    
    const canvas = document.querySelector('#myChart');
    const conteiner_del_grafico = document.querySelector('.grafico');
    conteiner_del_grafico.insertBefore(titulo,canvas);
   

}


/*
azul
#9AD0F5 relleno
#36A2EB borde

rojo
#FFB0C1 relleno
#FFB0C1 borde
*/