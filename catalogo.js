
alert("¡Atencion, vas a entrar al mejor mercado de camisetas de Argentina, si no queres gastar plata ni entres!");


var carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    var carritoHTML = '';
    var total = 0;

    for (var i = 0; i < carrito.length; i++) {
        carritoHTML += '<p>' + carrito[i].nombre + ' - ' + carrito[i].precio + ' $</p>';
        total += carrito[i].precio;
    }

    document.getElementById('carrito').innerHTML = carritoHTML;
    document.getElementById('total').innerHTML = 'Total: ' + total + ' $';
}


var carrito = []; // Supongamos que ya tienes un arreglo de productos en el carrito

function eliminarProducto(index) {
    carrito.splice(index, 1); // Elimina el producto en el índice dado
    actualizarCarrito(); // Llama a la función para actualizar la vista del carrito
}

function actualizarCarrito() {
    var carritoHTML = '';

    for (var i = 0; i < carrito.length; i++) {
        var producto = carrito[i];
        carritoHTML += `
            <div class="producto">
                <p>${producto.nombre} - ${producto.precio} $</p>
                <button onclick="eliminarProducto(${i})">Eliminar</button>
            </div>
            `;
    }

    document.getElementById('carrito').innerHTML = carritoHTML;
}





var carrito = [];


function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function calcularTotalCarrito() {
    var total = 0;
    for (var i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}

function actualizarCarrito() {
    var carritoHTML = '';
    var totalCarrito = calcularTotalCarrito();

    for (var i = 0; i < carrito.length; i++) {
        carritoHTML += `
            <div class="producto">
                <p>${carrito[i].nombre} - ${carrito[i].precio} $</p>
                <button onclick="eliminarDelCarrito(${i})">Eliminar</button>
            </div>
        `;
    }

    document.getElementById('carrito').innerHTML = carritoHTML;
    document.getElementById('total').textContent = totalCarrito;
}

