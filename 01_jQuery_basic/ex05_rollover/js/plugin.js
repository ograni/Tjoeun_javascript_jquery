$(function(){
    $('.rollover').rollover();
});
$.fn.rollover = function(options){
    var abc = $.extend({
        off:'_off', on:'_on'
    },options);
    this.each(function(){
        var a = $(this);
        var img = a.find('img');
        var src_off = img.attr('src');
        var src_on = src_off.replace(abc.off,abc.on);
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
