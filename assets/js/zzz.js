jQuery( function($){ $(document).ready(function() {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 10,
        autoplay: true,
        autoplayHoverPause:true,
        loop: true,
        nav:true,
        dots:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      })
    })})