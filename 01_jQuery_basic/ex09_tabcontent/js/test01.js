$(function(){
    $('.tabSet').each(function(){
        //each문 안에 돌아가는 녀석을 this로 잡고  topDiv로 넣어주고
        var topDiv = $(this);

        //그녀석의 탭을 한놈 골라주고
        var anchors = topDiv.find('ul.tabs a');

        //그녀석의 탭이랑 놀 남자친구 하나 이어주고
        var panelDivs = topDiv.find('div.panel');

        var lastAnchor;
        var lastPanel;

        //일단 모든 탭을 열어주고
        anchors.show();

        //on이 붙은 탭을 잡고
        lastAnchor = anchors.filter('.on');

        //on의 남자친구 집 주소를 lastPanel에 담고
        lastPanel = $(lastAnchor.attr('href'));

        //일단 패널을 다 닫고.
        panelDivs.hide();

        //on 이 붙은 패널만 열자.
        lastPanel.show();

        anchors.click(function(e){
            e.preventDefault(); //하이퍼링크 증상이 없어짐
            //return false; 와 같음
            var currentAnchor = $(this);
            var currentPanel = $(currentAnchor.attr('href'));
            lastAnchor.removeClass('on');
            currentAnchor.addClass('on');
            lastPanel.hide();
            currentPanel.show();
            lastAnchor = currentAnchor; //다음실행하는 것을 위해서 current를 last에 저장
            lastPanel = currentPanel;
        });
    });
});
