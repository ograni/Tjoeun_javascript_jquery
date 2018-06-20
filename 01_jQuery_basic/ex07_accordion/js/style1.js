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
        allDt.click(function(){
            allDd.hide();
            $(this).show();
            // $(this).show(allDd);
        });
    });
});
