const top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
const delay = 500; // Задержка прокрутки
$(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('.top').addClass("topblock");
        else $('.top').removeClass("topblock");
    });
    $('.top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});

let flag = "play";
let audio = new Audio();
audio.src  = '../music/gimn.mp3';

$(document).ready(function () {
    $('.music').click(function () {
       if(flag === "play"){
           $('.music').css({
               "background-image": "url(../img/pause.png)",
               "position": "relative",
               "margin-top":"15px",
               "width":"20px",
               "height":"20px",
               "margin-left":"3%",
               "background-size":"cover",
               "float":"left",
           });
           audio = new Audio();
           audio.src  = '../music/gimn.mp3';


           audio.play();
           flag="pause";
       }
       else{
           $('.music').css({
               "background-image": "url(../img/play.png)",
               "position": "relative",
               "margin-top":"15px",
               "width":"20px",
               "height":"20px",
               "margin-left":"3%",
               "background-size":"cover",
               "float":"left",
           });
           audio.pause();
           flag="play";
       }
    });
});






$(document).ready(function () {
    $('.lenin').click(function () {
            $('body').css({
                "background-image": "url(../img/ussr_flag.jpg)"
            });

        let audio = new Audio();
         audio.src  = '../music/gimn_ussr.mp3';
         audio.play();

            $('.wrapper').css({
                "display":"none"
            });

            $('.header').css({
                "display":"none"
            });

            $('.footer').css({
                "display":"none"
            })
    })
});