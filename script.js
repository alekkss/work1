obj = {
    ul: document.querySelector('ul')
};

$(document).ready(function () {
    $('.nav__burger').click(function (event) {
        $('.nav__burger, .nav').toggleClass('active');
        $('.title-h1').toggle();

    });
    $('.nav-item').click(function (event) {
        $('.nav__burger').toggle();
        $('.nav__burger').css({
            'display': 'block'
        });
    });


    $('.nav__burger').click(function (event) {
        $('.nav').css({
            'display': 'flex'
        });
    });
    $('.nav-item').click(function (event) {
        if (obj.ul.className == "nav active") {
            $('.nav').toggle();

        }
    });

});