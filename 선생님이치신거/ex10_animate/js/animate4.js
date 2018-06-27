jQuery(document).ready(function(){
	$('.sub_list .box1').hover(
		function(){
			$(".sub_list .box1 a img").stop(true,true).animate({"margin-top":"-97px"},250);
		},
		function(){
			$(".sub_list .box1 a img").stop(true,true).animate({"margin-top":"0px"},250);
		}
	);
});
