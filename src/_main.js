import './main.scss';

$(function(){

  let start = $('.js-start');
  let game = $('.js-game');
  let frame = $('.js-frame');
  let startBtn = $('.js-btn-start');
  let time = $('.js-timer');
  let score = $('.js-score');

  // 初期値
  start.hide();
  game.show();
  time.text('00:00');
  score.text('0');

  var canvas = document.getElementById('js-game-board');

  // canvasサイズ調整
  let screenWidth = frame.width();
  let screenHeight = frame.height();
  canvas.width = screenWidth;
  canvas.height = screenHeight;

  // スタート
  startBtn.on('click', function(){
    // 画面切り替え
    start.fadeOut();
    game.fadeIn();

    // スタートボタンクリックと共にタイマー開始
    timerSet();
  });

  // タイマーの設定
  function timerSet (){
    let pause = $('.js-pause');
    let sec = 0;
    let min = 0;
    let timer;

    timer = setInterval(countup, 1000);

    $(this).prop('disabled', true);
    time.prop('disabled', false);

    // 一時停止
    pause.on('click', function(){
      $(this).addClass('btn-replay');
      pause.find('p').text('REPLAY');

      clearInterval(timer);

      $(this).prop('disable', true);
      $('.js-pause.btn-replay').prop('disable', false);
    });

    if(pause.hasClass('btn-replay')){
      // リスタート
      pause.on('click', function(){
        $(this).removeClass('btn-replay');
        pause.find('p').text('PAUSE');

        timer = setInterval(countup, 1000);

        $(this).prop('disabled', true);
        pause.prop('disabled', false);
      });
    }

    function countup(){
      sec += 1;

      (sec > 59) ? (sec = 0, min += 1) : (min > 59) ? min = 0 : null;

      let sec_number = ('0' + sec).slice(-2);
      let min_number = ('0' + min).slice(-2);

      time.text(min_number + ':' + sec_number);
    }
  }

  // canvasでブロック生成
  var ctx = canvas.getContext('2d');

  let blockSize  = 20; // ブロック1つ分のサイズ

  // ブロックが落ち始める位置
  let x = (screenWidth - blockSize ) / 2; // canvasのx座標の中央に配置
  let y = 0; // ブロックのy座標の初期値

  // 次のブロックを作成
  let blocks = ['blockI', 'blockJ', 'blockL', 'blockO', 'blockS', 'blockT', 'blockZ'];
  let random = Math.floor(Math.random() * blocks.length);
  let randBlock = blocks[random];

  function drawBlocks() {
    if(randBlock === 'blockI'){
      y = (screenHeight - (blockSize * 4));
      // I字ブロック
      ctx.fillStyle = '#00ee02';
      ctx.strokeStyle = '#00a803';

      ctx.beginPath();
      ctx.fillRect(x, y, blockSize , blockSize);
      ctx.strokeRect(x, y, blockSize , blockSize);

      ctx.fillRect(x, (y + blockSize), blockSize  , blockSize);
      ctx.strokeRect(x, (y + blockSize), blockSize , blockSize);

      ctx.fillRect(x, (y + (blockSize * 2)), blockSize , blockSize);
      ctx.strokeRect(x, (y + (blockSize * 2)), blockSize , blockSize);

      ctx.fillRect(x, (y + (blockSize * 3)), blockSize , blockSize);
      ctx.strokeRect(x, (y + (blockSize * 3)), blockSize , blockSize);

    } else if(randBlock === 'blockJ'){
      y = (screenHeight - (blockSize * 3));
      // J字ブロック
      ctx.fillStyle = '#fecf02';
      ctx.strokeStyle = '#c9a500';

      ctx.beginPath();
      ctx.fillRect(x, y, blockSize , blockSize );
      ctx.strokeRect(x, y, blockSize , blockSize );

      ctx.fillRect(x, y + blockSize , blockSize , blockSize );
      ctx.strokeRect(x, y + blockSize , blockSize , blockSize );

      ctx.fillRect(x, y + (blockSize  * 2), blockSize , blockSize );
      ctx.strokeRect(x, y + (blockSize  * 2), blockSize , blockSize );

      ctx.fillRect(x - blockSize , y + (blockSize  * 2), blockSize , blockSize );
      ctx.strokeRect(x - blockSize , y + (blockSize  * 2), blockSize , blockSize );

    } else if(randBlock === 'blockL'){
      y = (screenHeight - (blockSize  * 3))
      // L字ブロック
      ctx.fillStyle = '#fe6d01';
      ctx.strokeStyle = '#cf5a00';

      ctx.beginPath();
      ctx.fillRect(x, y, blockSize , blockSize );
      ctx.strokeRect(x, y, blockSize , blockSize );

      ctx.fillRect(x, y + blockSize , blockSize , blockSize );
      ctx.strokeRect(x, y + blockSize , blockSize , blockSize );

      ctx.fillRect(x, y + (blockSize  * 2), blockSize , blockSize );
      ctx.strokeRect(x, y + (blockSize  * 2), blockSize , blockSize );

      ctx.fillRect(x + blockSize , y + (blockSize  * 2), blockSize , blockSize );
      ctx.strokeRect(x + blockSize , y + (blockSize  * 2), blockSize , blockSize );

    } else if(randBlock === 'bloclO'){
      y = (screenHeight - (blockSize  * 2));
      // O字ブロック
      ctx.fillStyle = '#fe0940';
      ctx.strokeStyle = '#af0026';

      ctx.fillRect(x, y, blockSize , blockSize );
      ctx.strokeRect(x, y, blockSize , blockSize );

      ctx.fillRect(x + blockSize , y, blockSize , blockSize );
      ctx.strokeRect(x + blockSize , y, blockSize , blockSize );

      ctx.fillRect(x, y + blockSize , blockSize , blockSize );
      ctx.strokeRect(x, y + blockSize , blockSize , blockSize );

      ctx.fillRect(x + blockSize , y + blockSize , blockSize , blockSize );
      ctx.strokeRect(x + blockSize , y + blockSize , blockSize , blockSize );

    } else if(randBlock === 'blockS'){
      y = (screenHeight - (blockSize  * 2));
      // S字ブロック
      ctx.fillStyle = '#c900fc';
      ctx.strokeStyle = '#9b00c2';

      ctx.beginPath();
      ctx.fillRect(x - blockSize , y, blockSize , blockSize );
      ctx.strokeRect(x - blockSize , y, blockSize , blockSize );

      ctx.fillRect(x, y, blockSize , blockSize );
      ctx.strokeRect(x, y, blockSize , blockSize );

      ctx.fillRect(x, y + blockSize , blockSize , blockSize );
      ctx.strokeRect(x, y + blockSize , blockSize , blockSize );

      ctx.fillRect(x + blockSize , y + blockSize , blockSize , blockSize );
      ctx.strokeRect(x + blockSize , y + blockSize , blockSize , blockSize );

    } else if(randBlock === 'blockT'){
      y = (screenHeight - (blockSize  * 2));
      // T字ブロック
      ctx.fillStyle = '#0908f2';
      ctx.strokeStyle = '#08097c';

      ctx.beginPath();
      ctx.fillRect(x, y, blockSize , blockSize );
      ctx.strokeRect(x, y, blockSize , blockSize );

      ctx.fillRect(x - blockSize , y + blockSize , blockSize , blockSize );
      ctx.strokeRect(x - blockSize , y + blockSize , blockSize , blockSize );

      ctx.fillRect(x, y + blockSize , blockSize , blockSize );
      ctx.strokeRect(x, y + blockSize , blockSize , blockSize );

      ctx.fillRect(x + blockSize , y + blockSize , blockSize , blockSize );
      ctx.strokeRect(x + blockSize , y + blockSize , blockSize , blockSize );

    } else if(randBlock === 'blockZ'){
      y = (screenHeight - (blockSize  * 2));
      // Z字ブロック
      ctx.fillStyle = '#00d6f9';
      ctx.strokeStyle = '#00a1ba';

      ctx.beginPath();
      ctx.fillRect(x + blockSize , y, blockSize , blockSize );
      ctx.strokeRect(x + blockSize , y, blockSize , blockSize );

      ctx.fillRect(x, y, blockSize , blockSize );
      ctx.strokeRect(x, y, blockSize , blockSize );

      ctx.fillRect(x, y + blockSize , blockSize , blockSize );
      ctx.strokeRect(x, y + blockSize , blockSize , blockSize );

      ctx.fillRect(x + blockSize , y + blockSize , blockSize , blockSize );
      ctx.strokeRect(x + blockSize , y + blockSize , blockSize , blockSize );
    }
  }

  function dropBlocks(){
    $(canvas).animate({
      top: '+=2'
    }, 20, function(){
      y += 20; // y座標の更新
      if($(canvas).position().top > 0){
        // 最下部に到達したらアニメーションストップ
        $(canvas).stop();
        drawBlocks();
        drawBlocks();
      } else{
        dropBlocks();
      }
    });
  }

  $('.js-right').on('click', function(){
    $(canvas).animate(

    )
  });

  dropBlocks();
  drawBlocks();

});
