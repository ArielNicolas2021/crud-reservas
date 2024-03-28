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
            fila.innerHTML = '<td title="id">' + reserva.id + '</td>'+
                '<td>' + reserva.fecha + '</td>' +
                '<td>' + reserva.hora + '</td>' +
                '<td title="nombre">' + reserva.nombre + '</td>' +
                '<td title="apellido">' + reserva.apellido + '</td>' +
                '<td title="pago">' + reserva.pago + '</td>' +
                '<td title="correo">' + reserva.correo + '</td>'
            tablaReservas.appendChild(fila);
        }
    })
    .catch(function (error) {
        // Código para manejar errores
        alert('Error al obtener las reservas.');
    });
