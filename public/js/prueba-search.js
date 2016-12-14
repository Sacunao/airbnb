var firstPosition = undefined;
var load = function() {
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(cargaExitosa, error);
    }


};

var cargaExitosa = function(posicion) {

    var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon);
    firstPosition = latlon;
    var mapa = document.getElementById('map')
    var myOptions = {
        center:latlon,zoom:3,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        zoomControl:false,
        streetViewControl:false,
    };
    
    var mostrarMap = new google.maps.Map(document.getElementById('map'), myOptions);

        var contentString = '<img src="img/33.jpg" width="300px">'+
        '<i class="heart-search material-icons"></i>' +
        '<a href="" target="_blank">'+
        '<p class="black-text"><strong class="blue-text">New:</strong>Room in New, quiet and brig</p></a>'+
        '<div>Habitación privada'+
        '<div class="cnt-general-starts">'+
        '<i class="xtra-small color-green material-icons">&#xE838;</i>'+
        '<i class="xtra-small color-green material-icons">&#xE838;</i>'+
        '<i class="xtra-small color-green material-icons">&#xE838;</i>'+
        '<i class="xtra-small color-green material-icons">&#xE839;</i>'+
        '<i class="xtra-small material-icons">&#xE83A;</i>'+
        '</div>'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300

    });

        

    var iconBase = "img/";
    var marker = new google.maps.Marker({
    position: latlon,
    map: mostrarMap,
    icon: iconBase + 'price.png'
  });

    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
    });
  
};

var error = function (error) {
     console.log(error);
};



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
        var markerOptions = { position: results[0].geometry.location, icon: iconBase1 + 'price.png' }
        var marker = new google.maps.Marker(markerOptions);
        marker.setMap(map);

        var contentString1 = '<img src="img/36.jpg" width="300px">'+
        '<i class="heart-search material-icons"></i>' +
        '<a href="" target="_blank">'+
        '<p class="black-text">Flowery Inn Villa with garden</p></a>'+
        '<div>Casa/apto'+
        '<div class="cnt-general-starts">'+
        '<i class="xtra-small color-green material-icons">&#xE838;</i>'+
        '<i class="xtra-small color-green material-icons">&#xE838;</i>'+
        '<i class="xtra-small color-green material-icons">&#xE838;</i>'+
        '<i class="xtra-small color-green material-icons">&#xE839;</i>'+
        '<i class="xtra-small material-icons">&#xE83A;</i>'+
        '</div>'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
        content: contentString1,
        maxWidth: 300
        });      
    }else{

      alert("Geocoding no tuvo éxito debido a: " + status);
    }

    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
    });

    $("#checkbox-1").click(function(){
       var features = [];
       var array = CargarListaCasa();
       var mapOptions = {
            zoom: 14,
            center:  new google.maps.LatLng(firstPosition.lat(), firstPosition.lng())
       };
       var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        
       $.each(array, function (index, value) {
        var contentString2 = '<img src="img/36.jpg" width="300px">'+
        '<i class="heart-search material-icons"></i>' +
        '<a href="" target="_blank">'+
        '<p class="black-text">Flowery Inn Villa with garden</p></a>'+
        '<div>Casa/apto'+
        '<div class="cnt-general-starts">'+
        '<i class="xtra-small color-green material-icons">&#xE838;</i>'+
        '<i class="xtra-small color-green material-icons">&#xE838;</i>'+
        '<i class="xtra-small color-green material-icons">&#xE838;</i>'+
        '<i class="xtra-small color-green material-icons">&#xE839;</i>'+
        '<i class="xtra-small material-icons">&#xE83A;</i>'+
        '</div>'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
        content: contentString2,
        maxWidth: 300
        }); 

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(value.latitud, value.longitud),
            map:map
        });

        google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
        });

        console.log("paso" + index);
       });     
    });

    $("#checkbox-2").click(function(){ 
      var features = [];
       var array = CargarListaHabitacion();
       var mapOptions = {
            zoom: 14,
            center:  new google.maps.LatLng(firstPosition.lat(), firstPosition.lng()),

       };
       var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        
       $.each(array, function (index, value) {  
         var contentString3 = '<img src="img/33.jpg" width="300px">'+
        '<i class="heart-search material-icons"></i>' +
        '<a href="" target="_blank">'+
        '<p class="black-text">Flowery Inn Villa with garden</p></a>'+
        '<div>Casa/apto'+
        '<div class="cnt-general-starts">'+
        '<i class="xtra-small color-green material-icons">&#xE838;</i>'+
        '<i class="xtra-small color-green material-icons">&#xE838;</i>'+
        '<i class="xtra-small color-green material-icons">&#xE838;</i>'+
        '<i class="xtra-small color-green material-icons">&#xE839;</i>'+
        '<i class="xtra-small material-icons">&#xE83A;</i>'+
        '</div>'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
        content: contentString3,
        maxWidth: 300
        });      
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(value.latitud, value.longitud),
            map: map,
        });

        google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
        });


        console.log("paso" + index);

       });
    });
    $("#checkbox-3").click(function(){   
      var features = [];
       var array = CargarListaHbitacionCompartida();
       var mapOptions = {
            zoom: 14,
            center:  new google.maps.LatLng(firstPosition.lat(), firstPosition.lng())
       };
       var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        
       $.each(array, function (index, value) {      
        var marker = new google.maps.Marker({

            position: new google.maps.LatLng(value.latitud, value.longitud),
            map: map,
            clickable: false,
            content: 'Map Marker'
        });


        console.log("paso" + index);

       });
            
  
    });
       
}

