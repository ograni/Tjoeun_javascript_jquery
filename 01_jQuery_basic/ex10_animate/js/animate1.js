// $(function(){
//     $('.box_in .box1').hover(
//         function(){
//             $('.box_in .box1 > a').stop(true, true).animate({'margin-top':'-176px'},250);
//         },
//         function(){
//             $('.box_in .box1 > a').stop(true, true).animate({'margin-top':'0'},250);
//         }
//     );
// });
//

$(function(){
    $('.box1 > a').hover(
        function(){
            console.log('in');
            $(this).animate({'margin-top':'-176px'},200);
        },
        function(){
            console.log('out');
            $(this).animate({'margin-top':'0'},200);
        }
    );
});
