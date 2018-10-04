
/*
------------------------------------------
   ------------------------------------------
Version: 1.0
File Name : Active Js File For Plugins
   ------------------------------------------
------------------------------------------
*/

(function ($) {
  "use strict";
  jQuery(document).ready(function($){
    /* ------------------------------- 
            Stick Navigation
    ------------------------------- */
    var windows = $(window);
    var sticky = $('#sticky-header');

    windows.on('scroll', function () {
      var scroll = windows.scrollTop();
      if (scroll < 150) {
        sticky.removeClass('sticky');
      } else {
        sticky.addClass('sticky');
      }
    });
    
    /* ------------------------------- 
              Mobile Menu
    ------------------------------- */
    $('#primary_menu').meanmenu({
      meanScreenWidth: "1024",
      meanMenuContainer: '.mobile-menu'
    });

    /* ------------------------------- 
    Home Slider
    ------------------------------- */
    $("#lp-slider-active").owlCarousel({
      items: 1,
      nav: true,
      dots: true,
      autoplay: true,
      loop: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      mouseDrag: false,
      touchDrag: false,
      smartSpeed: 600
    });
    
  });

  jQuery(window).load(function(){
    
  });
  
}(jQuery));