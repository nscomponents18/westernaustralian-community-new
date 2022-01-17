
// Header JS
if($(window).width() < 1025) {
  $(".main-banner").css("margin-top", function() { return $('header').outerHeight() });
}
if($(window).width() > 1025) {
  $(".search-modal").css("margin-top", function() { return $('header').outerHeight() });
}
$(".toggle-menu").click(function() {
  $('body').removeClass('hiddenBackScroll');
  $('.toggle-menu').toggleClass('menuOn');
  $('.site-header__right').toggleClass('active');
  $('.mobile-search-button, .logo, .primary-menu').toggleClass('show');
  $('.understand-your-community, .learn-from-others, .plan-your-project').removeClass('show');
  if(document.querySelector(".toggle-menu").classList.contains("menuOn")){
    $('body').addClass('hiddenBackScroll');
  }
})

function showSearchBox() {
  closeNav();
    $(".search-modal, .search-bar, .search-img-slider, .search-img").addClass("show");
    $(".mainSec").addClass("hide");
    $(".primary-menu__list, .full-screen-modal-nonsearch").addClass("hide");
    $(".site-footer").addClass("hide");
    if ($(window).width() > 1025) {
        $(".search-modal").css("margin-top", function () {
            return $('header').outerHeight()
        });
        $(".main-banner").css("padding-top", function () {
            return $('header').outerHeight()
        });
    }
    setTimeout(function() {
        $("#search-input").focus();
    }, 500);
}

function closeSearchBox() {
  $('body').removeClass('hiddenBackScroll');
  $(".search-modal, .search-bar, .search-img-slider, .search-img").removeClass("show");
  $(".mainSec").removeClass("hide");
  $(".primary-menu__list, .full-screen-modal-nonsearch").removeClass("hide");
  $(".site-footer").removeClass("hide");
  $(".main-banner").css("padding-top", "0");
  $(".inputBox_input").val("");
  resetTopNav();
}

// Click on Search BTN - HOME
$(".search-btn").click(function() {
    showSearchBox();
});

$(".search-btn").on("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        showSearchBox();
    }
});

// Click on Search Modal Close BTN - Search MODAL TAB
$(".search-bar__closeIcon").click(function() {
  closeSearchBox();
});

$("#search-input, .close-icon-container, .search-bar__closeIcon, .search-bar__svgIcon").on("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
      closeSearchBox();
  }
});

$("#search-input").on("focus", function(event) {
  console.log("In Textbox input");
});


