var string ="A young graduate with an applied licence degree in IT, courteous and enthusiastic, I am interested in IT and everything in its orbit. I recently began to be fascinated by web programming, e.g. developing apps and building websites. As this area complements my studies, I am keen to gain more experience in the field.";
var str = string.split("");
var el = document.getElementById('about-p');
(function animate(){
    str.length > 0 ? el.innerHTML +=str.shift(): clearTimeout(running);
    var running = setTimeout(animate,20);
})();


$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top -100
        },2000);
    });

    $('#up').on('click', function () {
        $('html,body').animate({scrollTop: 0},2000);
    });

    AOS.init({
        easing : 'ease',
        duration: 1800,
        once:true
    });
});

