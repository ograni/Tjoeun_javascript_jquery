/*$(function(){
    $('#nav > ul > #springBtn').bind('click',function(){
        $('#image > img').attr({src:'images/spring.jpg', alt:'봄'})
    });
    $('#nav > ul > #summerBtn').bind('click',function(){
        $('#image > img').attr({src:'images/summer.jpg', alt:'여름'})
    });
    $('#nav > ul > #fallBtn').bind('click',function(){
        $('#image > img').attr({src:'images/fall.jpg', alt:'가을'})
    });
    $('#nav > ul > #winterBtn').bind('click',function(){
        $('#image > img').attr({src:'images/winter.jpg', alt:'겨울'})
    });
});*/

$(function(){
    $('#springBtn').click(function(){
        $('#image img').attr({src:'images/spring.jpg', art:'봄'});
    });
    $('#summerBtn').click(function(){
        $('#image img').attr({src:'images/summer.jpg', art:'여름'});
    });
    $('#fallBtn').click(function(){
        $('#image img').attr({src:'images/fall.jpg', art:'가을'});
    });
    $('#winterBtn').click(function(){
        $('#image img').attr({src:'images/winter.jpg', art:'겨울'});
    });

});
