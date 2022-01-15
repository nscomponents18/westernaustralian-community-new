$(".SandDuneColour , .go-to-uyc, .ForestColour, .go-to-lfo, .RustColour, .go-to-pyp, #discover-now, .category-box__btn").click(function () {
    $('.RustColour').addClass('active-border');
});
// Body Scroll Off
$(".SandDuneColour , .go-to-uyc, .ForestColour, .go-to-lfo, .RustColour, .go-to-pyp, .search-btn, #discover-now, .category-box__btn").click(function () {
    $('body').addClass('hiddenBackScroll');
});

// understand your community Modal JS
$(".journey-boxes .go-to-uyc, #discover-now, .category-box__btn").click(function () {
    $('.SandDuneColour').addClass('active');
    $('.ForestColour, .RustColour').removeClass('active');
    $('.close-icon, .understand-your-community').addClass('show');
    $('.learn-from-others, .plan-your-project, .logo, .lfo-img, .pyp-img').removeClass('show');
    if ($(window).width() > 1025) {
        $(".understand-your-community").css("margin-top", function () {
            return $('header').outerHeight()
        });
    }
    if ($(window).width() < 1025) {
        $('.logo').addClass('show');
    }
});

// Learn From Others Modal JS
$(".journey-boxes .go-to-lfo").click(function () {
    $('.ForestColour').addClass('active');
    $('.SandDuneColour, .RustColour').removeClass('active');
    $('.close-icon, .lfo-img, .learn-from-others').addClass('show');
    $('.understand-your-community, .plan-your-project, .logo').removeClass('show');
    if ($(window).width() > 1025) {
        $(".learn-from-others").css("margin-top", function () {
            return $('header').outerHeight()
        });
    }
    if ($(window).width() < 1025) {
        $('.logo').addClass('show');
    }
});

// Plan your project Modal JS
$(".journey-boxes .go-to-pyp").click(function () {
    $('.RustColour').addClass('active');
    $('.SandDuneColour, .ForestColour').removeClass('active');
    $('.close-icon, .plan-your-project, .pyp-img').addClass('show');
    $('.logo, .understand-your-community, .learn-from-others').removeClass('show');
    const $elem_plan_your_project = $(".plan-your-project");
    if ($(window).width() > 1025) {
        $elem_plan_your_project.css("margin-top", function () {
            return $('header').outerHeight()
        });
    }
    if ($(window).width() < 1025) {
        $elem_plan_your_project.css("margin-top", function () {
            return $('header').outerHeight()
        });
        $('.logo').addClass('show');
    }
});

// Click on Back Button --------
$(".back-btn__container").click(function () {
    const $elem_body = $('body');
    $('.learn-from-others, .plan-your-project, .understand-your-community').removeClass('show');
    $elem_body.removeClass('hiddenBackScroll');
    $(".SandDuneColour, .ForestColour, .RustColour").css("pointerEvents", "visible");
    if (document.querySelector(".toggle-menu").classList.contains("menuOn")) {
        $elem_body.addClass('hiddenBackScroll');
    }
});


$(".SandDuneColour, .ForestColour, .RustColour, #discover-now, .journey-boxes,  .category-box__btn").click(function () {
    $(".animate-img").css("visibility", "hidden");
    $(".animate-img, .img-slider").removeClass("show");
    setTimeout(function () {
        $(".animate-img").css("visibility", "visible");
        $(".animate-img, .img-slider").addClass("show");
    }, 600);
    if ($(".SandDuneColour, .journey-boxes .go-to-uyc, .category-box__btn").hasClass("active")) {
        $(".SandDuneColour").css("pointerEvents", "none")
        $(".ForestColour, .RustColour").css("pointerEvents", "visible")
    }
    if ($(".ForestColour, .journey-boxes .go-to-lfo").hasClass("active")) {
        $(".ForestColour").css("pointerEvents", "none")
        $(".SandDuneColour, .RustColour").css("pointerEvents", "visible")
    }
    if ($(".RustColour, .journey-boxes .go-to-pyp").hasClass("active")) {
        $(".RustColour").css("pointerEvents", "none")
        $(".ForestColour, .SandDuneColour").css("pointerEvents", "visible")
    }
});

$(".search-btn").click(function () {
    $(".animate-img").css("visibility", "hidden");
    setTimeout(function () {
        $(".animate-img").css("visibility", "visible");
    }, 600);
});