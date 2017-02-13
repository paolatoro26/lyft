
function init()
{
	var lista=document.getElementById("lista-paises");
	var links=lista.getElementsByTagName("a");
	for (var i=0; i<links.length; i++)
	{
		console.log(links);
	}
}
//select pais
var button=document.getElementById("button").value;
button.addEventListener("click", onButtonClick);
function  onButtonClick()
{
	var input=document.getElementById("");
	localStorage.setItem("number",input.value);
	alert("click");
}
if(!/[0-9]+/.test(correo))
        {
            alert("codigo incorrecto!");
        }
 
