// HERO SLIDER
var menu = [];
jQuery('.swiper-slide').each(function (index) {
    menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
});
var interleaveOffset = 0.5;
var swiperOptions = {
    loop: true,
    // autoplay:false,
    speed: 1000,
    parallax: true,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,

    },
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    on: {
        progress: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = swiper.width * interleaveOffset;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
            }
        },

        touchStart: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
            }
        },

        setTransition: function (speed) {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
            }
        }
    }
};

var swiper = new Swiper(".swiper-container", swiperOptions);

// DATA BACKGROUND IMAGE
var sliderBgSetting = $(".slide-bg-image");
sliderBgSetting.each(function (indx) {
    if ($(this).attr("data-background")) {
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
});



// menu
const header = $('header').outerHeight();
const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");
const menuList = document.getElementById("menulist");

// Show and Hide Navbar Menu
burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    menuList.classList.toggle("is-active");

    if (menuList.classList.contains("is-active")) {
        //   navbarMenu.style.height = 400+ "px";
        $("#menulist").css("height", "calc(100vh - " + header + "px)")
        //  navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";

    } else {
        menuList.removeAttribute("style");
    }
});


/*screoo bar */

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('header').addClass("sticky");
    } else {
      $('header').removeClass("sticky");
    }
  });


    // JAVA SCRIPT LODER

    var loader = document.getElementById('loader');
    window.addEventListener('load', function () {
        loader.style.display = 'none';
    })
