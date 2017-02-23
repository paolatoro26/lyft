//---------------- CODIGO CON JQUERY ----------------


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