$(document).ready(function(){
// ADD JS COMMENTS INSIDE THIS SECTION

    $(".hamburger").click(function(){

    $('.hamburger').toggleClass('active');
    $(".mobile-nav").fadeToggle();
    });

    // This creates a new typing animation in vanilla javascript

var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	loop: true,
   loopCount: Infinity,
	typeSpeed: 50
});

}); // end document ready
