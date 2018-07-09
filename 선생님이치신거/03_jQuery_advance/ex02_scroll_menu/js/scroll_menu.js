$(function(){
    var menu = $('#top_menu > ul > li');
	var contents = $('#contents > div');
	
	menu.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		var section = contents.eq(i);
		var tt = section.offset().top;
		$('html, body').stop().animate({scrollTop:tt});
	});
	
	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		contents.each(function(){
			var tg = $(this);
			var i = tg.index();
			if(sct >= tg.offset().top -114){
				menu.removeClass('on');
				menu.eq(i).addClass('on');
			}
		});
		/* if(sct >= contents.eq(0).offset().top -114){
			menu.removeClass('on');
			menu.eq(0).addClass('on');
		}
		if(sct >= contents.eq(1).offset().top -114){
			menu.removeClass('on');
			menu.eq(1).addClass('on');
		}
		if(sct >= contents.eq(2).offset().top -114){
			menu.removeClass('on');
			menu.eq(2).addClass('on');
		} */
	});
	
});





