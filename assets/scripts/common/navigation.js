// Click Nav Item Understand Your Community
$(".SandDuneColour, #discover-now").click(function() {
  const $elem_understand_your_community = $('.understand-your-community');
  $('.SandDuneColour').addClass('active');
  $('.ForestColour, .RustColour').removeClass('active');
  $('.close-icon, .img-slider, .animate-img').addClass('show');
  $elem_understand_your_community.addClass('show');
  $('.logo, .learn-from-others, .plan-your-project').removeClass('show');
  if($(window).width() > 1025) {
    $elem_understand_your_community.css("margin-top", function() { return $('header').outerHeight() });
    $(".main-banner").css("padding-top", function() { return $('header').outerHeight() });
  }
});

// Click Nav Item Active Leran From Others
$(".ForestColour").click(function() {
  const $elem_learn_from_others = $('.learn-from-others');
  $('.ForestColour').addClass('active');
  $('.SandDuneColour, .RustColour').removeClass('active');
  $('.close-icon').addClass('show');
  $elem_learn_from_others.addClass('show');
  $(".logo, .uyc-img, .understand-your-community, .uyc-img.img-slider, .plan-your-project").removeClass("show");
  if($(window).width() > 1025) {
    $elem_learn_from_others.css("margin-top", function() { return $('header').outerHeight() });
    $(".main-banner").css("padding-top", function() { return $('header').outerHeight() });
  }
});


// Click Nav Item Active Plan Your Projects
$(".RustColour").click(function() {
  $('.RustColour').addClass('active');
  $('.close-icon, .plan-your-project').addClass('show');
  $('.SandDuneColour, .ForestColour').removeClass('active');
  $('.understand-your-community, .logo, .learn-from-others').removeClass('show');
  if($(window).width() > 1025) {
    $(".plan-your-project").css("margin-top", function() { return $('header').outerHeight() });
    $(".main-banner").css("padding-top", function() { return $('header').outerHeight() });
  }
});

// Close Nav
function closeNav() {
  $('body').removeClass('hiddenBackScroll');
  $('.logo').addClass('show');
  $('.SandDuneColour, .ForestColour, .RustColour').removeClass('active');
  $('.close-icon, .understand-your-community, .learn-from-others, .plan-your-project, .mobile-search-button').removeClass('show');
  $('.RustColour').removeClass('active-border');
  $(".SandDuneColour, .ForestColour, .RustColour").css("pointerEvents", "visible")
  if($(window).width() > 1025) {
    $(".understand-your-community, .learn-from-others, .plan-your-project").css("margin-top", "0");
    $(".main-banner").css("padding-top", "0");
  }
}

// Click Close Icon
$(".Times-Icon").click(function() {
  closeNav();
});
$("body").on('keyup', function(event) {
  if (event.keyCode === 27) {
    closeNav();
  }
});

const searchModalCloseActive = document.querySelector(".close-icon-container");
const modalCloseActive = document.querySelector(".close-icon");
const modalBackBtn = document.querySelector(".back-btn");
const toggledMenu = document.querySelector(".toggle-menu");

searchModalCloseActive.addEventListener('click', ()=> {
  if((modalCloseActive).classList.contains('show')){
    $('body').addClass('hiddenBackScroll');
  }
});

modalBackBtn.addEventListener('click', ()=> {
  if((toggledMenu).classList.contains('menuOn')){
    $('body').addClass('hiddenBackScroll');
  }
});
