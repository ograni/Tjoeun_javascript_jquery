$(function(){
    var current = 1 //현재페이지를 나타냄.
    var thumbListSize = 6;
    var thumbnail = $('#thumbnail'); //824px
    var prev = thumbnail.find('>.left');
    var next = thumbnail.find('>.right');
    var container = thumbnail.find('>.container>ul'); //2304px
    var containWidth = thumbnail.find('>.container').width();//760px
    var thumb = container.find('>.thumb');
    var maxSize = thumb.size(); //18
    var image = $('#gallery #image > p');

    next.on('click',function(){
        if(current < maxSize/thumbListSize-1) current++;
        // alert(current);
        listMove();
    });
    prev.on('click',function(){
        if(current > 0) current--;
        // alert(current);
        listMove();
    });

    function listMove(){
        var tl = containWidth*current*-1; //760 * 1  * -1 = -760
        container.stop().animate({left:tl},{duration:500,easing:'easeOutCubic'})
    };

    thumb.on('click',function(){
        image.css('display','none');
        var i = $(this).index();
        image.eq(i).css('display', 'block');
    });
    listMove();
});
