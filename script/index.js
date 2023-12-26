/** @format */

$(function () {
  //주메뉴 슬라이드
  // let Width = 800;
  // let screenWidth = $(window).width();

//   $("nav>ul>li").on({
//     "mouseenter focus": function () {
//       if (screenWidth < Width) {
//         $(this).find(".submenu").stop().slideDown();
//       } else {
//         $(this).find(".submenu").stop().fadeIn(400);
//       }
//     },
//     "mouseleave blur": function () {
//       if (screenWidth < Width) {
//         $(this).find(".submenu").stop().slideUp();
//       } else {
//         $(this).find(".submenu").stop().fadeOut(400);
//       }
//     },
//  });
  let Width = 800;
  let screenWidth = $(window).width();
  if (screenWidth < Width) {
    $("nav>ul>li").on({
      "mouseenter focus": function () {
        $(this).find(".submenu").stop().slideDown();
      },
      "mouseleave blur": function () {
        $(this).find(".submenu").stop().slideUp();
      },
    });
  } else {
    $("nav>ul>li").on({
      "mouseenter focus": function () {
        $(".submenu").stop().fadeIn(400);
      },
      "mouseleave blur": function () {
        $(".submenu").stop().fadeOut(400);
      },
    });
  }

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
