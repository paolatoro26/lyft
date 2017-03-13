//---------------- CODIGO CON JQUERY ----------------
$(document).ready(init);
function init()
{
	$("#name").keyup(validarNombre);
	$("#email").keyup(validarEmail);
	$(".next").click(llenadoCorrecto);
}
function validarNombre(evt)
{    
	if($(evt.target).val().length==""||/[0-9]+/.test($(evt.target).val()) )
	{
		alert("Nombre incorrecto, ingrese de nuevo por favor")
	}
}
function validarEmail(evt) {
	if(!/[a-zaA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+/.test($(evt.target).val()) )
	{
		alert("Correo incorrecto, ingrese de nuevo por favor")
	}	
}
function llenadoCorrecto()
{
	var nombres=$("#name").val();
	var correo=$("#email").val();
	if(nombres.length=="" || correo.length=="")
	{
		alert("Espacio obligatorio");
		$("footer a").attr("href","datos.html")
	}
}
/* -------------- CODIGO SOLO JAVASCRIPT ------------

function validarEmail()
{
	var alertaSpan = '<span>Correo invalido</span>';
	var input = $("#email");
	if(!/[a-zaA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+/.test(input.val()) )
	{
		if($(".correo").find("span")==0)
			$(".correo").append(alertaSpan);
	}else{
		$(alertaSpan).remove();
	}
}
*/

