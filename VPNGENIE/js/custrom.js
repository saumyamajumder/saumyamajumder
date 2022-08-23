$('.owl-carousel').owlCarousel({
  loop: false,
  nav: false,
  margin: 70,
  //navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    768: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});



$(function () {
  $(".content-module-one-section-item-show").slice(0, 3).show();
  $("body").on('click touchstart', '.loadmore', function (e) {
    e.preventDefault();
    $(".content-module-one-section-item-show:hidden").slice(0, 1).slideDown();
    if ($(".content-module-one-section-item-show:hidden").length == 0) {
      $(".loadmore").css('visibility', 'hidden');
    }
    $('html,body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
});





// Accordion 

$(document).ready(function () {
  $(".accordion-module > .accordion-heading").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".accordion-content")
        .slideUp(200);
      $(".accordion-module > .accordion-heading i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".accordion-module > .accordion-heading i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".accordion-module > .accordion-heading").removeClass("active");
      $(this).addClass("active");
      $(".accordion-content").slideUp(200);
      $(this)
        .siblings(".accordion-content")
        .slideDown(200);
    }
  });
});


// Frequently Accordion 

$(document).ready(function ($) {
  $('.frequently-accordion').find('.frequently-accordion-toggle').click(function () {
    var isActive = $(this).hasClass("active");
    $('.frequently-accordion-toggle').removeClass('active')
    if (!isActive) {
      $(this).toggleClass('active');
    }

    $(this).next().slideToggle('fast');
    //Hide the other panels
    $(".frequently-accordion-content").not($(this).next()).slideUp('fast');

  });
});




// sidemenu arrow open
/* Nav */
jQuery('header .menu-icon').click(function () {
  jQuery(this).toggleClass('open');
  jQuery(this).parents('body').find('.side-menu').toggleClass('open-menu');
  jQuery('body').toggleClass('menu-open');
});

if (jQuery('.scroll-nav').length) {
  var navigationTop = jQuery('.scroll-nav').offset().top;
}
if (jQuery('.scroll-anchor').length) {
  var scroll_anchor = jQuery('.scroll-anchor').offset().top;
}
