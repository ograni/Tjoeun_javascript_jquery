jQuery(document).ready(function(){
	$('.rollover').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		// src_off = images/menu01_off.png
		var src_on = src_off.replace('_off','_on');
		// src_on = images/menu01_on.png
		
		$('<img src="" />').attr('src',src_on);
		// <img src="images/menu01_on.png" />
		// <img src="images/menu02_on.png" />
		// <img src="images/menu03_on.png" />
		
		/* a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		); */
		a.bind('mouseenter focus',function(){
			img.attr('src',src_on);
		});
		a.bind('mouseleave blur',function(){
			img.attr('src',src_off);
		});
	});
});




