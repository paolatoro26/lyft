 function init()
{
    var paises=
  [{"nombre":"Australia", "phone_code": "355", "imagen":'iconos/paises/au.png'},   
  {"nombre":"Canada","phone_code": "49" , "imagen": 'iconos/paises/ca.png'},  
  { "nombre":"China","phone_code": "213","imagen": 'iconos/paises/cn.png'},
  { "nombre":"Francia","phone_code": "213","imagen": 'iconos/paises/fr.png'},
  { "nombre":"India","phone_code": "213","imagen": 'iconos/paises/in.png'},
  { "nombre":"Japon","phone_code": "213","imagen": 'iconos/paises/jp.png'},
  { "nombre":"Mexico","phone_code": "213","imagen": 'iconos/paises/mx.png'},
  { "nombre":"Puerto Rico","phone_code": "213","imagen": 'iconos/paises/pa.png',},
  { "nombre":"United Kingdom","phone_code": "213","imagen": 'iconos/paises/cn.png'},
  {"nombre":"Australia", "phone_code": "355", "imagen":'iconos/paises/au.png'},
  {"nombre":"Australia", "phone_code": "355", "imagen":'iconos/paises/au.png'},
    ];
    var listaPaises= document.getElementById("lista-paises");//ul
    var link =list.getElementsByTagName("a");//enlace
    for (var i=0 ;i<link.length;i++){
		link[i].addEventListener('click', onLinkClick);
    }
}

function onLinkClick(evt)
{   
    var imgSrc=evt.currentTarget.getElementsByClassName("imagen")[0].src;
    var codigo=evt.currentTarget.getElementsByClassName("phone_code")[0].textContent;
    localStorage.setItem('srcimg',imgSrc);
    localStorage.setItem('phone_code',codigo);
}
