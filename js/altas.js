const URL = "https://ariel2024.pythonanywhere.com/"

// Capturamos el evento de envío del formulario
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitamos que se envie el form 

    var formData = new FormData();
    formData.append('turno', document.getElementById('turno').value);
    formData.append('fecha', document.getElementById('fecha').value);
    formData.append('hora', document.getElementById('hora').value);
    formData.append('nombre', document.getElementById('nombre').value);
    formData.append('apellido', document.getElementById('apellido').value);
    formData.append('pago', document.getElementById('pago').value)
    
    fetch(URL + 'reservas', {
        method: 'POST',
        body: formData // Aquí enviamos formData en lugar de JSON
    })
    .then(function (response) {
        if (response.ok) { return response.json(); }
    })
    .then(function (data) {
        alert('Producto agregado correctamente.');
        // Limpiar el formulario para la proxima reserva
        document.getElementById('turno').value = "";
        document.getElementById('fecha').value = "";
        document.getElementById('hora').value = "";
        document.getElementById('nombre').value = "";
        document.getElementById('apellido').value = "";
    })
    .catch(function (error) {
        // Mostramos el error, y no limpiamos el form.
        alert('Error al agregar el producto.');
    });
    
})
