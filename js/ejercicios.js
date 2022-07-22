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

//////

//Ejercicios N° 1: Homero 

/* let nombre = "Homero";
let apellido = "Simpsons";
let edad = 39; 

console.log(nombre);
console.log(apellido);
console.log(edad); */


//Ejercicios N° 2: Ciudades

/* const ciudad1 = "Springfield";
const ciudad2 = "Shelbyville";
const ciudad3 = "Capital City";
const ciudad4 = "Cypress Creek";
const ciudad5 = "Ogdenville";

console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5); */

/* let persona         = "BART SIMPSONS";
let domicilio       = "742 EVERGREEN";
let pais            = "USA";
let nacimiento      = "02-11-70";
const codigo        = "B47U89RE243";
let carnet = "Codigo: "+codigo+"  "+
             "Nombre: "+persona+"  "+
             "Pais: "+pais+"  "+
             "Nacimiento: "+nacimiento+"  "+
             "Domicilio: "+domicilio;
console.log(carnet); */


/* let integrante1 = prompt("INGRESAR 1ER INTEGRANTE");
let integrante2 = prompt("INGRESAR 2DO INTEGRANTE");
let integrante3 = prompt("INGRESAR 3RO INTEGRANTE");
let integrante4 = prompt("INGRESAR 4TO INTEGRANTE");
let integrante5 = prompt("INGRESAR 5TO INTEGRANTE");

let familia =   "1) "+integrante1+" "+
                "2) "+integrante2+" "+
                "3) "+integrante3+" "+
                "4) "+integrante4+" "+
                "5) "+integrante5;


console.log(familia); */

//DESCUENTO, NO FUNCIONA? 

/* let precio = parseFloat(prompt("INGRESA PRECIO")); 
let descuento20 = precio - (precio * 0.2);
let descuento30 = precio - (precio * 0.3);

console.log(descuento20);
console.log(descuento30); */

// BART YO NO FUI - FUI YO

/* let entrada = prompt("INGRESAR UN NOMBRE");
let nombre = "BART"; 
if (entrada == nombre) {
     alert("FUI YO"); 
} else {
    alert ("YO NO FUI");
} */

// PRESIONAR Y 

/* let entrada2 = prompt("INGRESAR UNA TECLA YES(Y) OR NOT(N)");
if ((entrada2 == "y") || (entrada2 == "Y")) {
    alert("CORRECTO");
} else {
    alert("ERROR");
} */

//TE SALUDO O NO TE SALUDO... CORTA
/*  let salida = prompt("Ingresa el Nombre");
let saludo = "Santiago"; 
if (salida == saludo) {
     alert(`Hola ${salida}`); 
} else {
    alert ("No te saludo");
}  */

//ALGO RELACIONADO CON PROGAMER PRODUCTOS ARMA TU PC
/* 
alert("ARMA TU PC: ELEGI TU MICRO")
let entrada3 = prompt("AMD O INTEL"); 
let entrada2 = AMD;
let entrada1 = INTEL;

if (entrada3 == ) 
{
alert ("ELEGISTE A HOMERO")
} */


//ELEGIR UN PERSONAJE DE LOS SIMPSONS 


/* let entrada3 = prompt("INGRESAR UN NUMERO");
if (entrada3 === 1)       {
    alert("ELEGISTE A HOMERO");
} else if (entrada3 == 2) {
    alert("ELEGITE A MARGE");
}else if (entrada3 == 3)  {
    alert("ELEGISTE A BART");
}else if (entrada3 == 4)  {
    alert("ELEGISTE A LISA");
}
else {
    alert("ERROR");
} */

//TIPO DE PRESUPUESTO. 

/* let entrada4 = parseFloat(prompt("INGRESAR UN NUMERO"));
if ((entrada4 >= 0) && (entrada4 <= 1000)){
    alert("PRESUPUESTO BAJO");

}else if ((entrada4 >= 1001) && (entrada4 <= 3000)){
    alert("PRESUPUESTO MEDIO");

}else if ((entrada4 >= 3000)) {
    alert("PRESUPUESTO ALTO");

}
else {

    alert("ERROR");
} */


//CARGAR LA HELADERA DE HOMERO 


/* 
let producto1 = prompt("INGRESAR 1ER PRODUCTO");
let producto2 = prompt("INGRESAR 2DO PRODUCTO");
let producto3 = prompt("INGRESAR 3RO PRODUCTO");
let producto4 = prompt("INGRESAR 4TO PRODUCTO");

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")){
    let heladera = "1) " + producto1 + " " +
        "2) " + producto2 + " " +
        "3) " + producto3 + " " +
        "4) " + producto4; 
    console.log(heladera);
} else {
    console.log("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
}
    
 */

