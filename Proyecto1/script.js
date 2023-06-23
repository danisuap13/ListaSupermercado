const boton = document.querySelector('.enviar');
const productos = document.querySelector('.inputs');
const listaSuper = document.querySelector('.listaSuper');
boton.addEventListener('click', escucharProducto);

let lista = [];
let i= 0;

function escucharProducto(){
    const producto = document.querySelector('#productoItem');
    const precio = document.querySelector('#productoPrecio');
    const cantidad = document.querySelector('#productoCantidad');
    lista.push({
        producto: producto.value,
        precio: precio.value,
        cantidad: cantidad.value,
    });
    añadirProductoLista();
}

function añadirProductoLista(arr){
        const productCard = document.createElement('div');
        productCard.classList.add('productos');
        
        const displayItem = document.createElement('p');
        displayItem.textContent = lista[i].producto;
        
        const displayPrecio = document.createElement('p');
        displayPrecio.textContent = lista[i].precio;
        
        const displayCantidad = document.createElement('p');
        displayCantidad.textContent = lista[i].cantidad;
        
        listaSuper.insertBefore(productCard,productos);
        productCard.append(displayItem,displayPrecio,displayCantidad);
        i++;
}
