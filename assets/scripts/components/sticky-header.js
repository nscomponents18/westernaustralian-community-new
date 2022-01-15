// Sticky Header
$(window).scroll(function () {
    if ($(window).width() >= 1025) {
        const $elem_site_header = $('header.site-header');
        if ($(this).scrollTop() > 800) {
            $elem_site_header.addClass('sticky-scroll');
        } else {
            $elem_site_header.removeClass('sticky-scroll');
        }
    }
});
