$(function(){
    $('.rollover').each(function(){
        var a = $(this);
        var img = a.find('img');
        var src_off = img.attr('src');
        //src_off = images/menu01_off.png
        var src_on = src_off.replace('_off','_on');
        //src_on = images/menu01_on.png
        $('<img src="" />').attr('src',src_on);
        //<img src=""mages/menu01_on.png"/>
        //<img src=""mages/menu02_on.png"/>
        //<img src=""mages/menu03_on.png"/>
        //이미지를 동적생성해서 서버에서 미리 받아와 엑박을 방지한다
        //f12로 확인해보면 확인 가능함.
        /*
        a.hover(
            function(){
                img.attr('src',src_on);
            },
            function(){
                img.attr('src',src_off);
            }
        );*/
        a.bind('mouseenter focus', function(){
            img.attr('src',src_on);
        });
        a.bind('mouseleave blur', function(){
            img.attr('src',src_off);
        });
        //마우스와 포커스를 묶어서
    });
});
