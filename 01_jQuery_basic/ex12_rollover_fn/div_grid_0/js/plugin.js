$.fn.rollover = function(options){
    var options = $.extend({
        off:'_off', on:'_on'
    },options);
    this.each(function(){
        var a = $(this);
        var img = a.find('img');
        var src_off = img.attr('src');
        var src_on = src_off.replace(options.off,options.on);
        $('<img src="" />').attr('src',src_on);
        a.bind('mouseenter focus', function(){
            img.attr('src',src_on);
        });
        a.bind('mouseleave blur', function(){
            img.attr('src',src_off);
        });
        //마우스와 포커스를 묶어서
    });
    return this;
};

//플러그인만들기 https://zetawiki.com/wiki/JQuery_%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8_%EB%A7%8C%EB%93%A4%EA%B8%B0_3_-_%EC%98%B5%EC%85%98_%EB%B0%9B%EA%B8%B0
