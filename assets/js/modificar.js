const URL = "https://ariel2024.pythonanywhere.com/"

const app = Vue.createApp({
    data() {
        return {
            fecha: '',
            hora: '',
            nombre: '',
            apellido: '',
            pago: '',
            correo: '',
            imagenUrlTemp: null,
            mostrarDatosReserva: false,
        };
    },
    methods: {
        obtenerReserva() {
            fetch(URL + 'reservas/' + this.id)
                .then(response => response.json())
                .then(data => {
                    this.fecha = data.fecha;
                    this.hora = data.hora;
                    this.nombre = data.nombre;
                    this.apellido = data.apellido;
                    this.pago = data.pago;
                    this.correo = data.correo;
                    this.mostrarDatosReserva = true;
                })
                .catch(error => console.error('Error:', error));
        },
        guardarCambios() {
            const formData = new FormData();
            formData.append('fecha', this.fecha);
            formData.append('hora', this.hora);
            formData.append('nombre', this.nombre);
            formData.append('apellido', this.apellido);
            formData.append('pago', this.pago);
            formData.append('correo', this.correo);

            fetch(URL + 'reservas/' + this.id, {
                method: 'PUT',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    alert('Reserva actualizada correctamente');
                    this.limpiarFormulario();
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error al actualizar la reserva');
                });
        },
        limpiarFormulario() {
            this.fecha = '';
            this.hora = '';
            this.nombre = '';
            this.apellido = '';
            this.pago = '';
            this.correo = '';
            this.imagenSeleccionada = null;
            this.imagenUrlTemp = null;
            this.mostrarDatosProducto = false;
        }
    }
});

app.mount('#app');
