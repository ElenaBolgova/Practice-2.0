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

    ////// выпадающий список ///////

    // При нажатии на элементы выпавшего списка осуществляется переход по ссылкам

    $('.js-dropdown').on('click', function () {

        var status = 0; //default opacity: 0;

        if (status == 0) {
            $('.wrapper-dropdown ul').css({'opacity': '1'});
            status = 1;
        } else {
            $('.wrapper-dropdown ul').css({'opacity': '0'});
            status = 0;
        }

        event.stopPropagation(); // Если событие уже произошло, то прекращает его повтор

        $('body').on('click', function () {
            $('.wrapper-dropdown ul').css({'opacity': '0'}); // Закрываем выпавший список, если кликнули в любое место body
        });

        $('body').on('click', 'a', function () {
            window.location.href = $(this).attr('href'); // Открываем соответствующую ссылку при нажатии на элемент выпавшего списка
        });

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

    // не работает
    // /*---------------- Прокрутка цифр ----------------*/

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
            $('.amount').spincrement({
                thousandSeparator: "",
                duration: 3000
            });

            show = false;
        }
    })

});