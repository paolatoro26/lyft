
//---------------- CODIGO CON JQUERY ----------------
$(document).ready(init);
function init()
{
	$("#name").keydown(validarNombre);
	//$("#email").keyup(validarEmail);
}
function crearAlerta(container,mensaje)
{
	var existeSpan=$(container).find("span");
	if(existeSpan.length=="")
	{
		container.append(mensaje);
	}
}
function validarNombre()
{
	var contenedor=$(".nombre");
	var input=$("#name").val();
	if(!/[a-z]+/.test(input))
		{
			crearAlerta(contenedor, "Nombre invalido");
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


//select pais
var codigoPais=document.getElementById("codigo-pais").value;
if(!/[0-9]+/.test(correo))
        {
            alert("codigo incorrecto!");
        }
*/

