$(function(){
    //일단 각각 제어될 메뉴들을 변수로 잡자
    var menu = $('#nav > li');
    menu.hover(
        function(){
            var targetMenu = $(this);

            //on과 off의 div를 제어 해야하니 각각 변수로 잡고
            var onImg = targetMenu.find('.text_image > .on');
            var offImg = targetMenu.find('.text_image > .off');

            //숨겨진 그림 이미지를 보여줘야 하 얘도 변수로 잡고
            var menuImage = targetMenu.find('.menu_image');

            //이미지 높이만큼 애니메이트 줘야 하니까
            var imageHeight = menuImage.find('img').innerHeight();

            //자 이제 기본 세팅은 다 끝났으니까 움직일껄 해보자
            onImg.css('display','block');
            offImg.css('display','none');
            menuImage.animate({height:imageHeight},{duration:250,queue:false});
        },
        function(){
            var targetMenu = $(this);

            //on과 off의 div를 제어 해야하니 각각 변수로 잡고
            var onImg = targetMenu.find('.text_image > .on');
            var offImg = targetMenu.find('.text_image > .off');

            //숨겨진 그림 이미지를 보여줘야 하 얘도 변수로 잡고
            var menuImage = targetMenu.find('.menu_image');

            //이미지 높이만큼 애니메이트 줘야 하니까
            var imageHeight = menuImage.find('img').innerHeight();

            //자 이제 기본 세팅은 다 끝났으니까 움직일껄 해보자
            onImg.css('display','none');
            offImg.css('display','block');
            menuImage.animate({height:0},{duration:250,queue:false});
        }
    )
})