$(document).ready(load);

function CargarListaCasa() {

    var obj1 = {
        nombreCasa: "Condomonio pardo",
        direccion: "Av. Grau 272",
        distrito: "Miraflores",
        horarioAtencion: "24 horas",
        nombreContacto: "Ángel Rodríguez",
        ubicacion: "Miraflores",
        latitud: -12.120948,
        longitud: -77.034825
    };
    var obj2 = {
        nombreCasa: "Casa de la Cruz",
        direccion: "Calle José Galvez 893",
        distrito: "Miraflores",
        horarioAtencion: "24 horas",
        nombreContacto: "Raúl Borja",
        ubicacion: "Miraflores",
        latitud: 12.121213,
        longitud: -77.038810
    };
    var obj3 = {
        nombreCasa: "Conjunto residencial campanita",
        direccion: "Calle 2 de Mayo 970",
        distrito: "Miraflores",//"Surco",
        horarioAtencion: "9am a 7pm",
        nombreContacto: "Merly Luna",
        ubicacion: "Miraflores",
        latitud: -12.117908,
        longitud: -77.038360
    };/////////////////////////////////////////hi
    var obj4 = {
        nombreCasa: "Casa de la familia Quispe",
        direccion: "Calle 2 de Mayo 864",
        distrito: "Lima",
        horarioAtencion: "9am a 6pm",
        nombreContacto: "Leila Quispe",
        ubicacion: "Miraflores",
        latitud: -12.117917,
        longitud: -77.037708
    };
    var obj5 = {
        nombreCasa: "condominio los robles",
        direccion: "Calle Coronel Inclán 227",
        distrito: "Lima",
        horarioAtencion: "9am a 6pm",
        nombreContacto: "Julio Sánchez",
        ubicacion: "San Luis",
        latitud: -12.117529,
        longitud: -77.031421
    };
    var obj5 = {
        nombreCasa: "condominio los robles",
        direccion: "Calle Coronel Inclán 227",
        distrito: "Lima",
        horarioAtencion: "9am a 6pm",
        nombreContacto: "Julio Sánchez",
        ubicacion: "San Luis",
        latitud: -12.117529,
        longitud: -77.031421
    };

     var obj6 = {
        nombreCasa: "Condominio los Portales",
        direccion: "Pardo 601, Distrito de Lima 15064, Perú",
        distrito: "Lima",
        horarioAtencion: "9am a 8pm",
        nombreContacto: "Janeth Quispe",
        ubicacion: "Miraflores",
        latitud: -12.1670502,
        longitud: -77.02489159999999
    };

    var obj7 = {
        nombreCasa: "Well Equipeed Room",
        direccion: "Óvalo de Miraflores, Miraflores 15074, Perú",
        distrito: "Lima",
        horarioAtencion: "9am a 8pm",
        nombreContacto: "Lilina Campos",
        ubicacion: "Miraflores",
        latitud: -12.119557878342858,
        longitud:-77.02924489974976
    };

    var obj8 = {
        nombreCasa: "Condomio el arbolito",
        direccion: "Calle General Iglesias 622, Miraflores 15074, Perú",
        distrito: "Lima",
        horarioAtencion: "9am a 8pm",
        nombreContacto: "Lilina Campos",
        ubicacion: "Miraflores",
        latitud: -12.113767496841845,
        longitud:-77.0382571220398
    };
     var obj9= {
        nombreCasa: "Condomio pudiente",
        direccion: "Av. Sta. Cruz 1012, Miraflores 15074, Perú",
        distrito: "Lima",
        horarioAtencion: "9am a 8pm",
        nombreContacto: "Sheyla ",
        ubicacion: "Miraflores",
        latitud: -12.113557698052471,
        longitud:-77.03920125961304
    };
    var obj10= {
        nombreCasa: "Condomio Sheylong",
        direccion: "Av. Angamos Oeste 1217, Miraflores 15073, Perú",
        distrito: "Lima",
        horarioAtencion: "9am a 8pm",
        nombreContacto: "Sheyla ",
        ubicacion: "Miraflores",
        latitud: -12.112886340818465,
        longitud:-77.041175365448
    };

    var Array = [];
    Array.push(obj1);
    Array.push(obj2);
    Array.push(obj3);
    Array.push(obj4);
    Array.push(obj5);
    Array.push(obj6);
    Array.push(obj7);
    Array.push(obj8);
    Array.push(obj9);
    Array.push(obj10);

    return Array;
};

