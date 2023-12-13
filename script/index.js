$(function () {
  $(".gnb>button").click(function (e) {
    e.preventDefault();
    $(".gnb>nav").toggleClass("on")
  });
   $("nav>button").click(function (e) {
     e.preventDefault();
     $(".gnb>nav").removeClass("on");
  });


  const slider = $(".b_list");
  const slickOptions = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  $(window).on("load resize", function () {
    if ($(window).width() < 767) {
      slider.slick("unslick");
    } else {
      slider.not(".slick-initialized").slick(slickOptions);
    }
  });

  let Width = 768;
  let screenWidth = $(window).width();
  if (screenWidth < Width) {
    $(".talk_list").slick();
    $(".news_list").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
    });
  }
});

