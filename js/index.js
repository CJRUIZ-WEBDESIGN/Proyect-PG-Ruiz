/* 
//APLICACION DE FOR PARA PROMPT "CAPITAL ARGENTINA". 

let respuesta = "BUENOS AIRES"; 	 	 
let acierto = false; 	 	 
for (let contador = 0; contador < 3 && acierto === false; contador++) {	 	 
    let respUsuario = prompt("Capital de Argentina: ");
        if (respUsuario.toUpperCase() === respuesta) { 	 	 
        let acierto = true; 
        alert("Excelente! Tu respuesta es correcta!!!");	 	
	    }	 	 
}	 	 

if (!acierto) {alert("Lo siento, agotaste tus 3 intentos. Vuelva a intentarlo.")};  */

/* let nombre = "Pepito";
let edad = 34; 
let direccion = "AV";

const persona1 = {nombre: "Pepito", edad: 34, direccion: "AV"};  */

/* function Persona(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion; 
    
}

const persona1 = new Persona("Cristian", 38, "AV");

console.log(persona1); */

/* class Producto {
    constructor(nombre, precio){
        this.nombre = nombre; 
        this.precio = precio;
        this.vendido = false; 
    }
    vender(){
        this.vendido = true;
    }       
}

const producto1 = new Producto("Arroz", 1000);
const producto2 = new Producto("Fideo", 1500);

console.log(producto1);
producto1.vender();
console.log(producto1);

 */

/* class ProductoMercado{
    constructor(nombre, precio, img){
        this.nombre = nombre; 
        this.precio = precio;
        this.img = img; 
        this.vendido = false; 
    }
    vender(){
        this.vendido = true;
    }
}

const producto1 = new ProductoMercado("Monitor LED para Juegos...", 1494900, "ImagenProducto");
console.log(producto1); */


//


/* class ProductoMercado{
    constructor(nombre, precio, img){
        this.sku = sku; 
        this.producto = producto;
        this.img = img; 
        this.vendido = false; 
    }
    vender(){
        this.vendido = true;
    }
}

const producto1 = new ProductoMercado("Monitor LED para Juegos...", 1494900, "ImagenProducto");
console.log(producto1);*/

