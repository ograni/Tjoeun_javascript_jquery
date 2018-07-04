/*
안동 KSXX0001 안양 KSXX0002
창원 KSXX0003 제주 KSXX0004
진해 KSXX0005 천안 KSXX0006
청주 KSXX0007 해남 KSXX0008
인천 KSXX0009 이리 KSXX0010
강릉 KSXX0011 김천 KSXX0012
군산 KSXX0013 광주 KSXX0014
마산 KSXX0015 밀양 KSXX0016
목포 KSXX0017 오산 KSXX0018
포항 KSXX0019 벌교 KSXX0020
부산 KSXX0021 서울 KSXX0022
속초 KSXX0023 성남 KSXX0024
수원 KSXX0025 대구 KSXX0026
대전 KSXX0027 위성 KSXX0028
울산 KSXX0029 왜관 KSXX0030
여수 KSXX0031 속초 KSXX0032
철원 KSXX0033 대관령 KSXX0034
춘천 KSXX0035 동해 KSXX0036
서울 KSXX0037 원주 KSXX0038
울릉도 KSXX0039 영월 KSXX0041
서산 KSXX0042 울진 KSXX0043
추풍령 KSXX0044 포항 KSXX0045
군산 KSXX0046 전주 KSXX0047
마산 KSXX0048 광주 KSXX0049
부산 KSXX0050 충무 KSXX0051
완도 KSXX0052 제주 KSXX0053
서귀포 KSXX0054 진주 KSXX0055
*/

