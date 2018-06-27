$(function(){
    // box1
    $('.sub_list .box1').hover(
        function(){
            $('.sub_list .box1 > a').stop(true, true).animate({'margin-top':'-97px'},250);
        },
        function(){
            $('.sub_list .box1 > a').stop(true, true).animate({'margin-left':'0'},250);
        }
    );

});
