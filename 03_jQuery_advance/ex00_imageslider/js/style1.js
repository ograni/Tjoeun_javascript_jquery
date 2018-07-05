// $(function(){
//     function moveSlider(index){
//         var willMoveLeft = -(index*600);
//         //각 이미지의 위치를 잡는
//         $('.slider_panel').animate({left:willMoveLeft},500);
//         $('.control_button[data-index='+index+']').addClass('active');
//         $('.control_button[data-index!='+index+']').removeClass('active');
//         $('.slider_text[data-index='+index+']').show().animate({left:0},500);
//         $('.slider_text[data-index!='+index+']').hide(500,function(){$(this).css('left',-300)});
//     }
//
//     $('.slider_text').css('left',-300).each(function(index){
//         $(this).attr('data-index',index); //slider_text에 번호를 줘서 제어
//     });
//     $('.control_button').each(function(index){
//         $(this).attr('data-index',index); //data-index => 사용자 정의
//     }).click(function(){
//         var index = $(this).attr('data-index'); //클릭하면 무브슬라이드에 넣을 값
//         moveSlider(index);
//     });
//     var randomNumber = Math.round(Math.random()*5);
//     moveSlider(randomNumber);
// });


$(function(){

    function moveSlider(index){
        var willMoveLeft = -(index*600);
        $('.slider_panel').animate({left:willMoveLeft},500);
           $('.control_button[data-index='+index+']').addClass('active');
           $('.control_button[data-index!='+index+']').removeClass('active');
           $('.slider_text[data-index='+index+']').show().animate({left:0},500);
           $('.slider_text[data-index!='+index+']').hide(500,function(){$(this).css('left',-300)});
    };


    // 먼저 텍스트의 위치를 밖으로 옮겨보자. 왜? 밖에서 안으로 들어오게 할꺼니까
    var slider_text = $('.slider_text');
    slider_text.css('left','-500px').each(function(index){
        $(this).attr('data-index',index);
    });
    // 위치를 옮긴 텍스트박스에 번호를 하나 하나씩 줄꺼야. 제어를 위해서

    //버튼에도 번호 하나씩
    var control_button = $('.control_button');
    control_button.each(function(index){
        $(this).attr('data-index',index);
        $(this).click(function(){
            var index = $(this).attr('data-index');
            moveSlider(index);
            console.log(index);
        });
    });
    var randomNumber = Math.round(Math.random()*5);
    moveSlider(randomNumber);
    console.log("abc"+1+2);
    console.log(1+2+"abc");

});
