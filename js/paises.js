//---------------- CODIGO CON JQUERY ----------------
$(document).ready(init);

function init(){
  
  var listaPaises=$("#lista-paises");//ul
  var pais = $.parseJSON(paises);//paises
  $.each(pais,function(){//paises.each(function)
    var htmlPais='<a href="signup.html"> <li class="listaMovil">'+
    '<img class="imagen" src="'+this['imagen']+'" alt="">'+this['nombre']+
    '<span class="phoneC" style="display:none">'+this['phone_code']+'</span></li></a><hr>';

    listaPaises.append(htmlPais);
  });
  asignaEventoClick();
}
function asignaEventoClick ()
{
  var list = $("li");
  $.each(list,function(){
  $(this).on('click',onLinkClick)
   }); 
}
function onLinkClick(evt)
{   
    var imgSrc=$(evt.currentTarget).find(".imagen").attr("src");
    var codigo =$(evt.currentTarget).find(".phoneC").text();
    localStorage.setItem('srcimg',imgSrc);
    localStorage.setItem('code',codigo);
}
  
/* -------------- CODIGO SOLO JAVASCRIPT ------------
function init()
{
  var paises=
  [{"nombre":"Australia", "phone_code": "355", "imagen":'images/paises/au.png'},   
  {"nombre":"Canada","phone_code": "49" , "imagen": 'images/paises/ca.png'},  
  { "nombre":"China","phone_code": "210","imagen": 'images/paises/cn.png'},
  { "nombre":"Francia","phone_code": "165","imagen": 'images/paises/fr.png'},
  { "nombre":"India","phone_code": "217","imagen": 'images/paises/in.png'},
  { "nombre":"Japon","phone_code": "211","imagen": 'images/paises/jp.png'},
  { "nombre":"Mexico","phone_code": "163","imagen": 'images/paises/mx.png'},
  { "nombre":"Puerto Rico","phone_code": "303","imagen": 'images/paises/pa.png',},
  { "nombre":"United Kingdom","phone_code": "13","imagen": 'images/paises/cn.png'},
  {"nombre":"Australia", "phone_code": "355", "imagen":'images/paises/au.png'},
  {"nombre":"Australia", "phone_code": "355", "imagen":'images/paises/au.png'},
    ];
    var listaPaises= document.getElementById("lista-paises");//ul
        for(var i  in paises)
        {
        var html='<a href="signup.html"> <li><img class="imagen"  src="'+paises[i].imagen+'" alt="">'+paises[i].nombre+'<span class="phoneC" style="display:none">'+paises[i].phone_code+'</span></li></a>'+"<hr>";
    
        listaPaises.innerHTML += html;
        }
    var link =document.getElementsByTagName("li");
    for (var i=0 ;i<link.length;i++){
		link[i].addEventListener('click', onLinkClick);
    }
}
function onLinkClick(evt)
{   
    var imgSrc=evt.currentTarget.getElementsByClassName("imagen")[0].src;
    var codigo =evt.currentTarget.getElementsByClassName("phoneC")[0].textContent;
    localStorage.setItem('srcimg',imgSrc);
    localStorage.setItem('code',codigo);
}
*/