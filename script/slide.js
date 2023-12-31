$(function () {
  //slide
  let Width = 800;

  function applySwiper() {
    let screenWidth = $(window).width();
    if (screenWidth < Width) {
       $(".talk_list").slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
       });
      $(".news_list").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
      });
    } else {
      $(".b_list").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
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
      $(".talk_list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
      });
    } //else
  } //function

  applySwiper();

  $(window).resize(function () {
    applySwiper();
  }); //slide

});
