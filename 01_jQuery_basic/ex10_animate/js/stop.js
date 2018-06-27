/*
$(function(){
    $('button').click(function(){
        var html = $(this).html();
        var evalText = "$('div')." + html;
        eval(evalText);
    });
    setInterval(function(){
        $('div').animate({
            left:'400'
        },1000).animate({left:'0'},2000);
    }, 3000);
});
*/


$(function(){
    $('button').click(function(){
        var html = $(this).html()
        // console.log(html);
        // var evalText = $('.ballImages') + html;
        var evalText = "$('div')." + html;
        eval(evalText); // eval은 string 형태의 소스를 동적으로 지닌다.
        console.log(evalText);
    });
    setInterval(function(){
        $('div').animate({left:'400'},500)
                .animate({left:'0'},1000);
    }, 2000);
});


// stop()은 3가지의 파라미터 입력방식이 있고 4가지의 상태변화 효과가 있습니다.
// stop() : 현재의 애니메이션 상태에서 정지합니다. (대기열 유지)
// – 동일한 표현방식 : stop(false), stop(false, false)
//  stop(true) : 설정한 최종 애니메이션 상태로 변경된 후 정지합니다. (대기열 유지)
// – 동일한 표현방식 : stop(false, true)
//  stop(true, false) : 현재의 애니메이션 상태에서 정지합니다. (대기열 삭제)
// stop(true, true) : 설정한 최종 애니메이션 상태로 변경된 후 정지합니다. (대기열 삭제)
