
$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');


    /* on click event for toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })


    //owl-carousel for blog
    $('.owl-carousel').owlCarousel();


});
