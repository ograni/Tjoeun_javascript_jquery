$(function(){
    var menu = $('#gnb > li'); //1뎁스
    var wrap = $('#gnbWrap'); // 1뎁스와 2뎁스를 감싸고 있는놈
    var menuHeight = menu.children('a').height();
    //1뎁스의 자식 a 태그 높이
    var pageURL = location.href;
    //pageURL = http://...../sub/2depthPage.html
    var activeMenu;

    menu.on({
        mouseover:function(){
            var tg = $(this);
            menu.removeClass('on');
            tg.addClass('on');
            var th = menuHeight + tg.find('>.sGnbArea').height();
            //th = 1뎁스 높이 + 2뎁스 높이
            wrap.stop().animate({height:th});
        },
        mouseout:function(){
            var tg = $(this);
            tg.removeClass('on');
            //th = 1뎁스 높이 + 2뎁스 높이
            wrap.stop().animate({height:menuHeight});
            onActive();
        }
    });

    menu.each(function(i){
        var tg = $(this); //원뎁스 li
        var sub = tg.find('>.sGnbArea > ul > li'); //투뎁스 서브메뉴 li
        var menuURL = tg.children('a').attr('href');
        // menuURL = 1뎁스의 href 값
        var active = pageURL.indexOf(menuURL);
        //pageURL이 manuURL이랑 맞는지 string 순번으로 확인함
        // 만약에 값이 없으면 -1 이 들어감
        if(active > -1) activeMenu = tg;
        //-1이상 즉 pageURL이랑 menuURL이 맞는거
        sub.each(function(j){
            var tg = $(this); //순환하는 투뎁스
            var subURL = tg.children('a').attr('href');
            active = pageURL.indexOf(subURL);
            if(active > -1 ) activeMenu = tg;
        });
        sub.on({
            mouseover:function(){
                var tg = $(this); //마우스가 올라간 투뎁스
                sub.removeClass('on');
                tg.addClass('on');
            },
            mouseout:function(){
                var tg = $(this);
                tg.removeClass('on');
                onActive();
            }
        });
    });
    onActive();
    function onActive(){
        if(activeMenu) activeMenu.trigger('mouseover'); //mouseover를 하지 않아도 마우스오버를 한 효과
    }
});


//이벤트 버블 칮이볼것
