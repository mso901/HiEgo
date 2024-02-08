/** @format */

$(function () {
  //slide
  const Width = 768;

  function applySwiper() {
    let screenWidth = $(window).width();
    if (screenWidth < Width) {
      $('.news_list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
      $('.talk_list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    } else {
      $('.b_list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1460,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1080,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
      $('.talk_list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1080,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
    } //else
  } //function

  applySwiper();

  $(window).resize(function () {
    applySwiper();
  }); //slide
});
