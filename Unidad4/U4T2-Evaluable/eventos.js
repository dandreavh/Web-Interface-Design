/**@dandreavh */
/**
 * @type {Element} Gráfica de tipo rosco para los inscritos por categoría
 */
const ctx = document.getElementById('inscripcionesCategorias');
new Chart(ctx, {
    type: 'doughnut',
    // Definición de la gráfica
    data: {
        labels: ['5K', '10K', '21K', '42K'],
        datasets: [{
            data: [1767, 2943, 2103, 1637],
            backgroundColor: [
                'rgb(209, 0, 250)',
                'rgb(9, 57, 175)',
                'rgb(250, 163, 0)',
                'rgb(10, 196, 151)'
            ],
            hoverOffset: 4
    }]},
    // Opciones de personalización de la gráfica
    options: {
        scales: {
            y: {
            beginAtZero: true,
            display:false
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Inscripciones por categorías'
            },
            subtitle: {
                display: true,
                text: 'Nº de inscripciones en cada categoría'
            },
            legend: {
                display: true,
                labels: {
                    color: 'rgb(121,121,121)'
                }
            }
        }
    }
});

/**
 * @type {Element} Gráfica de barras horizontales para el ranking de eventos
 */
const ctxBarras = document.getElementById('rankingEventos');
new Chart(ctxBarras, {
    type: 'bar',
    // Opciones de personalización de la gráfica
    data: {
        labels: ['Sevilla', 'Barcelona', 'Madrid', 
        'Valencia', 'Málaga', 'Bilbao', 
        'Zaragoza', 'Cádiz', 'Córdoba', 'Jaén'],
        datasets: [{
            data: [10300, 9250, 8243, 7232, 6219, 5200, 4198, 3180, 2174, 1134],
            backgroundColor: [
                'rgb(4, 32, 100)',
            ],
            hoverOffset: 10
    }]},
    // Opciones de personalización de la gráfica
    options: {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Ranking de los eventos con más inscritos'
            },
            subtitle: {
                display: true,
                text: 'Año 2022',
                padding:{
                    bottom: 10,
                }
            },
            legend: {
                display: false,
            },
        }
    }
});