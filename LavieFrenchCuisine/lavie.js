$('#navbar').hide();
$('#navbar').fadeIn(1400);
$('header').hide();
$('header').fadeIn(1000);

$(document).ready(function() {
var stickyNavTop = $('#navbar').offset().top;
var stickyNav = function(){
var scrollTop = $(window).scrollTop(); 
        if (scrollTop > stickyNavTop) { 
            $('#navbar').addClass('sticky');
        } else {
            $('#navbar').removeClass('sticky'); 
        }
    };

    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});