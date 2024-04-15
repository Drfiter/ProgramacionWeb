document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const baseDeDatos = [
      { id: 1, nombre: 'Juego 1', precio: 4000, imagen: 'imagen1.jpg' },
      { id: 2, nombre: 'Juego 2', precio: 5700, imagen: 'imagen2.jpg' },
      { id: 3, nombre: 'Juego 3', precio: 3500, imagen: 'imagen3.jpg' }
    ];
    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#cart-content');
    const DOMtotal = document.querySelector('#total');
    const DOMcartBtn = document.querySelector('#cart-btn');
    const DOMcartCount = document.querySelector('#cart-count');
    const DOMcartContainer = document.querySelector('#cart-container');
  
    // Funciones
    function renderizarProductos() {
      baseDeDatos.forEach((info) => {
        // Estructura de la tarjeta de producto
        const miNodo = document.createElement('div');
        miNodo.classList.add('col');
  
        const miNodoCard = document.createElement('div');
        miNodoCard.classList.add('card');
  
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
  
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
  
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('card-img-top');
        miNodoImagen.setAttribute('src', info.imagen);
  
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
  
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Agregar al Carrito';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
  
        // Insertamos
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodoCard.appendChild(miNodoCardBody);
        miNodo.appendChild(miNodoCard);
        DOMitems.appendChild(miNodo);
      });
    }
  
    function anyadirProductoAlCarrito(evento) {
      carrito.push(evento.target.getAttribute('marcador'));
      renderizarCarrito();
      actualizarContadorCarrito();
    }
  
    function renderizarCarrito() {
      // ...
    }
  
    function borrarItemCarrito(evento) {
      // ...
    }
  
    function calcularTotal() {
      // ...
    }
  
    function actualizarContadorCarrito() {
      DOMcartCount.textContent = carrito.length;
    }
  
    function toggleCartContainer() {
      DOMcartContainer.style.display = DOMcartContainer.style.display === 'none' ? 'block' : 'none';
    }
  
    // Eventos
    DOMcartBtn.addEventListener('click', toggleCartContainer);
  
    // Inicio
    renderizarProductos();
  });