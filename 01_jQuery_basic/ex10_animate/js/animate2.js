$(function(){
    $('.box > div').each(function(){
        $(this).hover(
            function(){
                $(this).find('>a').stop(true, true).animate({'margin-top':'-294px'},250);
            },
            function(){
                $(this).find('>a').stop(true, true).animate({'margin-top':'0'},250);
            }
        );
    });

    // $('.box_in .box1').hover(
    //     function(){
    //         $('.box_in .box1 > a').stop(true, true).animate({'margin-top':'-294px'},250);
    //     },
    //     function(){
    //         $('.box_in .box1 > a').stop(true, true).animate({'margin-top':'0'},250);
    //     }
    // );
});
