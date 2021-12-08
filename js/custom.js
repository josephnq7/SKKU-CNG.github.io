(function ($) {
  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").fadeOut(1000); // set duration in brackets
    $(".read-more").click(function (e) {
      e.preventDefault();
      let id = $(this).data("id");
      $(this).closest(".content-customer-short").hide();
      $("#content-customer-full-" + id).show();
    });
  });

  //Navigation Section
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Owl Carousel
  $(".owl-carousel").owlCarousel({
    animateOut: "fadeOut",
    items: 1,
    loop: true,
    autoplay: true,
  });

  // PARALLAX EFFECT
  $.stellar();

  // SMOOTHSCROLL
  $(function () {
    $(".navbar-default a, #home a, footer a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // WOW ANIMATION
  new WOW({ mobile: false }).init();
})(jQuery);
