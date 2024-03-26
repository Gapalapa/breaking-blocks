import './main.scss';

$(function(){


  // 初期値
  $('.js-game').hide();

  $('.js-btn-start').on('click', function(){
    // 画面切り替え
    $('.js-start').fadeOut();
    $('.js-game').fadeIn();

    // タイマーセット
    let sec = 0;
    let min = 0;
    let timer;

    $('.js-timer').html('00:00');
    timer = setInterval(countup, 1000);

    $(this).prop('disabled', true);
    $('.js-timer').prop('disabled', false);

    $('.js-pause').on('click', function(){
      clearInterval(timer);

      $(this).prop('disable', true);
      $('.js-replay').prop('disable', false);
    });

    function countup(){
      sec += 1;

      if (sec > 59) {
        sec = 0;
        min += 1;
      }

      if (min > 59) {
        min = 0;
      }

      $('.js-timer').html(min + ':' + sec);
    }

  });

  var canvas = document.getElementById('block-parts');
  var ctx = canvas.getContext('2d');

  let blockSize = 20;

  // O字ブロック
  function oBlock (){
    ctx.fillStyle = '#fe0940';
    ctx.strokeStyle = '#af0026';

    ctx.fillRect(0, 0, blockSize, blockSize);
    ctx.strokeRect(0, 0, blockSize, blockSize);

    ctx.fillRect(20, 0, blockSize, blockSize);
    ctx.strokeRect(20, 0, blockSize, blockSize);

    ctx.fillRect(0, 20, blockSize, blockSize);
    ctx.strokeRect(0, 20, blockSize, blockSize);

    ctx.fillRect(20, 20, blockSize, blockSize);
    ctx.strokeRect(20, 20, blockSize, blockSize);
  }


  // I字ブロック
  function iBlock (){
    ctx.fillStyle = '#00ee02';
    ctx.strokeStyle = '#00a803';

    ctx.beginPath();
    ctx.fillRect(60, 0, blockSize, blockSize);
    ctx.strokeRect(60, 0, blockSize, blockSize);

    ctx.fillRect(60, 20, blockSize, blockSize);
    ctx.strokeRect(60, 20, blockSize, blockSize);

    ctx.fillRect(60, 40, blockSize, blockSize);
    ctx.strokeRect(60, 40, blockSize, blockSize);

    ctx.fillRect(60, 60, blockSize, blockSize);
    ctx.strokeRect(60, 60, blockSize, blockSize);
  }


  // L字ブロック
  ctx.fillStyle = '#fe6d01';
  ctx.strokeStyle = '#cf5a00';

  ctx.beginPath();
  ctx.fillRect(100, 0, blockSize, blockSize);
  ctx.strokeRect(100, 0, blockSize, blockSize);

  ctx.fillRect(100, 20, blockSize, blockSize);
  ctx.strokeRect(100, 20, blockSize, blockSize);

  ctx.fillRect(100, 40, blockSize, blockSize);
  ctx.strokeRect(100, 40, blockSize, blockSize);

  ctx.fillRect(120, 40, blockSize, blockSize);
  ctx.strokeRect(120, 40, blockSize, blockSize);

  // S字ブロック
  ctx.fillStyle = '#c900fc';
  ctx.strokeStyle = '#9b00c2';

  ctx.beginPath();
  ctx.fillRect(180, 0, blockSize, blockSize);
  ctx.strokeRect(180, 0, blockSize, blockSize);

  ctx.fillRect(200, 0, blockSize, blockSize);
  ctx.strokeRect(200, 0, blockSize, blockSize);

  ctx.fillRect(180, 20, blockSize, blockSize);
  ctx.strokeRect(180, 20, blockSize, blockSize);

  ctx.fillRect(160, 20, blockSize, blockSize);
  ctx.strokeRect(160, 20, blockSize, blockSize);

  // Z字ブロック
  ctx.fillStyle = '#00d6f9';
  ctx.strokeStyle = '#00a1ba';

  ctx.beginPath();
  ctx.fillRect(240, 0, blockSize, blockSize);
  ctx.strokeRect(240, 0, blockSize, blockSize);

  ctx.fillRect(260, 0, blockSize, blockSize);
  ctx.strokeRect(260, 0, blockSize, blockSize);

  ctx.fillRect(260, 20, blockSize, blockSize);
  ctx.strokeRect(260, 20, blockSize, blockSize);

  ctx.fillRect(280, 20, blockSize, blockSize);
  ctx.strokeRect(280, 20, blockSize, blockSize);

  // J字ブロック
  ctx.fillStyle = '#fecf02';
  ctx.strokeStyle = '#c9a500';

  ctx.beginPath();
  ctx.fillRect(20, 80, blockSize, blockSize);
  ctx.strokeRect(20, 80, blockSize, blockSize);

  ctx.fillRect(20, 100, blockSize, blockSize);
  ctx.strokeRect(20, 100, blockSize, blockSize);

  ctx.fillRect(20, 120, blockSize, blockSize);
  ctx.strokeRect(20, 120, blockSize, blockSize);

  ctx.fillRect(0, 120, blockSize, blockSize);
  ctx.strokeRect(0, 120, blockSize, blockSize);


  oBlock();
  iBlock();

  const blocks = [oBlock, iBlock];

});
