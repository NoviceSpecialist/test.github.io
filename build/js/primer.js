$(document).ready(() => {
    document.getElementById('text1').hidden = true;
    // Init sliders
    $('.autoplay').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 5000,
    });

    $('.bas-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // Init popups
    $('.js-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });
    
    function store() {
        var inputEmail= document.getElementById("email");
        localStorage.setItem("email", inputEmail.value);
    }

    function persistInput(input)
    {
        var key = "input-" + input.id;

        var storedValue = localStorage.getItem(key);

        if (storedValue)
            input.value = storedValue;

        input.addEventListener('input', function ()
        {
            localStorage.setItem(key, input.value);
        });
    }
});