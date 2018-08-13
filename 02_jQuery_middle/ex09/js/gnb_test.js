/*
﻿$(function(){
    //상단메뉴를 변수로 잡아주고
    var menu = $('#gnb > li');
    var wrap = $('#gnbWrap');
    var menuHeight = menu.children('a').height();
    menu.on({
        mouseover:function(){
            var tg = $(this);
            tg.removeClass('on');
            tg.addClass('on');
            var th = menu.height() + tg.find('>.sGnbArea').height();
            wrap.stop().animate({height:th});
        },
        mouseout:function(){
            var tg = $(this);
            tg.removeClass('on');

            wrap.stop().animate({height:menu.find('>a').height()});
        }
    });

    menu.each(function(){
        var tg = $(this);
        var sub = tg.find('.sGnbArea > ul > li');
        sub.on({
            mouseover:function(){
                var subtg = $(this);
                tg.removeClass('on');
                tg.addClass('on');
            },
            mouseout:function(){
                var subtg = $(this);
                tg.removeClass('on');
            }
        });
    });

});
*/

//이벤트 버블 칮이볼것


$(function(){
    var menu = $('#gnb > li');
    var subMenu = menu.find('.sGnbArea');

    menu.each(function(){
        var selectMenu = $(this);

    })

});
