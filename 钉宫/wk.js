// JavaScript Document

$(function(){
  $w = $('.img1').width();
  $h = $('.img1').height();
  $w2 = $w + 20;
  $h2 = $h + 20;

  $('.img1').hover(function(){
	   $(this).stop().animate({height:$h2,width:$w2,left:"-10px",top:"-10px"},500);
  },function(){
	   $(this).stop().animate({height:$h,width:$w,left:"0px",top:"0px"},500);
  });
});

