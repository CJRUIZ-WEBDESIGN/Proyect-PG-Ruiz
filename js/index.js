
//APLICACION DE FOR PARA PROMPT "CAPITAL ARGENTINA". 
/* 
let respuesta = "BUENOS AIRES"; 	 	 
let acierto = false; 	 	 
for (let contador = 0; contador < 3 && acierto === false; contador++) {	 	 
    let respUsuario = prompt("Capital de Argentina: ");
        if (respUsuario.toUpperCase() === respuesta) { 	 	 
        let acierto = true; 
        alert("Excelente! Tu respuesta es correcta!!!");	 	
}	 	 
}	 	 

if (!acierto) {alert("Lo siento, agotaste tus 3 intentos. Volve a intentarlo.")

};  */

/* const id = 01;
const sku = "";
const producto = (a, b) => a+b;
const iva = 0.21;
const precio =  */

/* class Producto{

    constructor(sku, producto, iva, precio, img, stock){
        
        this.sku = sku;
        this.producto = producto;
        this.iva = iva;
        this.precio = precio;
        this.img = img; 
        this.stock = stock; 
        this.vendido = false; 
    }       
    vender(){
        this.vendido = true;
    }  
}
    const producto1 = new Producto("PG001", "INTEL I5 10400F", 0.21, 43000, "imagen", 7);
    const producto2 = new Producto("PG002", "INTEL I7 10400F", 0.21, 33000, "imagen", 34);
    const producto3 = new Producto("PG003", "INTEL I9 10400F", 0.21, 53000, "imagen", 6);
    const producto4 = new Producto("PG004", "RYZEN 5 5600G", 0.21, 42000, "imagen", 15);
    const producto5 = new Producto("PG005", "RYZEN 7 5700G", 0.21, 48000, "imagen", 2);

    producto1.vender();

    if(producto1.vendido){
        console.log("producto esta vendido");
    } else {
        console.log("Producto no vendido");
    }

    console.log(producto1);
    console.log(producto2);
    console.log(producto3);
    console.log(producto4);
    console.log(producto5);
 */


/* alert("Bienvenid@ a Pro Gamer Arg.");
alert("Nuevo Sistema de Ventas al por Mayor de Computadoras Armadas - Listas para usar.");
alert("Arma tu pedido seleccionando la opcion que mas te guste. Todos los productos cuentan con el 10% de descuento");
do{
let opciones = parseInt(prompt("1) PC INTEL: $110.700, 2) PC AMD: $80.000, 3) COMBO ACTUALIZACION: $25.000"));
const suma = (a, b) => a+b;
const resta = (a, b) => a-b;
const producto = (a, b) => a*b;
const pcintel = 110700;
const pcamd = 80000;
const comboactualizacion = 25000;
let descuento1 = 0.1;
const iva = 0.21;
let precioPcIntel = resta (suma(pcintel, iva*pcintel), descuento1*pcintel);
let precioPcAmd = resta (suma(pcamd, iva*pcamd), descuento1*pcamd);
let precioComboActualizacion = resta (suma(comboactualizacion, iva*comboactualizacion), descuento1*comboactualizacion);

switch (opciones) {
            case 1:
                        alert("Selecione la cantidad de Pcs Armadas INTEL que desea comprar");
                        let cantidad = parseInt(prompt("Ingrese la cantidad", 0));
                        console.log(cantidad);
                            if (cantidad <= 2) {
                                alert(`Gracias por su compra, su pedido esta siendo procesado. El precio final es de $${precioPcIntel * cantidad}.`);
                                
                            } else if (2 < cantidad <= 4) {
                                alert(`Gracias por su compra, su pedido esta siendo procesado. El precio final es de $${precioPcIntel * cantidad}.`);

                            } else if (cantidad > 5) {
                                alert(`Gracias por su compra, su pedido esta siendo procesado. El precio final es de $${precioPcIntel * cantidad}.`);
                            }
                        break;
            case 2:
                        alert("Selecione la cantidad de Pcs Armadas AMD que desea comprar");
                        let cantidad1 = parseInt(prompt("Ingrese la cantidad", 0));
                        console.log(cantidad1);
                            if (cantidad1 <= 2) {
                                alert(`Gracias por su compra, su pedido esta siendo procesado. El precio final es de $${precioPcAmd * cantidad1}.`);
                             
                            } else if (2 < cantidad1 <= 4) {
                                alert(`Gracias por su compra, su pedido esta siendo procesado. El precio final es de $${precioPcAmd * cantidad1}.`);

                            } else if (cantidad1 > 5) {
                                alert(`Gracias por su compra, su pedido esta siendo procesado. El precio final es de $${precioPcAmd * cantidad1}.`);
                            }
                        break;    
            case 3:
                        alert("Selecione la cantidad de COMBOS DE ACTUALIZACION que desea comprar");
                        let cantidad2 = parseInt(prompt("Ingrese la cantidad", 0));
                        console.log(cantidad2);
                            if (cantidad2 <= 2) {
                                alert(`Gracias por su compra, su pedido esta siendo procesado. El precio final es de $${precioComboActualizacion * cantidad2}.`);
                                
                            } else if (2 < cantidad2 <= 4) {
                                alert(`Gracias por su compra, su pedido esta siendo procesado. El precio final es de $${precioComboActualizacion * cantidad2}.`);

                            } else if (cantidad2 > 5) {
                                alert(`Gracias por su compra, su pedido esta siendo procesado. El precio final es de $${precioComboActualizacion * cantidad2}.`);
                            }
                        break;        

    default:
        alert('Por favor, seleccione una opcion valida');
        break;
}
otraCompra = confirm(`Te gustaría realizar otra compra?`);

}while(otraCompra); */

