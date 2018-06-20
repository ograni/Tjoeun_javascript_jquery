// jQuery(document).ready(function(){
//
// });
$(document).ready(function(){
    $('#div1').hover(
        function(){
            $('#div1').text('마우스가 위에');
            $('#div1').css('height','300px');
        },
        function(){
            $('#div1').text('마우스가 밖에');
            $('#div1').css('height','100px');
        }
    );
});
