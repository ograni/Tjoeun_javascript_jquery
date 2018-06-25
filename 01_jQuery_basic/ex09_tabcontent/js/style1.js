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
        
        });
    });
});
