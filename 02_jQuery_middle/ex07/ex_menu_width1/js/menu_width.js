jQuery(document).ready(function(){
	var menu = $('#animate > li');
	menu.hover(
		function(){
			var targetMenu = $(this);
			var menuImage = targetMenu.find('.menu_image');
			var imagesWidth = menuImage.find('img').innerWidth();
			var imgOn = targetMenu.find('div.on');
			var imgOff = targetMenu.find('div.off');
			imgOn.css('display','block');
			imgOff.css('display','none');
			menuImage.animate({width:imagesWidth},{duration:350,queue:false})
		},
		function(){
			var targetMenu = $(this);
			var menuImage = targetMenu.find('.menu_image');
			var imagesWidth = menuImage.find('img').innerWidth();
			var imgOn = targetMenu.find('div.on');
			var imgOff = targetMenu.find('div.off');
			imgOn.css('display','none');
			imgOff.css('display','block');
			menuImage.animate({width:0},{duration:350,queue:false})
		}
	);
});
