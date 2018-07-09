$(function(){ 
    var visual = $('#brandVisual > ul > li');
	var button = $('#buttonList > li');
	var current = 0;
	var setIntervalId;
	timer();
	function timer(){
		setIntervalId = setInterval(function(){
			var n = current + 1;
			if(n==visual.size()){n=0};
			button.eq(n).trigger('click');
		},1000);
	}
	$('#wrap').hover(
		function(){
			clearInterval(setIntervalId);
		},
		function(){
			timer();
		}
	);
	
	button.on({
		click:function(){
			var tg = $(this);
			var i = tg.index();
			if(current===tg.index()){return;}
			button.removeClass('on');
			tg.addClass('on');
			move(i);
		}
	});
	
	function move(i){
		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);
		currentEl.css({left:0}).stop().animate({left:'-100%'});
		nextEl.css({left:'100%'}).stop().animate({left:'0%'});
		current = i;
	}
});





