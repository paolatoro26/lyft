function init()
{
	var bandera = document.getElementById("bandera");
	var codigo=document.getElementById("span");

	var banderaNueva=localStorage.getItem("srcimg");
	var codigoNuevo=localStorage.getItem("code");

	bandera.src=banderaNueva;
	codigo.textContent=codigoNuevo;
}

