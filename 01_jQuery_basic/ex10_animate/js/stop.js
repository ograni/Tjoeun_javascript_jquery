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
