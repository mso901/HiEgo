/** @format */

$(function () {
  //주메뉴 슬라이드
  let Width = 800;
  let screenWidth = $(window).width();
  if (screenWidth < Width) {
    
    $('nav>ul>li').mouseenter(function () {
      $(this).find('.submenu').stop().slideDown();
    });
    $('nav>ul>li').mouseleave(function () {
      $(this).find('.submenu').stop().slideUp();
    });
  } else {
    $('nav>ul>li').mouseenter(function () {
      $('.submenu').stop().fadeIn(400);
    });
    $('nav>ul>li').mouseleave(function () {
      $('.submenu').stop().fadeOut(400);
    });
  }

  //햄버거 메뉴 클릭
  $('.gnb>button').click(function (e) {
    e.preventDefault();
    $('.gnb>nav').toggleClass('on');
  });
  $('nav>button').click(function (e) {
    e.preventDefault();
    $('.gnb>nav').removeClass('on');
  });
});
