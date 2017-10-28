function JoynBackground($move,$sudu){
	var $img_num=$('#JoynBackground').children('img').length;
	var $img_show=1;
	switch($move){
		case 1:
			$("#JoynBackground img").css({width:"120%",height:"120%",top:"-10%",left:"-10%"});
			$("#JoynBackground img[name='1']").css({display:"block"})
			.animate({width:"100%",height:"100%",top:"0",left:"0"},$sudu-1000);
			setInterval(function(){
				$("#JoynBackground img[name='"+$img_show+"']").fadeOut(100);
				$img_show++;$img_show=$img_show>$img_num?'1':$img_show;
				$("#JoynBackground img[name='"+$img_show+"']").css({width:"120%",height:"120%",top:"-10%",left:"-10%"}).fadeIn(1000)
				.animate({width:"100%",height:"100%",top:"0",left:"0"},$sudu-1000);
			},$sudu);
		break;
		case 2:
			$("#JoynBackground img[name='1']").css({display:"block"})
			.animate({width:"120%",height:"120%",top:"-10%",left:"-10%"},$sudu-1000);
			setInterval(function(){
				$("#JoynBackground img[name='"+$img_show+"']").fadeOut(3000);
				$img_show++;$img_show=$img_show>$img_num?'1':$img_show;
				$("#JoynBackground img[name='"+$img_show+"']").css({width:"100%",height:"100%",top:"0%",left:"0%"}).fadeIn(3000)
				.animate({width:"120%",height:"120%",top:"-10%",left:"-10%"},$sudu-1000);
			},$sudu);
		break;
		case 3:
			$("#JoynBackground img[name='1']").css({display:"block"});
			setInterval(function(){
				$("#JoynBackground img[name='"+$img_show+"']").fadeOut($sudu);
				$img_show++;$img_show=$img_show>$img_num?'1':$img_show;
				$("#JoynBackground img[name='"+$img_show+"']").fadeIn($sudu);
			},$sudu);
		break;
	}
}