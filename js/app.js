import { productos } from './stock.js' 
import { carritoIndex } from './carritoIndex.js';

const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById('sectionProductos');

    productos.forEach( producto => {
        const div = document.createElement('div')
        div.classList.add('Productdiv')
        div.innerHTML += `  
                          <img src="${producto.img}" class="imagProduc" alt="...">
                          <h5 class="productos__h2">${producto.nombre}</h5>
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