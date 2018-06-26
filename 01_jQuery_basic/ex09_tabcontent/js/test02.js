$(function(){
    $('.tabSet').each(function(){
        var topDiv = $(this);
        var anchors = topDiv.find('ul.tabs li a');
        var panelDivs = topDiv.find('div.panel');
        anchors.show();
        var lastAnchor;
        var lastPanel;

        lastAnchor = anchors.filter('.on'); //on이 붙은 변수 anchors를 가지고
        lastPanel = $(lastAnchor.attr('href'));
        panelDivs.hide();
        lastPanel.show();

        anchors.click(function(event){
            e.preventDefault();
            var currentAnchor =
        });
    });
});
