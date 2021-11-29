$(document).ready(function () {
  // $(".slider-hero").slick({
  //   dots: true,
  //   arrows: false,
  //   // autoplay: true,
  //   autoplaySpeed: 4000,
  //   speed: 1000,
  //   cssEase: "ease-in-out",
  // });

  $("#moreButtonPosts .read").click(function () {
    $(".post-item").addClass("active");
    $("#moreButtonPosts").css("display", "none");
  });

  //Menu burger
  $(".menu-burger").on("click", function () {
    $(this).toggleClass("expanded");
    $(".list-menu-wrap-mobile").toggleClass("list-active");
  });
});

// $(window).resize(function () {
//   $(".slider-hero")[0].slick.refresh();
// });
