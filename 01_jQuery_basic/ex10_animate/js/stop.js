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
