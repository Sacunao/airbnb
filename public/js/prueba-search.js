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


$('.search1').on('click', function() {
    var address = $('.search').val();
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address}, geocodeResult);
});
 
var geocodeResult= function(results, status) {
    if (status == 'OK') {
        var mapOptions = {
            center: results[0].geometry.location,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map($("#map").get(0), mapOptions);
        map.fitBounds(results[0].geometry.viewport);

 
        var iconBase1 = "img/";
        var markerOptions = { position: results[0].geometry.location, icon: iconBase1 + 'circulo.png' }
        var marker = new google.maps.Marker(markerOptions);
        marker.setMap(map);

           
    } else{

      alert("Geocoding no tuvo éxito debido a: " + status);
    }
}