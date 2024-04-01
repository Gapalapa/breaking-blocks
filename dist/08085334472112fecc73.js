import './main.scss';

$(function(){

  // 初期値
  $('.js-start').hide();
  $('.js-game').show();

  // canvasサイズ調整
  let screenWidth = $('.js-frame').width();
  let screenHeight = $('.js-frame').height();
  $('#js-canvas').attr('width', screenWidth);
  $('#js-canvas').attr('height', screenHeight + 80);

  // スタート
  $('.js-btn-start').on('click', function(){
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

  // canvasでブロック生成
  var canvas = document.getElementById('js-canvas');
  var ctx = canvas.getContext('2d');

  // ブロックのサイズ
  let blockSize = 20;

  // ブロックが落ち始める位置
  let canvasWidth = $('.js-frame').width();
  let x = (canvasWidth - blockSize) / 2; // canvasのx座標の中央に配置

  // ブロックのy座標の初期値
  let y = 0;

  // Canvasをクリア
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ブロックをランダムで取り出す
  let blocks = ['blockI', 'blockJ', 'blockL', 'blockO', 'blockS', 'blockT', 'blockZ'];
  let randBlocks = blocks[Math.floor(Math.random() * blocks.length)];

  function drawBlocks(block) {
    if(block === 'blockI'){
      // I字ブロック
      ctx.fillStyle = '#00ee02';
      ctx.strokeStyle = '#00a803';

      ctx.beginPath();
      ctx.fillRect(x, y, blockSize, blockSize);
      ctx.strokeRect(x, y, blockSize, blockSize);

      ctx.fillRect(x, y + 20, blockSize, blockSize);
      ctx.strokeRect(x, y + 20, blockSize, blockSize);

      ctx.fillRect(x, y + 40, blockSize, blockSize);
      ctx.strokeRect(x, y + 40, blockSize, blockSize);

      ctx.fillRect(x, y + 60, blockSize, blockSize);
      ctx.strokeRect(x, y + 60, blockSize, blockSize);
    } else if(block === 'blockJ'){
      // J字ブロック
      ctx.fillStyle = '#fecf02';
      ctx.strokeStyle = '#c9a500';

      ctx.beginPath();
      ctx.fillRect(x, y, blockSize, blockSize);
      ctx.strokeRect(x, y, blockSize, blockSize);

      ctx.fillRect(x, y + 20, blockSize, blockSize);
      ctx.strokeRect(x, y + 20, blockSize, blockSize);

      ctx.fillRect(x, y + 40, blockSize, blockSize);
      ctx.strokeRect(x, y + 40, blockSize, blockSize);

      ctx.fillRect(x - 20, y + 40, blockSize, blockSize);
      ctx.strokeRect(x - 20, y + 40, blockSize, blockSize);
    } else if(block === 'blockL'){
      // L字ブロック
      ctx.fillStyle = '#fe6d01';
      ctx.strokeStyle = '#cf5a00';

      ctx.beginPath();
      ctx.fillRect(x, y, blockSize, blockSize);
      ctx.strokeRect(x, y, blockSize, blockSize);

      ctx.fillRect(x, y + 20, blockSize, blockSize);
      ctx.strokeRect(x, y + 20, blockSize, blockSize);

      ctx.fillRect(x, y + 40, blockSize, blockSize);
      ctx.strokeRect(x, y + 40, blockSize, blockSize);

      ctx.fillRect(x + 20, y + 40, blockSize, blockSize);
      ctx.strokeRect(x + 20, y + 40, blockSize, blockSize);
    } else if(block === 'bloclO'){
      // O字ブロック
      ctx.fillStyle = '#fe0940';
      ctx.strokeStyle = '#af0026';

      ctx.fillRect(x, y, blockSize, blockSize);
      ctx.strokeRect(x, y, blockSize, blockSize);

      ctx.fillRect(x + 20, y, blockSize, blockSize);
      ctx.strokeRect(x + 20, y, blockSize, blockSize);

      ctx.fillRect(x, y + 20, blockSize, blockSize);
      ctx.strokeRect(x, y + 20, blockSize, blockSize);

      ctx.fillRect(x + 20, y + 20, blockSize, blockSize);
      ctx.strokeRect(x + 20, y + 20, blockSize, blockSize);
    } else if(block === 'blockS'){
      // S字ブロック
      ctx.fillStyle = '#c900fc';
      ctx.strokeStyle = '#9b00c2';

      ctx.beginPath();
      ctx.fillRect(x - 20, y, blockSize, blockSize);
      ctx.strokeRect(x - 20, y, blockSize, blockSize);

      ctx.fillRect(x, y, blockSize, blockSize);
      ctx.strokeRect(x, y, blockSize, blockSize);

      ctx.fillRect(x, y + 20, blockSize, blockSize);
      ctx.strokeRect(x, y + 20, blockSize, blockSize);

      ctx.fillRect(x + 20, y + 20, blockSize, blockSize);
      ctx.strokeRect(x + 20, y + 20, blockSize, blockSize);
    } else if(block === 'blockT'){
      // T字ブロック
      ctx.fillStyle = '#0908f2';
      ctx.strokeStyle = '#08097c';

      ctx.beginPath();
      ctx.fillRect(x, y, blockSize, blockSize);
      ctx.strokeRect(x, y, blockSize, blockSize);

      ctx.fillRect(x - 20, y + 20, blockSize, blockSize);
      ctx.strokeRect(x - 20, y + 20, blockSize, blockSize);

      ctx.fillRect(x, y + 20, blockSize, blockSize);
      ctx.strokeRect(x, y + 20, blockSize, blockSize);

      ctx.fillRect(x + 20, y + 20, blockSize, blockSize);
      ctx.strokeRect(x + 20, y + 20, blockSize, blockSize);
    } else if(block === 'blockZ'){
      // Z字ブロック
      ctx.fillStyle = '#00d6f9';
      ctx.strokeStyle = '#00a1ba';

      ctx.beginPath();
      ctx.fillRect(x - 20, y, blockSize, blockSize);
      ctx.strokeRect(x - 20, y, blockSize, blockSize);

      ctx.fillRect(x, y, blockSize, blockSize);
      ctx.strokeRect(x, y, blockSize, blockSize);

      ctx.fillRect(x, y + 20, blockSize, blockSize);
      ctx.strokeRect(x, y + 20, blockSize, blockSize);

      ctx.fillRect(x + 20, y + 20, blockSize, blockSize);
      ctx.strokeRect(x + 20, y + 20, blockSize, blockSize);
    }
  }

  function dropBlocks(){
    // ブロックが落ちる処理
    $(canvas).animate({
      top: '+=20'
    }, 1000, function(){
      y + 20;
      dropBlocks();
    });

    const maxPosition = $('#js-canvas').css('top');

    if (screenHeight >= maxPosition) {
      $(canvas).stop();
    }
  }

  for(let i = 0; i < blocks.length; i++){
    dropBlocks();
  }

  drawBlocks(randBlocks);



  // $('.js-btn-start').on('click', function(){
  //   dropI();
  // });

  // $('body').on('click', function(){
  //   angle += 45;
  //   drawI();
  // });

  // 右に移動
  // $('.js-right').on('click', function(){
  //   console.log(x);
  //   x +=20;
  //   drawI();
  // });

  // 左に移動
  // $('.js-left').on('click', function(){
  //   x -= 20;
  //   drawI();
  // });

});
