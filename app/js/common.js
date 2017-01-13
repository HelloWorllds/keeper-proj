$(document).ready(function() {

	//fullscreen mode for body
	var bodyHeight = $(window).height();
	$("body").css("height", bodyHeight).css("width", $(window).width());

	//background-slider in Main div
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

	$(".main .btn-carousel--left").click(function() {
		var bg = $(".main").css("background");
		
		var bgIndex = parseInt(bg.replace(/[^1-7]/gi, "")) - 1;

		if (bgIndex == 8) {
			bgIndex = 1;
		} else if (bgIndex == 0) {
			bgIndex = 7;
		}
		$(".main").css("background", "url('../images/main_bg" + bgIndex + ".jpg') no-repeat");
	});

	$(".main .btn-carousel--right").click(function() {
		var bg = $(".main").css("background");
		
		var bgIndex = parseInt(bg.replace(/[^1-7]/gi, "")) + 1;

		if (bgIndex == 8) {
			bgIndex = 1;
		} else if (bgIndex == 0) {
			bgIndex = 7;
		}
		$(".main").css("background", "url('../images/main_bg" + bgIndex + ".jpg') no-repeat");
	});

	//tabs in authorization page
	$(".authorization .authorization-tabs .authorization-tab").click(function() {
		$(".authorization .authorization-tabs .authorization-tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".authorization .authorization-tab__item").hide().eq($(this).index()).fadeIn();
	});

	// //custom scrollbar init
	// $(".album__img-wrapper").customScrollbar({
	// 	skin: "default-skin"
	// })

	//download button
	$(".album__header").click(function() {
		if($(".btn-download").css("display") == "none") {
			$(".btn-download").slideToggle("slow");
		} else {
			$(".btn-download").slideToggle("slow");
		}
	});

	//album preview
	var spanLength = $(".album__img-wrapper span").length;

	for (var i = 1; i <= spanLength; ++i) {
		if (i != spanLength) {
			if (i == 1 || i % 6 == 0) {
				$(".album__img-wrapper span:nth-child(" + i + ")").css("height", "412px");
				$(".album__img-wrapper span:nth-child(" + i + ")").css("width", "66.666%");
				$(".album__img-wrapper span:nth-child(" + i + ")").css("float", "left");
			} else if (i % 3 == 0 || i % 9 == 0) {
				$(".album__img-wrapper span:nth-child(" + i + ")").css("height", "412px");
				$(".album__img-wrapper span:nth-child(" + i + ")").css("width", "66.666%");
				$(".album__img-wrapper span:nth-child(" + i + ")").css("float", "right");
			}
		}
	}

	//slider
	if ($(".slider").css("display") == "block") {
		$(".main").css("display", "none");
	} else {
		$(".main").css("display", "block");
	}

	var rotateIndex = 0;
	var end = parseInt($(".slider__carousel__img-wrapper img").length);
	var imgCount = 1;

	$(".slider__carousel__info__img-counter span").text(imgCount + " of " + end);
	$(".slider__carousel__info__image-name").text($(".visible-img").attr("alt"));

	$(".slider .btn-carousel--right").click(function() {
		$(".slider__carousel__img-wrapper img:eq(" + (rotateIndex) + ")").removeClass("visible-img");

		rotateIndex++;

		$(".slider__carousel__img-wrapper img:eq(" + (rotateIndex) + ")").addClass("visible-img");

		imgCount++;
		$(".slider__carousel__info__img-counter span").text(imgCount + " of " + end);
		if (imgCount > end) {
			imgCount = 1;
			$(".slider__carousel__info__img-counter span").text(imgCount + " of " + end);
		}

		if (rotateIndex == end) {			
			rotateIndex = 0;			
			$(".slider__carousel__img-wrapper img:eq(" + (end - 1) + ")").removeClass("visible-img");
			$(".slider__carousel__img-wrapper img:eq(" + (rotateIndex) + ")").addClass("visible-img");
		}
		$(".slider__carousel__info__image-name").text($(".visible-img").attr("alt"));
	});

	$(".slider .btn-carousel--left").click(function() {
		$(".slider__carousel__img-wrapper img:eq(" + (rotateIndex) + ")").removeClass("visible-img");

		if (rotateIndex == 0) {			
			rotateIndex = end;
			$(".slider__carousel__img-wrapper img:eq(0)").removeClass("visible-img");
			$(".slider__carousel__img-wrapper img:eq(" + (rotateIndex) + ")").addClass("visible-img");
		}		

		rotateIndex--;

		$(".slider__carousel__img-wrapper img:eq(" + (rotateIndex) + ")").addClass("visible-img");

		imgCount--;		
		if (imgCount == 0) {
			imgCount = end;
			$(".slider__carousel__info__img-counter span").text(imgCount + " of " + end);
		}
		$(".slider__carousel__info__img-counter span").text(imgCount + " of " + end);

		$(".slider__carousel__info__image-name").text($(".visible-img").attr("alt"));
	});

	//like btn
	var likeCounter = 0;
	var flag = true;
	$(".like-counter").text(likeCounter);

	$(".btn-img--like").click(function() {
		if(flag) {
			++likeCounter;
			$(".like-counter").text(likeCounter);
			$(".btn-img--like").css("background-position", "-403px -114px");
		} else {
			$(".btn-img--like").prop("disabled", true);			
		}
		flag = false;
	});	
});