/* 
let cantidad = prompt("Ingresar Cantidad de Repeticiones") ;
let texto    = prompt("Ingresar Texto a Repetir");
for (let index = 0; index < cantidad; index++) {
    console.log(texto);
} */
/* 
function mensaje(){
    let nombre = prompt("Ingrese su nombre"); 
    let resultado = `hola como estas ${nombre}`;
    alert(resultado);

}

mensaje(); */

/* let lados = prompt("INGRESAR CANTIDAD DE LADOS");
for (let index = 0; index < lados; index++){
    if(index > 3){
        break
    }
} */

// ALTA DE ALUMNOS REGISTRADOS

/* let alumnos = "";
for (let index = 0; index < 10; index++){
    alumnos += prompt("INGRESAR NOMBRE DEL ALUMNO")+"\n";

}
alert(alumnos); */

/* let entrada = prompt("INGRESAR NOMBRE");
let ingresados = "";
while (entrada != "volvemor"){
    ingresados += entrada +"\n";
    entrada = prompt("INGRESAR NOMBRE");
}
alert(ingresados); */


/* alert("Elige entre: Memoria, Almacenamiento, Procesadores, Motherboard", "\n");
let entrada = prompt("SELECCIONAR COMPONENTES SEGUN CORRESPONDA DEL 1 AL 4");
    while (entrada != "LISTO") {

        switch (entrada){

            case "1":
                alert("MEMORIA: Memoria DDR4 2666 Mhz");
            break;

            case "2":
                alert("ALMACENAMIENTO: NVME SWORDFISH 500GB M.2");
            break;

            case "3":
                alert("PROCESADORES: AMD o INTEL");
            break;

            case "4":
                alert("MOTHERBOARD: AMD o INTEL");
            break;

            default:
                alert("ERROR DE SELECCION");
            break;
            
        }
    }
    entrada = prompt("SELECCIONAR PRODUCTO Y AGREGARLO AL CARRITO"); */

/* 
    let precio = parseFloat(prompt("ingrese el precio del producto"));
    let descuento25 = precio - (precio * 0.2);
    let descuento30 = precio - (precio * 0.3);
    console.log (descuento25);
    console.log (descuento30); 
    alert(descuento25 = precio * 0.2)
 */

/* let nombre = "Pepito";
let edad = 34; 
let direccion = "Avenida";

const persona1 = {
    nombre: "pepito", 
    edad: 34,
    direccion: "Avenida"
};

console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.direccion); */

/* function Persona(info){
    this.nombre = info.nombre; 
    this.edad = info.edad;
    this.direccion = info.direccion;

}
const persona1 = new Persona({
    
    nombre: "Homero", 
    edad: 39, 
    direccion: "Av siempre viva"

});

console.log(persona1); */
/* 
function entrada(){
    return prompt("INGRESAR DATO");

}
function procesamiento(valor){
    return "LA ENTRADA ES"+valor
}
function salida(valor){
    alert(valor);
}
//SUMAR LA OTRA FORMA DE LLAMADA

salida(procesamiento(entrada())); */

//muy bueno para sacar porcentaje! 
/* 
function impuesto(precio, porcentaje){

    return precio + ((precio * porcentaje)/100)

}

for (let index = 0; index < 5; index++) {
    let resultado = impuesto(parseFloat(prompt("INGRESAR PRECIO"))
                            ,parseFloat(prompt("INGRESAR %")));

                            alert(resultado);
} */


/* const arr1 = [];
const arr2 = [1, 2, 3];
const arr4 = [1, "nahuel", true];

console.log(ar4(2)
 */

/* const arr3 = ["andres", "nahuel", "camila"];

for(let i = 0; i < 3; i++){
    console.log(arr3[i]);
}
 */
/* let contenedor = document.getElementById("container");
let productos = [
    {id: 1, nombre: "Procesador", precio: 41000 },
    {id: 1, nombre: "Memoria", precio: 7250 },
    {id: 1, nombre: "Disco SSD", precio: 9000 },
    {id: 1, nombre: "Coolers", precio: 15000 },
    {id: 1, nombre: "Fuente", precio: 8000 },
    {id: 1, nombre: "Gabinete", precio: 11000 },
]

for(const producto of productos){

    let li = document.createElement("li");
    li.innerHTML = `<h1> `

} */
/* 
const id = [];
const sku = [];
const producto = [];
const preciopg = (a,b) => (a + b);
const precio12 = (a,b) => (a + b);

 */
/* const productos = [
    {id: 2, nombre: "DISCO", precio: 1300},
    {id: 1, nombre:"GABINETE", precio: 1400},
    {id: 3, nombre:"PROCESADOR", precio: 1700},
    {id: 4, nombre:"FUENTE", precio: 1900},
    {id: 5, nombre:"MOTHER", precio: 2000}
];

for(const producto of productos){
console.log(producto.nombre)
}
 */

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

