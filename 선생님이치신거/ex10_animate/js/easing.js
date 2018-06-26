jQuery(document).ready(function(){
	$('button').click(function(){
		var easing = $('select > option:selected').html();
		$('div').animate({left:'800'},2000,easing)
				.animate({left:'0'},2000,easing);
	});
});
