
//---------------- CODIGO CON JQUERY ----------------
$(document).ready(init);
function init()
{
	$("#name").keyup(validarNombre);
	$("#email").keyup(validarEmail);
}
var correcto = true;
function validarNombre(evt)
{    
	if($(evt.target).val()==""||/[0-9]+/.test($(evt.target).val()) )
	{
		alert("Nombre incorrecto, ingrese de nuevo por favor")
   		correcto = false
	}else{
		correcto =true;
	}
       

}
function validarEmail(evt) {
	if(!/[a-zaA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+/.test($(evt.target).val()) )
	{
		alert("Correo incorrecto, ingrese de nuevo por favor")
		correcto = false
	}else{
		correcto = true;
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

