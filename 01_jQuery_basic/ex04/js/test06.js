$(document).ready(function(){
    $('#div1').text('text 메소드로 content를 치환한다.');
    $('#div2').html('html 메소드로 content를 치환한다.');
    $('#div3').text('<strong>text 메소드</strong>로 content를 치환한다.');
    $('#div4').html('<strong>html 메소드로 content</strong>를 치환한다.');
    //html()은 text()와 다르게 약속된 태그가 먹음
});
