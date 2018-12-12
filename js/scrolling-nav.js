(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function()  {
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        init: function() {
          $('.first-slide').each(function() {
              $(this).find('.innerslider').fadeIn(1000);
          })
        },
        slideChangeTransitionEnd: function() {
          $('.swiper-slide').each(function() {
            if ($(this).index() === swiper.activeIndex) {
                // Fadein in active slide
                $(this).find('.innerslider').fadeIn(1000);
            } else {
                // Fadeout in inactive slides
                $(this).find('.innerslider').fadeOut(1000);
            }
          });
        }
      },
    });
  })

  $.stellar({
      horizontalScrolling: false,
      verticalOffset: 40
    });

 
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 76
  });

})(jQuery); // End of use strict

