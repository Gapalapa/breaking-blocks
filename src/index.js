import './main.scss';

$(function(){
  $('.js-game').hide();
  $('.js-btn-start').on('click', function(){
    $('.js-start').fadeOut();
    $('.js-game').fadeIn();
  });
});