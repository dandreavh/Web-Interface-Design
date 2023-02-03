const ctx = document.getElementById('gananciasMensuales2022');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: '€ euros',
            data: [50392,53994,61034,71934,97349,85304,21054,0,41903,123876,125980,98883],
            borderColor: 'rgb(238,2,19)',
            backgroundColor: 'rgb(238,2,19)',
            tension: 0.4,
            borderWidth: 1,
            pointHoverBackgroundColor: 'rgb(299,2,17)'
    }]},
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
                text: 'Todos los eventos año 2022'
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