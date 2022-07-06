
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

alert("Bienvenid@ a Pro Gamer Arg.");
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

}while(otraCompra);