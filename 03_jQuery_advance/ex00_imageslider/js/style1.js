$(function(){
    function moveSlider(index){
        var willMoveLeft = -(index*600);
        //각 이미지의 위치를 잡는
        $('.slider_panel').animate({left:willMoveLeft},500);
        $('.control_button[data-index='+index+']').addClass('active');
        $('.control_button[data-index!='+index+']').removeClass('active');
    }

    $('.slider_text').css('left',-300).each(function(index){
        $(this).attr('data-index',index); //slider_text에 번호를 줘서 제어
    });
    $('.control_button').each(function(index){
        $(this).attr('data-index',index); //data-index => 사용자 정의
    }).click(function(){
        var index = $(this).attr('data-index'); //클릭하면 무브슬라이드에 넣을 값
        moveSlider(index);
    });
});
