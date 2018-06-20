// jQuery(document).ready(function(){
//
// });
$(document).ready(function(){
    var elements = $('.clickText');
    elements.click(function(){
        $(this).text('클릭되었습니다.');
        $(this).css('font-weight','bold');
    });
});
