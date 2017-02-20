 function init()
{
    var paises=
  [{"nombre":"Australia", "phone_code": "355", "imagen":'images/paises/au.png'},   
  {"nombre":"Canada","phone_code": "49" , "imagen": 'images/paises/ca.png'},  
  { "nombre":"China","phone_code": "213","imagen": 'images/paises/cn.png'},
  { "nombre":"Francia","phone_code": "213","imagen": 'images/paises/fr.png'},
  { "nombre":"India","phone_code": "213","imagen": 'images/paises/in.png'},
  { "nombre":"Japon","phone_code": "213","imagen": 'images/paises/jp.png'},
  { "nombre":"Mexico","phone_code": "213","imagen": 'images/paises/mx.png'},
  { "nombre":"Puerto Rico","phone_code": "213","imagen": 'images/paises/pa.png',},
  { "nombre":"United Kingdom","phone_code": "213","imagen": 'images/paises/cn.png'},
  {"nombre":"Australia", "phone_code": "355", "imagen":'images/paises/au.png'},
  {"nombre":"Australia", "phone_code": "355", "imagen":'images/paises/au.png'},
    ];
    var listaPaises= document.getElementById("lista-paises");//ul
  
        for(var i  in paises)
        {
        var html='<a href="signup.html"> <li><img class="imagen"  src="'+paises[i].imagen+'" alt="">'+paises[i].nombre+'<span class="phoneC">'+paises[i].phone_code+'</span></li></a>';
    
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
    var codigo=evt.currentTarget.getElementsByClassName("phoneC")[0].textContent;
    localStorage.setItem('srcimg',imgSrc);
    localStorage.setItem('code',codigo);
}
