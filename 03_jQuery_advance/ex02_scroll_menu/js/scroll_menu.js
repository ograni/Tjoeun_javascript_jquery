$(function(){
    var menu = $('#top_menu > ul > li');
    var contents = $('#contents>div');

    menu.click(function(e){
        e.preventDefault();
        var tg = $(this); //클릭한 메뉴
        var i = tg.index();
        var section = contents.eq(i); //몇번짼지 알아내서 eq번째랑 동기화
        var tt = section.offset().top; //offset() => 섹션이 얼만큼 떨어져 있는지. 섹션이란? contents안에 있는 몇번재? 내가 클릭한 번째가 섹션. 첫번재를 클릭하면 0, 두번째면 650, 세번째면 1300.
        $('html, body').stop().animate({scrollTop:tt})
    });
    $(window).scroll(function(){
        var sct = $(window).scrollTop(); //스크롤의 탑값을 구해서 넣기
        // console.log(sct);

        contents.each(function(){
            var tg = $(this);
            var i = tg.index();
            if(sct >= tg.offset().top - 114){
                //모든경우
                menu.removeClass('on');
                menu.eq(i).addClass('on');
            }
        });
        /*
        if(sct >= contents.eq(0).offset().top - 114){
            //모든경우
            menu.removeClass('on');
            menu.eq(0).addClass('on');
        }
        if(sct >= contents.eq(1).offset().top - 114){
                //모든경우
                menu.removeClass('on');
                menu.eq(1).addClass('on');
        }
        if(sct >= contents.eq(2).offset().top - 114){
                //모든경우
                menu.removeClass('on');
                menu.eq(2).addClass('on');
        }*/
    });

});
