
/*Generador de licencias*/
const selectOpcion = document. getElementById("selectorLicencia");

const PreciolicenciaSencilla = 100;
const PreciolicenciaPremium = 450;

const selectorLicencia = document. getElementById( 'selectorLicencia');
const descripcionLicencia = document. getElementById( 'descripcion');
const comprarBtn = document. getElementById('comprarBtn');
let precioLicencia = document. getElementById( 'precio');

selectorLicencia.addEventListener ('change', function () {
    if (selectorLicencia.value === 'sencilla') {
    descripcionLicencia.textContent = 'Licencia Sencilla: Acceso a funciones básicas.';
    precioLicencia. textContent = `$${PreciolicenciaSencilla}`;
    }else if (selectorLicencia.value === 'premium') {
    descripcionLicencia.textContent = 'Licencia Premium: Acceso completo a todas las características y soporte prioritario.';
    precioLicencia.textContent = `$${PreciolicenciaPremium}`;
    } else {
    descripcionLicencia.textcontent = 'Seleccione una Licencia';
    precioLicencia.textContent = `$`;
    }
    });

comprarBtn.addEventListener('click', function() {
    Swal.fire({
    icon: 'question',
    title: 'Confirmar Compra',
    text: '¿Estás seguro de comprar la licencia?',
    showCancelButton: true,
    confirmButtonText: 'Sí, Comprar',
    cancelButtonText: 'Cancelar',
    }).then((result) => {
    if (result.isConfirmed) {
    Swal.fire('¡Licencia comprada exitosamente!', '','success');
    }
    });
});