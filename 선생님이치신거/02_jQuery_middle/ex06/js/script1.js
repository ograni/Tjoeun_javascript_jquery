jQuery(document).ready(function(){
	var el = $('#nav > ul > li');
	var urls = [
		'http://www.hschool.co.kr',
		'http://www.daum.net',
		'http://www.nate.com',
		'http://www.yahoo.co.kr'
	]
	el.on({
		mouseover:function(){
			var tg = $(this);
			tg.addClass('on');
		},
		mouseout:function(){
			var tg = $(this);
			tg.removeClass('on');
		},
		click:function(event){
			var tg = $(this);
			event.preventDefault();
			var i = tg.index();
			var linkURL = urls[i];
			//location.href = linkURL;
			window.open(linkURL);
		}
	});
});






