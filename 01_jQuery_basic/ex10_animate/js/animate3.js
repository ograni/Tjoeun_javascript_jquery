$(function(){
    // gogo1
    $('.banner .gogo1').hover(
        function(){
            $('.banner .gogo1 > a').stop(true, true).animate({'margin-left':'75px'},500);
        },
        function(){
            $('.banner .gogo1 > a').stop(true, true).animate({'margin-left':'0'},500);
        }
    );
    // gogo1
    $('.banner .gogo2').hover(
        function(){
            $('.banner .gogo2 > a').stop(true, true).animate({'margin-left':'75px'},500);
        },
        function(){
            $('.banner .gogo2 > a').stop(true, true).animate({'margin-left':'0'},500);
        }
    );
});