/* let producto = ["MEMORIA RAM", "PROCESADOR", "DISCO NVME", "COOLERS", "GABINETES", "PLACA DE VIDEO"];
let precios = [];
do {
    for (let i = 0; i < 6; i++) {
        precios.push(500);
    }
    alert("A continuacion podra cambiar el precio deL articulo que elija");
    let numero = prompt(`Introduzca el número (0-5) asignado al articulo cuyo precio quiera modificar. \n0) MEMORIA RAM \n1) PROCESADOR \n2) DISCO NVME \n3) COOLERS \n4) GABINETES \n5) PLACA DE VIDEO`, `0`);
    numero = parseInt(numero);
    if (numero < 6) {
        alert(`El Articulo ${producto[numero]} tienen un valor de: $ ${precios[numero]}`);
        datoPrecio = prompt(`Introduzca el nuevo Precio`, `0`);
        alert(`Ha modificado el precio del producto ${producto[numero]}`);
        valorPrecio = parseInt(datoPrecio);
        numero = parseInt(numero);
        precios[numero] = valorPrecio;
        alert(`Se detallan los siguientes Precios actualizados`);
        for (let i = 0; i < producto.length; i++) {
            alert(`El precio final del producto:${producto[i]} es:\nProducto num: ${i}\nPrecio:$ ${precios[i]}`);
        }
    }
    else {
        alert("Por favor, elija la opcion correcta");
    }
    otraModificacion = confirm(`Desea modificar otro precio?`);

} while (otraModificacion); */
/* 


class Producto {
    constructor(nombre, precio, codigo){
        this.nombre = nombre
        this.precio = precio
        this.codigo = codigo
    }
    calcularPrecioIva(){
        this.precio = this.precio*1.21 
    }
    calcularPrecioDescuento1(){
        this.precio = resta(this.precio*1.21, this.precio*0.1) 
    }
    calcularPrecioDescuento2(){
        this.precio = resta(this.precio*1.21, this.precio*0.2) 
    }
    calcularPrecioDescuento3(){
        this.precio = resta(this.precio*1.21, this.precio*0.3) 
    }

}


/* function calculadora(num1, num2, operacion){

    switch(operacion){
        case "+":
            return num1 + num2;
            break;

        case "-":
            return num1 - num2;
            break;

        case "*":
            return num1 * num2;
            break;

        case "/":
            return num1 / num2; 
            break;

        default: 
        return "0";
        break;
    
    }
}
let num1 = parseInt(prompt("ingrese el Primer Numero"));
let num2 = parseInt(prompt("Ingrese el Segundo Numero"));
let operacion = prompt("Ingrese la Operacion");

let resultado = calculadora(num1, num2, operacion);
alert(resultado);
 */





