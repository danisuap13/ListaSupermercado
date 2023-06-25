const boton = document.querySelector('.enviar');
const productos = document.querySelector('.inputs');
const listaSuper = document.querySelector('.listaSuper');
let total = document.querySelector('#total');
boton.addEventListener('click', escucharProducto);

let lista = [];
let i= 0;
let u= 0;
let suma=0;
let cantidad=0;
let precio=0;
let multiplicacion=0;
let subtotal=[];

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
    totalListaSuper();
}

function añadirProductoLista(){
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

function totalListaSuper(){
    cantidad = parseInt(lista[u].cantidad);
    precio = parseInt(lista[u].precio);
    multiplicacion = cantidad*precio;
    suma = suma + multiplicacion;
    u++;
    total.textContent = suma;
}
