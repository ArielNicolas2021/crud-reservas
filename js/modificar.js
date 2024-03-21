const URL = "https://ariel2024.pythonanywhere.com/"

const app = Vue.createApp({
    data() {
        return {
            turno: '',
            fecha: '',
            hora: '',
            nombre: '',
            apellido: '',
            pago: '',
            imagenUrlTemp: null,
            mostrarDatosReserva: false,
        };
    },
    methods: {
        obtenerReserva() {
            fetch(URL + 'reservas/' + this.turno)
                .then(response => response.json())
                .then(data => {
                    this.turno = data.turno;
                    this.fecha = data.fecha;
                    this.hora = data.hora;
                    this.nombre = data.nombre;
                    this.apellido = data.apellido;
                    this.pago = data.pago;
                    this.mostrarDatosReserva = true;
                })
                .catch(error => console.error('Error:', error));
        },
        guardarCambios() {
            const formData = new FormData();
            formData.append('turno', this.turno);
            formData.append('fecha', this.fecha);
            formData.append('hora', this.hora);
            formData.append('nombre', this.nombre);
            formData.append('apellido', this.apellido);
            formData.append('pago', this.pago);

            fetch(URL + 'reservas/' + this.turno, {
                method: 'PUT',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    alert('Producto actualizado correctamente');
                    this.limpiarFormulario();
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error al actualizar el producto');
                });
        },
        limpiarFormulario() {
            this.turno = '';
            this.fecha = '';
            this.hora = '';
            this.nombre = '';
            this.apellido = '';
            this.imagenSeleccionada = null;
            this.imagenUrlTemp = null;
            this.mostrarDatosProducto = false;
        }
    }
});

app.mount('#app');
