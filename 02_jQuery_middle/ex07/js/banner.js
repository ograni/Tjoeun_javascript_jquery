$(function(){
    var current = 0; //현재 위치의 변수를 담고
    var banner = $('#wrapper li');
    setInterval(function(){
        var prev = banner.eq(current);
        move(prev, 0, '-100%'); /* 0 -> 100% 으로 이동*/ //move는 제이쿼리 메소드가 아니라 사용자가 만드는 함수임
        current++;
        if(current == banner.size()) current=0; //size는 몇개냐 html에서 늘어나도 수정하지 않아도 됨.
        // if(current == banner.size()){current=0;}
        var next = banner.eq(current);
        move(next,'100%',0); /*100% -> 0 으로 이동*/
    },1000);
    function move(tg, start, end){
        tg.css('top', start)
          .stop()
          .animate({top:end},{duration:500, ease:'easeOutCubic'});
    }
});
