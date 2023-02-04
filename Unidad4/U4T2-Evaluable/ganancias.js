/**@dandreavh */
/**
 * @type {Element} Gráfica lineal sobre las ganancias mensuales por las inscripciones
 */
const ctx = document.getElementById('gananciasMensuales2022');
new Chart(ctx, {
    type: 'line',
    // Definición de la gráfica
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: '€ euros',
            data: [50392,53994,61034,71934,97349,85304,21054,1560,41903,123876,125980,98883],
            borderColor: 'rgb(238,2,19)',
            backgroundColor: 'rgb(238,2,19)',
            tension: 0.4,
            borderWidth: 1,
            pointHoverBackgroundColor: 'rgb(299,2,17)'
    }]},
    // Opciones de personalización de la gráfica
    options: {
        scales: {
            y: {
            beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Ganancias mensuales 2022'
            },
            subtitle: {
                display: true,
                text: 'Todos los eventos del año 2022'
            },
            legend: {
                display: true,
                labels: {
                    color: 'rgb(128,128,128)'
                }
            }
        }
    }
});