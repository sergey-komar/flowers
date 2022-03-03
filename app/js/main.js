$(function () {
    $('.popular__block-slider').slick({
        prevArrow: '<button type="button" class="slick-prev-left"></button>',
        nextArrow:'<button type="button" class="slick-next-right"></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
    });
});