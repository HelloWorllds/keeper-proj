// Initialize Firebase
var config = {
	apiKey: "AIzaSyBaK3yPJP9p3F3tVC5TRVZntd08DDpiPhQ",
	authDomain: "keeper-4e597.firebaseapp.com",
	databaseURL: "https://keeper-4e597.firebaseio.com",
	storageBucket: "keeper-4e597.appspot.com",
	messagingSenderId: "874065713541"
};

firebase.initializeApp(config);

$(document).ready(function() {
	var bodyHeight = $(window).height();
	$("body").css("height", bodyHeight).css("width", $(window).width());

	var backgrounds = ["main_bg1.jpg", "main_bg2.jpg", "main_bg3.jpg", "main_bg4.jpg", "main_bg5.jpg", "main_bg6.jpg", "main_bg7.jpg"];

	var index = 0;	

	function changeBg(delay) {
		if (index > (backgrounds.length - 1)) {
			$(".main").animate({"opacity" : "0.8"}, delay, function() {
				index = 1;
				$(".main").css({"background" : "url('../images/" + backgrounds[index] + "') no-repeat"});
			});
			$(".main").animate({"opacity" : "1"}, delay);
		} else {
			$(".main").animate({"opacity" : "0.8"}, delay, function() {
				$(".main").css({"background" : "url('../images/" + backgrounds[index] + "') no-repeat"});
				index++;
			});
			$(".main").animate({"opacity" : "1"}, delay);
		}		
	}

	setInterval(changeBg, 8000);

	$(".btn-carousel--left").click(function() {
		var bg = $(".main").css("background");
		
		var bgIndex = parseInt(bg.replace(/[^1-7]/gi, "")) - 1;

		if (bgIndex == 8) {
			bgIndex = 1;
		} else if (bgIndex == 0) {
			bgIndex = 7;
		}
		$(".main").css("background", "url('../images/main_bg" + bgIndex + ".jpg') no-repeat");
	});

	$(".btn-carousel--right").click(function() {
		var bg = $(".main").css("background");
		
		var bgIndex = parseInt(bg.replace(/[^1-7]/gi, "")) + 1;

		if (bgIndex == 8) {
			bgIndex = 1;
		} else if (bgIndex == 0) {
			bgIndex = 7;
		}
		$(".main").css("background", "url('../images/main_bg" + bgIndex + ".jpg') no-repeat");
	});

	$(".authorization .authorization-tabs .authorization-tab").click(function() {
		$(".authorization .authorization-tabs .authorization-tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".authorization .authorization-tab__item").hide().eq($(this).index()).fadeIn();
	});
});