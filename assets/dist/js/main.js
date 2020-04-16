$(document).ready(function(){

    if (screen.width >= 1024){
        $("#fullpage").fullpage({
            navigation:true,
            navigationPosition:'right',  
            anchors:['secondPage']
        });
    }


    $('.phone-slider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
        ]
      });

      $(".slick-dots button").empty()
});