$(function(){
  // canvasでブロック生成
  var canvas = document.getElementById('js-canvas');
  var ctx = canvas.getContext('2d');

  // ブロックのサイズ
  let blockSize = 20;

  // ブロックが落ち始める位置
  let canvasWidth = $('.js-frame').width();
  let x = (canvasWidth - blockSize) / 2; // canvasのx座標の中央に配置

  // ブロックのy座標の初期値
  let y = -40;

  // Canvasをクリア
  // ctx.clearRect(0, 0, canvas.width, canvas.height);

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

  // I字ブロック
  function drawI (){
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
  }

  // J字ブロック
  function drawJ (){
    ctx.fillStyle = '#fecf02';
    ctx.strokeStyle = '#c9a500';

    ctx.beginPath();
    ctx.fillRect(x, y, blockSize, blockSize);
    ctx.strokeRect(x, y, blockSize, blockSize);

    ctx.fillRect(x, 100, blockSize, blockSize);
    ctx.strokeRect(x, 100, blockSize, blockSize);

    ctx.fillRect(x, 120, blockSize, blockSize);
    ctx.strokeRect(x, 120, blockSize, blockSize);

    ctx.fillRect(x, 120, blockSize, blockSize);
    ctx.strokeRect(x, 120, blockSize, blockSize);
  }

  // L字ブロック
  function lBlock (){
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
  }

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

  // S字ブロック
  function sBlock (){
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
  }

  // T字ブロック
  function tBlock (){
    ctx.fillStyle = '#0908f2';
    ctx.strokeStyle = '#08097c';

    ctx.beginPath();
    ctx.fillRect(20, 0, blockSize, blockSize);
    ctx.strokeRect(20, 0, blockSize, blockSize);

    ctx.fillRect(0, 20, blockSize, blockSize);
    ctx.strokeRect(0, 20, blockSize, blockSize);

    ctx.fillRect(20, 20, blockSize, blockSize);
    ctx.strokeRect(20, 20, blockSize, blockSize);

    ctx.fillRect(40, 20, blockSize, blockSize);
    ctx.strokeRect(40, 20, blockSize, blockSize);
  }

  // Z字ブロック
  function zBlock (){
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
  }

  // drawI();
  // drawJ();

  // function dropI (){
  //   if(y < canvas.height - blockSize){
  //     $(canvas).animate({
  //       // ブロックが落ちる処理
  //       top: '+=20'
  //     }, 500, function(){
  //       y + 20;
  //       drawI();
  //       dropI();
  //     });
  //   }
  // }

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