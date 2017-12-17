

$(document).ready(function(){
    $(".strelki").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function(){
    $("li").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(".imgDiv").on("click", ".bagrColor", function(){
    $(".imgDiv").removeClass("activeDiv")
    $(this).parent().addClass("activeDiv")
})

// таб 



  $('div.tabs__caption').on('click', 'img:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
 console.log('работает');
  });

  $('div.tabs__caption2').on('click', 'img:not(.active2)', function() {
    $(this)
      .addClass('active2').siblings().removeClass('active2')
      .closest('div.tabs2').find('div.tabs__content2').removeClass('active2').eq($(this).index()).addClass('active2');
 console.log('работает');
  });


// таб конец

// показ текста
 $('.wrapperTextabuut button').on('click', function(){
        console.log("Клик работает верно");
        $('#heidText').toggleClass('heidText');
        $('.wrapperTextabuut').toggleClass('borderShow');
    })
// конец показа текста


// прогресс
$(document).ready(function () {
    var pie1 = $('.pie-1'),
        pie2 = $('.pie-2'),
        pie3 = $('.pie-3');
    progressBarUpdate(80, 100, pie1);
    progressBarUpdate(75, 100, pie2);
    progressBarUpdate(60, 100, pie3);
});

function rotate(element, degree) {
    element.css({
        '-webkit-transform': 'rotate(' + degree + 'deg)',
            '-moz-transform': 'rotate(' + degree + 'deg)',
            '-ms-transform': 'rotate(' + degree + 'deg)',
            '-o-transform': 'rotate(' + degree + 'deg)',
            'transform': 'rotate(' + degree + 'deg)',
            'zoom': 1
    });
}

function progressBarUpdate(x, outOf, elem) {
    var firstHalfAngle = 180;
    var secondHalfAngle = 0;

    // caluclate the angle
    var drawAngle = x / outOf * 360;

    // calculate the angle to be displayed if each half
    if (drawAngle <= 180) {
        firstHalfAngle = drawAngle;
    } else {
        secondHalfAngle = drawAngle - 180;
    }

    // set the transition
    rotate(elem.find(".slice1"), firstHalfAngle);
    rotate(elem.find(".slice2"), secondHalfAngle);

    // set the values on the text
    elem.find(".status").html(x + "<span>%</span>");
}







