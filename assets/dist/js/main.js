$(document).ready(function(){
  $('body').css('opacity','1')
    $('.phone-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'ease-in-out',
        speed: 500,
        prevArrow: $('.slick-prev2'),
        nextArrow: $('.slick-next2'),
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

    $('.phone').click(function(e) {
      console.log('a')
      e.preventDefault();
      $('.popUp').addClass('open-pop');
      $('body').css('overflow-y','hidden');
      $('.background-dark').addClass('open-back');
      $('nav').removeClass('open-nav');
    })


    $('.close-pop').click(function(e) {
      e.preventDefault();
      $('body').css('overflow-y','visible');
      $('.background-dark').removeClass('open-back');
      $('.popUp').removeClass('open-pop');
    })
    $('.background-dark').click(function(e) {
      e.preventDefault();
      $('body').css('overflow-y','visible');
      $('.background-dark').removeClass('open-back');
      $('.popUp').removeClass('open-pop');
      $('.hamburger-menu').removeClass('animate');
      $('nav').removeClass('open-nav');
    })


    $( ".send" ).click(function(e) {
      e.preventDefault();
      var a = $('#name').val();
      var b = $('#phone').val();
      console.log(a);
      if((a === "") || (b === "")){
       alert('Заполните форму')
      }
      else{
        $('body').css('overflow-y','visible');
        $('.background-dark').removeClass('open-back');
        $('.popUp').removeClass('open-pop');
        alert('Заявка успешно отправлена');
      }
    });

    $('.menu-wrapper').on('click', function() {
      if($('nav').is('.open-nav')){
        $('.hamburger-menu').removeClass('animate');
        $('body').css('overflow-y','visible');
        $('.background-dark').removeClass('open-back');
        $('nav').removeClass('open-nav');
      }
      else{
        $('.menu-wrapper').addClass('close-menu')
        $('.hamburger-menu').addClass('animate');
        $('body').css('overflow-y','hidden');
        $('.background-dark').addClass('open-back');
        $('nav').addClass('open-nav'); 
      }
    });


    $('nav > ul > li > a').on('click', function(){
      $('body').css('overflow-y','visible');
      $('.background-dark').removeClass('open-back');
      $('nav').removeClass('open-nav'); 
    });


    var navSection = '.scrolling';
    function onScroll(){
      $(navSection + ' a').each(function(){
          var anchor      = $(this).attr('href');
          var scrollTop   = $(document).scrollTop();
          var positionTop = $(anchor).offset().top;
          var outerHeight = $(anchor).outerHeight();

          if ((positionTop-$(window).height()/2 <= scrollTop) && (positionTop + outerHeight > scrollTop)) {
          $(navSection + ' li.act-li').removeClass('act-li');
          $($(this).parent()).addClass('act-li');
          } else {
          $($(this).parent()).removeClass('act-li');
          }
      });
    }
    $(document).on('scroll', onScroll);
    
});