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
            menu.removeClass('on');
            //th = 1뎁스 높이 + 2뎁스 높이
            wrap.stop().animate({height:menuHeight});
        }
    });
});
