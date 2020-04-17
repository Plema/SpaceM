$(document).ready(function(){

  if (screen.width >= 1024){
    $("#fullpage").fullpage({
      menu:'#menu',
      scrollBar:true,
      navigation:true,
      navigationPosition:'left',
      slidesNavPosition:'top',
      });
    
    $("#fp-nav > ul li").each(function(){
      var txt = $(this).text();
      console.log(txt);
      var num = txt.substring(8)
      console.log(num)
      $(this).find('a').append('<p class="num">' + '0' + num + '</p>');
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

      $(".slick-dots button").empty();

});