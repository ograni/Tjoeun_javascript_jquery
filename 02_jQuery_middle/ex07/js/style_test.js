$(function(){
    var menu = $('#nav > li');
    menu.hover(
        function(){
            var tg = $(this);
            var onImg = tg.find('.text_image > .on');
            var offImg = tg.find('.text_image > .off');
            var menuImage = tg.find('.menu_image');
            var imageWidth = menuImage.find('img').innerWidth();

            onImg.css('display','block');
            offImg.css('display','none');
            menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'})
            // menuImage.stop().animate({height:imageHeight},{duration:600,easing:'easeOutCubic'})
        },
        function(){
            var tg = $(this);
            var onImg = tg.find('.text_image > .on');
            var offImg = tg.find('.text_image > .off');
            var menuImage = tg.find('.menu_image');
            var imageWidth = 0;

            onImg.css('display','none');
            offImg.css('display','block');
            menuImage.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'})
            // menuImage.stop().animate({height:imageHeight},{duration:600,easing:'easeOutCubic'})
        }
    );
});
