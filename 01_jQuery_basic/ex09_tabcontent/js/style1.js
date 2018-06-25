$(function(){
    $('.tabSet').each(function(){
        var topDiv = $(this);
        var anchors = topDiv.find('ul.tabs a');
        var panelDivs = topDiv.find('div.panel');
        var lastAnchor;
        var lastPanel;
        anchors.show();
        lastAnchor = anchors.filter('.on'); //on이 붙은 변수 anchors를 가지고
        lastPanel = $(lastAnchor.attr('href')); // 시작시 class에 on 붙은 href 값
        panelDivs.hide(); //일단 패널을 다 닫고.
        lastPanel.show(); //on 이 붙은 패널만 열자.
        anchors.click(function(e){
            e.preventDefault(); //하이퍼링크 증상이 없어짐
            //return false; 와 같음
            var currentAnchor = $(this); //지금 클릭한 A 태그를 담고
            var currentPanel = $(currentAnchor.attr('href')); // 크릭할때 가지고 있는 href 값
            lastAnchor.removeClass('on');
            currentAnchor.addClass('on');
            lastPanel.hide();
            currentPanel.show();
            lastAnchor = currentAnchor; //다음실행하는 것을 위해서 current를 last에 저장
            lastPanel = currentPanel;
        });
    });
});