(function(){
	$(function(){
	    loadData(); //데이터베이스 쿼라한걸 가져오는거
		insertData();  // 원하는 데이터를 넣는거?
	});

	var weatherData;

	var imageArr = new Array(
						    "tornado.png",
						    "tropical_storm.png",
						    "hurricane.png",
						    "severe_thunderstorms.png",
						    "thunderstorms.png",
						    "mixed_rain_and_snow.png",
						    "mixed_rain_and_sleet.png",
						    "mixed_snow_and_sleet.png",
						    "freezing_drizzle.png",
						    "drizzle.png",

						    "freezing_rain.png",
						    "showers.png",
						    "showers.png",
							"snow_flurries.png",
							"light_snow_showers.png",
							"blowing_snow.png",
							"snow.png",
							"hail.png",
							"sleet.png",
							"dust.png",

							"foggy.png",
							"haze.png",
							"smoky.png",
							"blustery.png",
							"windy.png",
							"cold.png",
							"cloudy.png",
							"mostly_cloudy.png",
							"mostly_cloudy.png",
							"partly_cloudy.png",

							"partly_cloudy.png",
							"clear.png",
							"sunny.png",
							"fair.png",
							"fair.png",
							"mixed_rain_and_hail.png",
							"hot.png",
							"isolated_thunderstorms.png",
							"scattered_thunderstorms.png",
							"scattered_thunderstorms.png",

							"scattered_showers.png",
							"heavy_snow.png",
							"scattered_snow_showers.png",
							"heavy_snow.png",
							"partly_cloudy.png",
							"thundershowers.png",
							"snow_showers.png",
							"isolated_thundershowers.png"
							);

	var bgArr = new Array(
							   "rain.png",
							   "rain.png",
							   "rain.png",
							   "rain.png",
							   "rain.png",
							   "snow.png",
							   "rain.png",
							   "snow.png",
							   "snow.png",
							   "rain.png",


							   "rain.png",
							   "rain.png",
							   "rain.png",
							   "snow.png",
							   "snow.png",
							   "snow.png",
							   "snow.png",
							   "rain.png",
							   "snow.png",
							   "cloudy.png",

							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",

							   "cloudy.png",
							   "sunny.png",
							   "sunny.png",
							   "sunny.png",
							   "sunny.png",
							   "rain.png",
							   "sunny.png",
							   "rain.png",
							   "rain.png",
							   "rain.png",

							   "rain.png",
							   "snow.png",
							   "snow.png",
							   "snow.png",
							   "cloudy.png",
							   "rain.png",
							   "snow.png",
							   "rain.png"
							   );


	function loadData(){ //쿼리중에서 3일치만 뽑은거
		var query = 'select item from weather.forecast where woeid=1132599 and u="c"';
		var url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json";

		$.ajaxSetup({
			async:false
		});
		$.getJSON(url, function(data){
			weatherData = data; //위에 선언한거에 값 집어 넣은거.
		});

	}


	function insertData(){
		var afterDayEl = $('#header > .afterDay');
		// 가운데 화면을 기준으로 왼쪽 상하단 부분 전부(아이콘과 내일, 모래의 날짜와 기온)
		var todayEl = $('#header > .today');
		// 가운데 화면을 기준으로 오른쪽 상하단 부분 전부(오늘의 기온과 날짜)
		var todayTemp = todayEl.find('> .temp > .c');
		// 오늘의 기온 (큰 문자로 중앙에 위치)
		var todayDate = todayEl.find('> .date');
		// 오늘의 날짜 (중앙 오른쪽에 위치)
		var todayWeatherIcon = afterDayEl.find('> .weather_icon > img');
		var iconRoot = 'img/weather_icon/';
		// 예제에 들어갈 아이콘 이미지의 폴더 주소를 미리 변수에 할당
		var bgRoot = 'img/weather_bg/';
		// 예제에 들어갈 배경 이미지의 폴더 주소를 미리 변수에 할당
		var secondHighTemp = afterDayEl.find('> .dateweek > .number > .high');
		var secondLowTemp = afterDayEl.find('> .dateweek > .number > .low');
		var secondDate = afterDayEl.find('> .dateweek > .datecontent');
		var thirdHighTemp = afterDayEl.find('> .dateweek > .number02 > .high');
		var thirdLowTemp = afterDayEl.find('> .dateweek > .number02 > .low');
		var thirdDate = afterDayEl.find('> .dateweek > .datecontent02');
		// 1.내일의 최고기온, 2.내일의 최저기온, 3.내일의 날짜를 각각 변수에 할당
		// 1.모레의 최고기온, 2.모레의 최저기온, 3.모레의 날짜를 각각 변수에 할당

		var condition = weatherData.query.results.channel.item.condition;
		// 현재의 기상 정보가 포함된 태그 부분은 데이터에서 파싱하여 변수에 할당
		// 이때 파싱된 데이터의 타입은 객체임
		var forecast = weatherData.query.results.channel.item.forecast;
		// 앞으로 5일의 기상 정보가 담겨진 데이터 역시 파싱하여 변수에 할당
		// 이때 파싱된 데이터의 타입은 배열임

		todayTemp.text(condition.temp);
		// 오늘의 기온을 수정
		todayDate.text(forecast[0].day + ' ,' + forecast[0].date);
		// 오늘의 날짜를 수정

		/* 요일 한글로 바꾸기 */
		if ('Sun'===forecast[0].day) {
			forecast[0].day='일';
		} else if ('Mon'===forecast[0].day) {
			forecast[0].day='월';
		} else if ('Tue'===forecast[0].day) {
			forecast[0].day='화';
		} else if ('Wed'===forecast[0].day) {
			forecast[0].day='수';
		} else if ('Thu'===forecast[0].day) {
			forecast[0].day='목';
		} else if ('Fri'===forecast[0].day) {
			forecast[0].day='금';
		} else {
			forecast[0].day='토';
		}
		todayDate.text(forecast[0].day + ' ,' + forecast[0].date);
		/* 요일 한글로 바꾸기 끝 */

		var todayCode = parseInt(forecast[0].code);
		// 오늘의 기상 코드를 파싱하여 형태를 숫자로 변형
		var iconURL = iconRoot + imageArr[todayCode];
		// 윗 줄에서 가져온 기상 코드 번호를 imageArr 배열의 index 번호를 활용하여
		// 미리 지정해 놓은 이미지 주소를 가져와 iconURL 변수에 할당
		todayWeatherIcon.attr('src', iconURL);
		// 위 줄에서 가져온 이미지 주소로 오늘의 기상 아이콘을 수정

		var bgURL = bgRoot + bgArr[todayCode];
		// 윗 줄에서 가져온 기상 코드 번호를 bgArr 배열의 index 번호를 활용하여
		// 미리 지정해 놓은 배경 이미지 주소를 가져와 bgURL 변수에 할당
		$('#wrap').css('background-image','url(' + bgURL + ')');
		// 위 줄에서 가져온 배경 이미지 주소로 오늘의 배경 이미지를 수정

		secondHighTemp.text(forecast[1].high);
		// 1.내일의 최고기온을 수정, 2.내일의 최저기온을 수정, 3.내일의 날짜를 수정
		secondLowTemp.text(forecast[1].low);
		secondDate.text(forecast[1].date);

		thirdHighTemp.text(forecast[2].high);
		// 1.모레의 최고기온을 수정, 2.모레의 최저기온을 수정, 3.모레의 날짜를 수정
		thirdLowTemp.text(forecast[2].low);
		thirdDate.text(forecast[2].date);
	}





})(jQuery);
