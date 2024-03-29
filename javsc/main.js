
const responsive = {
    0: {
        items: 1
    },
    
    320: {
        items: 1
    },

    560: {
        items: 2
    },

    960: {
        items: 3
    }
}

$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');



    /* on click event for toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })



    //owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });



    //scroll up to top
    $('.go-to-top span').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    })


    //AOS instance
    AOS.init() ;


});
