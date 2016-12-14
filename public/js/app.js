new WOW().init();
    
     $('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1
      });

     $('.alojamientos').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
      });

     $('.paises').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 6,
        slidesToScroll: 1
      });

    $('.solidario').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1
      });

    $('#btn-search').click(function() {
  		window.location.href = "/prueba-search.html";
	});

