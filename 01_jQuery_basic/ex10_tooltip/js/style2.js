$(function(){
    var balloon = $('<div class="balloon"></div>').appendTo('body'); //툴팁이 될 div를 동적생성으로 body안에 박아준다.
    function updateBalloonPosition(x, y){
        balloon.css({left:x+15, top:y});
    }
    //함수를 나눔
    function showBalloon(){
        balloon.stop();
        balloon.css('opacity',0).show();
        balloon.animate({opacity:1},2000);
    }
    function hideBalloon(){
        balloon.stop();
        balloon.animate({opacity:0},2000,function(){balloon.hide()});
        //hide가 animate위에 나타나면 hide가 순간적으로 먼저 실행되기에 맨 마지막에 위치함.
    }
    $('.showBalloon').each(function(){
        var element = $(this);
        var text = element.attr('title');
        element.attr('title',''); //기본 툴팁이 실행되지 않도록 title를 비워준다.
        element.hover(
            function(event){
                //mouse의 x, y 값을 받기 위해 event를 사용. 왜? 따라다닐라고.
                balloon.text(text);
                updateBalloonPosition(event.pageX, event.pageY);
                showBalloon();
            },
            function(){
                hideBalloon();
            }
        );
        element.mousemove(function(event){
            updateBalloonPosition(event.pageX, event.pageY);
        });
    });
});
//https://kin.naver.com/qna/detail.nhn?d1id=1&dirId=1040202&docId=294259528&sp=1&sort=default&sid=9P4o%2F2pIDkjUMHlHiVaa1w%3D%3D&rank=1&pid=TzvP7dpySEZssuz5MnRssssstt4-335987&search_sort=0&qb=ZnVuY3Rpb24oZXZlbnQpIGZ1bmN0aW9uKCk%3D&spq=0&section=kin&enc=utf8
//https://kin.naver.com/qna/detail.nhn?d1id=1&dirId=1040202&docId=280707166&qb=ZnVuY3Rpb24oZXZlbnQpIGZ1bmN0aW9uKCk=&enc=utf8&section=kin&rank=1&search_sort=0&spq=0&pid=TzvP7dpySEZssuz5MnRssssstt4-335987&sid=9P4o/2pIDkjUMHlHiVaa1w%3D%3D
