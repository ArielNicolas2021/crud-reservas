let menuBtn = document.getElementById('menuBtn')
let navbarItems = document.getElementById('navbarItems')

menuBtn.addEventListener('click', () => {
    if (navbarItems.style.display == 'block') {
        navbarItems.style.display = 'none'
    } else {
        navbarItems.style.display = 'block'
    }
})


document.addEventListener('DOMContentLoaded', function () {
    var pagoSelect = document.getElementById('pago');
    var imagenComprobanteInput = document.getElementById('imagencomprobante');

    pagoSelect.addEventListener('change', function () {
        if (pagoSelect.value === 'pago') {
            imagenComprobanteInput.removeAttribute('disabled');
        } else {
            imagenComprobanteInput.setAttribute('disabled', 'disabled');
        }
    });
});



let inputFile = document.getElementById('imagencomprobante')

inputFile.addEventListener('change', () => {
    if (inputFile == undefined) {
        document.getElementById('input-file-name').innerHTML = 'Ningún archivo seleccionado'

    } else {
        document.getElementById('input-file-name').innerHTML = inputFile.files[0].name
    }
})
