// jQuery(document).ready(function(){
//
// });
$(document).ready(function(){
    var basket = $('#basket');
    var apple = $('#apple');
    var banana = $('#banana');
    var orange = $('#orange');

    basket.prepend(apple);
    basket.prepend(banana);
    basket.prepend(orange);
});
