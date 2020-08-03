//var damaxMobileIndicator = jQuery('#damax_mobile_indicator');

//* Load
jQuery(window).bind('load', function() {
    damaxStickyHeader();
    priceMatchHeight();
});

//* Resize
jQuery(window).resize(function() {
    priceMatchHeight();
});

//* Scroll
jQuery(window).scroll(function() {
    damaxStickyHeader();
});

//* Register
function damaxRegister() {
    damaxToggleMenu();
    damaxStickyHeader();
}
damaxRegister();


//** BEG CUSTOM FUNCTIONS **//s


function priceMatchHeight() {
    // jQuery(function() {
    //     jQuery(".review-sld .item").each(function(){
    //         jQuery('.patient-item').matchHeight();
    //     });
    // });
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

    //  $(".nav-menu ul li.has-child").click(function(e) {
    //     if (jQuery(window).width() < 992) {
    //     $(".nav-menu ul li .dropdown").removeClass("show");
    //     $(this).siblings(".dropdown").slideDown(200);
    // }
    // });


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




// $('.popup-btn').magnificPopup({
//     type: 'inline',
//     duration: 400,
//     removalDelay: 500,
//     callbacks: {
//         beforeOpen: function() {
//          this.st.mainClass = this.st.el.attr('data-effect');
//      }
//  },
//  midClick: true
// });

// $('.close-popup').click(function(event) {
//     $.magnificPopup.close();
// });





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
    dots: false,
    nav: true,
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    smartSpeed: 450,
    mouseDrag: false,
    navText: ["<img class='svg' src='img/back.svg' alt=''>", "<img class='svg' src='img/next.svg' alt=''>" ],
});




$('img.svg').each((i, e) => {
    const $img = $(e);
    const imgID = $img.attr('id');
    const imgClass = $img.attr('class');
    const imgURL = $img.attr('src');
    $.get(imgURL, (data) => {
        let $svg = $(data).find('svg');
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', `${imgClass}replaced-svg`);
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr(`viewBox 0 0  ${$svg.attr('height')} ${$svg.attr('width')}`);
        }
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
