$(function(){
    var class_closed = 'close';
    $('.accordion').each(function(){
        var dl = $(this);
        //this 순환하는 accordion
        var allDt = dl.find('dt');
        var allDd = dl.find('dd');

        function closeAll() {
            allDt.addClass(class_closed);
            allDd.addClass(class_closed); //display:none
        }
        function open(dt, dd) {
            dt.removeClass(class_closed);
            dd.removeClass(class_closed);
        }
        closeAll();

        //자 세팅은 끝났고
        //이제 진짜 동작
        allDt.click(function(){
            var dt = $(this);
            var dd = dt.next();
            closeAll();
            open(dt, dd);
            // allDd.hide();
            // dd.show();
            // allDt.css('cursor','pointer');
            // dt.css('cursor','default');
        });
    });
});