let productos = [];

productos.push(new Producto("DISCO NVME 500GB" , 11000));
productos.push(new Producto("MOTHER B450 AOUROS" , 19000));
productos.push(new Producto("GABINETE" , 10000));
productos.push(new Producto("PROCESADOR" , 44000));

for(const item of productos){
    if(item.nombre === "DISCO NVME 500GB"){
       item.vender()
    }

}
console.log(productos); */

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

let productos = [];

productos.push(new Producto("DISCO NVME 500GB" , 11000));
productos.push(new Producto("MOTHER B450 AOUROS" , 19000));
productos.push(new Producto("GABINETE" , 10000));
productos.push(new Producto("PROCESADOR" , 44000));

for(let i = 0; i < 10; i++){

    let nombre = prompt("Ingrese nombre del Producto"); 
    let precio = parseInt(prompt("Ingrese Precio PRoducto"));
    producto.push(new Producto(nombre, precio));
}

console.log(productos); */

/* const carrito = [
    {id: 1, nombre:"GABINETE", precio: 1400},
    {id: 2, nombre: "DISCO", precio: 1300},
    {id: 3, nombre:"PROCESADOR", precio: 1700},
    {id: 4, nombre:"FUENTE", precio: 1900},
    {id: 5, nombre:"MOTHER", precio: 2000}
]; 

const productos = {
    discos: [
      {id: 1, nombre:"DISCO NVME 500GB ADATA", precio: 1300},
      {id: 2, nombre:"DISCO NVME 480GB GIGABYTE", precio: 1400},
      {id: 3, nombre:"DISCO SSD 1TB HITACHI", precio: 1700},
      {id: 4, nombre:"DISCO NVME 960GB", precio: 1900},
      {id: 5, nombre:"DISCO NVME 1TB", precio: 2000}
],
    fuentes: [
        
      {id: 1, nombre:"FUENTES 1", precio: 1300},
      {id: 2, nombre:"FUENTES 2", precio: 1400},
      {id: 3, nombre:"FUENTES 3", precio: 1700},
      {id: 4, nombre:"FUENTES 4", precio: 1900},
      {id: 5, nombre:"FUENTES 5", precio: 2000}
],
    coolers: [
      
      {id: 1, nombre:"COOLERS 1", precio: 1300},
      {id: 2, nombre:"COOLERS 2", precio: 1400},
      {id: 3, nombre:"COOLERS 3", precio: 1700},
      {id: 4, nombre:"COOLERS 4", precio: 1900},
      {id: 5, nombre:"COOLERS 5", precio: 2000}
]
}

/* let producto = productos.fuentes.find(el => el.nombre === "FUENTES 5");
console.log(producto);
 

function Categorias(discos, mother, procesadores, memorias){
    this.discos = discos; 
    this.mother = mother; 
    this.procesadores = procesadores;
    this.memorias = memorias; 
}

class Categorias{
    constructor(discos, mother, procesadores, memorias){
        this.discos = discos; 
        this.mother = mother; 
        this.procesadores = procesadores; 
        this.memorias = memorias;
    }
}

*/
const carrito = [
    {id: 1, nombre:"GABINETE", precio: 1400},
    {id: 2, nombre:"DISCO", precio: 1300},
    {id: 3, nombre:"PROCESADOR", precio: 1700},
    {id: 4, nombre:"FUENTE", precio: 1900},
    {id: 5, nombre:"MOTHER", precio: 2000}
]; 

const productos = {
    discos: [
      {id: 1, nombre:"DISCO NVME 500GB ADATA", precio: 1300},
      {id: 2, nombre:"DISCO NVME 480GB GIGABYTE", precio: 1400},
      {id: 3, nombre:"DISCO SSD 1TB HITACHI", precio: 1700},
      {id: 4, nombre:"DISCO NVME 960GB", precio: 1900},
      {id: 5, nombre:"DISCO NVME 1TB", precio: 2000}
],
    fuentes: [
        
      {id: 1, nombre:"FUENTES 1", precio: 1300},
      {id: 2, nombre:"FUENTES 2", precio: 1400},
      {id: 3, nombre:"FUENTES 3", precio: 1700},
      {id: 4, nombre:"FUENTES 4", precio: 1900},
      {id: 5, nombre:"FUENTES 5", precio: 2000}
],
    coolers: [
      
      {id: 1, nombre:"COOLERS 1", precio: 1300},
      {id: 2, nombre:"COOLERS 2", precio: 1400},
      {id: 3, nombre:"COOLERS 3", precio: 1700},
      {id: 4, nombre:"COOLERS 4", precio: 1900},
      {id: 5, nombre:"COOLERS 5", precio: 2000}
]
}

