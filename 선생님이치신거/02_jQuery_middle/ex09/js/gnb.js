$(function(){
    var menu = $('#gnb > li');
	// 1뎁스 메뉴
	var wrap = $('#gnbWrap');
	// 1뎁스와 2뎁스를 감싸고 있는 div
	var menuHeight = menu.children('a').height();
	// 1뎁스의 높이
	var pageURL = location.href;
	// pageURL = http://www.hschool.co.kr/sub02/2depth_menu.html
	var activeMenu;

	menu.on({
		mouseover:function(){
			var tg = $(this);
			menu.removeClass('on');
			tg.addClass('on');
			var th = menuHeight + tg.find('>.sGnbArea').height();
			// th = 1뎁스 높이 + 2뎁스 높이
			wrap.stop().animate({height:th});
		},
		mouseout:function(){
			var tg = $(this);
			tg.removeClass('on');

			// th = 1뎁스 높이 + 2뎁스 높이
			wrap.stop().animate({height:menuHeight});
			onActive();
		}
	});
	
	menu.each(function(i){
		var tg = $(this);
		var sub = tg.find('>.sGnbArea > ul > li');
		var menuURL = tg.children('a').attr('href');
		// menuURL = 1뎁스의 href 값
		var active = pageURL.indexOf(menuURL);
		// http://www.hschool.co.kr/sub02/2depth_menu.html
		// 3depth_menu.html  -1
		if(active > -1) activeMenu = tg;
		sub.each(function(j){
			var tg = $(this);
			var subURL = tg.children('a').attr('href');
			active = pageURL.indexOf(subURL);
			if(active>-1)activeMenu= tg;
		});
		sub.on({
			mouseover:function(){
				var tg = $(this);
				sub.removeClass('on');
				tg.addClass('on');
			},
			mouseout:function(){
				var tg = $(this);
				tg.removeClass('on');
				//onActive();
			}
		});
	});
	
	onActive();
	
	function onActive(){
		if(activeMenu) activeMenu.trigger('mouseover');
	}
});













