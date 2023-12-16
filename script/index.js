$(function () {
  $(".gnb>button").click(function (e) {
    e.preventDefault();
    $(".gnb>nav").toggleClass("on")
  });
   $("nav>button").click(function (e) {
     e.preventDefault();
     $(".gnb>nav").removeClass("on");
  });

//slide
  let Width = 768;
  let screenWidth = $(window).width();
  if (screenWidth < Width) {
    $(".talk_list").slick();
    $(".news_list").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
    });
  } else { 
$('.b_list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  };
});

