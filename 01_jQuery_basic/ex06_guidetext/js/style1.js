$(function(){
    $('.guideText').each(function(){
        var guideText = this.defaultValue;
        //this == jquery 객체가 아닌 순환하는 .guideText
        //defaultValue는 기본 value값 == 초기 상태
        //guideText="이름을 입력해주세요"
        var element = $(this);
        element.focus(function(){
            if(element.val()===guideText){
                element.val(''); //입력한걸 비워
                //element.val(); //val이 뭐야?
                //element.val('aa'); //aa로 바꿔
                element.removeClass('guide')
            }
            //element.val는 내가 입력한 값
            //guideText = defaultValue
            //element.val()===guideText 는 아무것도 입력하지 않은 상태.
        });
        element.blur(function(){
            if(element.val()===''){
                element.val(guideText);
                element.addClass('guideText')
            }

        });
        if(element.val()===guideText){
            element.addClass('guide')
        }
        //문서 처음 실행했을때 상태.
    });
});
