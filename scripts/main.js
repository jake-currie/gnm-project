$(document).ready(function(){
// ADD JS COMMENTS INSIDE THIS SECTION

    $(".hamburger").click(function(){

    $('.hamburger').toggleClass('active');
    $(".mobile-nav").slideToggle();
    });

    // This creates a new typing animation in vanilla javascript

var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	loop: true,
   loopCount: Infinity,
	typeSpeed: 50
});

// Transition scroll bar

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
// 10 is the value of pixels in order to active this jq
    if (scroll <= 10) {
        $("header").removeClass("whitebg");
    } else {
        $("header").addClass("whitebg");
    }
});

}); // end document ready
