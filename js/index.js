
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

if (!acierto) {alert("Lo siento, agotaste tus 3 intentos. Vuelva a intentarlo")}; 