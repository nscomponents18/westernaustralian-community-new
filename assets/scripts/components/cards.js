// For Cards

var category_box_1_animate = function($elem) {
    if (!$elem.hasClass("active")) {
        let $catBox = $(".cb-2, .cb-3, .cb-4, .cb-5").addClass("u-hidden");
        setTimeout(function() {
            $catBox.removeClass("u-hidden");
        }, 200);
    }
    $elem.addClass("active");
    $('.btn-close').removeClass("u-hidden");
    $elem.addClass("box-animate");
    $('.animate-box').addClass("active");
    const $elem_animate_box_1 = $('.animate-box-1');
    $elem_animate_box_1.removeClass("transition-none");
    $elem_animate_box_1.removeClass("remove");

    const $elem_cb_boxes = $('.cb-2, .cb-3, .cb-4, .cb-5');
    $elem_cb_boxes.addClass("remove");
    $elem_cb_boxes.removeClass("active");
    $elem_cb_boxes.removeClass("box-animate");

    const $elem_animate_boxes = $('.animate-box-2, .animate-box-3, .animate-box-4, .animate-box-5');
    $elem_animate_boxes.removeClass("active");
    $elem_animate_boxes.addClass("remove");
    if($(window).width() > 991) {
        const $elem_cb_1_svg = $('.cb-1 .svg-main');
        const $elem_cb_1_p = $('.cb-1 p');
        $elem_cb_1_svg.addClass("svg-animation");
        $elem_cb_1_p.addClass("para-animation");
        $elem_cb_1_p.removeClass("para-animation-reverse");
        $elem_cb_1_svg.removeClass("svg-animation-reverse");

        $('.cb-2 .svg-main, .cb-3 .svg-main, .cb-4 .svg-main, .cb-5 .svg-main').addClass("svg-animation-reverse");
    }
    $elem.removeClass("remove");
};
var category_box_2_animate = function($elem) {
    if (!$elem.hasClass("active")) {
        let $catBox = $(".cb-1, .cb-3, .cb-4, .cb-5").addClass("u-hidden");
        setTimeout(function() {
            $catBox.removeClass("u-hidden");
        }, 200);
    }
    $elem.addClass("active");
    $elem.addClass("box-animate");
    const $elem_animate_box_2 = $('.animate-box-2');
    $elem_animate_box_2.addClass("active");
    $elem_animate_box_2.removeClass("transition-none");
    $elem_animate_box_2.removeClass("remove");

    const $elem_cb_boxes = $('.cb-1, .cb-3, .cb-4, .cb-5');
    $elem_cb_boxes.addClass("remove");
    $elem_cb_boxes.removeClass("active");
    $elem_cb_boxes.removeClass("box-animate");

    const $elem_animate_boxes = $('.animate-box-1, .animate-box-3, .animate-box-4, .animate-box-5');
    $elem_animate_boxes.removeClass("active");
    $elem_animate_boxes.addClass("remove");

    if ($(window).width() > 991) {
        const $elem_cb_2_svg = $('.cb-2 .svg-main');
        const $elem_cb_2_p = $('.cb-2 p');
        $elem_cb_2_p.addClass("para-animation");
        $elem_cb_2_svg.addClass("svg-animation");
        $elem_cb_2_p.removeClass("para-animation-reverse");
        $elem_cb_2_svg.removeClass("svg-animation-reverse");

        $('.cb-1 .svg-main, .cb-3 .svg-main, .cb-4 .svg-main, .cb-5 .svg-main').addClass("svg-animation-reverse");
    }
    $elem.removeClass("remove");
};
var category_box_3_animate = function($elem) {
    if (!$elem.hasClass("active")) {
        let $catBox = $(".cb-2, .cb-1, .cb-4, .cb-5").addClass("u-hidden");
        setTimeout(function() {
            $catBox.removeClass("u-hidden");
        }, 200);
    }
    $elem.addClass("active");
    if($(window).width() > 991) {
        const $elem_cb_3_svg = $('.cb-3 .svg-main');
        const $elem_cb_3_p = $('.cb-3 p');
        $elem_cb_3_p.addClass("para-animation");
        $elem_cb_3_svg.addClass("svg-animation");
        $elem_cb_3_p.removeClass("para-animation-reverse");
        $elem_cb_3_svg.removeClass("svg-animation-reverse");

        $('.cb-1 .svg-main, .cb-2 .svg-main, .cb-4 .svg-main, .cb-5 .svg-main').addClass("svg-animation-reverse");
    }
    $elem.addClass("box-animate");

    const $elem_animate_box_3 = $('.animate-box-3');
    $elem_animate_box_3.addClass("active");
    $elem_animate_box_3.removeClass("transition-none");
    $elem_animate_box_3.removeClass("remove");

    const $elem_cb_boxes = $('.cb-1, .cb-2, .cb-4, .cb-5');
    $elem_cb_boxes.addClass("remove");
    $elem_cb_boxes.removeClass("active");
    $elem_cb_boxes.removeClass("box-animate");

    const $elem_animate_boxes = $('.animate-box-1, .animate-box-2, .animate-box-4, .animate-box-5');
    $elem_animate_boxes.removeClass("active");
    $elem_animate_boxes.addClass("remove");

    $elem.removeClass("remove");
}
var category_box_4_animate = function($elem) {
    if (!$elem.hasClass("active")) {
        let $catBox = $(".cb-1, .cb-2, .cb-3, .cb-5").addClass("u-hidden");
        setTimeout(function() {
            $catBox.removeClass("u-hidden");
        }, 200);
    }
    $elem.addClass("active");
    if ($(window).width() > 991) {
        const $elem_cb_4_svg = $('.cb-4 .svg-main');
        const $elem_cb_4_p = $('.cb-4 p');
        $elem_cb_4_svg.addClass("svg-animation");
        $elem_cb_4_p.addClass("para-animation");
        $elem_cb_4_p.removeClass("para-animation-reverse");
        $elem_cb_4_svg.removeClass("svg-animation-reverse");

        $('.cb-2 .svg-main, .cb-3 .svg-main, .cb-1 .svg-main, .cb-5 .svg-main').addClass("svg-animation-reverse");
    }
    $elem.addClass("box-animate");

    const $elem_animate_box_4 = $('.animate-box-4');
    $elem_animate_box_4.addClass("active");
    $elem_animate_box_4.removeClass("transition-none");
    $elem_animate_box_4.removeClass("remove");

    const $elem_cb_boxes = $('.cb-1, .cb-2, .cb-3, .cb-5');
    $elem_cb_boxes.addClass("remove");
    $elem_cb_boxes.removeClass("active");
    $elem_cb_boxes.removeClass("box-animate");

    const $elem_animate_boxes = $('.animate-box-1, .animate-box-2, .animate-box-3, .animate-box-5');
    $elem_animate_boxes.removeClass("active");
    $elem_animate_boxes.addClass("remove");

    $elem.removeClass("remove");
}
var category_box_5_animate = function($elem) {
    if (!$elem.hasClass("active")) {
        let $catBox = $(".cb-1, .cb-2, .cb-3, .cb-4").addClass("u-hidden");
        setTimeout(function() {
            $catBox.removeClass("u-hidden");
        }, 200);
    }
    $elem.addClass("active");
    if ($(window).width() > 991) {
        const $elem_cb_5_svg = $('.cb-5 .svg-main');
        $elem_cb_5_svg.addClass("svg-animation");
        $elem_cb_5_svg.removeClass("svg-animation-reverse");

        const $elem_cb_5_p = $('.cb-5 p');
        $elem_cb_5_p.removeClass("para-animation-reverse");
        $elem_cb_5_p.addClass("para-animation");

        $('.cb-2 .svg-main, .cb-3 .svg-main, .cb-4 .svg-main, .cb-1 .svg-main').addClass("svg-animation-reverse");
    }
    $elem.addClass("box-animate");

    const $elem_animate_box_5 = $('.animate-box-5');
    $elem_animate_box_5.addClass("active");
    $elem_animate_box_5.removeClass("transition-none");
    $elem_animate_box_5.removeClass("remove");

    const $elem_cb_boxes = $('.cb-1, .cb-2, .cb-3, .cb-4');
    $elem_cb_boxes.addClass("remove");
    $elem_cb_boxes.removeClass("active");
    $elem_cb_boxes.removeClass("box-animate");

    const $elem_animate_boxes = $('.animate-box-1, .animate-box-2, .animate-box-3, .animate-box-4');
    $elem_animate_boxes.removeClass("active");
    $elem_animate_boxes.addClass("remove");

    $elem.removeClass("remove");
};
var close_category_box = function(event) {
    event.preventDefault();
    event.stopPropagation();
    const $elem_animate_box = $('.animate-box');
    const $elem_category_box = $('.category-box');

    $elem_category_box.removeClass("active");
    $('.btn-close').addClass("u-hidden");
    $elem_category_box.removeClass("box-animate");
    $('.animate-box-1, .animate-box-2, .animate-box-3, .animate-box-4, .animate-box-5').removeClass("active");
    $elem_animate_box.addClass("transition-none");
    $elem_animate_box.removeClass("remove");
    $('.category-section').removeClass("active");
    if($(window).width() > 991) {
        const $elem_cb_svg = $('.category-box .svg-main');
        const $elem_cb_p = $('.category-box p');
        $elem_cb_p.removeClass("para-animation");
        $elem_cb_svg.removeClass("svg-animation");
        $elem_cb_p.addClass("para-animation-reverse");
        $elem_cb_svg.addClass("svg-animation-reverse");
        let $card = $elem_cb_svg.removeClass("svg-animation-reverse");
        setTimeout(function() {
            $card.addClass("svg-animation-reverse");
        }, 10);
    }
    $elem_category_box.removeClass("remove");
}

