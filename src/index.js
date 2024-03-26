import './main.scss';

$(function(){
  $('.js-game').hide();
  $('.js-btn-start').on('click', function(){
    $('.js-start').fadeOut();
    $('.js-game').fadeIn();

    // timer
    let sec = 0;
    let min = 0;

    let timer;

    sec = 0;
    min = 0;

    $('.js-timer').html('00:00');
    // timer = setInterval(countup, 1000);
  });

  // function countup(){
  //   sec += 1;

  //   if(sec > 59){
  //     sec = 0;
  //     min += 1;
  //   }

  //   $('.js-timer').html(min + ':' + sec);
  // }

});