$(function(){
	var current = 0;
	var thumbListSize = 6;
    var thumbnail = $('#thumbnail');
    /* var thumbnail = width: 824px; */
	var prev = thumbnail.find('>.left');
	var next = thumbnail.find('>.right');
	var container = thumbnail.find('>.container>ul');
	/* var container = width: 2560px; */
	var containWidth = thumbnail.find('>.container').width();
	/* var containWidth = width: 760px; */
	var thumb = container.find('>.thumb');
	var maxSize = thumb.size();
	/* var maxSize = 18 */
	var image = $('#gallery #image > p');
	
	next.on('click',function(){
		if(current < maxSize/thumbListSize-1) current++;
		// alert(current);
		listMove();
	});
	prev.on('click',function(){
		if(current > 0) current--;
		// alert(current);
		listMove();
	});
	
	function listMove(){
		var tl = containWidth*current*-1
		container.stop().animate({left:tl},{duration:500,easing:'easeOutCubic'});
	}
	
	thumb.on('click',function(){
		image.css('display','none');
		var i = $(this).index();
		image.eq(i).css('display','block');
	});
	
	
});






