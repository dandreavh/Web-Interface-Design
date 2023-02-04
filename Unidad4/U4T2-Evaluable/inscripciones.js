/**@dandreavh */
/**
 * @type {Element} Elemento canvas donde está la gráfica alojada 
*/ 
const grafica = document.getElementById("inscripcionesMensuales2022");
// Definición de los elementos que se incorporarán a la gráfica
// --- Las etiquetas del eje X. 
const etiquetas = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
// --- Conjuntos de datos para las columnas
const evento1 = {
    label: "Sevilla",
    data: [500, 700, 1900, 1002, 989, 690, 250, 100, 403, 2045, 1994, 1987],
    backgroundColor: 'rgba(9, 57, 175, 0.5)',
    borderWidth: 1,
    order: 2,
};
const evento2 = {
    label: "Cádiz",
    data: [800, 750, 590, 989, 989, 690, 1050, 1000, 903, 2040, 994, 787], 
    backgroundColor: 'rgba(209, 0, 250, 0.5)', 
    borderWidth: 1,
    order: 2,
};
const evento3 = {
    label: "Córdoba",
    data: [450, 600, 1000, 902, 689, 490, 150, 90, 203, 1045, 1694, 1787], 
    backgroundColor: 'rgba(250, 163, 0, 0.5)',
    borderWidth: 1,
    order: 2,
};              
const evento4 = {
    label: "Jaén",
    data: [350, 700, 1600, 940, 389, 390, 120, 130, 150, 945, 1394, 1187], 
    backgroundColor: 'rgba(10, 196, 151, 0.5)',
    borderWidth: 1,
    order: 2,
};
const media ={
    label: 'Media de las inscripciones',
    data: [525, 687, 1272, 958, 751, 565, 392, 330, 414, 1518, 1519, 1437],
    type: 'line',
    order: 1,
    pointRadius: 1,
    borderColor: 'rgb(255, 46, 56)',
    borderWidth: 2,
    tension: 0.3,
    backgroundColor: 'rgb(255, 46, 56)',
};

// Definición de la gráfica
new Chart(grafica, {
    type: 'bar',
    // Construcción de la gráfica
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
    // Opciones de personalización de la gráfica
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
        plugins: {
            title: {
                display: true,
                text: 'Estado de las inscripciones por evento'
            },
            subtitle: {
                display: true,
                text: 'Mes a mes del año 2022'
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