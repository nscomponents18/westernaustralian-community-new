// Click Nav Item Understand Your Community
$(".SandDuneColour, #discover-now").click(function() {
  showSaneDuneColor();
});

$(".SandDuneColour, #discover-now").keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == 13)
  {
    showSaneDuneColor();
  }
  
});

function showSaneDuneColor()
{
  resetTopNav();
  hideBodyFooter();
  const $elem_understand_your_community = $('.understand-your-community');
  $elem_understand_your_community.removeClass('hide');

  setTimeout(function() {
    $('.SandDuneColour').addClass('active');
    $('.ForestColour, .RustColour').removeClass('active');
    $('.close-icon, .img-slider, .animate-img').addClass('show');
    $elem_understand_your_community.addClass('show');
    $('.logo, .learn-from-others, .plan-your-project').removeClass('show');
    if($(window).width() > 1025) {
      $elem_understand_your_community.css("margin-top", function() { return $('header').outerHeight() });
      $(".main-banner").css("padding-top", function() { return $('header').outerHeight() });
    }
    if ($(window).width() < 1025) {
      $('.logo').addClass('show');
    }
  },100);
}

// Click Nav Item Active Leran From Others
$(".ForestColour").click(function() {
  showForestColour();
});

$(".ForestColour").keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == 13)
  {
    showForestColour();
  }
});

function showForestColour()
{
  resetTopNav();
  hideBodyFooter();
  const $elem_learn_from_others = $('.learn-from-others');
  $elem_learn_from_others.removeClass('hide');
  setTimeout(function() {
    $('.ForestColour').addClass('active');
    $('.SandDuneColour, .RustColour').removeClass('active');
    $('.close-icon').addClass('show');
    $elem_learn_from_others.addClass('show');
    $(".logo, .uyc-img, .understand-your-community, .uyc-img.img-slider, .plan-your-project").removeClass("show");
    if($(window).width() > 1025) {
      $elem_learn_from_others.css("margin-top", function() { return $('header').outerHeight() });
      $(".main-banner").css("padding-top", function() { return $('header').outerHeight() });
    }
    if ($(window).width() < 1025) {
      $('.logo').addClass('show');
    }
  },100);
}


// Click Nav Item Active Plan Your Projects
$(".RustColour").click(function() {
    showRustColour();
});

$(".RustColour").keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == 13)
  {
    showRustColour();
  }
});

function showRustColour()
{
  resetTopNav();
  hideBodyFooter();
  $('.plan-your-project').removeClass('hide');
  setTimeout(function() {
    $('.RustColour').addClass('active');
    $('.close-icon, .plan-your-project').addClass('show');
    $('.SandDuneColour, .ForestColour').removeClass('active');
    
    $('.understand-your-community, .logo, .learn-from-others').removeClass('show');
    if($(window).width() > 1025) {
      $(".plan-your-project").css("margin-top", function() { return $('header').outerHeight() });
      $(".main-banner").css("padding-top", function() { return $('header').outerHeight() });
    }
    if ($(window).width() < 1025) {
      $(".plan-your-project").css("margin-top", function () {
          return $('header').outerHeight()
      });
      $('.logo').addClass('show');
    }
  },100);
}

function resetTopNav()
{
  $(".understand-your-community, .learn-from-others, .plan-your-project").addClass('hide');
}

function hideBodyFooter()
{
  $(".mainSec").addClass("hide");
  $(".site-footer").addClass("hide");
}

function showBodyFooter()
{
  $(".mainSec").removeClass("hide");
  $(".site-footer").removeClass("hide");
}

// Close Nav
function closeNav() {
  resetTopNav();
  showBodyFooter();
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
    closeSearchBox();
  }
});

const searchModalCloseActive = document.querySelector(".close-icon-container");
const modalCloseActive = document.querySelector(".close-icon");
const modalBackBtn = document.querySelector(".back-btn");
const toggledMenu = document.querySelector(".toggle-menu");
const mainSec = document.querySelector(".mainSec");

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

/*$(document).on('keyup', function(event) {
  console.log(event.keyCode);
  if (event.keyCode === 9) {
    setTimeout(function() {
      const elem = document.activeElement;
      console.log(elem);
      if(elem.classList.contains('inputBox_input'))
      {
        console.log("inputBox_input has been focus");
      }
    }, 500);
  }
});*/
