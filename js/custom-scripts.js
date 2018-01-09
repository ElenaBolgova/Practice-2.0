$(window).ready(function() {

    ///// Плавная загрузка страницы /////

    setTimeout(function () {
        $('.wrapper').animate({opacity: 1}, 300);
    }, 300);

    ///// Слайдер /////

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false
    });

    /*----------- Плавный скролл для якоря ----------------*/

    $("nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    /*--------------- Плавный скролл наверх ----------------*/

    $(".up").on("click", function () {
        $('body,html').animate({scrollTop: 0}, 500);
    });


    /*---------------- Прокрутка цифр ----------------*/

    var show = true;
    var countbox = ".numbers";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.amount-item').spincrement({
                thousandSeparator: "",
                duration: 3000
            });

            show = false;
        }
    });

    ///// DROPDOWN LIST /////

    $('.js-dropdown').click(function() {
        $('.wrapper-dropdown ul').fadeToggle(400);
    });

    $('.wrapper-dropdown ul li').click(function() {
        var city = $(this).text();
        $(this).parent().siblings('.js-dropdown').text(city);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parent().siblings('input').val(city);
        $(this).parents('.wrapper-dropdown').find(' ul').fadeOut(400);
    });



///// MODAL /////

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
});

$('.current-value').click(function() {
    if($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
    } else {
        $('.custom-select.active').removeClass('active');
        $(this).parent().addClass('active');
    }
});

$('.custom-select ul li').click(function() {
    var current = $(this).text();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $(this).parent().siblings('.current-value').text(current);
    $(this).parent().siblings('input').val(current);
    $(this).parents('.custom-select').removeClass('active');
});

$('.burger').click(function() {
    $(this).toggleClass('fa-close fa-bars');
    $('.menu-left').toggleClass('active');
});

});