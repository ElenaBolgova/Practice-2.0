$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 300);
    }, 300);

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false
    });

});

/////////////////modal////////////////

/*
$('.get-modal').click(function() {
    $('.modal').fadeIn(400).css('display', 'flex');
});

$('.modal').click(function(event) {
    var clickedElement = event.target;
    if(!$(clickedElement).closest('.modal-inner').length) {
        $('.modal').fadeOut(400);
    }
    if($(clickedElement).hasClass('close-modal')) {
        $('.modal').fadeOut(400);
    }
});*/
