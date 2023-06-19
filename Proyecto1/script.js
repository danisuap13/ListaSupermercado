
    let item = document.getElementById('item');
    let precio = document.getElementById('precio');
    let cantidad = document.getElementById('cantidad');
    let button = document.getElementById('ingresar');
    let resultado = document.getElementById('show');

    let objeto = {};
    button.addEventListener('click', escucharElementos)

    function escucharElementos() {
        objeto = {
            elemento: item.value,
            precio: precio.value,
            cantidad: cantidad.value,
        }
        resultado.innerText = objeto.elemento+ " " + objeto.precio + "  " + objeto.cantidad;
    }

