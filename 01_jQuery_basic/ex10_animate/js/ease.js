$(function(){
    $('button').click(function(){
        var easing = $('select > option:selected').html();
        $('div').animate({left:'500'},2000,easing)
                .animate({left:'0'},2000,easing);
    });
});