/* let Productos = document.getElementByClass("botoncarrito");
console.log(container.innerHTML)


localStorage.setItem("id", "01");
localStorage.setItem("sku", "PG-01");
localStorage.setItem("producto", "Memoria Ram DDR4 3200Mhz");

let id = localStorage.getItem(id)
 */

/* let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  let usuario = usuarioStorage;
  let mensaje = `Bienvenid@ ${usuario}`;
  alert(mensaje);

}else{
    
  usuario = prompt("Ingrese su nombre");
  sessionStorage.setItem("usuario", usuario);

}
 */

alert("Bienvenido a ProGamerArg, seleccione que producto deseas llevar.");
alert("Recuerda que esta semana todos los productosas tienen un descuento del 10%, si llevas hasta 2 unidades, del 20% si llevas mas de dos unidades y de 30% si llevas mas de 4 unidades");
alert("Realiza tu pedido seleccionando la opcion que deseas.");

const resta = (a, b) => a - b;

do {

    let opciones = parseInt(prompt("1. Memoria Ram DDR4: $7700, 2.Procesador INTEL I5 10500F: $43000, 3.Procesador AMD RYZEN 5 5600G: $1000"));

    const memorias = new Producto("Memoria Adata DDR4 3200Mhz", 7700, 1);
    const procesadores = new Producto("AMD Ryzen 5 5600G", 44700, 1);
    const almacenamiento = new Producto("Adata SwordFish NVME 500GB", 13700, 1);
    const gabinetes = new Producto("Gabinete Thermaltake H200 White", 13000, 2);
    const fuentes = new Producto("Fuente Corsair CV600 80+ Plus Gold", 21000, 3);
    memorias.calcularPrecioDescuento1();
    procesadores.calcularPrecioDescuento2();
    almacenamiento.calcularPrecioDescuento3();
    gabinetes.calcularPrecioIva();
    fuentes.calcularPrecioIva();
    const productos = [];
    productos.push(memorias)
    productos.push(procesadores)
    productos.push(almacenamiento)
    productos.push(gabinetes)
    productos.push(fuentes)

    switch (opciones) {
        case 1:
            alert("Por favor, seleccione el producto que desea comprar");
            let cantidad = parseInt(prompt("Ingrese la cantidad", 0));

            if (cantidad <= 2) {
                alert(`Gracias por su compra, su producto se añadio al carrito. El total abonar es $${memorias.precio * cantidad}.`);

            } else if (2 < cantidad <= 4) {
                alert(`Gracias por su compra, su producto se añadio al carrito. El total abonar es $${memorias.precio * cantidad}.`);

            } else if (cantidad > 5) {
                alert(`Gracias por su compra, su producto se añadio al carrito. El total abonar es $${almacenamiento.precio * cantidad}.`);
            }
            break;
        case 2:
            alert("Por favor seleciona la cantidad de que deseas comprar");
            let cantidad1 = parseInt(prompt("Ingrese la cantidad", 0));

            if (cantidad1 <= 2) {
                alert(`Gracias por su compra, su producto se añadio al carrito. El total abonar es $${fuentes.precio * cantidad1}.`);

            } else if (2 < cantidad1 <= 4) {
                alert(`Gracias por su compra, su producto se añadio al carrito. El total abonar es $${procesadores.precio * cantidad1}.`);

            } else if (cantidad1 > 5) {
                alert(`Gracias por su compra, su producto se añadio al carrito. El total abonar es $${gabinetes.precio * cantidad1}.`);
            }
            break;
        case 3:
            alert("Por favor seleciona la cantidad de  que deseas comprar");
            let cantidad2 = parseInt(prompt("Ingrese la cantidad", 0));

            if (cantidad2 <= 2) {
                alert(`Gracias por su compra, su producto se añadio al carrito. El total abonar es $${gabinetes.precio * cantidad2}.`);

            } else if (2 < cantidad2 <= 4) {
                alert(`Gracias por su compra, su producto se añadio al carrito. El total abonar es $${gabinetes.precio * cantidad2}.`);

            } else if (cantidad2 > 5) {
                alert(`Gracias por su compra, su producto se añadio al carrito. El total abonar es $${gabinetes.precio * cantidad2}.`);
            }
            break;
        default:
            alert('Por favor, elige una opcion valida');
            break;
    }
    otraCompra = confirm(`Te gustaría hacer otra compra?`);


} while (otraCompra);


 