//---------------- CODIGO CON JQUERY ----------------
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.457435, lng: -71.53119},
    zoom: 15
  });
  var latLongPazPeru={lat: -16.457435, lng:-71.53119};
  var marker = new google.maps.Marker({
    position: latLongPazPeru,
    map: map,
    title: 'Aqui estoy!!',
    label:"w",
    icon:""//ruta del imagen
  	});

}
$(document).ready(init);
function init()
{
  seleccionAuto();
}
function seleccionAuto()
{
  var list = $("li");
  $.each(list,function(){
  $(this).on('click',onLinkClick)
   }); 
}
function onLinkClick(evt)
{   
  var img=$(evt.currentTarget).find("img").attr("src");
  localStorage.setItem('imgauto',img);
  var nameCar=$(evt.currentTarget).find(".a-name").text();
  localStorage.setItem('nameauto',nameCar);
}

/* -------------- CODIGO SOLO JAVASCRIPT ------------
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.457435, lng: -71.53119},
    zoom: 15
  });

  var latLongPazPeru={lat: -16.457435, lng:-71.53119};

  var marker = new google.maps.Marker({
    position: latLongPazPeru,
    map: map,
    title: 'Aqui estoy!!',
    label:"w",
    icon:""//ruta del imagen
  	});
}*/
/* -----------OTRA MANERA DE LLAMAR MAP -------
function initMap()
{
	var mapConfig={
		center:{
				lat:-16.457325493256;
				lng: -71.134553566;
					},
			zoom:8
	};
	miMapa= new google.maps.Map(document.getElementById("map"),mapConfig);//donde aparecera
		/*{
			center:{
				lat:-16.457,
				lng: 150.644;
					},
			zoom:8
			}	
		);	
	var latLongPazPeru={lat:-16.457,lng: -71.134553566};
}
//preferible usar iconos en png*/