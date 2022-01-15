// For Parallax Scroll Of All Section

function transform_parallax(parallaxElement, i, value) {
    var currentElement = parallaxElement.eq(i),
        windowTop = $(window).scrollTop(),
        elementTop = currentElement.offset().top,
        elementHeight = currentElement.height(),
        viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
        scrolled = windowTop - elementTop + viewPortHeight;

    currentElement.css({
        transform: "translate3d(0," + scrolled * value + "px, 0)",
    });
}

$(document).ready(function () {
    //parallax scroll
    if ($(window).width() > 1025) {
        $(window).on("load scroll", function () {
            var parallaxElement = $(".blocks-section-row__image-part"),
                parallaxQuantity = parallaxElement.length;
            window.requestAnimationFrame(function () {
                for (var i = 0; i < parallaxQuantity; i++) {
                    transform_parallax(parallaxElement, i, -0.20);
                }
            });
        });

        $(window).on("load scroll", function () {
            var parallaxElement = $(".blocks-section-row__image-part_chair-women"),
                parallaxQuantity = parallaxElement.length;
            window.requestAnimationFrame(function () {
                for (var i = 0; i < parallaxQuantity; i++) {
                    transform_parallax(parallaxElement, i, -0.23);
                }
            });
        });

        $(window).on("load scroll", function () {
            var parallaxElement = $(".blocks-section-row__content-part, .image-content-section__inner"),
                parallaxQuantity = parallaxElement.length;
            window.requestAnimationFrame(function () {
                for (var i = 0; i < parallaxQuantity; i++) {
                    transform_parallax(parallaxElement, i, -0.30);
                }
            });
        });
    }

    //parallax scroll
    $(window).on("load scroll", function () {
        var parallaxElement = $(".parallax-background-section-2 .animateImg"),
            parallaxQuantity = parallaxElement.length;
        window.requestAnimationFrame(function () {
            for (var i = 0; i < parallaxQuantity; i++) {
                transform_parallax(parallaxElement, i, -0.18);
            }
        });

        var parallaxElement = $(".parallax-background-section .animateImg"),
            parallaxQuantity = parallaxElement.length;
        window.requestAnimationFrame(function () {
            for (var i = 0; i < parallaxQuantity; i++) {
                transform_parallax(parallaxElement, i, -0.25);
            }
        });
    });
});