import { productos } from './stock.js' 
import { carritoIndex } from './carritoIndex.js';

const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById('sectionProductos');

    productos.forEach( producto => {
        const div = document.createElement('div')
        div.classList.add('Productdiv')
        div.innerHTML += `  
                          <h3 class="productos__h2">${producto.nombre}</h3>
                          <img src="${producto.img}" class="imagProduc" alt="...">
                          <p class="productos__parrafo"> ${producto.desc}</p>
                          <p class="productos__precio">$ ${producto.precio}</p>
                          <button class="Botoncarrito" id=boton${producto.id}>Comprar</button>
                          </div>
                        </div>`
    
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`boton${producto.id}`)
    boton.addEventListener('click', ()=>{
        carritoIndex(producto.id)
        alert(`Se agrego ${producto.nombre}`)

    } )

    } )

}


mostrarProductos(productos)