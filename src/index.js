import './main.scss';
import './block.js';

$(function(){

  // 初期値
  $('.js-game').hide();

  // スタート
  $('.js-btn-start').on('click', function(){
    // canvasサイズ調整
    let screenWidth = $('#game').width();
    let screenHeight = $('#game').height();
    $('#block-parts').attr('width', screenWidth);
    $('#block-parts').attr('height', screenHeight);

    // 画面切り替え
    $('.js-start').fadeOut();
    $('.js-game').fadeIn();

    timerSet();

  });

  // タイマー
  function timerSet (){
    let sec = 0;
    let min = 0;
    let timer;

    $('.js-timer').html('00:00');
    timer = setInterval(countup, 1000);

    $(this).prop('disabled', true);
    $('.js-timer').prop('disabled', false);

    // 一時停止
    $('.js-pause').on('click', function(){
      $(this).addClass('btn-replay');
      $('.js-pause p').text('REPLAY');

      clearInterval(timer);

      $(this).prop('disable', true);
      $('.js-puse.btn-replay').prop('disable', false);
    });

    if($('.js-pause').hasClass('btn-replay')){
      // リスタート
      $('.js-pause').on('click', function(){
        $(this).removeClass('btn-replay');
        $('.js-pause p').text('PAUSE');

        timer = setInterval(countup, 1000);

        $(this).prop('disabled', true);
        $('.js-pause').prop('disabled', false);
      });
    }

    function countup(){
      sec += 1;

      if (sec > 59) {
        sec = 0;
        min += 1;
      }

      if (min > 59) {
        min = 0;
      }

      let sec_number = ('0' + sec).slice(-2);
      let min_number = ('0' + min).slice(-2);

      $('.js-timer').html(min_number + ':' + sec_number);
    }
  }

});
