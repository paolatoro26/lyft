$(document).ready(init);
function init()
{
  solicitarEstimado();
}
function solicitarEstimado()
{
  $.ajax({
    url:"https://clientes.geekadvice.pe/api/carrera",
    data:{"tipo":1}
  }).success(function(_data){
    update(_data)
  })
}
function update(_info)
{
  $(".foto-rider").attr("src",_info.conductor.url);
  $(".nombre b").text(_info.conductor.name);
  $(".costo span").text(_info.estimado.moneda+_info.final);
  //alert(_info.estimado.min)
}