$(document).ready(function() {
    $(".category-box").click(function() {
        $('.category-section').addClass("active");
    });
    $(".category-box").on('keyup', function(event) {
        if (event.keyCode === 13) {
            $('.category-section').addClass("active");
        }
    });
    $(".category-box__btn").click(function() {
        if($(window).width() > 1025) {
            $(".site-header").css("position", "sticky");
        }
    });

    $(".cb-1").click(function() {
        var $elem = $(this);
        category_box_1_animate($elem);
    });
    $(".cb-1").on('keyup', function(event) {
        if (event.keyCode === 13) {
            var $elem = $(this);
            category_box_1_animate($elem);
        }
        if (event.keyCode === 27) {
            close_category_box(event);
        }
    });

    $(".cb-2").click(function() {
        var $elem = $(this);
        category_box_2_animate($elem);
    });

    $(".cb-2").on('keyup', function(event) {
        if (event.keyCode === 13) {
            var $elem = $(this);
            category_box_2_animate($elem);
        }
        if (event.keyCode === 27) {
            close_category_box(event);
        }
    });

    $(".cb-3").click(function() {
        var $elem = $(this);
        category_box_3_animate($elem);
    });
    $(".cb-3").on('keyup', function(event) {
        if (event.keyCode === 13) {
            var $elem = $(this);
            category_box_3_animate($elem);
        }
        if (event.keyCode === 27) {
            close_category_box(event);
        }
    });

    $(".cb-4").click(function() {
        var $elem = $(this);
        category_box_4_animate($elem);
    });
    $(".cb-4").on('keyup', function(event) {
        if (event.keyCode === 13) {
            var $elem = $(this);
            category_box_4_animate($elem);
        }
        if (event.keyCode === 27) {
            close_category_box(event);
        }
    });

    $(".cb-5").click(function() {
        var $elem = $(this);
        category_box_5_animate($elem);
    });
    $(".cb-5").on('keyup', function(event) {
        if (event.keyCode === 13) {
            var $elem = $(this);
            category_box_5_animate($elem);
        }
        if (event.keyCode === 27) {
            close_category_box(event);
        }
    });

    $(".category-box__header .btn-close .btn-close__svg").click(function(event) {
        close_category_box(event);
    });
    $(".category-box__header .btn-close").on('keyup', function(event) {
        if (event.keyCode === 13) {
            close_category_box(event);
        }
    });
});
