
let date1 = document.querySelector("#currendate");

try {
	const options = {
		day: "numeric",
		month: "numeric",
		year: "numeric"
	};
	date1.textContent = `${new Date().toLocaleDateString("en-UK", options)} ${mueveReloj()}`;
} 
catch (e) {
	alert("Error with code or your browser does not support Locale");
}

function mueveReloj(){
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();

    horaImprimible = hora + ":" + minuto + ":" + segundo;

    return horaImprimible;    
}