
//---------------- CODIGO CON JQUERY ----------------
$(document).ready(init);
function init()
{
	$("#name").keyup(validarNombre);
	//$("#email").keyup(validarEmail);
}
function crearAlerta(container,mensaje)
{
	var existeSpan=$(container).find("span");
	var span=$("<span> + mensaje + </span>")
	if(existeSpan.length=="")
	{
		container.append(span);
	}
}
function validarNombre(evt)
{    
	var contenedor = $(".nombre");
	if($(evt.target).val()=="")
       crearAlerta(contenedor,"pao")
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

