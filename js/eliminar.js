const URL = "https://ariel2024.pythonanywhere.com/"

const app = Vue.createApp({
    data() {
        return {
            reservas: []
        }
    },
    methods: {
        obtenerReservas() {
            // Obtenemos el contenido del inventario
            fetch(URL + 'reservas')
                .then(response => {
                     // Parseamos la respuesta JSON 
                    if (response.ok) { return response.json();}
                })
                .then(data => {
                    // El código Vue itera este elemento para generar la tabla
                    this.reservas = data;
                })
                .catch(error => {
                    console.log('Error:', error);
                    alert('Error al obtener las reservas.');
                });
        },
        eliminarReserva(correo) {
            if (confirm('¿Estás seguro de que queres eliminar esta reserva?')) {
                fetch(URL + `reservas/${correo}`, { method: 'DELETE' })
                    .then(response => {
                        if (response.ok) {
                            this.reservas = this.reservas.filter(reserva => reserva.correo !== correo);
                            alert('Reserva eliminada correctamente.');
                        }
                    })
                    .catch(error => {
                        alert(error.message);
                    });
            }
        }
    },
    mounted() {
        //Al cargar la página, obtenemos la lista de productos
        this.obtenerReservas();
    }
});

app.mount('body');
