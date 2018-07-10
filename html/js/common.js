jQuery(document).ready(function(){

	/* 로그인버튼 */
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
		if($(this).val()=='') {$(this).prev().css('left','2px')}//사용자가 아무것도 입력 안했을 경우
	});
	/* top 이벤트배너 */
	$('#top_event').find('.close_btn').on('click', function(){
		$('#top_event').slideUp(500);
	});

	/* zoom 버튼 */
	var base = 100;
	var mybody = $('body'); //document
	$('#zoom a').on('click',function(){
		var zNum = $('#zoom a').index(this); //this 를 쓰면 클릭한놈이 몇 번째야? 라는 뜻.
		if(zNum==0){		//확대
			base+=10;		// a+=b a=a+b
		}else if(zNum ==1){ //100%
			base = 100;
		}else{ 				// 축소
			base-=10;
		}
		mybody.css('overflow-x','auto')
			  .css('transform-origin','50% 0') //기준점  //천안시청 홈페이지 제이쿼리 잘해놓음
			  .css('transform','scale('+base/100+')')
			  .css('zoom',base+'%'); //단위를 퍼센트로
		return false;
	});

	/* 인쇄버튼 */
	$('.print_btn').on('click',function(){
		window.print();
		return false;
	});

	/* 검색 창 안내 가이드 */
	$('#keyword').on('focus',function(){
		$(this).css('background','none');
	});
	$('#keyword').on('blur',function(){
		if($(this).val()=='') {$(this).css('background','');}//사용자가 아무것도 입력 안했을 경우
	});


	/* 전체메뉴 */


	/* 전체 메뉴 닫기 버튼 */


	/* 날짜표기 */


	/* 관련사이트 이동 */


	/* 퀵메뉴 */

});
