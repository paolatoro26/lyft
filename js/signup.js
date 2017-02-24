//---------------- CODIGO CON JQUERY ----------------
$(document).ready(init);
function init()
{
	var imgFlag=localStorage.getItem('srcimg');
	var cofigoFlag=localStorage.getItem('code');
	$("img").attr("src",imgFlag)
	$("#span").text(cofigoFlag);
	$("#codigo-pais").keydown(soloNumeros);
	$(".NEXT").click(mostrarCodigo);
}
function soloNumeros(event)
{
	var input =$("#codigo-pais");
	if(event.keyCode < 45 || event.keyCode > 57) 
		event.preventDefault();		
}
function mostrarCodigo()
{
	var input=$("#codigo-pais");
	var val=false;
	
	if(input.val()!="")
	{
		var telefono=localStorage.setItem("fono",input.val());
		var random = numeroRandom(999,100);
		var concatRandom = "LAB-"+ Math.floor(random)
		alert(concatRandom);
		$("a").attr("href","datos.html");
		val = true;
	}
	return val	;
}
function numeroRandom(a,b)
{
	return Math.random()*((a-b)+b);
}
/* -------------- CODIGO SOLO JAVASCRIPT ------------

function soloNumeros();
{
	var celUsuario=$("input").val();
	var fonoUsuario=localStorage.setItem('fono',celUsuario)
		if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;
}
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