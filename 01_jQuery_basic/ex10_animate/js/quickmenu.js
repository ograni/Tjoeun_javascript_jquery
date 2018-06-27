$(function(){
    $('.quick_icon > li').hover(
        function(){
            var num = $(this).index()+1;
            $(this).find('>a>img').attr({'src':'image/quick_on_0'+num+'.png'});
        },
        function(){
            var num = $(this).index()+1;
            $(this).find('>a>img').attr({'src':'image/quick_0'+num+'.png'});
        }
    );
    //1.7에서는 toggle 이라는 변수가 있음
    //1.9부터는 toggle 이라는 변수가 사라짐

    bb = true; //열렸는지 닫혔는지 체크
    $('.quick_toggle').click(function(){
        if(bb){
            //눌렀을때 들어가는거
            $(this).addClass('quick_open');
            $(this).stop(true, true)
                   .animate({'margin-right':'-70px'},500);
            $('.quickmenu').stop(true, true)
                           .animate({'margin-right':'-70px'},500,
                           function(){bb=false});
        }else{
            $(this).removeClass('quick_open');
            $(this).stop(true, true).animate({'margin-right':'0px'},500);
            $('.quickmenu').stop(true, true).animate({'margin-right':'0px'},500,function(){bb=true});
        }
    });
});
