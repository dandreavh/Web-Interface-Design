// GRÁFICO ROSCO
const ctx = document.getElementById('inscripcionesCategorias');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['5K', '10K', '21K', '42K'],
        datasets: [{
            data: [300, 50, 100, 120],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(27, 207, 19)'
            ],
            hoverOffset: 4
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

// GRÁFICO BARRAS HORIZONTALES
const ctxBarras = document.getElementById('rankingEventos');
new Chart(ctxBarras, {
    type: 'bar',
    data: {
        labels: ['5K', '10K', '21K', '42K'],
        datasets: [{
            data: [300, 50, 100, 120],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(27, 207, 19)'
            ],
            hoverOffset: 4
    }]},
    options: {
        indexAxis: 'y',
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