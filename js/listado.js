const URL = "https://ariel2024.pythonanywhere.com/"
// Realizamos la solicitud GET al servidor para obtener todas las reservas
fetch(URL + 'reservas')
    .then(function (response) {
        if (response.ok) {return response.json(); }
    })
    .then(function (data) {
        let tablaReservas = document.getElementById('tablaReservas');

        // Iteramos sobre las reservas y agregamos filas a la tabla
        for (let reserva of data) {
            let fila = document.createElement('tr');
            fila.innerHTML = '<td>' + reserva.turno + '</td>' +
                '<td>' + reserva.fecha + '</td>' +
                '<td>' + reserva.hora + '</td>' +
                '<td>' + reserva.nombre + '</td>' +
                '<td>' + reserva.apellido + '</td>' +
                '<td>' + reserva.pago + '</td>'
            tablaReservas.appendChild(fila);
        }
    })
    .catch(function (error) {
        // Código para manejar errores
        alert('Error al obtener los productos.');
    });