function CargarListaHabitacion() {

    var obj1 = {
        nombreHabitacion: "Torres de Grau",
        direccion: "Av.Grau 365",
        contacto: "Ing. Víctor Ruiz",
        latitud: -12.121896,
        longitud: -77.034776
    };
    var obj2 = {
        nombreProyecto: "Torres Pardo",
        direccion: "Calle Francia 715 Miraflores",
        contacto: "Jaime Salcedo",
        latitud: -12.122274,
        longitud: -77.038172
    };
    var obj3 = {
        nombreProyecto: "Condominios LarcoMar",
        direccion: "Jorge Chavez 509",
        conVista: "Al Mar",
        contacto: "Víctoria Ruiz",
        latitud: -12.123451,
        longitud: -77.036878
    };
    var obj4 = {
        nombreProyecto: "Condominios Miguel Grau",
        direccion: "Av. Grau 485 Miraflores",
        contacto: "Jaime Salcedo",
        latitud: -12.123168,
        longitud: -77.034743
    };
    var obj5 = {
        nombreProyecto: "Condominios Torres Arica",
        direccion: "Calle Arica 262",
        contacto: "Laura perez",
        latitud: -12.117330,
        longitud: -77.035755
    };

    var obj6 = {
        nombreHabitacion: "Safe and Beautiful private ",
        direccion: "Calle Almirante Lord Cochrane 554, Miraflores 15073, Perú",
        contacto: "Ing. Candy Soto",
        latitud: -12.111375780869242,
        longitud: -77.042076587677
    };

    var obj7 = {
        nombreHabitacion: "Los amigos del mundo ",
        direccion: "Av. Angamos Oeste 1475, Miraflores 15073, Perú",
        contacto: "Ing. Sandy Campos",
        latitud: -12.111417740983228,
        longitud: -77.04276323318481
    };
    var obj8 = {
        nombreHabitacion: "Room & Room ",
        direccion: "Calle Ignacio Merino 788, Miraflores 15073, Perú",
        contacto: "Ing. Omar Orange",
        latitud: -12.11099813954658,
        longitud:-77.04323530197144
    };
    var obj9 = {
        nombreHabitacion: "Cuartitos",
        direccion: "Av. Angamos Oeste 1675, Miraflores 15073, Perú",
        contacto: "Sofia Ramos",
        latitud: -12.110536577204664,
        longitud:-77.04599261283875
    };
    var obj10 = {
        nombreHabitacion: "Tus amigos",
        direccion: "Av Mariscal La Mar 1168, Miraflores 15074, Perú",
        contacto: "Milagros Contreras",
        latitud:-12.110599517571002,
        longitud:-77.04831004142761
    };

    var Array = [];
    Array.push(obj1);
    Array.push(obj2);
    Array.push(obj3);
    Array.push(obj4);
    Array.push(obj5);
    Array.push(obj6);
    Array.push(obj7);
    Array.push(obj8);
    Array.push(obj9);
    Array.push(obj10);

    return Array;
};

