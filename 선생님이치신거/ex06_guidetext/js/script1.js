jQuery(document).ready(function(){
	$('.guideText').each(function(){
		var guideText = this.defaultValue;
		// guideText = "이름을 입력해 주세요."
		var element = $(this);
		element.focus(function(){
			if(element.val()===guideText){
				element.val('');
				element.removeClass('guide');
			}
		});
		element.blur(function(){
			if(element.val()===''){
				element.val(guideText);
				element.addClass('guide');
			}
		});
		if(element.val()===guideText){
			element.addClass('guide');
		}
	});
});





