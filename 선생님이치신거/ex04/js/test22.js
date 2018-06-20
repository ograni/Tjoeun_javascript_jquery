jQuery(document).ready(function(){
	var elements = $('.clickTest');
	elements.click(function(){
		$(this).text('클릭되었습니다.');
	});
});
