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

            if(currentAnchor.get(0)===lastAnchor.get(0)){
                return; // 여기서 종료
            }
            lastPanel.stop().slideUp(200,function(){//안보이는거 lastPanel.hide();
                lastAnchor.removeClass('on');
                currentAnchor.addClass('on');
                currentPanel.stop().slideDown(200);
                lastAnchor = currentAnchor; //다음실행하는 것을 위해서 current를 last에 저장
                lastPanel = currentPanel;
            }); //stop()을 넣어서 패널이 두개 이상 열리는걸 막아줌



        });
    });
});
