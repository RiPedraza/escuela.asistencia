

export function miGrafico(presentes,ausentes){
    destruirGrafico();

    Chart.register(ChartDataLabels); //Esta línea de código le dice a Chart.js que use el plugin ChartDataLabels para mostrar las etiquetas de datos en el gráfico.

    var ctx = document.getElementById('myChart'); 
            
    window.grafica = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Presentes', 'Ausentes'],
            datasets: [{
                label: 'Cantidad',
                data: [presentes, ausentes],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value * 100 / sum).toFixed(2)+"%";
                        return percentage;
                    },
                    color: '#fff',
                    font: {
                        weight: 'bold'
                    }
                }
            }
        }
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

