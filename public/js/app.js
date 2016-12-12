var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  /*var slider = document.getElementById('rango');
  noUiSlider.create(slider, {
   start: [20, 80],
   connect: true,
   step: 1,
   range: {
     'min': 0,
     'max': 100
   },
   format: wNumb({
     decimals: 0
   })
  });*/

/* $('.carousel.carousel-slider').carousel({full_width: true});*/

/*var carousel = new Carousel({
    id: "carousel",  // id of the carousel container
    autoplay: false, // starts the rotation automatically
    interval: 1500,  // interval between slide changes
    initial: 0,      // slide to start with
    dots: true,      // show navigation dots
    arrows: true,    // show navigation arrows
    buttons: true    // show play/stop buttons
});

carousel.initSlide(6);*/

$('#pagination-footer').materializePagination({
  lastPage: 20,
  firstPage:  1,
  align: 'left', 
  urlParameter: 'page',
  useUrlParameter: true,
  onClickCallback: function(){}
});