/** @format */

$(function () {
  //주메뉴 슬라이드
  let Width = 800;
  $("nav>ul>li").on({
    "mouseenter keyup": function () {
      let screenWidth = $(window).width();
      if (screenWidth < Width) {
        $(this).find(".submenu").stop().slideDown();
      } else {
        $(".submenu").stop().fadeIn(400);
      }
    },
    "mouseleave keydown": function () {
      let screenWidth = $(window).width();
      if (screenWidth < Width) {
        $(this).find(".submenu").stop().slideUp();
      } else {
        $(".submenu").stop().fadeOut(400);
      }
    },
  });

  //햄버거 메뉴 클릭
  $(".gnb>button").click(function (e) {
    e.preventDefault();
    $(".gnb>nav").toggleClass("on");
  });
  $("nav>button").click(function (e) {
    e.preventDefault();
    $(".gnb>nav").removeClass("on");
  });
});
