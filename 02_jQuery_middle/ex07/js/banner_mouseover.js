$(function(){
    var current = 0;
    var banner = $('#wrapper li');
    var stop;
    function timer(){
        stop=setInterval(function(){ // setinterval 앞에 있는 이름은 알리아스네임
            var prev = banner.eq(current);
            move(prev, 0, '-100%'); /* 0 -> 100% 으로 이동*/ //move는 제이쿼리 메소드가 아니라 사용자가 만드는 함수임
            current++;
            if(current == banner.size()) current=0; //size는 몇개냐 html에서 늘어나도 수정하지 않아도 됨.
            var next = banner.eq(current);
            move(next,'100%',0); /*100% -> 0 으로 이동*/
        },1000);
    };
    function move(tg, start, end){
        tg.css('left', start)
          .stop()
          .animate({left:end},{duration:200, ease:'easeOutCubic'});
    };
    timer();
    banner.hover(
        function(){
            clearInterval(stop);
            $('#text').html('<strong>올렸어</strong>');
        },
        function(){
            timer();
            $('#text').text('내렸어');
        }
    );
});
