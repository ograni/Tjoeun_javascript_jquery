$(function(){

        function moveSlider(index){
            if(index<3){
                var willMoveLeft = -(index*600);
                //각 이미지의 위치를 잡는
                $('.slider_panel').animate({left:willMoveLeft},500);
                $('.control_button[data-index='+index+']').addClass('active');
                $('.control_button[data-index!='+index+']').removeClass('active');
                $('.slider_text[data-index='+index+']').show().animate({left:0},500);
                $('.slider_text[data-index!='+index+']').hide(500,function(){$(this).css('left',-300)});
            }else{
                var willMoveLeft = -(index*600);
                // var willMoveTop = (index).height();
                //각 이미지의 위치를 잡는
                $('.slider_panel').animate({left:willMoveLeft, top:willMoveTop},500);
                $('.control_button[data-index='+index+']').addClass('active');
                $('.control_button[data-index!='+index+']').removeClass('active');
                $('.slider_text[data-index='+index+']').show().animate({left:0},500);
                $('.slider_text[data-index='+index+']').show().animate({top:0},500);
                $('.slider_text[data-index!='+index+']').hide(500,function(){$(this).css('left',-300,'top',0)});
            }
        };

    $('.slider_text').css('left',-300).each(function(index){
        $(this).attr('data-index',index); //slider_text에 번호를 줘서 제어
    });
    $('.control_button').each(function(index){
        $(this).attr('data-index',index); //data-index => 사용자 정의
    }).click(function(){
        var index = $(this).attr('data-index'); //클릭하면 무브슬라이드에 넣을 값
        moveSlider(index);
    });
    var randomNumber = Math.round(Math.random()*5);
     moveSlider(randomNumber);
});
