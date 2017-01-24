$(document).ready(function() {	
	//pseudo routing :)

	//white btn in main-page to rigister
	$(".btn-white").click(function() {
		var showBlock = "block";
		var hideBlock = "none";

		$(".main-page").css("display", hideBlock);
		$(".authorization").css("display", showBlock);
		$(".album").css("display", hideBlock);
		$(".slider").css("display", hideBlock);
		$(".authorization .authorization-tabs .authorization-tab:eq(1)").removeClass("active");
		$(".authorization .authorization-tabs .authorization-tab:eq(0)").addClass("active");
		$(".authorization .authorization-tab__item").hide().eq(0).fadeIn();

		localStorage.setItem("main-page", hideBlock);
		localStorage.setItem("authorization", showBlock);
		localStorage.setItem("album", hideBlock);
		localStorage.setItem("slider", hideBlock);
	});

	//log in btn to rigister
	$(".menu__auth__reg").click(function() {
		var showBlock = "block";
		var hideBlock = "none";

		$(".main-page").css("display", hideBlock);
		$(".authorization").css("display", showBlock);
		$(".album").css("display", hideBlock);
		$(".slider").css("display", hideBlock);
		$(".authorization .authorization-tabs .authorization-tab:eq(1)").removeClass("active");
		$(".authorization .authorization-tabs .authorization-tab:eq(0)").addClass("active");
		$(".authorization .authorization-tab__item").hide().eq(0).fadeIn();

		localStorage.setItem("main-page", hideBlock);
		localStorage.setItem("authorization", showBlock);
		localStorage.setItem("album", hideBlock);
		localStorage.setItem("slider", hideBlock);
	});

	//sign in btn to authorization
	$(".menu__auth__auth").click(function() {
		var showBlock = "block";
		var hideBlock = "none";

		$(".main-page").css("display", hideBlock);
		$(".authorization").css("display", showBlock);
		$(".album").css("display", hideBlock);
		$(".slider").css("display", hideBlock);
		$(".authorization .authorization-tabs .authorization-tab:eq(0)").removeClass("active");
		$(".authorization .authorization-tabs .authorization-tab:eq(1)").addClass("active");
		$(".authorization .authorization-tab__item").hide().eq(1).fadeIn();

		localStorage.setItem("main-page", hideBlock);
		localStorage.setItem("authorization", showBlock);
		localStorage.setItem("album", hideBlock);
		localStorage.setItem("slider", hideBlock);
	});

	//logo to main-page
	$(".menu__logo").click(function() {
		var showBlock = "block";
		var hideBlock = "none";

		$(".main-page").css("display", showBlock);
		$(".authorization").css("display", hideBlock);
		$(".album").css("display", hideBlock);
		$(".slider").css("display", hideBlock);

		localStorage.setItem("main-page", showBlock);
		localStorage.setItem("authorization", hideBlock);
		localStorage.setItem("album", hideBlock);
		localStorage.setItem("slider", hideBlock);
	});

	//from album to slider
	$(".album__img-wrapper").on("click", "span", function() {
		var showBlock = "block";
		var hideBlock = "none";

		$(".main").css("display", hideBlock);
		$(".slider").css("display", showBlock);

		localStorage.setItem("main", hideBlock);
		localStorage.setItem("slider", showBlock);

		var currentImg = $(this).children().attr("src");
		var imgName = $(this).children().attr("alt");
		$(".slider__carousel__img-wrapper").append("<img class='visible-img' src='" + currentImg + "'>");
		$(".slider__carousel__info__image-name").text(imgName);
	});
	
	//from slider back to album
	$(".btn-img--exit").click(function() {
		var showBlock = "block";
		var hideBlock = "none";

		$(".main").css("display", showBlock);
		$(".slider").css("display", hideBlock);

		localStorage.setItem("main", showBlock);
		localStorage.setItem("slider", hideBlock);

		$(".slider__carousel__img-wrapper img").removeAttr("class");
		$(".slider__carousel__info__image-name").text("");
	});

	var mainPage = localStorage.getItem("main-page");
	var authorization = localStorage.getItem("authorization");
	var album = localStorage.getItem("album");
	var slider = localStorage.getItem("slider");

	var main = localStorage.getItem("main");
	var menuAuth = localStorage.getItem("menu__auth");
	var menuLogout = localStorage.getItem("menu__logout");

	$(".main-page").css("display", mainPage);
	$(".authorization").css("display", authorization);
	$(".album").css("display", album);
	$(".slider").css("display", slider);

	$(".main").css("display", main);
	$(".menu__logout").css("display", menuLogout);
	$(".menu__auth").css("display", menuAuth);
});