function CargarListaHbitacionCompartida() {

    var obj1 = {
        nombreHabitacionCompartida: "Torres de Berlín",
        direccion: "Calle Berlín 778",
        nombreContacto: "Jorge Luna",
        latitud: -12.120047,
        longitud: -77.037901
    };
    var obj2 = {
        nombreHabitacionCompartida: "Condominios La Independencia",
        direccion: "Calle Independencia 452",
        nombreContacto: "Víctor Saenz",
        latitud: -12.115715,
        longitud: -77.032386
    };
    var obj3 = {
        nombreHabitacionCompartida: "Condominios Los Ángeles",
        direccion: "Calle José Gálvez 350",
        nombreContacto: "Sandra Rojas",
        latitud: -12.121736,
        longitud: -77.033105
    };
    var obj4 = {
        nombreHabitacionCompartida: "Condominios Cerro Viejo",
        direccion: "Calle Gnrl. Borgoño 351",
        nombreContacto: "Sandra Rojas",
        latitud: -12.116197,
        longitud: -77.033609
    };
    var obj5 = {
        nombreHabitacionCompartida: "Torres de Nuevo Mundo",
        direccion: "Calle Elías Aguirre 365",
        nombreContacto: "Sandra Rojas",
        latitud: -12.116564,
        longitud: -77.034854
    };

    var obj6 = {
        nombreHabitacionCompartida: "los Temerarios",
        direccion: "Calle Gral Mendiburu 1096, Miraflores 15074, Perú",
        nombreContacto: "Carla Mendez",
        latitud: -12.110977159457434,
        longitud: -77.04912543296814
    };
    var obj7 = {
        nombreHabitacionCompartida: "los Angeles",
        direccion: "Av del Ejército 1156, Miraflores 15074, Perú",
        nombreContacto: "Carlos Llacua",
        latitud: -12.111082059886664,
        longitud: -77.04996228218079
    };
    var obj8 = {
        nombreHabitacionCompartida: "Las Tucanes",
        direccion: "Calle Piura 793, Miraflores 15074, Perú",
        nombreContacto: "Andres Andes",
        latitud: -12.115907435074877,
        longitud: -77.0367980003357
    };
    var obj9 = {
        nombreHabitacionCompartida: "Las Americas",
        direccion: "Calle 2 de Mayo 781, Miraflores 15074, Perú",
        nombreContacto: "Melissa Vila",
        latitud: -12.117963438000212,
        longitud: -77.03696966171265
    };
    var obj10 = {
        nombreHabitacionCompartida: "Los corazones",
        direccion: "Casa Club Pardo, Av. José Pardo, Distrito de Lima 15074, Perú",
        nombreContacto: "Carlos Llacua",
        latitud: -12.119348084105267,
        longitud: -77.03821420669556
    };

    var Array = [];
    Array.push(obj1);
    Array.push(obj2);
    Array.push(obj3);
    Array.push(obj4);
    Array.push(obj5);
    Array.push(obj6);
    Array.push(obj7);
    Array.push(obj8);
    Array.push(obj9);
    Array.push(obj10);

    return Array;
};


