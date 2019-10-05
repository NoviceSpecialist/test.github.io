function initSliderHomePage() {
    $('.autoplay').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
}

function initSliderFooter() {
    $('.bas-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
}

export default function initSliders() {
    initSliderHomePage();
    initSliderFooter();
}