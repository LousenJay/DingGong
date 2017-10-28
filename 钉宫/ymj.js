<!--图片放大效果-->
$(function(){
  $w = 334;/*$('.img1').width()*/
  $h = 73;/*$('.img1').height()*/
  $w2 = $w + 5;
  $h2 = $h + 5;

  $('.img1').hover(function(){
	   $(this).animate({height:$h2,width:$w2},200);
  },function(){
	   $(this).animate({height:$h,width:$w},200);
  });
});


<!--图片旋转效果-->
$(function(){

			$(".d0").rotate({
			  bind:
			  {
			    mouseover : function() {
			    $(this).rotate({animateTo:6})
			  },
			  mouseout : function() {
			    $(this).rotate({animateTo:0})
			    }
			  }

			});

		});	
		

<!--音频播放效果-->		
$(function(){
  $("#d1").mouseenter(function(){
    dg_1.play();
  });
  $("#d2").mouseenter(function(){
    dg_2.play();
  });
  $("#d3").mouseenter(function(){
    dg_3.play();
  });
  $("#d4").mouseenter(function(){
    dg_4.play();
  });
  $(".img1").mouseenter(function(){
  	dg_6.play();
  });
  $(".d0").click(function(){
    dg_5.play();
  });
  $(".d0").dblclick(function(){
    dg_0.play();
  });
  
});








