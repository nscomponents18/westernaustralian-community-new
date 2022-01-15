// For Smooth Scrolling
// const mouse = new smoothMouse();

// function smoothMouse() {

    // const target = (document.documentElement || document.body.parentNode || document.body)
    // const speed = 30;
    // const smooth = 5;

    // let moving = false;
    // let pos = target.scrollTop;

    // target.addEventListener('mousewheel', scroll, {passive: false});

    // function scroll(e) {

    //     // disable default scrolling
    //     e.preventDefault();

    //     let delta;

    //     if (e.detail) {
    //         if (e.wheelDelta) delta = e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1);
    //         else delta = -e.detail / 3;
    //     } else {
    //         delta = e.wheelDelta / 120;
    //     }

    //     pos += -delta * speed;
    //     pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight));

    //     if (!moving) update();
    // }

    // search
    // $("ul.primary-menu__items .search").click(function () {
    //     const target = (document.documentElement || document.body.parentNode || document.body)
    //     target.removeEventListener('mousewheel', scroll, {passive: false});
    // });

    // $(".close-icon-container svg.search-bar__closeBtn").click(function () {
    //     const target = (document.documentElement || document.body.parentNode || document.body)
    //     target.addEventListener('mousewheel', scroll, {passive: false});
    // });

    // // Tab
    // $("ul.primary-menu__items li.primary-menu__list a, .main-banner #discover-now,  .category-box__btn").click(function () {
    //     const target = (document.documentElement || document.body.parentNode || document.body)
    //     target.removeEventListener('mousewheel', scroll, {passive: false});
    // });

    // $(".site-header__inner .site-header__left .close-icon, .close-icon.show .Times-Icon").click(function () {
    //     const target = (document.documentElement || document.body.parentNode || document.body)
    //     target.addEventListener('mousewheel', scroll, {passive: false});
    // });

    // if ($(window).width() < 1025) {
    //     $(".category-section__row .category-box").click(function () {
    //         const target = (document.documentElement || document.body.parentNode || document.body)
    //         target.removeEventListener('mousewheel', scroll, {passive: false});
    //     });

    //     $(".category-section__row .btn-close svg").click(function () {
    //         const target = (document.documentElement || document.body.parentNode || document.body)
    //         target.addEventListener('mousewheel', scroll, {passive: false});
    //     });
    // }


    // function update() {
    //     moving = true;

    //     const delta = (pos - target.scrollTop) / smooth;

    //     target.scrollTop += delta;

    //     if (Math.abs(delta) > 0.5) window.requestAnimationFrame(update);
    //     else moving = false;
    // }
// }
