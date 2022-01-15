  // For Journey Box Hover Animation
  const $elem_journey_section = $('.journey-section');
  $(".journey-box:nth-child(1) .journey-box__inner").hover(
    function () {
      $elem_journey_section.addClass("result-hover__sand-dune");
    },
    function () {
      $elem_journey_section.removeClass("result-hover__sand-dune");
    }
  );
  $(".journey-box:nth-child(2) .journey-box__inner").hover(
    function () {
      $elem_journey_section.addClass("result-hover__forest");
    },
    function () {
      $elem_journey_section.removeClass("result-hover__forest");
    }
  );
  $(".journey-box:nth-child(3) .journey-box__inner").hover(
    function () {
      $elem_journey_section.addClass("result-hover__rust");
    },
    function () {
      $elem_journey_section.removeClass("result-hover__rust");
    }
  );