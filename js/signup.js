//---------------- CODIGO CON JQUERY ----------------
$(document).ready(init);
function init()
{
	var imgFlag=localStorage.getItem('srcimg');
	var cofigoFlag=localStorage.getItem('code');
	$("img").attr("src",imgFlag)
	$("#span").text(cofigoFlag);
	$("#codigo-pais").keydown(soloNumeros);
	$("#codigo-pais").keyup(longitudNumeros);
	$(".NEXT").click(llenadoCorrecto);
	$(".NEXT").click(mostrarCodigo);
}
var input =$("#codigo-pais");
function soloNumeros(event)
{
	if(event.keyCode >65 || event.keyCode > 57 & event.keyCode !== 08) 
		event.preventDefault();		
}
function longitudNumeros()
{
	var valor=input.val();
	var salida=$("#notificacion");
	if(valor.length<9 || valor.length>9)
	{
		salida.html("<span style='color:red; font-style:Garamond;'>Máximo 9 numeros</span>");
	}
	else{
		salida.html("<span style='color:green; font-style:Garamond;'>Número Válido</span>"); 
	}
}
function llenadoCorrecto()
{
	if (input.val()=="")
		alert("Espacio obligatorio")
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