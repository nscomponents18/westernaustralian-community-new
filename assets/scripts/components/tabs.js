$(".SandDuneColour , .go-to-uyc, .ForestColour, .go-to-lfo, .RustColour, .go-to-pyp, #discover-now, .category-box__btn").click(function () {
    $('.RustColour').addClass('active-border');
});

$(".SandDuneColour , .go-to-uyc, .ForestColour, .go-to-lfo, .RustColour, .go-to-pyp, #discover-now, .category-box__btn").keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == 13)
    {
        $('.RustColour').addClass('active-border');
    }
  });
// Body Scroll Off
$(".SandDuneColour , .go-to-uyc, .ForestColour, .go-to-lfo, .RustColour, .go-to-pyp, .search-btn, #discover-now, .category-box__btn").click(function () {
    $('body').addClass('hiddenBackScroll');
});

$(".SandDuneColour , .go-to-uyc, .ForestColour, .go-to-lfo, .RustColour, .go-to-pyp, .search-btn, #discover-now, .category-box__btn").keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == 13)
    {
        $('body').addClass('hiddenBackScroll');
    }
  });
  

// understand your community Modal JS
$(".journey-boxes .go-to-uyc, #discover-now, .category-box__btn").click(function () {
    showSaneDuneColor()
});

$(".journey-boxes .go-to-uyc, #discover-now, .category-box__btn").keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == 13)
    {
        showSaneDuneColor();
    }
  });

// Learn From Others Modal JS
$(".journey-boxes .go-to-lfo").click(function () {
    showForestColour()
});

$(".journey-boxes .go-to-lfo").keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == 13)
    {
        showForestColour();
    }
  });

// Plan your project Modal JS
$(".journey-boxes .go-to-pyp").click(function () {
    showRustColour();
});

$(".journey-boxes .go-to-pyp").keypress(function () {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == 13)
    {
        showRustColour();
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