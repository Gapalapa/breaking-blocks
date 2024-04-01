import './main.scss';

$(function(){

  let start = $('.js-start');
  let game = $('.js-game');
  let frame = $('.js-frame');
  let startBtn = $('.js-btn-start');
  // 初期値
  start.hide();
  game.show();

  var canvas = document.getElementById('js-canvas');

  // canvasサイズ調整
  let screenWidth = frame.width();
  let screenHeight = frame.height();
  $(canvas).attr('width', screenWidth);
  $(canvas).attr('height', screenHeight);

  // スタート
  startBtn.on('click', function(){
    // 画面切り替え
    start.fadeOut();
    game.fadeIn();

    timerSet();

  });

  // タイマー
  function timerSet (){
    let sec = 0;
    let min = 0;
    let timer;

    $('.js-timer').text('00:00');
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

      $('.js-timer').text(min_number + ':' + sec_number);
    }
  }

  // canvasでブロック生成
  var ctx = canvas.getContext('2d');

  // ブロック1つのサイズ
  let blockSize = 20;

  // ブロックが落ち始める位置
  let x = (screenWidth - blockSize) / 2; // canvasのx座標の中央に配置

  // ブロックのy座標の初期値
  let y = 0;

  // canvasをクリア
  ctx.clearRect(0, 0, `${canvas.width}`, `${canvas.height}`);

  // ブロックをランダムで取り出す
  let blocks = ['blockI', 'blockJ', 'blockL', 'blockO', 'blockS', 'blockT', 'blockZ'];
  let random = Math.floor(Math.random() * blocks.length);
  let randBlocks = blocks[random];

  let newBlock = random + 1;
  if(newBlock === blocks.length){
    newBlock = 0; // 最後の要素の場合、最初の要素に戻る
  }

  // 次のブロックを取得
  const nextBlock = blocks[newBlock];

  function drawBlocks(block) {
    if(block === 'blockI'){
      y = (screenHeight - 80);
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
      y = (screenHeight - 60);
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
      y = (screenHeight - 40);
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
      y = (screenHeight - 40);
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
      y = (screenHeight - 40);
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
      y = (screenHeight - 40);
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
    $(canvas).animate({
      top: '+=2'
    }, 20, function(){
      y += 20; // y座標の更新
      if($(canvas).position().top > 0){
        // 最下部に到達したらアニメーションストップ
        $(canvas).stop();
        drawBlocks(nextBlock);
      } else{
        dropBlocks();
      }
    });
  }

  dropBlocks();
  drawBlocks(randBlocks, nextBlock);

});
