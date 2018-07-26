$(function () {
	initscene3();
	
	function initscene3(){
		var $container = $('#scene-3'),	// 컨테이너
		$masks = $container.find('.mask'),	// 마스크
		$lines = $masks.find('.line'),		// 라인
		maskLength = $masks.length,			// 마스크의 총 수
		maskData = [];						// 마스크데이터라는 배열 집 선언
											// 각 마스크 자르기 영역의 데이터를 저장할 거임
		$masks.each(function(i){
			maskData[i] = {left: 0};
		});
		
		$container.on({
			mouseenter:function(){
				resizeMask($(this).index());
			},
			mouseleave:function(){
				resizeMask(-1);
			}
		},'.mask');
		
		resizeMask(-1);
		
		function resizeMask(active){		// active에 -1,0,1,2,3이 들어감
			var w = $container.width(),
			h = $container.width()/2;
			
			$container.css('height',h);
			$masks.css('height',h); 
			$masks.each(function(i){
				var $this = $(this), 		// 한개의 마스크
				l;								// 자르기 영역의 왼쪽 좌표
				// active = 마우스오버된 마스크의 인덱스
				// -1이면 마우스가 빠진 상태
				// i = this 마스크의 인덱스
				
				if(active === -1){
					l = w / maskLength * i
				} else if (active < i){
					l = w * (1 - 0.1 * (maskLength - i));
					// i = 3(4번째) w * 0.9
					// i = 2(3번째) w * 0.8
					// i = 2(3번째) w * 0.7
					// i = 2(3번째) w * 0.6
				} else {
					l = w * 0.1 * i;
					// i = 0(1번째) w * 0
					// i = 1(2번째) w * 0.1
					// i = 1(3번째) w * 0.2
					// i = 1(4번째) w * 0.3
				}
				
				$(maskData[i]).stop(true).animate({left:l},{
					duration: 1000,
					easing: 'easeOutQuart',
					progress: function(){
						var now = this.left;
						$this.css({
							clip:'rect(0px '+ w +'px ' + h + 'px ' + now + 'px)'
							//clip: rect(0px 300px 1200px 0px)
						});
						$this.find($lines).css({left:now});
					}
				});
			});
		}
	}
	var ht = $('.section').height();
	$(".section").height(ht); //여는 사람 브라우저에 맞춰서 그림맞추기
	
	$('.section').on("resize",function(){
		var ht = $('.section').height(); //윈도우객체 높이값을 알아내 담아라
		$(".section").height(ht);	//리사이징	
	});
	
	$(".section").on("mousemove",function(e){ //마우스가 움직일때 이벤트가 일어나라 e안에는 x,y 좌표값이 들어감
		var posX = e.pageX;
		var posY= e.pageY;
		
		$(".waterTit").css({"left":40-(posX/2000)+'%' , "top": 20-(posY/2000)+'%' }); 
		$(".water1").css({"left":30+(posX/800)+'%' , "top": 45+(posY/800)+'%' });
		$(".water2").css({"left":70-(posX/800)+'%' , "top": 40+(posY/800)+'%' });
		$(".water3").css({"left":50+(posX/800)+'%' , "top": 80-(posY/800)+'%' });
		$(".water4").css({"left":20-(posX/800)+'%' , "top": 70-(posY/800)+'%' });
		$(".water5").css({"left":1+(posX/300)+'%' , "top": 80-(posY/300)+'%' });
	});
	
	$('video').mediaelementplayer({
			alwaysShowControls: false,
			videoVolume: 'horizontal',
			//features: ['playpause','progress','volume','fullscreen']
			features: ['','','','']
	});
});

jQuery.event.add(window,"load",function(){
	var now = new Date();
	var MM = now.getMonth();
	
	if(MM==0){
		$('#wrap').removeClass();
		$('#wrap').addClass('Jan');
		$('.nav li').removeClass();
		$('.nav li').eq(0).addClass('on');
	}else if(MM==1){
		$('#wrap').removeClass();
		$('#wrap').addClass('Fab');
		$('.nav li').removeClass();
		$('.nav li').eq(1).addClass('on');	
	}else if(MM==2){
		$('#wrap').removeClass();
		$('#wrap').addClass('Mar');
		$('.nav li').removeClass();
		$('.nav li').eq(2).addClass('on');	
	}else if(MM==3){
		$('#wrap').removeClass();
		$('#wrap').addClass('Apr');
		$('.nav li').removeClass();
		$('.nav li').eq(3).addClass('on');	
	}else if(MM==4){
		$('#wrap').removeClass();
		$('#wrap').addClass('May');
		$('.nav li').removeClass();
		$('.nav li').eq(4).addClass('on');	
	}else if(MM==5){
		$('#wrap').removeClass();
		$('#wrap').addClass('Jun');
		$('.nav li').removeClass();
		$('.nav li').eq(5).addClass('on');	
	}else if(MM==6){
		$('#wrap').removeClass();
		$('#wrap').addClass('Jul');
		$('.nav li').removeClass();
		$('.nav li').eq(6).addClass('on');	
	}else if(MM==7){
		$('#wrap').removeClass();
		$('#wrap').addClass('Aug');
		$('.nav li').removeClass();
		$('.nav li').eq(7).addClass('on');	
	}else if(MM==8){
		$('#wrap').removeClass();
		$('#wrap').addClass('Sep');
		$('.nav li').removeClass();
		$('.nav li').eq(8).addClass('on');	
	}else if(MM==9){
		$('#wrap').removeClass();
		$('#wrap').addClass('Oct');
		$('.nav li').removeClass();
		$('.nav li').eq(9).addClass('on');	
	}else if(MM==10){
		$('#wrap').removeClass();
		$('#wrap').addClass('Nov');
		$('.nav li').removeClass();
		$('.nav li').eq(10).addClass('on');	
	}else {
		$('#wrap').removeClass();
		$('#wrap').addClass('Dec');
		$('.nav li').removeClass();
		$('.nav li').eq(11).addClass('on');	
	}
	
	$('.nav li').on('click',function(){
		var className = $(this).children('a').text();
		$('.nav li').removeClass();
		$(this).addClass('on');
		$('#wrap').removeClass();
		$('#wrap').addClass(className)
	});
});

