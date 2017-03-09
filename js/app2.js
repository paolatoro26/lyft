var map;
$(document).ready(init);
function init()
{
  solicitarEstimado();
}
function solicitarEstimado()
{
  $.ajax({
    url:"https://clientes.geekadvice.pe/api/estimado",
    data:{"tipo":1}
  }).success(function(_data){
    update(_data)
  })
}
function update(_info)
{
  var imgauto=localStorage.getItem('imgauto');
  var nameCar=localStorage.getItem('nameauto');
  $(".calle").text(_info.destino);
  $(".origen").text(_info.origen);
  $(".precio").text(_info.estimado.moneda+_info.estimado.min+"-"+_info.estimado.max);
  $(".a-selecto").attr("src",imgauto);
  $(".selecto h2").text(nameCar);
}
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
    icon:"images/taxi.ico"//ruta del imagen
    });
}


