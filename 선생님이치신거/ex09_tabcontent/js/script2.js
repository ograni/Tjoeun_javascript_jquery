jQuery(document).ready(function(){
	$('.tabSet').each(function(){
		var topDiv = $(this);
		var anchors = topDiv.find('ul.tabs a');
		var panelDivs = topDiv.find('div.panel');
		var lastAnchor;
		var lastPanel;
		anchors.show();
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('href'));
		// lastPanel = #panel1-1
		panelDivs.hide();
		lastPanel.show();
		anchors.click(function(event){
			event.preventDefault();
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			
			if(currentAnchor.get(0)===lastAnchor.get(0)){
				return;
			}
			
			lastPanel.stop().slideUp(200,function(){
				lastAnchor.removeClass('on');
				currentAnchor.addClass('on');
				currentPanel.stop().slideDown(200);
				lastAnchor = currentAnchor;
				lastPanel = currentPanel;
			});
		});
	});
});
