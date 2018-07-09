$(function(){
    var visual = $('#brandVisual > ul >li');
    var button = $('#buttonList > li');
    var current = 0;
    var setIntervalId;

    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == button.size()){n=0}
            button.eq(n).trigger('click')
        },1000);
    };
    $('#wrap').hover(
        function(){
            clearInterval(setIntervalId);
        },
        function(){
            timer();
        }
    );
    button.on({
        click:function(){
            var tg = $(this);
            var i = tg.index();
            if(current==tg.index()){
                console.log('버튼이랑 이미지랑 current이 같구나!')
                return;
            }
            button.removeClass('on');
            tg.addClass('on');
            move(i);
        }
    });
    timer();
    function move(i){ //i값을 전달받고.
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        currentEl.css({left:0}).stop().animate({left:'-100%'});
        nextEl.css({left:'100%'}).stop().animate({left:'0%'});
        current = i;
    }

});
