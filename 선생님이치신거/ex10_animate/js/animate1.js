jQuery(document).ready(function(){
	$('.box_in .box1').hover(
		function(){
			$('.box_in .box1>a').stop(true, true).animate({'margin-top':'-176px'},250);
		},
		function(){
			$('.box_in .box1>a').stop(true, true).animate({'margin-top':'0px'},250);
		}
	);
	
});
