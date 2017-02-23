
/* -------------- CODIGO SOLO JAVASCRIPT ------------
var banderaNueva=localStorage.getItem("srcimg");
var codigoNuevo=localStorage.getItem("code");
function init()
{
	var bandera = document.getElementById("bandera");
	var codigo=document.getElementById("span");	

	bandera.src=banderaNueva;
	codigo.textContent=codigoNuevo;
}
function soloNumeros()
{
	if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;
}


function mostrarCodigo()
{
	alert("LAB "+ codigoNuevo);
}
*/
/* --------------  ALMACENA TELEFONO ----------------
var botonNext=document.getElementsByClassName("NEXT");
var fonoIngresado = document.getElementById("codigo-pais").value;
botonNext.addEventListener("click",almacenaFono);

function almacenaFono(evt)
{
	
    localStorage.setItem('fono',fonoIngresado);
}*/