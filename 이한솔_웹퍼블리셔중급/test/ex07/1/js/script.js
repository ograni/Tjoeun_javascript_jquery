﻿jQuery(document).ready(function(){
	var tbody = $('#tbody');

	$.getJSON('data.json',function(people){
		$.each(people, function (i, person) {
			var text_no = person.no;
			var text_name = person.name;
			var text_mail = person.mail;
			var tr = $('<tr/>');
			//''안에 넣는건 동적생성을 하겠다.
			var no = $('<td />').text(text_no);
			var name = $('<td />').text(text_name);
			var mail = $('<td />').text(text_mail);
			tr.append(no);
			tr.append(name);
			tr.append(mail);
			tbody.append(tr);
		})
	});
});
