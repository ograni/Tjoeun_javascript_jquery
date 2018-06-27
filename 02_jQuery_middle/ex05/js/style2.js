$(function(){
    $('#nav > ul > #springBtn').bind('click',function(){
        $('#image').removeClass();
        console.log('봄을 위해 지웠다');
        $('#image').addClass('spring');
    });
    $('#nav > ul > #summerBtn').bind('click',function(){
        $('#image').removeClass();
        console.log('여름을 위해 지웠다');
        $('#image').addClass('summer');
    });
    $('#nav > ul > #fallBtn').bind('click',function(){
        $('#image').removeClass();
        console.log('가을을 위해 지웠다');
        $('#image').addClass('fall');
    });
    $('#nav > ul > #winterBtn').bind('click',function(){
        $('#image').removeClass();
        console.log('겨울을 위해 지웠다');
        $('#image').addClass('winter');
    });
});
