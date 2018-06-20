$(function(){
    $('.accordion').each(function(){
        var dl = $(this);
        //this 순환하는 accordion
        var allDt = dl.find('dt');
        var allDd = dl.find('dd');
        allDd.hide();//일단 전체를 감추고
        allDd.eq(0).show();
        allDt.css('cursor','pointer');
        allDt.eq(0).css('cursor','default');
        //자 세팅은 끝났고
        //이제 진짜 동작
        allDt.click(function(){
            var dt = $(this);
            var dd = dt.next();
            allDd.hide();
            dd.show();
            allDt.css('cursor','pointer');
            dt.css('cursor','default');
        });
    });
});
