$(window).ready(function() {

    setTimeout(function() {
        $( '.wrapper' ).animate({ opacity: 1 }, 300 );
    }, 300);

    $( '.slider' ).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false
    });

});

$( '.js-dropdown' ).on( 'click', function() {

    var status = 0; //default display none

    if ( status == 0) {
        $( '.wrapper-dropdown ul' ).css({ 'opacity': '1' });
        status = 1;
    } else {
        $( '.wrapper-dropdown ul' ).css({ 'opacity': '0' });
        status = 0;
    }

    event.stopPropagation();

    $( 'body' ).on( 'click', function() {
        $( '.wrapper-dropdown ul' ).css({ 'opacity': '0' });
    });

    $( 'body' ).on( 'click', 'a', function () {
        window.location.href = $( this ).attr( 'href' );
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
