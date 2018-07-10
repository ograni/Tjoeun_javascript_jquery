jQuery(document).ready(function(){
	/* �α��ι�ư */
	$('.login_wrap>a').on('click',function(){
		$('#login_f').animate({top:'20px'},5000);
		return false;
	});
	$('.login_wrap .login_close_btn, input[alt="login"]').on('click',function(){
		$('#login_f').animate({top:'-500px'},5000);
		return false;
	});
	$('#user_id, #user_pw').on('focus',function(){
		$(this).prev().css('left','-99999px');
	});
	$('#user_id, #user_pw').on('blur',function(){
		if($(this).val()=='') {$(this).prev().css('left','2px')};
	});
	
	/* top �̺�Ʈ��� */
	$('#top_event').find('.close_btn').on('click',function(){
		$('#top_event').slideUp(500);
		$('#quick_menu').css({top:'600px'},500);
	});
	
	/* zoom ��ư */
	var base = 100;
	var mybody = $('body');
	$('#zoom a').on('click',function(){
		var zNum = $('#zoom a').index(this);
		if(zNum==0){ 		// Ȯ��
			base+=10;   	// A+=B , A=A+B
		}else if(zNum==1){ 	// ����
			base=100;
		}else{ 				// ���
			base-=10;
		}
		mybody.css('overflow-x','auto')
			.css('transform-origin','50% 0')
			.css('transform','scale('+base/100+')')
			.css('zoom',base+'%');
		return false;
	});
	
	/* �μ��ư */
	$('.print_btn').on('click',function(){
		window.print();
		return false;
	});
	
	/* �˻� â �ȳ� ���̵� */
	$('#keyword').on('focus',function(){
		$(this).css('background-position','0 -500px');
	})
	.on('blur',function(){
		if($(this).val()=='') {$(this).css('background-position','0 0')};
	});
	
	/* ��ü�޴� */
	$('#total_btn a').on('click',function(){
		$('#total_menu').slideDown('normal');
		return false;
	});

	/* ��ü �޴� �ݱ� ��ư */
	$('#total_close a').on('click',function(){
		$('#total_menu').slideUp('fast');
		return false;
	});
	
	/* ��¥ǥ�� */
	var t = new Date();
	var y = t.getFullYear();
	var m = t.getMonth();
	var d = t.getDate();
	$('#date_wrap .year').text(y);
	$('#date_wrap .month').text(m+1);
	$('#date_wrap .date').text(d);
	
	/* ���û���Ʈ �̵� */
	$('form[name=rel_f]').on('submit',function(){
		var url = $('select',this).val();
		window.open(url);
		return false;
	});

	/* ���޴� */
	var defaultTop = parseInt($('#quick_menu').css('top'));
	$(window).on('scroll',function(){
		var scv = $(window).scrollTop();
		if(scv<465){scv=465};
		$('#quick_menu').stop().animate({top:scv+defaultTop+'px'},1000);
	});
	$('#quick_menu').css({top:'645px'},1000);
});











