var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

$(document).ready(function() {
  $("#btn-filtro").click(ocultar);
});

function ocultar(evento){
  $("#descripcion-filtros").addClass("ocultar");
  $("#content-servicios").removeClass("ocultar");
}