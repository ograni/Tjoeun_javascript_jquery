jQuery(document).ready(function(){
	var menu = $('#nav > li');
	menu.hover(function(){
		close();
		var tg = $(this);
		var onImg = tg.find('.text_image > .on');
		var offImg = tg.find('.text_image > .off');
		var menuImage = tg.find('.menu_image');
		var imageHeight = menuImage.find('img').innerWidth();
		
		onImg.css('display', 'block');
		offImg.css('display', 'none');
		menuImage.animate({width:imageHeight},{duration:600, queue:false,easing:'easeOutCubic'});
	},
	function(){
		var tg = $(this);
		var onImg = tg.find('.text_image > .on');
		var offImg = tg.find('.text_image > .off');
		var menuImage = tg.find('.menu_image');
		var imageHeight = 0;
		
		onImg.css('display', 'none');
		offImg.css('display', 'block');
		menuImage.animate({width:imageHeight},{duration:600, queue:false,easing:'easeOutCubic'});
		open();
		
	});

	function open(){
		var tg = $('#nav > li').eq(1);
		var onImg = tg.find('.text_image > .on');
		var offImg = tg.find('.text_image > .off');
		var menuImage = tg.find('.menu_image');
		var imageHeight = menuImage.find('img').innerWidth();
		
		onImg.css('display', 'block');
		offImg.css('display', 'none');
		menuImage.animate({width:imageHeight},{duration:600, queue:false,easing:'easeOutCubic'});
		
	};
	function close(){
		var tg = $('#nav > li');
		var onImg = tg.find('.text_image > .on');
		var offImg = tg.find('.text_image > .off');
		var menuImage = tg.find('.menu_image');
		var imageHeight = 0;
		
		onImg.css('display', 'none');
		offImg.css('display', 'block');
		menuImage.animate({width:imageHeight},{duration:600, queue:false,easing:'easeOutCubic'});		
	};
	open();
});
