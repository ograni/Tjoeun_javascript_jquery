jQuery(document).ready(function(){

	/* �α��ι�ư */
	$('.login_wrap > a').on('click', function(){
		$('#login_f').animate({top:'20px'},500);
		return false;
	});
	$('.login_wrap .login_close_btn, input[alt="login"]').on('click',function(){
		$('#login_f').animate({top:'-500px'},500);
		return false;
	});

	$('#user_id, #user_pw').on('focus',function(){
		$(this).prev().css('left','-99999px');
	});
	$('#user_id, #user_pw').on('blur',function(){
		if($(this).val()=='') {$(this).prev().css('left','2px')}//����ڰ� �ƹ��͵� �Է� ������ ���
	});
	/* top �̺�Ʈ��� */
	$('#top_event').find('.close_btn').on('click', function(){
		$('#top_event').slideUp(500);
	});

	/* zoom ��ư */
	var base = 100;
	var mybody = $('body'); //document
	$('#zoom a').on('click',function(){
		var zNum = $('#zoom a').index(this); //this �� ���� Ŭ���ѳ��� �� ��°��? ��� ��.
		if(zNum==0){		//Ȯ��
			base+=10;		// a+=b a=a+b
		}else if(zNum ==1){ //100%
			base = 100;
		}else{ 				// ���
			base-=10;
		}
		mybody.css('overflow-x','auto')
			  .css('transform-origin','50% 0') //������  //õ�Ƚ�û Ȩ������ �������� ���س���
			  .css('transform','scale('+base/100+')')
			  .css('zoom',base+'%'); //������ �ۼ�Ʈ��
		return false;
	});

	/* �μ��ư */
	$('.print_btn').on('click',function(){
		window.print();
		return false;
	});

	/* �˻� â �ȳ� ���̵� */
	$('#keyword').on('focus',function(){
		$(this).css('background','none');
	});
	$('#keyword').on('blur',function(){
		if($(this).val()=='') {$(this).css('background','');}//����ڰ� �ƹ��͵� �Է� ������ ���
	});


	/* ��ü�޴� */


	/* ��ü �޴� �ݱ� ��ư */


	/* ��¥ǥ�� */


	/* ���û���Ʈ �̵� */


	/* ���޴� */

});
