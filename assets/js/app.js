(function($) {
    "use strict"; 
 /*  Preloader */
$(window).on('load',function(){
  var preLoder = $(".preloader");       
  preLoder.fadeOut(1500);
});  
 // Sticky Menu 
 
 $(window).on('scroll', function(){
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".header-area").addClass("header-sticky");
  } else {
    $(".header-area").removeClass("header-sticky");
  }
});
/*  Active Class*/
$('.burger-box').on('click' , function(){
  $("#sidebar-navbar,.burger-box").toggleClass('active');
});
/*  Mean Menu */
     $('.header-main-menu').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.header-navbar',  
        meanMenuOpen: "<span></span><span></span><span></span>",
        meanMenuClose: "<span></span><span></span><span></span>", 
       siteLogo: " ",
      });
  /* Banner Slider */
    function bannerslider() {
        var BasicSlider = $('.banner-slider');
        BasicSlider.on('init', function(e, slick) { 
            var $firstAnimatingElements = $('.banner-item:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) { 
            var $animatingElements = $('.banner-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplayspeed:2000,
            infinite: false, 
            dots: true,
            fade: true,  
            arrows: true,
            speed: 0, 
            prevArrow: $('.banner-prev'), 
            nextArrow: $('.banner-next'), 
        });   

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    bannerslider();
  /* Podcast Slider */
$('.podcast-slider').slick({
  autoplay: true,
  autoplayspeed:2000,
  centerMode: true,
  centerPadding: '300px',  
  slidesToShow: 1,
  dots: true, 
  arrows: false,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    { 
      breakpoint: 1200,  
      settings: { 
        centerPadding: '100px',  
      }
    },
    {
      breakpoint: 991,    
      settings: {  
        centerPadding: '50px',  
      }
    },
    {
      breakpoint: 500,    
      settings: {  
        centerPadding: '0',   
      }
    }
  ]
});
/*  current date show  */
$('#spanYear').html(new Date().getFullYear()); 
/* Video Popup */
if($(".mediPlayer").length > 0){ 
  $('.mediPlayer').mediaPlayer(); 
}
  /* Video Popup */
  $('.video-modal').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/', 
          id: 'v=',
          src: 'http://www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
    }
  }); 
/*  Scrolltop  */
function scrolltop(){   
  var wind = $(window);
  wind.on("scroll" ,function(){ 
      var scrollTop = wind.scrollTop();
      if(scrollTop >=500) {
          $(".home-back").addClass("show");
      } else {
          $(".home-back").removeClass("show");
      } 
      
});
$(".home-back").on("click", function(){
  var bodyTop =  $("html, body");
    bodyTop.animate({scrollTop: 0},500,"easeOutCubic");
});

}
scrolltop();    
/*  light dark mode  */
if (window.CSS && CSS.supports("color", "var(--primary)")) {
  var toggleColorMode = function toggleColorMode(e) {
    if (e.currentTarget.classList.contains("light--hidden")) {
      document.documentElement.setAttribute("color-mode", "light"); 

      localStorage.setItem("color-mode", "light");
      return;
    }
    document.documentElement.setAttribute("color-mode", "dark"); 
    localStorage.setItem("color-mode", "dark");
  };
  var toggleColorButtons = document.querySelectorAll(".color-mode__btn");
  toggleColorButtons.forEach(function(btn) {
    btn.addEventListener("click", toggleColorMode);
  });
} else {
  var btnContainer = document.querySelector(".color-mode__header");
  btnContainer.style.display = "none";
}
// Match color to Dark
if (
  localStorage.getItem("color-mode") === "dark" ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localStorage.getItem("color-mode"))
) {
  document.documentElement.setAttribute("color-mode", "dark");
}
 





}(jQuery));
