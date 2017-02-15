
function init()
{
	var lista=document.getElementById("lista-paises");
	var links=lista.getElementsByTagName("a");
	
	for (var i=0; i<links.length; i++)
	{
		links.addEventListener("click", obtenerPais)
	}
}

function obtenerPais(evt)
{
	localStorage.setItem("pais", evt.target)
}

