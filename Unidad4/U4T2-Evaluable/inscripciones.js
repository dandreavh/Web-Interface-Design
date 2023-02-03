/* const ctx = document.getElementById('inscripcionesMensuales2022');
new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Nº Inscripciones',
            data: [6234, 6034, 7546, 7845, 8435, 6997, 3123, 1233, 3998, 9245, 7540, 6993],
            order: 2,
            backgroundColor: 'rgb(1, 22, 55)',
        }, {
            label: 'Media de las inscripciones',
            data: [10, 10, 10, 10],
            type: 'line',
            order: 1,
            pointRadius: 1,
            borderColor: 'rgb(255, 46, 56)',
            borderWidth: 3,
            backgroundColor: 'rgb(255, 46, 56)',
        }],
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    },
    options: {
        scales: {
            y: {
            beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Resumen de las inscripciones mensuales'
            },
            subtitle: {
                display: true,
                text: 'Todos los participantes de 2022 mes a mes',
                padding:{
                    bottom: 20,
                }
            },
            legend: {
                display: true,
                labels: {
                    color: 'rgb(121,121,121)'
                }
            }
        }
    }
}); */

// Elemento canvas donde está la gráfica alojada
const grafica = document.getElementById("inscripcionesMensuales2022");
// Definición de los elementos que se incorporarán a la gráfica
// --- Las etiquetas del eje X. 
const etiquetas = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
// --- Conjuntos de datos para las columnas
const evento1 = {
    label: "Ventas por mes - 2020",
    data: [5000, 1500, 8000, 5102],
    backgroundColor: 'rgba(54, 162, 235, 0.2)', 
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,// Ancho del borde
};
const evento2 = {
    label: "Ventas por mes - 2021",
    data: [10000, 1700, 5000, 5989], 
    backgroundColor: 'rgba(255, 159, 64, 0.2)',
    borderColor: 'rgba(255, 159, 64, 1)',
    borderWidth: 1,// Ancho del borde
};
const evento3 = {
    label: "Ventas por mes - 2021",
    data: [10000, 1700, 5000, 5989], 
    backgroundColor: 'rgba(255, 159, 64, 0.2)',
    borderColor: 'rgba(255, 159, 64, 1)',
    borderWidth: 1,// Ancho del borde
};
const evento4 = {
    label: "Ventas por mes - 2021",
    data: [10000, 1700, 5000, 5989], 
    backgroundColor: 'rgba(255, 159, 64, 0.2)',
    borderColor: 'rgba(255, 159, 64, 1)',
    borderWidth: 1,// Ancho del borde
};
const media ={
    label: 'Media de las inscripciones',
    data: [10, 10, 10, 10],
    type: 'line',
    order: 1,
    pointRadius: 1,
    borderColor: 'rgb(255, 46, 56)',
    borderWidth: 3,
    backgroundColor: 'rgb(255, 46, 56)',
};

// Definición de la gráfica
new Chart(grafica, {
    type: 'bar',
    data: {
        labels: etiquetas,
        datasets: [
            evento1,
            evento2,
            evento3,
            evento4,
            media,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});