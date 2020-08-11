//var damaxMobileIndicator = jQuery('#damax_mobile_indicator');

//* Load
jQuery(window).bind('load', function() {
    damaxStickyHeader();
    topHeight();
});

//* Resize
jQuery(window).resize(function() {
    topHeight();
});

//* Scroll
jQuery(window).scroll(function() {
    damaxStickyHeader();
});

//* Register
function damaxRegister() {
    damaxToggleMenu();
    damaxStickyHeader();
    topHeight();
}
damaxRegister();


//** BEG CUSTOM FUNCTIONS **//



function topHeight() {
    if (jQuery(window).width() < 992 && jQuery(window).height() > 600) {
  let vh = window.innerHeight * 0.01;
  $('.top-home').css("height", vh * 100);
  $('.top-home .item').css("height", vh * 100);
}
}


function damaxStickyHeader() {
    if ($(window).scrollTop() > 54) {
        $('.header').addClass("sticky_header");
    } else {
        $('.header').removeClass("sticky_header");
    }

    if ($(window).scrollTop() > $(window).height()) {
        $('.home .header').addClass("sticky_header");
    } else {
        $('.home .header').removeClass("sticky_header");
    }


   if (jQuery(window).width() < 992) {

    if ($(window).scrollTop() > 0) {
        $('.home .header').addClass("sticky_header");
    } else {
        $('.home .header').removeClass("sticky_header");
    }

}


}




function damaxToggleMenu() {
    $(".toggle").click(function() {
        $(this).toggleClass("on");
        $(".mob-menu-container").slideToggle();
        $("body").toggleClass("menu-expand");
    });

    $(".nav-menu ul li.has-child > a").click(function(e) {
        if (jQuery(window).width() < 992) {
        e.preventDefault();
    }
    });


$('.nav-menu ul li.has-child').on('click', function(){
  event.preventDefault();
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $(this).find('.dropdown').slideUp(100);
  }else{
    $('.nav-menu ul li.has-child').removeClass('active');
    $(this).addClass('active');
    $('.dropdown').slideUp(100);
    $(this).find('.dropdown').slideDown(100);
  }
});


}



 $('[data-target-tab]').each(function () {

        const $this = $(this);
        const $target = $this.data('target-tab');

        if ($this.data('trigger')) {
            $this.hover(function () {
                tab();
            });
        }
        else {
            $this.click(function () {
                tab();
            });
        }

        function tab() {

            var $targetTab = $('[data-target-tab="' + $target + '"]');
            var $tab = $('[data-tab="' + $target + '"]');

            $targetTab.attr('aria-expanded', true)
                .attr('aria-selected', true)
                .parent('li').addClass('active')
                .siblings().removeClass('active')
                .find('[data-target-tab]')
                .attr('aria-selected', false)
                .attr('aria-expanded', false);

            $tab.addClass('active').siblings('.tab-panel').removeClass('active')
        }

    });






$('.marquee').marquee({
    duration: 40000,
    startVisible: true,
    duplicated: true,
    gap: 0,
  });

$('.marquee2').marquee({
    duration: 60000,
    startVisible: true,
    duplicated: true,
    gap: 0,
  });





// jQuery(".phone-input").inputmask({"mask": "8 (999) 999-99-99"});


var slider = $(".top-sld");

slider.owlCarousel({
    dots: true,
    nav: true,
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'fadeOut',
    mouseDrag: false,
    navText: ["<img class='svg' src='img/back.svg' alt=''>", "<img class='svg' src='img/next.svg' alt=''>" ],
});


var banslider = $(".banner-sld");

banslider.owlCarousel({
    dots: false,
    nav: false,
    items: 1,
    loop: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    mouseDrag: false,
});



var offslider = $(".offer-sld");

offslider.owlCarousel({
    dots: false,
    nav: true,
    items: 1,
    loop: false,
    margin: 10,
    navText: ["<img class='svg' src='img/o-back.svg' alt=''>", "<img class='svg' src='img/o-next.svg' alt=''>" ],
});


 $("#btn-to-bottom").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });


$('[data-fancybox]').fancybox({
    toolbar  : true,
     loop: true,
     buttons: [
    "zoom",
    "download",
    "close"
  ],
})


jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });

// var wow = new WOW({
//     boxClass: "wow",
//     animateClass: "animated",
//     offset: 0,
//     mobile: !1,
//     live: !0,
//     callback: function(e) {},
//     scrollContainer: null,
//     resetAnimation: !0
// });
// wow.init();
